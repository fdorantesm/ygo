import { Card } from './card.entity';
import { FieldCard } from './field-card.entity';
import { Field } from './field.entity';

describe('Field', () => {
  it('should create and convert to primitives', () => {
    const card = Card.create('Blue Eyes', 'Monster');
    const placed = FieldCard.create(card, false);
    const field = Field.create([
      null,
      null,
    ], [
      placed,
      null,
      null,
      null,
      null,
    ]);
    const primitives = field.createToPrimitives();
    expect(primitives.monsterZones[0]?.cardId).toBe(card.id);
    const from = Field.createFromPrimitives(primitives);
    expect(from.createToPrimitives()).toEqual(primitives);
  });
});
