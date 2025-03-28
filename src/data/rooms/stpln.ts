import { Room } from "../types";

export const stpln: Room = {
  id: "stpln",
  name: "Stpln",
  description: "",
  background:
    "https://images.unsplash.com/photo-1581091226825-c6a89e7e4801?auto=format&fit=crop&q=80&w=2000",
  exits: {
    next: "applePicking",
  },
} as const;
