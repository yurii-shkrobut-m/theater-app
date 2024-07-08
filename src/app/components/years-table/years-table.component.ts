import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import performances from '../../../server/Performances';
import { Actor } from '../../../types/Actor';
import { Performance } from '../../../types/Performance';

@Component({
  selector: 'app-years-table',
  templateUrl: './years-table.component.html',
  styleUrl: './years-table.component.scss',
  standalone: true,
  imports: [MatTableModule, MatButtonModule, MatIconModule],
})
export class YearsTableComponent {
  dataSource = performances;
  columnsToDisplay = ['year'];
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
  expandedElement: Performance | null | undefined;
  expandedYear: number | undefined;
}
