import { Card } from './card.entity';
import { FieldCard } from './field-card.entity';

describe('FieldCard', () => {
  it('should create and convert to primitives', () => {
    const card = Card.create('Blue Eyes', 'Monster');
    const placed = FieldCard.create(card, true);
    const primitives = placed.createToPrimitives();
    expect(primitives.cardId).toBe(card.id);
    expect(primitives.faceDown).toBe(true);
    const from = FieldCard.createFromPrimitives(primitives);
    expect(from.createToPrimitives()).toEqual(primitives);
  });
});
