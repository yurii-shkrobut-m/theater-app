import { Component } from '@angular/core';
import { MatTab, MatTabGroup } from '@angular/material/tabs'
import { FormFieldActorsComponent } from '../form-field-actors/form-field-actors.component'
import { ActorsTableComponent } from '../actors-table/actors-table.component'
import { FormFieldPerformancesComponent } from '../form-field-performances/form-field-performances.component'
import { PerformanceTableComponent } from '../performance-table/performance-table.component'
import { MatButton } from '@angular/material/button'
import { NgIf } from '@angular/common'
import { MatToolbar, MatToolbarRow } from '@angular/material/toolbar'
import { HeaderComponent } from '../header/header.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-tabs',
  standalone: true,
  imports: [
    MatTabGroup,
    MatTab,
    FormFieldActorsComponent,
    ActorsTableComponent,
    FormFieldPerformancesComponent,
    PerformanceTableComponent,
    MatButton,
    NgIf,
    MatToolbarRow,
    MatToolbar,
    HeaderComponent
  ],
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.scss'
})
export class TabsComponent {
  constructor(public dialog: MatDialog) { }

  openActorDialog(): void {
    const dialogRef = this.dialog.open(FormFieldActorsComponent, {
      maxWidth: "515px"
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  openPerformanceDialog(): void {
    const dialogRef = this.dialog.open(FormFieldPerformancesComponent, {
      maxWidth: "1000px"
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
