import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Actor, Detail, Details, PerformanceItem } from '../../../types/Actor';
import { YearExpandComponent } from '../year-expand/year-expand.component';
import { NgFor, NgIf } from '@angular/common';
import { ActorsService } from '../../services/actors.service';

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
    MatSort,
    MatSortModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    YearExpandComponent,
    NgFor,
    NgIf,
  ],
})
export class ActorsTableComponent implements OnInit {
  dataSource: MatTableDataSource<Actor> = new MatTableDataSource();
  columnsToDisplay = ['name', 'rank', 'experience'];
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
  expandedElement: Actor | null = null;

  @ViewChild(MatSort) sort!: MatSort;

  constructor(private actorsService: ActorsService) {}

  ngOnInit() {
    this.actorsService.actors$.subscribe((actors) => {
      this.dataSource.data = actors;
      this.dataSource.sort = this.sort;
    });
  }

  removeActor(actor: Actor) {
    this.actorsService.deleteActor(actor).subscribe();

    this.actorsService.actors$.subscribe((actors) => {
      this.dataSource.data = actors;
    });
  }

  getYears(actorPerformances: PerformanceItem[]) {
    const years: Set<number> = new Set();

    actorPerformances.forEach(actorPerf => {
      years.add(actorPerf.performance.year)
    });

    return [...years];
  }

  getInfo(actorPerformances: PerformanceItem[]) {
    const detailsAll: Details = {};

    actorPerformances.forEach(actorPerf => {
      const newDetail: Detail = {
        name: actorPerf.performance.name,
        role: actorPerf.role,
        annualContractValue: actorPerf.annualContractValue,
      };

      if (!detailsAll[actorPerf.performance.year]) {
        detailsAll[actorPerf.performance.year] = [];
      }

      detailsAll[actorPerf.performance.year].push(newDetail);
    });

    return detailsAll;
  }
}
