import { Move, MovePrimitives } from './move.entity';

export interface DuelMoveInterface {
  readonly move: Move;
  readonly turnNumber: number;
  toPrimitives(): DuelMovePrimitives;
}

export interface DuelMovePrimitives {
  move: MovePrimitives;
  turnNumber: number;
}

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
