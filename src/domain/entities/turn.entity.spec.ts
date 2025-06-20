import { Phase } from './phase.entity';
import { Turn } from './turn.entity';

describe('Turn', () => {
  it('should create and convert to primitives', () => {
    const phase = Phase.create('p1', 'Battle');
    const turn = Turn.create('t1', [phase]);
    const primitives = turn.toPrimitives();
    expect(primitives.phases[0].id).toBe('p1');
    const from = Turn.createFromPrimitives(primitives);
    expect(from.toPrimitives()).toEqual(primitives);
  });
});
