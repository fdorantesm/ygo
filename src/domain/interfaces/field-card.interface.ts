import type { Card } from '../entities/card.entity';

export interface FieldCardPrimitives {
  id: string;
  cardId: string;
  faceDown: boolean;
}

export interface FieldCardInterface {
  id: string;
  cardId: string;
  faceDown: boolean;
  card?: Card;
  createToPrimitives(): FieldCardPrimitives;
}
