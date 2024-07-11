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
import { MatTableModule } from '@angular/material/table';
import { Actor, PerformanceItem } from '../../../types/Actor';
import { YearExpandComponent } from '../year-expand/year-expand.component';
import { Detail, Details, Performance } from '../../../types/Performance';
import { NgFor, NgIf } from '@angular/common';
import { ActorsService } from '../../services/actors.service';
import { PerformancesService } from '../../services/performances.service';

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
  dataSource: Actor[] = [];
  performances: Performance[] = [];
  columnsToDisplay = ['name', 'rank', 'experience'];
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand',];
  expandedElement: Actor | null = null;
  expandedYear: number | undefined;

  constructor(
    private actorsService: ActorsService,
    private performancesService: PerformancesService
  ) { }

  ngOnInit() {
    this.actorsService.getActors()
      .subscribe((actors) => {
        this.dataSource = actors
      })

    this.performancesService.getPerformances()
      .subscribe((performancesFromServer) => {
        this.performances = performancesFromServer
      })
  }

  removeActor(actor: Actor) {
    this.actorsService.deleteActor(actor)
  }

  getYears(actorPerformances: PerformanceItem[]) {
    const years: number[] = [];

    actorPerformances.forEach(actorPerf => {
      this.performances.forEach(perf => {
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
      this.performances.forEach(perf => {
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
}
