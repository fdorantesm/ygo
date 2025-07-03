import { DeckCard } from './deck-card.entity';
import { DeckInterface, DeckPrimitives } from '../interfaces/deck.interface';
import { uuidv7 } from '../../common/uuid';

export class Deck implements DeckInterface {
  private constructor(
    public readonly id: string,
    public cards: DeckCard[] = [],
  ) {}

  static create(cards: DeckCard[] = []): Deck {
    return new Deck(uuidv7(), cards);
  }

  static createFromPrimitives(primitives: DeckPrimitives): Deck {
    return new Deck(
      primitives.id,
      primitives.cards.map((c) => DeckCard.createFromPrimitives(c)),
    );
  }

  createToPrimitives(): DeckPrimitives {
    return {
      id: this.id,
      cards: this.cards.map((c) => c.createToPrimitives()),
    };
  }
}
