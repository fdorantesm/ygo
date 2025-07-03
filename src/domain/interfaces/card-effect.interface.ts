import type { Card } from '../entities/card.entity';
import type { Effect } from '../entities/effect.entity';

export interface CardEffectPrimitives {
  cardId: string;
  effectId: string;
}

export interface CardEffectInterface {
  readonly cardId: string;
  readonly effectId: string;
  card?: Card;
  effect?: Effect;
  createToPrimitives(): CardEffectPrimitives;
}
