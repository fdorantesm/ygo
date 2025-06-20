import type { Move } from '../entities/move.entity';
import type { MovePrimitives } from './move.interface';

export interface DuelMovePrimitives {
  move: MovePrimitives;
  turnNumber: number;
}

export interface DuelMoveInterface {
  readonly move: Move;
  readonly turnNumber: number;
  toPrimitives(): DuelMovePrimitives;
}
