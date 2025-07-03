import { Phase } from './phase.entity';
import { Turn } from './turn.entity';

describe('Turn', () => {
  it('should create and convert to primitives', () => {
    const phase = Phase.create('Battle');
    const turn = Turn.create([phase]);
    const primitives = turn.createToPrimitives();
    expect(primitives.phaseIds[0]).toBe(phase.id);
    const from = Turn.createFromPrimitives(primitives);
    expect(from.createToPrimitives()).toEqual(primitives);
  });
});
