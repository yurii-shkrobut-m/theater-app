import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Actor } from '../../../types/Actor';
import { ActorsService } from '../../services/actors.service';


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
  actorForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    middleName: new FormControl('', Validators.required),
    rank: new FormControl('', Validators.required),
    experience: new FormControl('', Validators.required),
  });

  constructor(
    private actorsService: ActorsService
  ) { }

  addActor() {
    if (this.actorForm.invalid) {
      return;
    }

    const newActor: Actor = {
      _id: Date.now().toString(),
      name: `${this.actorForm.value.firstName} ${this.actorForm.value.lastName} ${this.actorForm.value.middleName}`,
      rank: this.actorForm.value.rank as Actor["rank"],
      experience: +this.actorForm.value.experience!,
      performances: [],
    };

    this.actorsService.createActor(newActor)

    this.actorForm.reset();

    // console.log(newActor);
    console.log(this.actorsService.getActors());
  }
}
