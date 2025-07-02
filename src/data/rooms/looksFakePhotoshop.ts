import { Room } from '../types';

export const looksFakePhotoshop: Room = {
  id: "looksFakePhotoshop",
  name: "It Looks Fake, Photoshop",
  description: "",
  background: "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?auto=format&fit=crop&q=80&w=2000",
  exits: {
    next: "pinkWigEtc"
  }
} as const;