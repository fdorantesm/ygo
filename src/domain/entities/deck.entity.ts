import { DeckCard, DeckCardPrimitives } from './deck-card.entity';

export interface DeckInterface {
  readonly id: string;
  cards: DeckCard[];
  toPrimitives(): DeckPrimitives;
}

export interface DeckPrimitives {
  id: string;
  cards: DeckCardPrimitives[];
}

export class Deck implements DeckInterface {
  private constructor(
    public readonly id: string,
    public cards: DeckCard[] = [],
  ) {}

  static create(id: string, cards: DeckCard[] = []): Deck {
    return new Deck(id, cards);
  }

  static createFromPrimitives(primitives: DeckPrimitives): Deck {
    return new Deck(
      primitives.id,
      primitives.cards.map((c) => DeckCard.createFromPrimitives(c)),
    );
  }

  toPrimitives(): DeckPrimitives {
    return {
      id: this.id,
      cards: this.cards.map((c) => c.toPrimitives()),
    };
  }
}
