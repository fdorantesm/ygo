import { Card } from './card.entity';
import { Effect } from './effect.entity';
import { Phase } from './phase.entity';
import { Move } from './move.entity';
import { DuelEffect } from './duel-effect.entity';
import { DuelMove } from './duel-move.entity';
import { Turn } from './turn.entity';
import { Duel } from './duel.entity';

describe('Duel', () => {
  it('should create and convert to primitives', () => {
    const turn = Turn.create('t1', [Phase.create('p1', 'Battle')]);
    const effect = DuelEffect.create(Effect.create('e1', 'Boost', 'Boost attack'), 1);
    const move = DuelMove.create(Move.create('m1', Card.create('1','Blue Eyes','Monster'), Effect.create('e2','Hit','Hit attack'), Phase.create('p1','Battle')), 1);
    const duel = Duel.create('d1', [turn], [effect], [move]);
    const primitives = duel.toPrimitives();
    expect(primitives.turns.length).toBe(1);
    const from = Duel.createFromPrimitives(primitives);
    expect(from.toPrimitives()).toEqual(primitives);
  });
});
