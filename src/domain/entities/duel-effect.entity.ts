import { Effect } from './effect.entity';
import {
  DuelEffectInterface,
  DuelEffectPrimitives,
} from '../interfaces/duel-effect.interface';

export class DuelEffect implements DuelEffectInterface {
  private constructor(
    public readonly effect: Effect,
    public readonly appliedOnTurn: number,
  ) {}

  static create(effect: Effect, appliedOnTurn: number): DuelEffect {
    return new DuelEffect(effect, appliedOnTurn);
  }

  static createFromPrimitives(primitives: DuelEffectPrimitives): DuelEffect {
    return new DuelEffect(
      Effect.createFromPrimitives(primitives.effect),
      primitives.appliedOnTurn,
    );
  }

  toPrimitives(): DuelEffectPrimitives {
    return {
      effect: this.effect.toPrimitives(),
      appliedOnTurn: this.appliedOnTurn,
    };
  }
}
