import type { FieldCard } from '../entities/field-card.entity';
import type { FieldCardPrimitives } from './field-card.interface';

export interface FieldPrimitives {
  extraMonsterZones: Array<FieldCardPrimitives | null>;
  monsterZones: Array<FieldCardPrimitives | null>;
  spellTrapZones: Array<FieldCardPrimitives | null>;
  fieldZone: FieldCardPrimitives | null;
  graveyard: FieldCardPrimitives[];
  mainDeck: FieldCardPrimitives[];
  extraDeck: FieldCardPrimitives[];
  banishedZone: FieldCardPrimitives[];
}

export interface FieldInterface {
  extraMonsterZones: Array<FieldCard | null>;
  monsterZones: Array<FieldCard | null>;
  spellTrapZones: Array<FieldCard | null>;
  fieldZone: FieldCard | null;
  graveyard: FieldCard[];
  mainDeck: FieldCard[];
  extraDeck: FieldCard[];
  banishedZone: FieldCard[];
  createToPrimitives(): FieldPrimitives;
}
