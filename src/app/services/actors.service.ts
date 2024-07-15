import { Injectable } from '@angular/core';
import { Actor } from '../../types/Actor';
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
        tap(() => this.getActors().subscribe())
      );
  }

  deleteActor(actor: Actor) {
    return this.http.delete<Actor>(`http://localhost:3000/api/actors/${actor._id}`)
      .pipe(
        tap(() => this.getActors().subscribe())
      );
  }

  updateActorPerformances(actorId: string, performance: any): void {

  }

  addPerformanceToActors(performance: any, cast: any[]): void {
    cast.forEach(castMember => {
      this.updateActorPerformances(castMember.actorId, {
        performanceId: performance._id,
        role: castMember.role,
        annualContractValue: castMember.annualContractValue
      });
    });
  }

}
