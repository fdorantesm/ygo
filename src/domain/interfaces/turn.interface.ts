import type { Phase } from '../entities/phase.entity';
import type { PhasePrimitives } from './phase.interface';

export interface TurnPrimitives {
  id: string;
  phases: PhasePrimitives[];
}

export interface TurnInterface {
  readonly id: string;
  phases: Phase[];
  toPrimitives(): TurnPrimitives;
}
