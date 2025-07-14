import { Room } from '../types';

export const mainMenu: Room = {
  id: 'mainMenu',
  name: 'Welcome to Your Story',
  description:
    'A journey through memories, moments, and meaningful experiences.',
  background: '#000',
  exits: {
    next: 'sep12Sweden',
  },
  characters: ['mainMenuDennis'],
  introCharacter: '',
} as const;
