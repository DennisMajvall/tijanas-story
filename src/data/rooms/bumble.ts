import { Room } from '../types';

export const bumble: Room = {
  id: 'bumble',
  name: 'Bumble',
  description: '',
  background: '/images/bumble.png',
  exits: {
    next: 'npcOnCloseDoor',
  },
} as const;
