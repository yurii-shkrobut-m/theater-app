import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { PerformancesService } from '../../services/performances.service';
import { ActorsService } from '../../services/actors.service';
import { Actor } from '../../../types/Actor';
import { Performance } from '../../../types/Performance';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-form-field-performances',
  templateUrl: './form-field-performances.component.html',
  styleUrl: './form-field-performances.component.scss',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    NgIf,
    NgFor,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class FormFieldPerformancesComponent implements OnInit {
  performanceForm: FormGroup;
  actors: Actor[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private performancesService: PerformancesService,
    private actorsService: ActorsService
  ) {
    this.performanceForm = this.formBuilder.group({
      name: ['', Validators.required],
      year: ['', Validators.required],
      budget: ['', Validators.required],
      cast: this.formBuilder.array([])
    });
  }

  ngOnInit() {
    this.actorsService.actors$
      .subscribe((actors) => {
        this.actors = actors
      })
  }

  get cast(): FormArray {
    return this.performanceForm.get('cast') as FormArray;
  }

  addActor() {
    const actorGroup = this.formBuilder.group({
      actor: ['', Validators.required],
      role: ['', Validators.required],
      annualContractValue: ['', Validators.required]
    });
    this.cast.push(actorGroup);
  }

  removeActor(index: number) {
    this.cast.removeAt(index);
  }

  createPerformance() {
    if (this.performanceForm.valid) {
      const newPerformance = this.performanceForm.value;

      this.performancesService.addPerformance(newPerformance).subscribe((performance) => {
        this.actorsService.addPerformanceToActors(performance, newPerformance.cast);
      });

      this.performanceForm.reset();
      this.cast.clear();
    }
  }
}
