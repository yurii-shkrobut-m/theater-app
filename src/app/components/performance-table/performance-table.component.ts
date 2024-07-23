import { Component, OnInit, ViewChild } from '@angular/core';
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
import { YearExpandComponent } from '../year-expand/year-expand.component';
import { CastItem, Performance, PerformanceDetail } from '../../../types/Performance';
import { NgFor, NgIf } from '@angular/common';
import { ActorsService } from '../../services/actors.service';
import { PerformancesService } from '../../services/performances.service';
import { PerformanceDetailsComponent } from '../performance-details/performance-details.component';
import { MatSort, MatSortModule } from '@angular/material/sort';

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
    MatSortModule,
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
  dataSource: MatTableDataSource<Performance>;
  actors: Actor[] = [];
  columnsToDisplay = ['name', 'budget', 'year'];
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
  expandedElement: Actor | null = null;
  expandedYear: number | undefined;

  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private actorsService: ActorsService,
    private performancesService: PerformancesService
  ) {
    this.dataSource = new MatTableDataSource<Performance>([]);
  }

  ngOnInit() {
    this.actorsService.actors$.subscribe((actors) => {
      this.actors = actors;
    });

    this.performancesService.performances$.subscribe((performancesFromServer) => {
      this.dataSource.data = performancesFromServer;
      this.dataSource.sort = this.sort;
    });
  }

  removePerformance(performance: Performance) {
    this.performancesService.deletePerformance(performance).subscribe();
  }

  getInfo(performanceCast: CastItem[]) {
    const detailsAll: PerformanceDetail[] = [];

    performanceCast.forEach(perfActor => {
      const newDetail: PerformanceDetail = {
        name: perfActor.actor.name,
        role: perfActor.role,
        annualContractValue: perfActor.annualContractValue,
      };

      detailsAll.push(newDetail);
    });

    return detailsAll;
  }
}

