import { Component } from '@angular/core';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { Actor, PerformanceItem } from '../../../types/Actor';
import { YearsTableComponent } from '../years-table/years-table.component';
import actors from '../../../server/Actors';
import { YearExpandComponent } from '../year-expand/year-expand.component';
import performances from '../../../server/Performances';
import { Details } from '../../../types/Performance';

@Component({
  selector: 'app-actors-table',
  templateUrl: './actors-table.component.html',
  styleUrl: './actors-table.component.scss',
  animations: [
    trigger('detailExpand', [
      state('collapsed,void', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition(
        'expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')
      ),
    ]),
  ],
  standalone: true,
  imports: [
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    YearsTableComponent,
    YearExpandComponent
  ],
})
export class ActorsTableComponent {
  dataSource = actors;
  columnsToDisplay = ['name', 'rank', 'experience'];
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
  expandedElement: Actor | null | undefined;
  expandedYear: number | undefined;
  performances = performances

  getYears(actorPerformances: PerformanceItem[]) {
    const years: number[] = [];

    actorPerformances.forEach(actorPerf => {
      performances.forEach(perf => {
        if (actorPerf.performanceId === perf._id && !years.includes(perf.year)) {
          years.push(perf.year)
        }
      })
    })

    return years;
  }

  getInfo(actorPerformances: PerformanceItem[], fullName: string) {
    const detailsAll: Details[] = [];

    actorPerformances.forEach(actorPerf => {
      performances.forEach(perf => {
        if (actorPerf.performanceId === perf._id) {
          const newDetails: Details = {
            [perf.year]: {
              name: fullName,
              role: actorPerf.role,
              annualContractValue: actorPerf.annualContractValue,
            }
          }
          detailsAll.push(newDetails)
        }
      })
    })

    return detailsAll;
  }


}

