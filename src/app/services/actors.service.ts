import { Injectable } from '@angular/core';
import { Actor, PerformanceItem } from '../../types/Actor';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ActorsService {
  private actorsFromServer = new BehaviorSubject<Actor[]>([]);
  actors$ = this.actorsFromServer.asObservable();

  constructor(private http: HttpClient) {
    this.loadInitialData();
  }

  private loadInitialData() {
    this.getActors().subscribe();
  }

  getActors(): Observable<Actor[]> {
    return this.http.get<Actor[]>("http://localhost:3000/api/actors")
      .pipe(
        tap(actors => this.actorsFromServer.next(actors))
      );
  }

  addActor(actor: Actor) {
    return this.http.post<Actor>("http://localhost:3000/api/actors", actor)
      .pipe(
        tap(() => this.loadInitialData())
      );
  }

  deleteActor(actor: Actor) {
    return this.http.delete<Actor>(`http://localhost:3000/api/actors/${actor._id}`)
      .pipe(
        tap(() => this.loadInitialData())
      );
  }

  addActorEmployment(actorId: string, performance: PerformanceItem): void {
    const actors = this.actorsFromServer.getValue();
    const actorIndex = actors.findIndex(actor => actor._id === actorId);

    if (actorIndex !== -1) {
      actors[actorIndex].employments?.push(performance);
      this.actorsFromServer.next(actors);
    }
  }
}
