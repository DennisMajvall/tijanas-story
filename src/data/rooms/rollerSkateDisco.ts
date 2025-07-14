import { Room } from '../types';

export const rollerSkateDisco: Room = {
  id: 'rollerSkateDisco',
  name: 'Roller Skate Disco',
  description: '',
  background: '/images/rollerSkateDisco.png',
  exits: {
    next: 'meetFamily',
  },
} as const;
