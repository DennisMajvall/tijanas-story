import { Room } from '../types';

export const bumble: Room = {
  id: 'bumble',
  name: 'Bumble',
  description: '',
  background:
    'https://images.unsplash.com/photo-1621955964441-c173e01c135b?auto=format&fit=crop&q=80&w=2000',
  exits: {
    next: 'npcOnCloseDoor',
  },
} as const;
