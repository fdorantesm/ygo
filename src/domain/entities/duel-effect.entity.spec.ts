import { Effect } from './effect.entity';
import { DuelEffect } from './duel-effect.entity';

describe('DuelEffect', () => {
  it('should create and convert to primitives', () => {
    const effect = Effect.create('e1', 'Boost', 'Boost attack');
    const duelEffect = DuelEffect.create(effect, 1);
    const primitives = duelEffect.toPrimitives();
    expect(primitives.appliedOnTurn).toBe(1);
    const from = DuelEffect.createFromPrimitives(primitives);
    expect(from.toPrimitives()).toEqual(primitives);
  });
});
