export interface CardPrimitives {
  id: string;
  name: string;
  type: string;
  description?: string;
}

export interface CardInterface {
  readonly id: string;
  name: string;
  type: string;
  description?: string;
  createToPrimitives(): CardPrimitives;
}
