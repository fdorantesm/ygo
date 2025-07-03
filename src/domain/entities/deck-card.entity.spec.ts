import { Card } from './card.entity';
import { DeckCard } from './deck-card.entity';
import { DeckCardType } from '../interfaces/deck-card-type.enum';

describe('DeckCard', () => {
  it('should create and convert to primitives', () => {
    const card = Card.create('Blue Eyes', 'Monster');
    const deckCard = DeckCard.create(card, DeckCardType.MAIN);
    const primitives = deckCard.createToPrimitives();
    expect(primitives.cardId).toBe(card.id);
    expect(primitives.deckType).toBe(DeckCardType.MAIN);
    const from = DeckCard.createFromPrimitives(primitives);
    expect(from.createToPrimitives()).toEqual(primitives);
  });
});
