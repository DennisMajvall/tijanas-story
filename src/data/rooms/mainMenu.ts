import { Room } from '../types';

export const mainMenu: Room = {
  id: "mainMenu",
  name: "Welcome to Your Story",
  description: "A journey through memories, moments, and meaningful experiences.",
  background: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80&w=2000",
  exits: {
    start: "sep12Sweden"
  },
  characters: ["narrator"]
} as const;