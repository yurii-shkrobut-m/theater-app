import { Performance } from "../types/Performance";

const performances: Performance[] = [
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
];

export default performances;
