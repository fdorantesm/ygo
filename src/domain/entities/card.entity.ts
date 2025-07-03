import { CardInterface, CardPrimitives } from '../interfaces/card.interface';
import { uuidv7 } from '../../common/uuid';

export class Card implements CardInterface {
  private constructor(
    public readonly id: string,
    public name: string,
    public type: string,
    public description?: string,
  ) {}

  static create(
    name: string,
    type: string,
    description?: string,
  ): Card {
    return new Card(uuidv7(), name, type, description);
  }

  static createFromPrimitives(primitives: CardPrimitives): Card {
    return new Card(
      primitives.id,
      primitives.name,
      primitives.type,
      primitives.description,
    );
  }

  createToPrimitives(): CardPrimitives {
    return {
      id: this.id,
      name: this.name,
      type: this.type,
      description: this.description,
    };
  }
}
