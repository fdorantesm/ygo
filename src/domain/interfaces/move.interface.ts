import type { Card } from '../entities/card.entity';
import type { Effect } from '../entities/effect.entity';
import type { Phase } from '../entities/phase.entity';

export interface MovePrimitives {
  id: string;
  cardId: string;
  effectId: string;
  phaseId: string;
}

export interface MoveInterface {
  readonly id: string;
  readonly cardId: string;
  readonly effectId: string;
  readonly phaseId: string;
  card?: Card;
  effect?: Effect;
  phase?: Phase;
  createToPrimitives(): MovePrimitives;
}
