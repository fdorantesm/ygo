import { Card } from './card.entity';
import { Deck } from './deck.entity';
import { DeckCard } from './deck-card.entity';

describe('Deck', () => {
  it('should create and convert to primitives', () => {
    const card = Card.create('1', 'Blue Eyes', 'Monster');
    const deckCard = DeckCard.create(card, 'main');
    const deck = Deck.create('d1', [deckCard]);
    const primitives = deck.toPrimitives();
    expect(primitives.cards.length).toBe(1);
    const from = Deck.createFromPrimitives(primitives);
    expect(from.toPrimitives()).toEqual(primitives);
  });
});
