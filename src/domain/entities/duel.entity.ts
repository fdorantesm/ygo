import { Turn, TurnPrimitives } from './turn.entity';
import { DuelEffect, DuelEffectPrimitives } from './duel-effect.entity';
import { DuelMove, DuelMovePrimitives } from './duel-move.entity';

export interface DuelInterface {
  readonly id: string;
  turns: Turn[];
  effects: DuelEffect[];
  moves: DuelMove[];
  toPrimitives(): DuelPrimitives;
}

export interface DuelPrimitives {
  id: string;
  turns: TurnPrimitives[];
  effects: DuelEffectPrimitives[];
  moves: DuelMovePrimitives[];
}

export class Duel implements DuelInterface {
  private constructor(
    public readonly id: string,
    public turns: Turn[] = [],
    public effects: DuelEffect[] = [],
    public moves: DuelMove[] = [],
  ) {}

  static create(
    id: string,
    turns: Turn[] = [],
    effects: DuelEffect[] = [],
    moves: DuelMove[] = [],
  ): Duel {
    return new Duel(id, turns, effects, moves);
  }

  static createFromPrimitives(primitives: DuelPrimitives): Duel {
    return new Duel(
      primitives.id,
      primitives.turns.map((t) => Turn.createFromPrimitives(t)),
      primitives.effects.map((e) => DuelEffect.createFromPrimitives(e)),
      primitives.moves.map((m) => DuelMove.createFromPrimitives(m)),
    );
  }

  toPrimitives(): DuelPrimitives {
    return {
      id: this.id,
      turns: this.turns.map((t) => t.toPrimitives()),
      effects: this.effects.map((e) => e.toPrimitives()),
      moves: this.moves.map((m) => m.toPrimitives()),
    };
  }
}
