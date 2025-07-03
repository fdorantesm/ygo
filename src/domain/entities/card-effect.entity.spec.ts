import { Card } from './card.entity';
import { Effect } from './effect.entity';
import { CardEffect } from './card-effect.entity';

describe('CardEffect', () => {
  it('should create and convert to primitives', () => {
    const card = Card.create('Blue Eyes', 'Monster');
    const effect = Effect.create('Boost', 'Boost attack');
    const cardEffect = CardEffect.create(card, effect);
    const primitives = cardEffect.createToPrimitives();
    expect(primitives.cardId).toBe(card.id);
    const from = CardEffect.createFromPrimitives(primitives);
    expect(from.createToPrimitives()).toEqual(primitives);
  });
});
