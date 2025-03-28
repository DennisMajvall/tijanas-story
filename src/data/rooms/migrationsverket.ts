import { Room } from '../types';

export const migrationsverket: Room = {
  id: 'migrationsverket',
  name: 'Swedish Migration Agency (Migrationsverket)',
  description: '',
  background:
    'https://images.unsplash.com/photo-1464938769256-c00accdd4ef5?auto=format&fit=crop&q=80&w=2000',
  exits: {
    next: 'stpln',
  },
} as const;
