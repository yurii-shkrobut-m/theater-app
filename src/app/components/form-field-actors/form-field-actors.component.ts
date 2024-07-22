import { ChangeDetectionStrategy, Component, Inject, Output } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Actor } from '../../../types/Actor';
import { ActorsService } from '../../services/actors.service';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NgIf } from '@angular/common';

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
    MatButtonModule,
    NgIf,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class FormFieldActorsComponent {
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
    private actorsService: ActorsService,
    public dialogRef: MatDialogRef<FormFieldActorsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  closeForm(): void {
    this.dialogRef.close();
  }

  createActor() {
    if (this.actorForm.invalid) {
      return;
    }

    const newActor: Actor = {
      name: `${this.actorForm.value.firstName} ${this.actorForm.value.lastName} ${this.actorForm.value.middleName}`,
      rank: this.actorForm.value.rank as Actor["rank"],
      experience: +this.actorForm.value.experience!,
      // performances: [],
    };

    this.actorsService.addActor(newActor)
      .subscribe()

    this.actorForm.reset();
  }
}
