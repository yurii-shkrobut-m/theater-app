import { CastItem } from "./Performance";

export interface Actor {
  _id: string;
  name: string;
  rank: 'Merited' | 'Honorary' | 'National';
  experience: number;
  performances: PerformanceItem[] | [];
}

export interface PerformanceItem extends Omit<CastItem, 'actorId'> {
  performanceId: string;
}
