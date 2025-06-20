import { Card } from './card.entity';

describe('Card', () => {
  it('should create and convert to primitives', () => {
    const card = Card.create('1', 'Blue Eyes', 'Monster', 'Powerful dragon');
    expect(card.id).toBe('1');
    const primitives = card.toPrimitives();
    expect(primitives).toEqual({
      id: '1',
      name: 'Blue Eyes',
      type: 'Monster',
      description: 'Powerful dragon',
    });
    const from = Card.createFromPrimitives(primitives);
    expect(from.toPrimitives()).toEqual(primitives);
  });
});
