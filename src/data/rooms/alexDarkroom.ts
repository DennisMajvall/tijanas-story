import { Room } from '../types';

export const alexDarkroom: Room = {
  id: 'alexDarkroom',
  name: 'Alex Darkroom',
  description: '',
  background:
    'https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?auto=format&fit=crop&q=80&w=2000',
  exits: {
    next: 'migrationsverket',
  },
} as const;
