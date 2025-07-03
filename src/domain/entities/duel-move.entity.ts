import { Move } from './move.entity';
import {
  DuelMoveInterface,
  DuelMovePrimitives,
} from '../interfaces/duel-move.interface';

export class DuelMove implements DuelMoveInterface {
  private constructor(
    public readonly moveId: string,
    public readonly turnNumber: number,
    public move?: Move,
  ) {}

  static create(move: Move, turnNumber: number): DuelMove {
    return new DuelMove(move.id, turnNumber, move);
  }

  static createFromPrimitives(primitives: DuelMovePrimitives): DuelMove {
    return new DuelMove(primitives.moveId, primitives.turnNumber);
  }

  createToPrimitives(): DuelMovePrimitives {
    return {
      moveId: this.moveId,
      turnNumber: this.turnNumber,
    };
  }
}
