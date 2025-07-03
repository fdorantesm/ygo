import { Card } from './card.entity';
import { Effect } from './effect.entity';
import { Phase } from './phase.entity';
import { Move } from './move.entity';
import { DuelEffect } from './duel-effect.entity';
import { DuelMove } from './duel-move.entity';
import { Turn } from './turn.entity';
import { Duel } from './duel.entity';

describe('Duel', () => {
  it('should create and convert to primitives', () => {
    const turn = Turn.create([Phase.create('Battle')]);
    const effect = DuelEffect.create(Effect.create('Boost', 'Boost attack'), 1);
    const move = DuelMove.create(
      Move.create(
        Card.create('Blue Eyes', 'Monster'),
        Effect.create('Hit', 'Hit attack'),
        Phase.create('Battle'),
      ),
      1,
    );
    const duel = Duel.create([turn], [effect], [move]);
    const primitives = duel.createToPrimitives();
    expect(primitives.turnIds.length).toBe(1);
    const from = Duel.createFromPrimitives(primitives);
    expect(from.createToPrimitives()).toEqual(primitives);
  });
});
