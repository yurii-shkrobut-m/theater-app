import { Component } from '@angular/core';
import { MatTab, MatTabGroup } from '@angular/material/tabs'
import { FormFieldActorsComponent } from '../form-field-actors/form-field-actors.component'
import { ActorsTableComponent } from '../actors-table/actors-table.component'
import { FormFieldPerformancesComponent } from '../form-field-performances/form-field-performances.component'
import { PerformanceTableComponent } from '../performance-table/performance-table.component'
import { MatButton } from '@angular/material/button'
import { Router } from '@angular/router'
import { NgIf } from '@angular/common'
import { MatToolbar, MatToolbarRow } from '@angular/material/toolbar'
import { HeaderComponent } from '../header/header.component';

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

}
