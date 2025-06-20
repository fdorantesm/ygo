import { Phase } from './phase.entity';

describe('Phase', () => {
  it('should create and convert to primitives with parent', () => {
    const battle = Phase.create('p1', 'Battle');
    const attack = Phase.create('p2', 'Attack', battle);
    const primitives = attack.toPrimitives();
    expect(primitives.parentPhase?.id).toBe('p1');
    const from = Phase.createFromPrimitives(primitives);
    expect(from.toPrimitives()).toEqual(primitives);
  });
});
