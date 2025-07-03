import { Card } from './card.entity';
import { Effect } from './effect.entity';
import {
  CardEffectInterface,
  CardEffectPrimitives,
} from '../interfaces/card-effect.interface';

export class CardEffect implements CardEffectInterface {
  private constructor(
    public readonly cardId: string,
    public readonly effectId: string,
    public card?: Card,
    public effect?: Effect,
  ) {}

  static create(card: Card, effect: Effect): CardEffect {
    return new CardEffect(card.id, effect.id, card, effect);
  }

  static createFromPrimitives(primitives: CardEffectPrimitives): CardEffect {
    return new CardEffect(primitives.cardId, primitives.effectId);
  }

  createToPrimitives(): CardEffectPrimitives {
    return {
      cardId: this.cardId,
      effectId: this.effectId,
    };
  }
}
