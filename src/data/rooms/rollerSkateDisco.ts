import { Room } from '../types';

export const rollerSkateDisco: Room = {
  id: 'rollerSkateDisco',
  name: 'Roller Skate Disco',
  description: '',
  background:
    'https://images.unsplash.com/photo-1605647533135-51b5706f2ef6?auto=format&fit=crop&q=80&w=2000',
  exits: {
    next: 'meetFamily',
  },
} as const;
