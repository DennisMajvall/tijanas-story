import { Room } from '../types';

export const npcOnCloseDoor: Room = {
  id: "npcOnCloseDoor",
  name: "NPC on Close Door",
  description: "",
  background: "https://images.unsplash.com/photo-1517021897933-0e0319cfbc28?auto=format&fit=crop&q=80&w=2000",
  exits: {
    next: "abdallahFloor"
  }
} as const;