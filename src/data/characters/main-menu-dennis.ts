import { Character } from '../types';

export const mainMenuDennis: Character = {
  id: 'mainMenuDennis',
  name: 'Dennis',
  portrait: '/images/dennis-face.jpg',
  dialogues: {
    greeting: {
      text: 'Welcome to this interactive journey!\nThis is a true story - your story.\n\nEach scene represents a real moment, a memory that actually happened, or well... somewhat, based on my memory!\n\nAre you ready to begin?',
      options: [
        {
          text: 'Yes, but we both know your memory is what it is 🙄',
          next: 'bad_memory',
        },
        {
          text: 'Yes',
          next: 'start_journey',
        },
      ],
    },
    start_journey: {
      text: 'Excellent! Each choice you make will guide you through these memories in a unique way.',
      options: [
        {
          text: 'Start',
          next: 'goToRoom:next',
        },
      ],
    },
    bad_memory: {
      text: "That's true 😳 but still, I hope you enjoy this story!",
      options: [
        {
          text: 'Of course I will',
          next: 'start_journey',
        },
      ],
    },
  },
} as const;
