import { CastItem } from "./Performance";

export interface Actor {
  _id: string;
  lastName: string;
  firstName: string;
  middleName: string;
  rank: string;
  experience: number;
  performances: PerformanceItem[] | [];
}

export interface PerformanceItem extends Omit<CastItem, 'actorId'> {
  performanceId: string;
}
