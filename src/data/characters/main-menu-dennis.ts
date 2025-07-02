import { Character } from '../types';

export const mainMenuDennis: Character = {
  id: "mainMenuDennis",
  name: "Dennis",
  portrait: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400",
  dialogues: {
    greeting: {
      text: "Welcome to this interactive journey!\nThis is a true story - your story.\n\nEach scene represents a real moment, a memory that actually happened, or well... somewhat, based on my memory!\n\nAre you ready to begin?",
      options: [
        {
          text: "Yes",
          next: "start_journey"
        },
        {
          text: "Yes, but we both know your memory is what it is 🙄",
          next: "bad_memory"
        }
      ]
    },
    start_journey: {
      text: "Excellent! Each choice you make will guide you through these memories in a unique way.",
      options: [
        {
          text: "Start",
          next: "goToRoom:next"
        }
      ]
    },
    bad_memory: {
      text: "That's true 😳 but still, I hope you enjoy this story!",
      options: [
        {
          text: "Of course I will",
          next: "start_journey"
        }
      ]
    }
  }
} as const;