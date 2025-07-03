import { Card } from './card.entity';

describe('Card', () => {
  it('should create and convert to primitives', () => {
    const card = Card.create('Blue Eyes', 'Monster', 'Powerful dragon');
    expect(typeof card.id).toBe('string');
    const primitives = card.createToPrimitives();
    expect(primitives).toEqual({
      id: card.id,
      name: 'Blue Eyes',
      type: 'Monster',
      description: 'Powerful dragon',
    });
    const from = Card.createFromPrimitives(primitives);
    expect(from.createToPrimitives()).toEqual(primitives);
  });
});
