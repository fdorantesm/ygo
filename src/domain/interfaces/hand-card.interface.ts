import type { Card } from '../entities/card.entity';

export interface HandCardPrimitives {
  id: string;
  cardId: string;
  playerId: string;
  revealed: boolean;
}

export interface HandCardInterface {
  id: string;
  cardId: string;
  playerId: string;
  revealed: boolean;
  card?: Card;
  createToPrimitives(): HandCardPrimitives;
}
