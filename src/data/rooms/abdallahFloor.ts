import { Room } from '../types';

export const abdallahFloor: Room = {
  id: "abdallahFloor",
  name: "Abdallah Floor",
  description: "",
  background: "https://images.unsplash.com/photo-1484101403633-562f891dc89a?auto=format&fit=crop&q=80&w=2000",
  exits: {
    next: "rollerSkateDisco"
  }
} as const;