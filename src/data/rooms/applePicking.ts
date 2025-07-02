import { Room } from '../types';

export const applePicking: Room = {
  id: "applePicking",
  name: "Apple Picking",
  description: "",
  background: "https://images.unsplash.com/photo-1506184155123-73f3a6dfc2fc?auto=format&fit=crop&q=80&w=2000",
  exits: {
    next: "bronMartinSaga"
  }
} as const;