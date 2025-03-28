import { Character } from '../types';

export const librarian: Character = {
  id: 'librarian',
  name: 'The Keeper of Knowledge',
  portrait:
    'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&q=80&w=400',
  dialogues: {
    greeting: {
      text: 'Welcome, seeker of knowledge. What brings you to these ancient halls?',
      options: [
        {
          text: 'I seek ancient wisdom',
          next: 'wisdom',
        },
        {
          text: "I'm just exploring",
          next: 'explore',
        },
      ],
    },
    wisdom: {
      text: "Ah, a scholar's heart beats within you. The answers you seek may lie in the study to the north.",
      options: [
        {
          text: 'Thank you, wise one',
          next: 'greeting',
        },
      ],
    },
    explore: {
      text: 'A curious soul! Do take care in the garden - not all that blooms is benign.',
      options: [
        {
          text: "I'll be careful",
          next: 'greeting',
        },
      ],
    },
  },
} as const;
