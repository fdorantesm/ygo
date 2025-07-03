import { Effect } from './effect.entity';

describe('Effect', () => {
  it('should create and convert to primitives', () => {
    const effect = Effect.create('Boost', 'Boost attack');
    expect(effect.name).toBe('Boost');
    const primitives = effect.createToPrimitives();
    expect(primitives).toEqual({
      id: effect.id,
      name: 'Boost',
      description: 'Boost attack',
    });
    const from = Effect.createFromPrimitives(primitives);
    expect(from.createToPrimitives()).toEqual(primitives);
  });
});
