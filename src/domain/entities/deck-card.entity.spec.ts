import { Card } from './card.entity';
import { DeckCard } from './deck-card.entity';

describe('DeckCard', () => {
  it('should create and convert to primitives', () => {
    const card = Card.create('1', 'Blue Eyes', 'Monster');
    const deckCard = DeckCard.create(card, 'main');
    const primitives = deckCard.toPrimitives();
    expect(primitives.deckType).toBe('main');
    const from = DeckCard.createFromPrimitives(primitives);
    expect(from.toPrimitives()).toEqual(primitives);
  });
});
