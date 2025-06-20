import { Phase } from './phase.entity';
import { TurnInterface, TurnPrimitives } from '../interfaces/turn.interface';

export class Turn implements TurnInterface {
  private constructor(
    public readonly id: string,
    public phases: Phase[] = [],
  ) {}

  static create(id: string, phases: Phase[] = []): Turn {
    return new Turn(id, phases);
  }

  static createFromPrimitives(primitives: TurnPrimitives): Turn {
    return new Turn(
      primitives.id,
      primitives.phases.map((p) => Phase.createFromPrimitives(p)),
    );
  }

  toPrimitives(): TurnPrimitives {
    return {
      id: this.id,
      phases: this.phases.map((p) => p.toPrimitives()),
    };
  }
}
