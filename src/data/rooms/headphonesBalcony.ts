import { Room } from '../types';

export const headphonesBalcony: Room = {
  id: "headphonesBalcony",
  name: "Headphones on Balcony",
  description: "",
  background: "https://images.unsplash.com/photo-1527698266440-12104e498b76?auto=format&fit=crop&q=80&w=2000",
  exits: {
    next: "madeInAbyssAnime"
  }
} as const;