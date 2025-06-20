import type { Phase } from '../entities/phase.entity';

export interface PhasePrimitives {
  id: string;
  name: string;
  parentPhase?: PhasePrimitives;
}

export interface PhaseInterface {
  readonly id: string;
  readonly name: string;
  readonly parentPhase?: Phase;
  toPrimitives(): PhasePrimitives;
}
