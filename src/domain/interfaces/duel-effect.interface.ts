import type { Effect } from '../entities/effect.entity';

export interface DuelEffectPrimitives {
  effectId: string;
  appliedOnTurn: number;
}

export interface DuelEffectInterface {
  readonly effectId: string;
  readonly appliedOnTurn: number;
  effect?: Effect;
  createToPrimitives(): DuelEffectPrimitives;
}
