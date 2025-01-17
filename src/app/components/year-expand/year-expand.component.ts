import { NgFor } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, signal } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { Details } from '../../../types/Actor';
import { ActorDetailsComponent } from '../actor-details/actor-details.component';

@Component({
  selector: 'app-year-expand',
  templateUrl: 'year-expand.component.html',
  styleUrls: ['./year-expand.component.scss'],
  standalone: true,
  imports: [MatExpansionModule, NgFor, ActorDetailsComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class YearExpandComponent {
  readonly panelOpenState = signal(false);
  @Input() years!: number[];
  @Input() details!: Details;
}


