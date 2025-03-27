import { Room } from '../types';

export const rapa: Room = {
  id: "rapa",
  name: "Rapa!",
  description: "",
  background: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=2000",
  exits: {
    next: "bikingBelgrade1hr"
  }
} as const;