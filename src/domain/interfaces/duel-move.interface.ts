import type { Move } from '../entities/move.entity';

export interface DuelMovePrimitives {
  moveId: string;
  turnNumber: number;
}

export interface DuelMoveInterface {
  readonly moveId: string;
  readonly turnNumber: number;
  move?: Move;
  createToPrimitives(): DuelMovePrimitives;
}
