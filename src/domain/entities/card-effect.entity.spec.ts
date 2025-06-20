import { Card } from './card.entity';
import { Effect } from './effect.entity';
import { CardEffect } from './card-effect.entity';

describe('CardEffect', () => {
  it('should create and convert to primitives', () => {
    const card = Card.create('1', 'Blue Eyes', 'Monster');
    const effect = Effect.create('e1', 'Boost', 'Boost attack');
    const cardEffect = CardEffect.create(card, effect);
    const primitives = cardEffect.toPrimitives();
    expect(primitives.card.id).toBe('1');
    const from = CardEffect.createFromPrimitives(primitives);
    expect(from.toPrimitives()).toEqual(primitives);
  });
});
