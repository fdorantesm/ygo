import type { Turn } from '../entities/turn.entity';
import type { TurnPrimitives } from './turn.interface';
import type { DuelEffect } from '../entities/duel-effect.entity';
import type { DuelEffectPrimitives } from './duel-effect.interface';
import type { DuelMove } from '../entities/duel-move.entity';
import type { DuelMovePrimitives } from './duel-move.interface';

export interface DuelPrimitives {
  id: string;
  turns: TurnPrimitives[];
  effects: DuelEffectPrimitives[];
  moves: DuelMovePrimitives[];
}

export interface DuelInterface {
  readonly id: string;
  turns: Turn[];
  effects: DuelEffect[];
  moves: DuelMove[];
  toPrimitives(): DuelPrimitives;
}
