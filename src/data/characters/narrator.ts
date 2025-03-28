import { Character } from '../types';

export const narrator: Character = {
  id: 'narrator',
  name: 'Your Guide',
  portrait:
    'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400',
  dialogues: {
    greeting: {
      text: "Welcome to this interactive journey! This is a true story - your story. Through these scenes, you'll explore real moments and memories that have shaped a unique path. Are you ready to begin?",
      options: [
        {
          text: 'Yes, start my journey',
          next: 'start_journey',
        },
        {
          text: 'Tell me more about this story',
          next: 'about_story',
        },
      ],
    },
    about_story: {
      text: "This is an interactive storytelling experience based on true events. Each scene represents a real moment, a memory, or an experience that actually happened. Through this journey, you'll discover how these moments connect and shape a larger narrative.",
      options: [
        {
          text: "That sounds interesting, let's begin",
          next: 'start_journey',
        },
        {
          text: 'Back to greeting',
          next: 'greeting',
        },
      ],
    },
    start_journey: {
      text: "Excellent! Your story begins in Sweden, on September 12th. Each choice you make will guide you through these memories. Click the 'start' button when you're ready to begin your journey.",
      options: [
        {
          text: "I'm ready",
          next: 'greeting',
        },
      ],
    },
  },
} as const;
