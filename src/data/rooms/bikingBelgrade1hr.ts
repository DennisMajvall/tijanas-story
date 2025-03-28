import { Room } from '../types';

export const bikingBelgrade1hr: Room = {
  id: 'bikingBelgrade1hr',
  name: 'Biking in Belgrade for 1 Hour',
  description: '',
  background:
    'https://images.unsplash.com/photo-1571333250630-f0230c320b6d?auto=format&fit=crop&q=80&w=2000',
  exits: {
    next: 'valentineCryGiftTradition',
  },
} as const;
