import type { Turn } from '../entities/turn.entity';
import type { DuelEffect } from '../entities/duel-effect.entity';
import type { DuelMove } from '../entities/duel-move.entity';

export interface DuelPrimitives {
  id: string;
  turnIds: string[];
  effectIds: string[];
  moveIds: string[];
}

export interface DuelInterface {
  readonly id: string;
  readonly turnIds: string[];
  readonly effectIds: string[];
  readonly moveIds: string[];
  turns?: Turn[];
  effects?: DuelEffect[];
  moves?: DuelMove[];
  createToPrimitives(): DuelPrimitives;
}
