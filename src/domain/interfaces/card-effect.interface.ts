import type { Card } from '../entities/card.entity';
import type { CardPrimitives } from './card.interface';
import type { Effect } from '../entities/effect.entity';
import type { EffectPrimitives } from './effect.interface';

export interface CardEffectPrimitives {
  card: CardPrimitives;
  effect: EffectPrimitives;
}

export interface CardEffectInterface {
  readonly card: Card;
  readonly effect: Effect;
  toPrimitives(): CardEffectPrimitives;
}
