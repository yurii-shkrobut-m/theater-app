import {Actor} from "./Actor";

export interface Performance {
  _id?: string;
  name: string;
  year: number;
  budget: number;
  cast: CastItem[];
}

export interface CastItem {
  actor: Actor;
  role: string;
  annualContractValue: number;
}

export interface PerformanceDetail {
  name: string;
  role: string;
  annualContractValue: number;
}



