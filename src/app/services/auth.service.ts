import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { User } from '../../types/User'
import { Auth } from '../../types/Auth';
import { Router } from '@angular/router'
import { tap } from 'rxjs'

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  registerUser(user: User) {
    return this.http.post<Auth>('http://localhost:3000/api/auth/register', user)
      .pipe(tap(response => {
        if (response.ok) {
          localStorage.setItem('user', JSON.stringify(response.user))
          this.router.navigate(['/'])
        }
      }))
  }

  loginUser(user: User) {
    return this.http.post<Auth>('http://localhost:3000/api/auth/login', user)
      .pipe(tap((response) => {
        if (response.ok) {
          localStorage.setItem('user', JSON.stringify(response.user))
          this.router.navigate(['/'])
        }
      }))
  }
}
