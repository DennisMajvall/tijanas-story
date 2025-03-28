import { Room } from '../types';

export const valentineCryGiftTradition: Room = {
  id: 'valentineCryGiftTradition',
  name: 'Valentine - Cry, Best Gift, Tradition',
  description: '',
  background:
    'https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&q=80&w=2000',
  exits: {
    next: 'looksFakePhotoshop',
  },
} as const;
