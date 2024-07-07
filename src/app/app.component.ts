import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterOutlet } from '@angular/router';
import { ActorsTableComponent } from './components/actors-table/actors-table.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatTabsModule, ActorsTableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'theater-app';
}
