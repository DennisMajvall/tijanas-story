import { Character } from '../types';
import { narrator } from './narrator';
import { librarian } from './librarian';
import { gardener } from './gardener';

export const characters: Record<string, Character> = {
  narrator,
  librarian,
  gardener,
} as const;
