import type { DeckCard } from '../entities/deck-card.entity';
import type { DeckCardPrimitives } from './deck-card.interface';

export interface DeckPrimitives {
  id: string;
  cards: DeckCardPrimitives[];
}

export interface DeckInterface {
  readonly id: string;
  cards: DeckCard[];
  toPrimitives(): DeckPrimitives;
}
