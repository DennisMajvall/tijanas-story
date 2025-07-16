import * as allRooms from './rooms/allRooms';
import * as allCharacters from './characters/allCharacters';

import type { Character, Room } from './types';
export type { Character, Room };

const characters = { ...allCharacters } as Record<string, Character>;
const rooms = { ...allRooms } as Record<string, Room>;

export const gameData = {
  rooms,
  characters,
} as const;
