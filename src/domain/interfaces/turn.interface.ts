import type { Phase } from '../entities/phase.entity';

export interface TurnPrimitives {
  id: string;
  phaseIds: string[];
}

export interface TurnInterface {
  readonly id: string;
  readonly phaseIds: string[];
  phases?: Phase[];
  createToPrimitives(): TurnPrimitives;
}
