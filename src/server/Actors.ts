import { Actor } from "../types/Actor";

const actors: Actor[] = [
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
    ],
  },
];

export default actors;
