import { Room } from '../types';

export const meetFamily: Room = {
  id: "meetFamily",
  name: "Meet Family",
  description: "",
  background: "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&q=80&w=2000",
  exits: {
    next: "motherVisiting"
  }
} as const;