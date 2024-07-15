import { Injectable } from '@angular/core';
import { Performance } from '../../types/Performance';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class PerformancesService {
  private performancesFromServer = new BehaviorSubject<Performance[]>([]);
  performances$ = this.performancesFromServer.asObservable()

  constructor(private http: HttpClient) {
    this.loadInitialData();
  }

  private loadInitialData() {
    this.getPerformances().subscribe();
  }

  getPerformances(): Observable<Performance[]> {
    return this.http.get<Performance[]>("http://localhost:3000/api/performances")
      .pipe(
        tap(performances => this.performancesFromServer.next(performances))
      );
  }

  addPerformance(performance: Performance): Observable<Performance> {
    return this.http.post<Performance>("http://localhost:3000/api/performances", performance)
      .pipe(
        tap(() => this.getPerformances().subscribe())
      );
  }

  deletePerformance(performance: Performance) {
    return this.http.delete<Performance>(`http://localhost:3000/api/performances/${performance._id}`)
      .pipe(
        tap(() => this.getPerformances().subscribe())
      );
  }

}
