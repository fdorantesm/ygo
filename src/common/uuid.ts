import { randomBytes } from 'crypto';

export function uuidv7(): string {
  const timestamp = BigInt(Date.now());
  const bytes = Buffer.alloc(16);
  for (let i = 0; i < 6; i++) {
    bytes[i] = Number((timestamp >> BigInt(8 * (5 - i))) & BigInt(0xff));
  }
  const rand = randomBytes(10);
  bytes[6] = 0x70 | (rand[0] & 0x0f); // version 7
  bytes[7] = rand[1];
  bytes[8] = 0x80 | (rand[2] & 0x3f); // variant 10
  for (let i = 3; i < 10; i++) {
    bytes[6 + i] = rand[i];
  }
  const hex = bytes.toString('hex');
  return (
    hex.slice(0, 8) +
    '-' +
    hex.slice(8, 12) +
    '-' +
    hex.slice(12, 16) +
    '-' +
    hex.slice(16, 20) +
    '-' +
    hex.slice(20)
  );
}
