import { Effect } from './effect.entity';

describe('Effect', () => {
  it('should create and convert to primitives', () => {
    const effect = Effect.create('1', 'Boost', 'Boost attack');
    expect(effect.name).toBe('Boost');
    const primitives = effect.toPrimitives();
    expect(primitives).toEqual({
      id: '1',
      name: 'Boost',
      description: 'Boost attack',
    });
    const from = Effect.createFromPrimitives(primitives);
    expect(from.toPrimitives()).toEqual(primitives);
  });
});
