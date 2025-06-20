import { Card, CardPrimitives } from './card.entity';

export type DeckCardType = 'main' | 'extra' | 'side';

export interface DeckCardInterface {
  readonly card: Card;
  readonly deckType: DeckCardType | null;
  toPrimitives(): DeckCardPrimitives;
}

export interface DeckCardPrimitives {
  card: CardPrimitives;
  deckType?: DeckCardType | null;
}

export class DeckCard implements DeckCardInterface {
  private constructor(
    public readonly card: Card,
    public readonly deckType: DeckCardType | null = null,
  ) {}

  static create(card: Card, deckType: DeckCardType | null = null): DeckCard {
    return new DeckCard(card, deckType);
  }

  static createFromPrimitives(primitives: DeckCardPrimitives): DeckCard {
    return new DeckCard(
      Card.createFromPrimitives(primitives.card),
      primitives.deckType ?? null,
    );
  }

  toPrimitives(): DeckCardPrimitives {
    return {
      card: this.card.toPrimitives(),
      deckType: this.deckType,
    };
  }
}
