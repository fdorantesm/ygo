# ygo
An unofficial API to play yugioh!

## Domain Model

The project follows a hexagonal architecture with DDD concepts. The initial domain
entities are defined under `src/domain/entities`:

- `Card`
- `Effect`
- `CardEffect`
- `Phase`
- `Turn`
- `Duel`
- `Move`
- `DuelEffect`
- `DuelMove`
- `DeckCard`
- `Deck`

Each entity exposes three helper methods:

- `create`: static factory encapsulating object construction
- `createFromPrimitives`: build an entity from a plain JSON object
- `toPrimitives`: serialize the entity into primitives for persistence or transport

Along with each class there is a corresponding interface using the `Interface` suffix (e.g. `CardInterface`) that defines its public shape.

## API

The API is built with [NestJS](https://nestjs.com/). The entry point is `src/main.ts` and modules are defined starting with `AppModule`.

