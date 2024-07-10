import { Injectable } from '@angular/core';
import { Actor } from '../../types/Actor';

const actorsFromServer: Actor[] = [
  {
    _id: 'actor1',
    name: 'Romanovich Teofila Fedorovna',
    rank: 'National',
    experience: 4,
    performances: [
      {
        performanceId: 'perform2',
        role: 'Taras',
        annualContractValue: 51000,
      },
      {
        performanceId: 'perform3',
        role: 'Angel',
        annualContractValue: 51000,
      },
    ],
  },
  {
    _id: 'actor2',
    name: 'Zankovetska Maria Kostiantynivna',
    rank: 'Merited',
    experience: 2,
    performances: [
      {
        performanceId: 'perform1',
        role: 'Kozak',
        annualContractValue: 65000,
      },
    ],
  },
  {
    _id: 'actor3',
    name: 'Kropyvnytskyi Marko Lukych',
    rank: 'Honorary',
    experience: 2,
    performances: [
      {
        performanceId: 'perform1',
        role: 'Fishman',
        annualContractValue: 48000,
      },
      {
        performanceId: 'perform2',
        role: 'Ivan',
        annualContractValue: 37000,
      },
      {
        performanceId: 'perform3',
        role: 'Singer',
        annualContractValue: 37000,
      },
    ],
  },
];

@Injectable({
  providedIn: 'root'
})

export class ActorsService {

  getActors() {
    return actorsFromServer;
  }

  createActor(actor: Actor) {
    actorsFromServer.push(actor)
  }

  constructor() { }
}
