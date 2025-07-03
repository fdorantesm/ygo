import { EffectInterface, EffectPrimitives } from '../interfaces/effect.interface';
import { uuidv7 } from '../../common/uuid';

export class Effect implements EffectInterface {
  private constructor(
    public readonly id: string,
    public readonly name: string,
    public readonly description: string,
  ) {}

  static create(name: string, description: string): Effect {
    return new Effect(uuidv7(), name, description);
  }

  static createFromPrimitives(primitives: EffectPrimitives): Effect {
    return new Effect(primitives.id, primitives.name, primitives.description);
  }

  createToPrimitives(): EffectPrimitives {
    return {
      id: this.id,
      name: this.name,
      description: this.description,
    };
  }
}
