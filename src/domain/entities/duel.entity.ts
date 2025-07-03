import { Turn } from './turn.entity';
import { DuelEffect } from './duel-effect.entity';
import { DuelMove } from './duel-move.entity';
import { DuelInterface, DuelPrimitives } from '../interfaces/duel.interface';
import { uuidv7 } from '../../common/uuid';

export class Duel implements DuelInterface {
  private constructor(
    public readonly id: string,
    public readonly turnIds: string[] = [],
    public readonly effectIds: string[] = [],
    public readonly moveIds: string[] = [],
    public turns?: Turn[],
    public effects?: DuelEffect[],
    public moves?: DuelMove[],
  ) {}

  static create(
    turns: Turn[] = [],
    effects: DuelEffect[] = [],
    moves: DuelMove[] = [],
  ): Duel {
    return new Duel(
      uuidv7(),
      turns.map((t) => t.id),
      effects.map((e) => e.effectId),
      moves.map((m) => m.moveId),
      turns,
      effects,
      moves,
    );
  }

  static createFromPrimitives(primitives: DuelPrimitives): Duel {
    return new Duel(
      primitives.id,
      primitives.turnIds,
      primitives.effectIds,
      primitives.moveIds,
    );
  }

  createToPrimitives(): DuelPrimitives {
    return {
      id: this.id,
      turnIds: this.turnIds,
      effectIds: this.effectIds,
      moveIds: this.moveIds,
    };
  }
}
