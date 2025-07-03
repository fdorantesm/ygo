import { Card } from './card.entity';
import {
  DeckCardInterface,
  DeckCardPrimitives,
} from '../interfaces/deck-card.interface';
import { DeckCardType } from '../interfaces/deck-card-type.enum';
import { uuidv7 } from '../../common/uuid';

export class DeckCard implements DeckCardInterface {
  private constructor(
    public readonly id: string,
    public readonly cardId: string,
    public readonly deckType: DeckCardType | null = null,
    public card?: Card,
  ) {}

  static create(
    card: Card,
    deckType: DeckCardType | null = null,
  ): DeckCard {
    return new DeckCard(uuidv7(), card.id, deckType, card);
  }

  static createFromPrimitives(primitives: DeckCardPrimitives): DeckCard {
    return new DeckCard(
      primitives.id,
      primitives.cardId,
      primitives.deckType ?? null,
    );
  }

  createToPrimitives(): DeckCardPrimitives {
    return {
      id: this.id,
      cardId: this.cardId,
      deckType: this.deckType,
    };
  }
}
