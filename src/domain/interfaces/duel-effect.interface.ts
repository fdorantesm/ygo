import type { Effect } from '../entities/effect.entity';
import type { EffectPrimitives } from './effect.interface';

export interface DuelEffectPrimitives {
  effect: EffectPrimitives;
  appliedOnTurn: number;
}

export interface DuelEffectInterface {
  readonly effect: Effect;
  readonly appliedOnTurn: number;
  toPrimitives(): DuelEffectPrimitives;
}
