import { FieldInterface, FieldPrimitives } from '../interfaces/field.interface';
import { FieldCard } from './field-card.entity';
import { FieldCardPrimitives } from '../interfaces/field-card.interface';

export class Field implements FieldInterface {
  private constructor(
    public extraMonsterZones: Array<FieldCard | null>,
    public monsterZones: Array<FieldCard | null>,
    public spellTrapZones: Array<FieldCard | null>,
    public fieldZone: FieldCard | null,
    public graveyard: FieldCard[],
    public mainDeck: FieldCard[],
    public extraDeck: FieldCard[],
    public banishedZone: FieldCard[],
  ) {}

  static create(
    extraMonsterZones: Array<FieldCard | null> = [null, null],
    monsterZones: Array<FieldCard | null> = [null, null, null, null, null],
    spellTrapZones: Array<FieldCard | null> = [null, null, null, null, null],
    fieldZone: FieldCard | null = null,
    graveyard: FieldCard[] = [],
    mainDeck: FieldCard[] = [],
    extraDeck: FieldCard[] = [],
    banishedZone: FieldCard[] = [],
  ): Field {
    return new Field(
      extraMonsterZones,
      monsterZones,
      spellTrapZones,
      fieldZone,
      graveyard,
      mainDeck,
      extraDeck,
      banishedZone,
    );
  }

  static createFromPrimitives(primitives: FieldPrimitives): Field {
    const toFieldCards = (arr: Array<FieldCardPrimitives | null>): Array<FieldCard | null> =>
      arr.map((z) => (z ? FieldCard.createFromPrimitives(z) : null));
    return new Field(
      toFieldCards(primitives.extraMonsterZones),
      toFieldCards(primitives.monsterZones),
      toFieldCards(primitives.spellTrapZones),
      primitives.fieldZone ? FieldCard.createFromPrimitives(primitives.fieldZone) : null,
      primitives.graveyard.map(FieldCard.createFromPrimitives),
      primitives.mainDeck.map(FieldCard.createFromPrimitives),
      primitives.extraDeck.map(FieldCard.createFromPrimitives),
      primitives.banishedZone.map(FieldCard.createFromPrimitives),
    );
  }

  createToPrimitives(): FieldPrimitives {
    const fromFieldCards = (arr: Array<FieldCard | null>): Array<FieldCardPrimitives | null> =>
      arr.map((z) => (z ? z.createToPrimitives() : null));
    return {
      extraMonsterZones: fromFieldCards(this.extraMonsterZones),
      monsterZones: fromFieldCards(this.monsterZones),
      spellTrapZones: fromFieldCards(this.spellTrapZones),
      fieldZone: this.fieldZone ? this.fieldZone.createToPrimitives() : null,
      graveyard: this.graveyard.map((c) => c.createToPrimitives()),
      mainDeck: this.mainDeck.map((c) => c.createToPrimitives()),
      extraDeck: this.extraDeck.map((c) => c.createToPrimitives()),
      banishedZone: this.banishedZone.map((c) => c.createToPrimitives()),
    };
  }
}
