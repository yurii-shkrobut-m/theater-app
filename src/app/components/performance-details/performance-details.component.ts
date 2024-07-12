import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Details } from '../../../types/Performance';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-performance-details',
  standalone: true,
  imports: [NgFor],
  templateUrl: './performance-details.component.html',
  styleUrl: './performance-details.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PerformanceDetailsComponent {
  @Input() details!: Details;

  constructor() {
    console.log(this.details)
  }
}
