import { EffectInterface, EffectPrimitives } from '../interfaces/effect.interface';

export class Effect implements EffectInterface {
  private constructor(
    public readonly id: string,
    public readonly name: string,
    public readonly description: string,
  ) {}

  static create(id: string, name: string, description: string): Effect {
    return new Effect(id, name, description);
  }

  static createFromPrimitives(primitives: EffectPrimitives): Effect {
    return new Effect(primitives.id, primitives.name, primitives.description);
  }

  toPrimitives(): EffectPrimitives {
    return {
      id: this.id,
      name: this.name,
      description: this.description,
    };
  }
}
