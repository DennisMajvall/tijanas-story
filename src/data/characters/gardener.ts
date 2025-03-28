import { Character } from '../types';

export const gardener: Character = {
  id: 'gardener',
  name: 'The Mystic Gardener',
  portrait:
    'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400',
  dialogues: {
    greeting: {
      text: 'The flowers whispered of your arrival. What brings you to my garden?',
      options: [
        {
          text: 'The flowers speak to you?',
          next: 'flowers',
        },
        {
          text: "I'm looking for something",
          next: 'seeking',
        },
      ],
    },
    flowers: {
      text: 'Every bloom has a story, every petal a secret. Would you like to learn their language?',
      options: [
        {
          text: 'Yes, teach me',
          next: 'teach',
        },
        {
          text: 'Maybe another time',
          next: 'greeting',
        },
      ],
    },
    seeking: {
      text: 'Ah, the garden holds many treasures. But remember, the greatest discoveries are often not what we initially sought.',
      options: [
        {
          text: 'Thank you for the wisdom',
          next: 'greeting',
        },
      ],
    },
  },
} as const;
