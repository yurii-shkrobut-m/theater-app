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
import { CastItem, Performance, PerformanceDetail } from '../../../types/Performance';
import { NgFor, NgIf } from '@angular/common';
import { ActorsService } from '../../services/actors.service';
import { PerformancesService } from '../../services/performances.service';
import { PerformanceDetailsComponent } from '../performance-details/performance-details.component';

@Component({
  selector: 'app-performance-table',
  templateUrl: './performance-table.component.html',
  styleUrl: './performance-table.component.scss',
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
    PerformanceDetailsComponent,
    NgFor,
    NgIf,
  ],
})
export class PerformanceTableComponent implements OnInit {
  dataSource: Performance[] = [];
  actors: Actor[] = [];
  columnsToDisplay = ['name', 'budget', 'year'];
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
        this.actors = actors
      })

    this.performancesService.getPerformances()
      .subscribe((performancesFromServer) => {
        this.dataSource = performancesFromServer
      })
  }

  removePerformance(performance: Performance) {
    this.performancesService.deletePerformance(performance)
  }

  getInfo(performanceCast: CastItem[]) {
    const detailsAll: PerformanceDetail[] = [];

    performanceCast.forEach(perfActor => {
      this.actors.forEach(actor => {
        if (perfActor.actorId === actor._id) {
          const newDetail: PerformanceDetail = {
            name: actor.name,
            role: perfActor.role,
            annualContractValue: perfActor.annualContractValue,
          };

          detailsAll.push(newDetail);
        }
      });
    });

    return detailsAll;
  }
}
