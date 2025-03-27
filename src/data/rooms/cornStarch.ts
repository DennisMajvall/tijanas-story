import { Room } from '../types';

export const cornStarch: Room = {
  id: "cornStarch",
  name: "Corn Starch",
  description: "",
  background: "https://images.unsplash.com/photo-1621955964441-c173e01c135b?auto=format&fit=crop&q=80&w=2000",
  exits: {
    next: "npcOnCloseDoor"
  }
} as const;