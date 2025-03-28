import { Room } from '../types';

export const sep12Sweden: Room = {
  id: 'sep12Sweden',
  name: '12 Sep Sweden',
  description: '',
  background:
    'https://images.unsplash.com/photo-1509356843151-3e7d96241e11?auto=format&fit=crop&q=80&w=2000',
  exits: {
    next: 'cornStarch',
  },
} as const;
