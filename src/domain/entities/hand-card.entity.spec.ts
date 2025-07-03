import { Card } from './card.entity';
import { HandCard } from './hand-card.entity';

describe('HandCard', () => {
  it('should create and convert to primitives', () => {
    const card = Card.create('Blue Eyes', 'Monster');
    const handCard = HandCard.create(card, 'player1', false);
    const primitives = handCard.createToPrimitives();
    expect(primitives.cardId).toBe(card.id);
    expect(primitives.playerId).toBe('player1');
    expect(primitives.revealed).toBe(false);
    const from = HandCard.createFromPrimitives(primitives);
    expect(from.createToPrimitives()).toEqual(primitives);
  });
});
