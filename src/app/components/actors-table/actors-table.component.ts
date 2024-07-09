import { Component, OnInit } from '@angular/core';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Actor, PerformanceItem } from '../../../types/Actor';
import { actors } from '../../../server/Actors';
import performances from '../../../server/Performances';
import { YearExpandComponent } from '../year-expand/year-expand.component';
import { Detail, Details } from '../../../types/Performance';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-actors-table',
  templateUrl: './actors-table.component.html',
  styleUrls: ['./actors-table.component.scss'],
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
    YearExpandComponent,
    NgFor,
    NgIf,
  ],
})
export class ActorsTableComponent implements OnInit {
  dataSource = new MatTableDataSource<Actor>(actors); // Створюємо копію масиву actors
  columnsToDisplay = ['name', 'rank', 'experience'];
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
  expandedElement: Actor | null = null;
  expandedYear: number | undefined;
  performances = performances;

  ngOnInit() {
    this.dataSource.data = actors; // Оновіть дані у MatTableDataSource
  }

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

  getInfo(actorPerformances: PerformanceItem[]) {
    const detailsAll: Details = {};

    actorPerformances.forEach(actorPerf => {
      performances.forEach(perf => {
        if (actorPerf.performanceId === perf._id) {
          const newDetail: Detail = {
            name: perf.name,
            role: actorPerf.role,
            annualContractValue: actorPerf.annualContractValue,
          };

          if (!detailsAll[perf.year]) {
            detailsAll[perf.year] = [];
          }

          detailsAll[perf.year].push(newDetail);
        }
      });
    });

    return detailsAll;
  }

  addActor(newActor: Actor) {
    this.dataSource.data = [...this.dataSource.data, newActor]; // Оновіть дані у MatTableDataSource
    actors.push(newActor); // Додаємо нового актора в оригінальний масив
  }
}
