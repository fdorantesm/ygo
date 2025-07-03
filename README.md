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
- `FieldCard`
- `Field`
- `HandCard`

Each entity exposes three helper methods:

- `create`: static factory encapsulating object construction
- `createFromPrimitives`: build an entity from a plain JSON object
- `createToPrimitives`: serialize the entity into primitives for persistence or transport

Ids are generated using [UUID v7](https://datatracker.ietf.org/doc/html/draft-peabody-dispatch-new-uuid-format) via the helper in `src/common/uuid.ts`.

Nested relations keep only the id of the child entity. The actual child object may be attached as a virtual property but is not included when converting to primitives.

Along with each class there is a corresponding interface using the `Interface` suffix (e.g. `CardInterface`) that defines its public shape. These interfaces live under `src/domain/interfaces`.

## API

The API is built with [NestJS](https://nestjs.com/). The entry point is `src/main.ts` and modules are defined starting with `AppModule`.


## Docker

A `Dockerfile` and `docker-compose.yml` are provided to run the API using containers. Build and start the service locally with:

```bash
docker compose up --build
```

The API will be available on `http://localhost:3000`.
