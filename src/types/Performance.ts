export interface Performance {
  _id: string;
  name: string;
  year: number;
  budget: number;
  cast: CastItem[];
}

export interface CastItem {
  actorId: string;
  role: string;
  annualContractValue: number;
}

export interface PerformanceDetail {
  name: string;
  role: string;
  annualContractValue: number;
}



