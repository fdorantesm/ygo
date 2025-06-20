import { Card, CardPrimitives } from './card.entity';
import { Effect, EffectPrimitives } from './effect.entity';
import { Phase, PhasePrimitives } from './phase.entity';

export interface MoveInterface {
  readonly id: string;
  readonly card: Card;
  readonly effect: Effect;
  readonly phase: Phase;
  toPrimitives(): MovePrimitives;
}

export interface MovePrimitives {
  id: string;
  card: CardPrimitives;
  effect: EffectPrimitives;
  phase: PhasePrimitives;
}

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
