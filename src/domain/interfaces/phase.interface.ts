import type { Phase } from '../entities/phase.entity';

export interface PhasePrimitives {
  id: string;
  name: string;
  parentPhaseId?: string;
}

export interface PhaseInterface {
  readonly id: string;
  readonly name: string;
  readonly parentPhaseId?: string;
  parentPhase?: Phase;
  createToPrimitives(): PhasePrimitives;
}
