import { NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Details } from '../../../types/Actor';

@Component({
  selector: 'app-actor-details',
  standalone: true,
  imports: [NgFor],
  templateUrl: './actor-details.component.html',
  styleUrl: './actor-details.component.scss'
})
export class ActorDetailsComponent {
  @Input() year!: number;
  @Input() details!: Details;

  get total() {
    let sum = 0;

    this.details[this.year].forEach(detail => sum += detail.annualContractValue)

    return Math.ceil(sum + (sum * 3 / 100))
  }
}
