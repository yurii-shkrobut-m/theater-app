import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { actors } from '../../../server/Actors';
import { Actor } from '../../../types/Actor';

@Component({
  selector: 'app-form-field-actors',
  templateUrl: './form-field-actors.component.html',
  styleUrl: './form-field-actors.component.scss',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class FormFieldActorsComponent {
  actors = actors;

  actorForm = new FormGroup({
    firstName: new FormControl('', {
      nonNullable: true,
      validators: [
        Validators.required,
      ],
    }),
    lastName: new FormControl('', {
      nonNullable: true,
      validators: [
        Validators.required,
      ],
    }),
    middleName: new FormControl('', {
      nonNullable: true,
      validators: [
        Validators.required,
      ],
    }),
    rank: new FormControl('', {
      nonNullable: true,
      validators: [
        Validators.required,
      ],
    }),
    experience: new FormControl('', {
      nonNullable: true,
      validators: [
        Validators.required,
      ],
    }),
  });

  get firstName() {
    return this.actorForm.get('firstName');
  }

  get lastName() {
    return this.actorForm.get('lastName');
  }

  get middleName() {
    return this.actorForm.get('middleName');
  }

  get rank() {
    return this.actorForm.get('rank');
  }

  get experience() {
    return this.actorForm.get('experience');
  }

  addActor() {
    if (this.actorForm.invalid) {
      return;
    }

    const newActor: Actor = {
      _id: Date.now().toString(),
      name: `${this.firstName!.value} ${this.middleName!.value} ${this.lastName!.value}`,
      rank: this.rank!.value as Actor["rank"],
      experience: +this.experience!.value,
      performances: [],
    };

    console.log(newActor)

    this.actors.push(newActor);
    // this.actorForm.reset();

    console.log(actors)
  }
}
