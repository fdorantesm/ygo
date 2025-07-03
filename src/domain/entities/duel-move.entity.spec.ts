import { Card } from './card.entity';
import { Effect } from './effect.entity';
import { Phase } from './phase.entity';
import { Move } from './move.entity';
import { DuelMove } from './duel-move.entity';

describe('DuelMove', () => {
  it('should create and convert to primitives', () => {
    const move = Move.create(
      Card.create('Blue Eyes', 'Monster'),
      Effect.create('Boost', 'Boost attack'),
      Phase.create('Battle')
    );
    const duelMove = DuelMove.create(move, 1);
    const primitives = duelMove.createToPrimitives();
    expect(primitives.moveId).toBe(move.id);
    expect(primitives.turnNumber).toBe(1);
    const from = DuelMove.createFromPrimitives(primitives);
    expect(from.createToPrimitives()).toEqual(primitives);
  });
});
