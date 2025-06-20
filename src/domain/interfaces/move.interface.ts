import type { Card } from '../entities/card.entity';
import type { CardPrimitives } from './card.interface';
import type { Effect } from '../entities/effect.entity';
import type { EffectPrimitives } from './effect.interface';
import type { Phase } from '../entities/phase.entity';
import type { PhasePrimitives } from './phase.interface';

export interface MovePrimitives {
  id: string;
  card: CardPrimitives;
  effect: EffectPrimitives;
  phase: PhasePrimitives;
}

export interface MoveInterface {
  readonly id: string;
  readonly card: Card;
  readonly effect: Effect;
  readonly phase: Phase;
  toPrimitives(): MovePrimitives;
}
