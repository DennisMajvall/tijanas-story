import { Room } from '../types';

export const arduino: Room = {
  id: "arduino",
  name: "Arduino",
  description: "",
  background: "https://images.unsplash.com/photo-1553406830-ef2513450d76?auto=format&fit=crop&q=80&w=2000",
  exits: {
    next: "alexDarkroom"
  }
} as const;