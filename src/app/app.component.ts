import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterOutlet } from '@angular/router';
import { ActorsTableComponent } from './components/actors-table/actors-table.component';
import { FormFieldActorsComponent } from './components/form-field-actors/form-field-actors.component';
import { FormFieldPerformancesComponent } from './components/form-field-performances/form-field-performances.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MatTabsModule,
    ActorsTableComponent,
    FormFieldActorsComponent,
    FormFieldPerformancesComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'theater-app';
}
