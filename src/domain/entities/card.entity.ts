export interface CardInterface {
  readonly id: string;
  name: string;
  type: string;
  description?: string;
  toPrimitives(): CardPrimitives;
}

export interface CardPrimitives {
  id: string;
  name: string;
  type: string;
  description?: string;
}

export class Card implements CardInterface {
  private constructor(
    public readonly id: string,
    public name: string,
    public type: string,
    public description?: string,
  ) {}

  static create(
    id: string,
    name: string,
    type: string,
    description?: string,
  ): Card {
    return new Card(id, name, type, description);
  }

  static createFromPrimitives(primitives: CardPrimitives): Card {
    return new Card(
      primitives.id,
      primitives.name,
      primitives.type,
      primitives.description,
    );
  }

  toPrimitives(): CardPrimitives {
    return {
      id: this.id,
      name: this.name,
      type: this.type,
      description: this.description,
    };
  }
}
