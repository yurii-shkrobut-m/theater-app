import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { PerformancesService } from '../../services/performances.service';
import { ActorsService } from '../../services/actors.service';
import { Actor } from '../../../types/Actor';
import { Performance } from '../../../types/Performance';

@Component({
  selector: 'app-form-field-performances',
  templateUrl: './form-field-performances.component.html',
  styleUrl: './form-field-performances.component.scss',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    NgIf,
    NgFor,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class FormFieldPerformancesComponent implements OnInit {
  isForm = false;
  actors: Actor[] = [];

  performanceForm = new FormGroup({
    name: new FormControl('', Validators.required),
    year: new FormControl('', Validators.required),
    budget: new FormControl('', Validators.required),
    role: new FormControl('', Validators.required),
    contractValue: new FormControl('', Validators.required),
    cast: new FormControl('', Validators.required),
  });

  constructor(
    private performancesService: PerformancesService,
    private actorsService: ActorsService,
  ) { }

  ngOnInit() {
    this.actorsService.getActors()
      .subscribe((actorsFromServer) => {
        this.actors = actorsFromServer;
      })
  }

  toggleIsForm() {
    this.isForm = !this.isForm;
  }

  addPerformance() {
    if (this.performanceForm.invalid) {
      return;
    }

    const newPerformance: Performance = {
      _id: Date.now().toString(),
      name: this.performanceForm.value.name!,
      year: +this.performanceForm.value.year!,
      budget: +this.performanceForm.value.budget!,
      cast: [],
    };

    const f = this.performanceForm.value.cast!;

    newPerformance.cast.push({
      actorId: f,
      role: this.performanceForm.value.role!,
      annualContractValue: +this.performanceForm.value.contractValue!,
    })


    console.log(newPerformance)



    // this.actorsService.createActor(newActor)
    // this.actorForm.reset();
  }
}
