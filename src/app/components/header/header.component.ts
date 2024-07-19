import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatToolbar, MatToolbarModule, MatToolbarRow } from '@angular/material/toolbar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MatToolbarModule,
    NgIf,
    MatButton,
    MatToolbarRow,
    MatToolbar
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  userName: string = JSON.parse(localStorage.getItem('user') || '{}')?.username || ''

  constructor(private router: Router) { }

  logOut() {
    localStorage.removeItem('user')
    this.router.navigate(['/login'])
  }
}
