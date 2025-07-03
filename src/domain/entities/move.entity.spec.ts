import { Card } from './card.entity';
import { Effect } from './effect.entity';
import { Phase } from './phase.entity';
import { Move } from './move.entity';

describe('Move', () => {
  it('should create and convert to primitives', () => {
    const card = Card.create('Blue Eyes', 'Monster');
    const effect = Effect.create('Boost', 'Boost attack');
    const phase = Phase.create('Battle');
    const move = Move.create(card, effect, phase);
    const primitives = move.createToPrimitives();
    expect(primitives.cardId).toBe(card.id);
    const from = Move.createFromPrimitives(primitives);
    expect(from.createToPrimitives()).toEqual(primitives);
  });
});
