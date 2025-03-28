import { Room } from '../types';

export const crossfitNov1: Room = {
  id: 'crossfitNov1',
  name: 'CrossFit 1 Nov',
  description: '',
  background:
    'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=2000',
  exits: {
    next: 'arduino',
  },
} as const;
