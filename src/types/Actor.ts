import {Performance} from "./Performance";
export interface Actor {
  _id?: string;
  name: string;
  rank: 'Merited' | 'Honorary' | 'National';
  experience: number;
  employments?: PerformanceItem[];
}

export interface PerformanceItem {
  performance: Performance;
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

