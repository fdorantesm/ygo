import { Card } from './card.entity';
import {
  DeckCardInterface,
  DeckCardPrimitives,
} from '../interfaces/deck-card.interface';
import { DeckCardType } from '../interfaces/deck-card-type.enum';

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
