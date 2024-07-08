import { Actor } from "../types/Actor";

const actors: Actor[] = [
  {
    _id: 'actor1',
    name: 'Romanovich Teofila Fedorovna',
    rank: 'National',
    experience: 4,
    performances: [],
  },
  {
    _id: 'actor2',
    name: 'Zankovetska Maria Kostiantynivna',
    rank: 'Merited',
    experience: 2,
    performances: [],
  },
  {
    _id: 'actor3',
    name: 'Kropyvnytskyi Marko Lukych',
    rank: 'Honorary',
    experience: 2,
    performances: [
      {
        performanceId: 'perform1',
        role: 'kozak',
        annualContractValue: 65000,
      },
    ],
  },
];

export default actors;