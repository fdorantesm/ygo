import { Card } from './card.entity';
import { Effect } from './effect.entity';
import {
  CardEffectInterface,
  CardEffectPrimitives,
} from '../interfaces/card-effect.interface';

export class CardEffect implements CardEffectInterface {
  private constructor(
    public readonly card: Card,
    public readonly effect: Effect,
  ) {}

  static create(card: Card, effect: Effect): CardEffect {
    return new CardEffect(card, effect);
  }

  static createFromPrimitives(primitives: CardEffectPrimitives): CardEffect {
    return new CardEffect(
      Card.createFromPrimitives(primitives.card),
      Effect.createFromPrimitives(primitives.effect),
    );
  }

  toPrimitives(): CardEffectPrimitives {
    return {
      card: this.card.toPrimitives(),
      effect: this.effect.toPrimitives(),
    };
  }
}
