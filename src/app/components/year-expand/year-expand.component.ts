import { NgFor } from '@angular/common';
import {ChangeDetectionStrategy, Component, Input, signal} from '@angular/core';
import {MatExpansionModule} from '@angular/material/expansion';

@Component({
  selector: 'app-year-expand',
  templateUrl: 'year-expand.component.html',
  standalone: true,
  imports: [MatExpansionModule, NgFor],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class YearExpandComponent {
  readonly panelOpenState = signal(false);
  @Input() years!: number[];

  // panelOpenState = {
  //   set: (state: boolean) => console.log('Panel state:', state),
  // };
}


