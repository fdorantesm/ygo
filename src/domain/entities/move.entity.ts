import { Card } from './card.entity';
import { Effect } from './effect.entity';
import { Phase } from './phase.entity';
import { MoveInterface, MovePrimitives } from '../interfaces/move.interface';
import { uuidv7 } from '../../common/uuid';

export class Move implements MoveInterface {
  private constructor(
    public readonly id: string,
    public readonly cardId: string,
    public readonly effectId: string,
    public readonly phaseId: string,
    public card?: Card,
    public effect?: Effect,
    public phase?: Phase,
  ) {}

  static create(card: Card, effect: Effect, phase: Phase): Move {
    return new Move(uuidv7(), card.id, effect.id, phase.id, card, effect, phase);
  }

  static createFromPrimitives(primitives: MovePrimitives): Move {
    return new Move(
      primitives.id,
      primitives.cardId,
      primitives.effectId,
      primitives.phaseId,
    );
  }

  createToPrimitives(): MovePrimitives {
    return {
      id: this.id,
      cardId: this.cardId,
      effectId: this.effectId,
      phaseId: this.phaseId,
    };
  }
}
