import type { Card } from '../entities/card.entity';
import { DeckCardType } from './deck-card-type.enum';

export interface DeckCardPrimitives {
  id: string;
  cardId: string;
  deckType?: DeckCardType | null;
}

export interface DeckCardInterface {
  readonly id: string;
  readonly cardId: string;
  readonly deckType: DeckCardType | null;
  card?: Card;
  createToPrimitives(): DeckCardPrimitives;
}
