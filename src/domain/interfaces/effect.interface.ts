export interface EffectPrimitives {
  id: string;
  name: string;
  description: string;
}

export interface EffectInterface {
  readonly id: string;
  readonly name: string;
  readonly description: string;
  createToPrimitives(): EffectPrimitives;
}
