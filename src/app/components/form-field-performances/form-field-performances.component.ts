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
    toppings: new FormControl('', Validators.required),
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
    console.log(this.performanceForm.value)
    console.log(this.performanceForm.value.toppings)
    // console.log(this.performanceForm)
    // if (this.actorForm.invalid) {
    //   return;
    // }

    // const newActor: Actor = {
    //   _id: Date.now().toString(),
    //   name: `${this.actorForm.value.firstName} ${this.actorForm.value.lastName} ${this.actorForm.value.middleName}`,
    //   rank: this.actorForm.value.rank as Actor["rank"],
    //   experience: +this.actorForm.value.experience!,
    //   performances: [],
    // };

    // this.actorsService.createActor(newActor)
    // this.actorForm.reset();
  }
}
