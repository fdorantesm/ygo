export interface PhaseInterface {
  readonly id: string;
  readonly name: string;
  readonly parentPhase?: Phase;
  toPrimitives(): PhasePrimitives;
}

export interface PhasePrimitives {
  id: string;
  name: string;
  parentPhase?: PhasePrimitives;
}

export class Phase implements PhaseInterface {
  private constructor(
    public readonly id: string,
    public readonly name: string,
    public readonly parentPhase?: Phase,
  ) {}

  static create(id: string, name: string, parentPhase?: Phase): Phase {
    return new Phase(id, name, parentPhase);
  }

  static createFromPrimitives(primitives: PhasePrimitives): Phase {
    return new Phase(
      primitives.id,
      primitives.name,
      primitives.parentPhase
        ? Phase.createFromPrimitives(primitives.parentPhase)
        : undefined,
    );
  }

  toPrimitives(): PhasePrimitives {
    return {
      id: this.id,
      name: this.name,
      parentPhase: this.parentPhase?.toPrimitives(),
    };
  }
}
