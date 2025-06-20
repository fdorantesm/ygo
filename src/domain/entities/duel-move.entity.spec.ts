import { Card } from './card.entity';
import { Effect } from './effect.entity';
import { Phase } from './phase.entity';
import { Move } from './move.entity';
import { DuelMove } from './duel-move.entity';

describe('DuelMove', () => {
  it('should create and convert to primitives', () => {
    const move = Move.create('m1', Card.create('1', 'Blue Eyes', 'Monster'), Effect.create('e1', 'Boost', 'Boost attack'), Phase.create('p1', 'Battle'));
    const duelMove = DuelMove.create(move, 1);
    const primitives = duelMove.toPrimitives();
    expect(primitives.turnNumber).toBe(1);
    const from = DuelMove.createFromPrimitives(primitives);
    expect(from.toPrimitives()).toEqual(primitives);
  });
});
