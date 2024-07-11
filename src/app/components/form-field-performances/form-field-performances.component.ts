import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgIf } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { PerformancesService } from '../../services/performances.service';

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
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class FormFieldPerformancesComponent {
  isForm = false;

  toggleIsForm() {
    this.isForm = !this.isForm;
  }

  actorForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    middleName: new FormControl('', Validators.required),
    rank: new FormControl('', Validators.required),
    experience: new FormControl('', Validators.required),
  });

  constructor(
    private performancesService: PerformancesService
  ) { }

  addActor() {
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
