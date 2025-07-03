import { Card } from './card.entity';
import { FieldCardInterface, FieldCardPrimitives } from '../interfaces/field-card.interface';
import { uuidv7 } from '../../common/uuid';

export class FieldCard implements FieldCardInterface {
  private constructor(
    public readonly id: string,
    public readonly cardId: string,
    public faceDown: boolean,
    public card?: Card,
  ) {}

  static create(card: Card, faceDown: boolean): FieldCard {
    return new FieldCard(uuidv7(), card.id, faceDown, card);
  }

  static createFromPrimitives(primitives: FieldCardPrimitives): FieldCard {
    return new FieldCard(primitives.id, primitives.cardId, primitives.faceDown);
  }

  createToPrimitives(): FieldCardPrimitives {
    return {
      id: this.id,
      cardId: this.cardId,
      faceDown: this.faceDown,
    };
  }
}
