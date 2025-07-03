import { Phase } from './phase.entity';
import { TurnInterface, TurnPrimitives } from '../interfaces/turn.interface';
import { uuidv7 } from '../../common/uuid';

export class Turn implements TurnInterface {
  private constructor(
    public readonly id: string,
    public readonly phaseIds: string[] = [],
    public phases?: Phase[],
  ) {}

  static create(phases: Phase[] = []): Turn {
    return new Turn(uuidv7(), phases.map((p) => p.id), phases);
  }

  static createFromPrimitives(primitives: TurnPrimitives): Turn {
    return new Turn(primitives.id, primitives.phaseIds);
  }

  createToPrimitives(): TurnPrimitives {
    return {
      id: this.id,
      phaseIds: this.phaseIds,
    };
  }
}
