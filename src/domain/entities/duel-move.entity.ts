import { Move } from './move.entity';
import {
  DuelMoveInterface,
  DuelMovePrimitives,
} from '../interfaces/duel-move.interface';

export class DuelMove implements DuelMoveInterface {
  private constructor(
    public readonly move: Move,
    public readonly turnNumber: number,
  ) {}

  static create(move: Move, turnNumber: number): DuelMove {
    return new DuelMove(move, turnNumber);
  }

  static createFromPrimitives(primitives: DuelMovePrimitives): DuelMove {
    return new DuelMove(
      Move.createFromPrimitives(primitives.move),
      primitives.turnNumber,
    );
  }

  toPrimitives(): DuelMovePrimitives {
    return {
      move: this.move.toPrimitives(),
      turnNumber: this.turnNumber,
    };
  }
}
