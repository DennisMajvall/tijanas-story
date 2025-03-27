import { Room } from '../types';

export const madeInAbyssAnime: Room = {
  id: "madeInAbyssAnime",
  name: "Made in Abyss Anime",
  description: "",
  background: "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&q=80&w=2000",
  exits: {
    next: "crossfitNov1"
  }
} as const;