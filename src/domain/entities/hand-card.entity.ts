import { Card } from './card.entity';
import { HandCardInterface, HandCardPrimitives } from '../interfaces/hand-card.interface';
import { uuidv7 } from '../../common/uuid';

export class HandCard implements HandCardInterface {
  private constructor(
    public readonly id: string,
    public readonly cardId: string,
    public readonly playerId: string,
    public revealed: boolean,
    public card?: Card,
  ) {}

  static create(card: Card, playerId: string, revealed: boolean): HandCard {
    return new HandCard(uuidv7(), card.id, playerId, revealed, card);
  }

  static createFromPrimitives(primitives: HandCardPrimitives): HandCard {
    return new HandCard(
      primitives.id,
      primitives.cardId,
      primitives.playerId,
      primitives.revealed,
    );
  }

  createToPrimitives(): HandCardPrimitives {
    return {
      id: this.id,
      cardId: this.cardId,
      playerId: this.playerId,
      revealed: this.revealed,
    };
  }
}
