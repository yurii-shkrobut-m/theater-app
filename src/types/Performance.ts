export interface Performance {
  _id: string;
  name: string;
  yearOfProduction: number;
  budget: number;
  cast: CastItem[];
}

export interface CastItem {
  actorId: string;
  role: string;
  annualContractValue: number;
}
