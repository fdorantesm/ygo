import { Card } from './card.entity';
import { Effect } from './effect.entity';
import { Phase } from './phase.entity';
import { MoveInterface, MovePrimitives } from '../interfaces/move.interface';

export class Move implements MoveInterface {
  private constructor(
    public readonly id: string,
    public readonly card: Card,
    public readonly effect: Effect,
    public readonly phase: Phase,
  ) {}

  static create(id: string, card: Card, effect: Effect, phase: Phase): Move {
    return new Move(id, card, effect, phase);
  }

  static createFromPrimitives(primitives: MovePrimitives): Move {
    return new Move(
      primitives.id,
      Card.createFromPrimitives(primitives.card),
      Effect.createFromPrimitives(primitives.effect),
      Phase.createFromPrimitives(primitives.phase),
    );
  }

  toPrimitives(): MovePrimitives {
    return {
      id: this.id,
      card: this.card.toPrimitives(),
      effect: this.effect.toPrimitives(),
      phase: this.phase.toPrimitives(),
    };
  }
}
