import { Room } from '../types';

export const npcOnCloseDoor: Room = {
  id: 'npcOnCloseDoor',
  name: 'NPC on Close Door',
  description: 'Ehm hello?',
  background: '/images/npcOnCloseDoor.png',
  exits: {
    next: 'abdallahFloor',
  },
} as const;
