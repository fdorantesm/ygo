import { Card, CardPrimitives } from './card.entity';
import { Effect, EffectPrimitives } from './effect.entity';

export interface CardEffectInterface {
  readonly card: Card;
  readonly effect: Effect;
  toPrimitives(): CardEffectPrimitives;
}

export interface CardEffectPrimitives {
  card: CardPrimitives;
  effect: EffectPrimitives;
}

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
