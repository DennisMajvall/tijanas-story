import { Room } from '../types';

export const bronMartinSaga: Room = {
  id: 'bronMartinSaga',
  name: 'The Bridge, Martin Rohde & Saga Norén',
  description: '',
  background:
    'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&q=80&w=2000',
  exits: {
    next: 'manyFontsHome',
  },
} as const;
