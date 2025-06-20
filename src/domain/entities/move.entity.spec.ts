import { Card } from './card.entity';
import { Effect } from './effect.entity';
import { Phase } from './phase.entity';
import { Move } from './move.entity';

describe('Move', () => {
  it('should create and convert to primitives', () => {
    const card = Card.create('1', 'Blue Eyes', 'Monster');
    const effect = Effect.create('e1', 'Boost', 'Boost attack');
    const phase = Phase.create('p1', 'Battle');
    const move = Move.create('m1', card, effect, phase);
    const primitives = move.toPrimitives();
    expect(primitives.card.id).toBe('1');
    const from = Move.createFromPrimitives(primitives);
    expect(from.toPrimitives()).toEqual(primitives);
  });
});
