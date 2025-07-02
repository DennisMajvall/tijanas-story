import { Character } from '../types';
import { mainMenuDennis } from './main-menu-dennis';
import { librarian } from './librarian';
import { gardener } from './gardener';

export const characters: Record<string, Character> = {
  mainMenuDennis,
  librarian,
  gardener
} as const;