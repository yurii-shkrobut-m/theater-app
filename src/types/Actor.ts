import { CastItem } from "./Performance";

export interface Actor {
  _id: string;
  name: string;
  rank: 'Merited' | 'Honorary' | 'National';
  experience: number;
  performances: PerformanceItem[];
}

export interface PerformanceItem {
  performanceId: string;
  role: string;
  annualContractValue: number;
}

export interface Detail {
  name: string;
  role: string;
  annualContractValue: number;
}

export interface Details {
  [year: number]: Detail[];
}

