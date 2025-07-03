import { Effect } from './effect.entity';
import {
  DuelEffectInterface,
  DuelEffectPrimitives,
} from '../interfaces/duel-effect.interface';

export class DuelEffect implements DuelEffectInterface {
  private constructor(
    public readonly effectId: string,
    public readonly appliedOnTurn: number,
    public effect?: Effect,
  ) {}

  static create(effect: Effect, appliedOnTurn: number): DuelEffect {
    return new DuelEffect(effect.id, appliedOnTurn, effect);
  }

  static createFromPrimitives(primitives: DuelEffectPrimitives): DuelEffect {
    return new DuelEffect(primitives.effectId, primitives.appliedOnTurn);
  }

  createToPrimitives(): DuelEffectPrimitives {
    return {
      effectId: this.effectId,
      appliedOnTurn: this.appliedOnTurn,
    };
  }
}
