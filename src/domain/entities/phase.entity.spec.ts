import { Phase } from './phase.entity';

describe('Phase', () => {
  it('should create and convert to primitives with parent', () => {
    const battle = Phase.create('Battle');
    const attack = Phase.create('Attack', battle);
    const primitives = attack.createToPrimitives();
    expect(primitives.parentPhaseId).toBe(battle.id);
    const from = Phase.createFromPrimitives(primitives);
    expect(from.createToPrimitives()).toEqual(primitives);
  });
});
