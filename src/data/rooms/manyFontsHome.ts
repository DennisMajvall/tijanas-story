import { Room } from '../types';

export const manyFontsHome: Room = {
  id: "manyFontsHome",
  name: "Many Fonts - Home is Where...",
  description: "",
  background: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=2000",
  exits: {
    next: "rapa"
  }
} as const;