import type { Card } from '../entities/card.entity';
import type { CardPrimitives } from './card.interface';
import { DeckCardType } from './deck-card-type.enum';

export interface DeckCardPrimitives {
  card: CardPrimitives;
  deckType?: DeckCardType | null;
}

export interface DeckCardInterface {
  readonly card: Card;
  readonly deckType: DeckCardType | null;
  toPrimitives(): DeckCardPrimitives;
}
