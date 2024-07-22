import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NgFor } from '@angular/common';
import { Details } from '../../../types/Actor';
import { CastItem, PerformanceDetail } from '../../../types/Performance';

@Component({
  selector: 'app-performance-details',
  standalone: true,
  imports: [NgFor],
  templateUrl: './performance-details.component.html',
  styleUrl: './performance-details.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PerformanceDetailsComponent {
  @Input() details!: PerformanceDetail[];
}
