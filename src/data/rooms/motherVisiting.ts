import { Room } from '../types';

export const motherVisiting: Room = {
  id: "motherVisiting",
  name: "Mother Visiting",
  description: "",
  background: "https://images.unsplash.com/photo-1524601500432-1e1a4c71d692?auto=format&fit=crop&q=80&w=2000",
  exits: {
    next: "headphonesBalcony"
  }
} as const;