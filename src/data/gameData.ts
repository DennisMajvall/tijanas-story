import { rooms } from './rooms/index';
import { characters } from './characters/index';

export * from './types';

export const gameData = {
  rooms,
  characters
} as const;
