import { Room } from '../types';

export const sep12Sweden: Room = {
  id: 'sep12Sweden',
  name: '12 Sep Sweden',
  description:
    "Aahhhh, I've finally arrived!\n\nClean air, empty streets and a fun project ahead of me. This will be great!",
  background:
    'https://images.unsplash.com/photo-1509356843151-3e7d96241e11?auto=format&fit=crop&q=80&w=2000',
  exits: {
    next: 'bumble',
  },
  characters: ['gardener'],
  introCharacter: '',
} as const;
