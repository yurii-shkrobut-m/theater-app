import { Injectable } from '@angular/core';
import { Performance } from '../../types/Performance';
import { BehaviorSubject, Observable } from 'rxjs';

const performancesFromServer: Performance[] = [
  {
    _id: 'perform1',
    name: 'Zaporozetz za Dunaem',
    year: 2020,
    budget: 520000,
    cast: [
      {
        actorId: 'actor2',
        role: 'Kozak',
        annualContractValue: 65000,
      },
      {
        actorId: 'actor3',
        role: 'Fishman',
        annualContractValue: 48000,
      },
    ],
  },
  {
    _id: 'perform2',
    name: 'Kaidasheva simja',
    year: 2017,
    budget: 710000,
    cast: [
      {
        actorId: 'actor1',
        role: 'Taras',
        annualContractValue: 51000,
      },
      {
        actorId: 'actor3',
        role: 'Ivan',
        annualContractValue: 37000,
      },
    ],
  },
  {
    _id: 'perform3',
    name: 'Rizdvo',
    year: 2017,
    budget: 21000,
    cast: [
      {
        actorId: 'actor1',
        role: 'Angel',
        annualContractValue: 51000,
      },
      {
        actorId: 'actor3',
        role: 'Singer',
        annualContractValue: 37000,
      },
    ],
  },
];

@Injectable({
  providedIn: 'root'
})

export class PerformancesService {
  private performancesFromServer = new BehaviorSubject<Performance[]>(performancesFromServer);

  // private generateId(): string {
  //   return Date.now().toString();
  // }

  getPerformances(): Observable<Performance[]> {
    return this.performancesFromServer.asObservable();
  }

  addPerformance(performance: Performance): Observable<Performance> {
    const updatedPerformances = [...this.performancesFromServer.value, performance];
    this.performancesFromServer.next(updatedPerformances);

    // const performances = this.performancesFromServer.getValue();
    // const newPerformance = { ...performance, _id: this.generateId() };

    // performances.push(newPerformance);
    // this.performancesFromServer.next(performances);

    return new Observable(observer => {
      observer.next(performance);
      observer.complete();
    });
  }


  // addPerformance(performance: Performance) {
  //   const updatedPerformances = [...this.performancesFromServer.value, performance];
  //   this.performancesFromServer.next(updatedPerformances);
  // }

  deletePerformance(performance: Performance) {
    const itemsWithoutDeleted =
      [...this.performancesFromServer.value].filter(item => performance._id !== item._id);

    this.performancesFromServer.next(itemsWithoutDeleted);
  }

  constructor() { }
}
