import { PhaseInterface, PhasePrimitives } from '../interfaces/phase.interface';
import { uuidv7 } from '../../common/uuid';

export class Phase implements PhaseInterface {
  private constructor(
    public readonly id: string,
    public readonly name: string,
    public readonly parentPhaseId?: string,
    public parentPhase?: Phase,
  ) {}

  static create(name: string, parentPhase?: Phase): Phase {
    return new Phase(uuidv7(), name, parentPhase?.id, parentPhase);
  }

  static createFromPrimitives(primitives: PhasePrimitives): Phase {
    return new Phase(
      primitives.id,
      primitives.name,
      primitives.parentPhaseId,
    );
  }

  createToPrimitives(): PhasePrimitives {
    return {
      id: this.id,
      name: this.name,
      parentPhaseId: this.parentPhaseId,
    };
  }
}
