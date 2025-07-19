import { Character } from '../types';

// --- Main Menu ---

export const mainMenuDennis: Character = {
  id: 'mainMenuDennis',
  name: 'Dennis',
  portrait: '/images/transparent.png',
  dialogues: {
    greeting: {
      text: '...',
      options: [
        {
          text: '...',
          next: 'start_journey',
        },
        {
          text: '...',
          next: 'bad_memory',
        },
      ],
    },
    start_journey: {
      text: '...',
      options: [
        {
          text: '...',
          next: 'goToRoom:next',
        },
      ],
    },
    bad_memory: {
      text: '...',
      options: [
        {
          text: '...',
          next: 'start_journey',
        },
      ],
    },
  },
} as const;

// --- Bumble ---

export const narratorBumble: Character = {
  id: 'narratorBumble',
  name: '',
  hidden: true,
  portrait: '/images/transparent.png',
  dialogues: {
    greeting: {
      text: '...',
      options: [
        {
          text: '...',
          next: 'swipeNo1',
        },
      ],
    },
    swipeNo1: {
      text: '...',
      options: [
        {
          text: '...',
          next: 'swipeNo2',
        },
      ],
    },
    swipeNo2: {
      text: '...',
      options: [
        {
          text: '...',
          next: 'goToRoom:next',
        },
      ],
    },
  },
} as const;

export const dennisBumbleProfile: Character = {
  id: 'dennisBumbleProfile',
  name: 'Dennis Bumble profile',
  portrait: '/images/transparent.png',
  dialogues: {
    greeting: {
      text: '...',
      options: [
        {
          text: '...',
          next: 'continue',
        },
      ],
    },
    continue: {
      text: '...',
      options: [
        {
          text: '...',
          next: 'continueMore',
        },
      ],
    },
    continueMore: {
      text: '...',
      options: [
        {
          text: '...',
          next: 'goToRoom:next',
        },
        {
          text: '...',
          next: 'tryAgain',
        },
      ],
    },
    tryAgain: {
      text: '...',
      options: [
        {
          text: '...',
          next: 'continueMore',
        },
      ],
    },
  },
} as const;

// --- NPC Prank ---

export const tijanaNpc: Character = {
  id: 'tijanaNpc',
  name: 'Tijana',
  portrait: '/images/transparent.png',
  dialogues: {
    greeting: {
      text: '...',
      options: [
        {
          text: '...',
          next: 'talkTo:narratorNpc',
        },
      ],
    },
  },
} as const;

export const narratorNpc: Character = {
  id: 'narratorNpc',
  name: '',
  hidden: true,
  portrait: '/images/transparent.png',
  dialogues: {
    greeting: {
      text: '...',
      options: [
        {
          text: '...',
          next: 'afterWaiting',
        },
      ],
    },
    afterWaiting: {
      text: '...',
      options: [
        {
          text: '...',
          next: 'goToRoom:next',
        },
      ],
    },
  },
} as const;

// --- Abdallah's Floor ---

export const abdallah: Character = {
  id: 'abdallah',
  name: 'Abdallah',
  portrait: '/images/transparent.png',
  dialogues: {
    greeting: {
      text: '...',
      options: [
        {
          text: '...',
          next: 'at_his_place',
        },
      ],
    },
    at_his_place: {
      text: '...',
      options: [
        {
          text: '...',
          next: 'on_the_floor',
        },
      ],
    },
    on_the_floor: {
      text: '...',
      options: [
        {
          text: '...',
          next: 'goToRoom:next',
        },
      ],
    },
  },
} as const;

export const stplnNarrator: Character = {
  id: 'stplnNarrator',
  name: 'STPLN Staff',
  portrait: '/images/transparent.png',
  dialogues: {
    greeting: {
      text: '...',
      options: [
        {
          text: '...',
          next: 'part2',
        },
      ],
    },
    part2: {
      text: '...',
      options: [
        {
          text: '...',
          next: 'manualLabor',
        },
        {
          text: '...',
          next: 'manualLabor',
        },
        {
          text: '...',
          next: 'manualLabor',
        },
        {
          text: '...',
          next: 'creativeNotAllowed',
        },
      ],
    },
    creativeNotAllowed: {
      text: '...',
      options: [
        {
          text: '...',
          next: 'part2',
        },
      ],
    },
    manualLabor: {
      text: '...',
      options: [
        {
          text: '...',
          next: 'part2',
        },
      ],
    },
    you_are_done: {
      text: '...',
      options: [
        {
          text: '...',
          next: 'goToRoom:next',
        },
      ],
    },
  },
} as const;

export const applePickerGuide: Character = {
  id: 'applePickerGuide',
  name: 'Event Organizer',
  portrait: '/images/transparent.png',
  dialogues: {
    greeting: {
      text: '...',
      options: [
        {
          text: '...',
          next: 'pick1',
        },
      ],
    },
    pick1: {
      text: '...',
      options: [
        {
          text: '...',
          next: 'pick2',
        },
      ],
    },
    pick2: {
      text: '...',
      options: [
        {
          text: '...',
          next: 'pick3',
        },
      ],
    },
    pick3: {
      text: '...',
      options: [
        {
          text: '...',
          next: 'gatherRound',
        },
      ],
    },
    gatherRound: {
      text: '...',
      options: [
        {
          text: '...',
          next: 'goToRoom:next',
        },
      ],
    },
  },
} as const;

// --- Roller Skate Disco ---

export const rollerInstructor: Character = {
  id: 'rollerInstructor',
  name: 'Instructor',
  portrait: '/images/transparent.png',
  dialogues: {
    greeting: {
      text: '...',
      options: [
        {
          text: '...',
          next: 'talkTo:dennisRollerSkate',
        },
      ],
    },
  },
} as const;

export const dennisRollerSkate: Character = {
  id: 'dennisRollerSkate',
  name: 'Dennis',
  portrait: '/images/transparent.png',
  hidden: true,
  dialogues: {
    greeting: {
      text: '...',
      options: [
        {
          text: '...',
          next: 'doing_great',
        },
      ],
    },
    doing_great: {
      text: '...',
      options: [
        {
          text: '...',
          next: 'dance_moves',
        },
      ],
    },
    dance_moves: {
      text: '...',
      options: [
        {
          text: '...',
          next: 'record_him',
        },
        {
          text: '...',
          next: 'record_him',
        },
      ],
    },
    record_him: {
      text: '...',
      options: [
        {
          text: '...',
          next: 'goToRoom:next',
        },
      ],
    },
  },
} as const;

// --- Meet the Family ---

export const dennisFamily: Character = {
  id: 'dennisFamily',
  name: 'Dennis',
  portrait: '/images/transparent.png',
  dialogues: {
    greeting: {
      text: '...',
      options: [
        {
          text: '...',
          next: 'how_bad',
        },
      ],
    },
    how_bad: {
      text: '...',
      options: [
        {
          text: '...',
          next: 'goToRoom:next',
        },
      ],
    },
  },
} as const;

// --- Mother Visiting ---

export const dennisMomsit: Character = {
  id: 'dennisMomsit',
  name: 'Dennis',
  portrait: '/images/transparent.png',
  dialogues: {
    greeting: {
      text: '...',
      options: [
        {
          text: '...',
          next: 'she_is_intense',
        },
      ],
    },
    she_is_intense: {
      text: '...',
      options: [
        {
          text: '...',
          next: 'what_were_we_thinking',
        },
      ],
    },
    what_were_we_thinking: {
      text: '...',
      options: [
        {
          text: '...',
          next: 'goToRoom:next',
        },
      ],
    },
  },
} as const;

// --- Headphones on Balcony ---

export const neighbour: Character = {
  id: 'neighbour',
  name: 'Neighbor',
  portrait: '/images/transparent.png',
  dialogues: {
    greeting: {
      text: '...',
      options: [
        {
          text: '...',
          next: 'it_worked',
        },
      ],
    },
    it_worked: {
      text: '...',
      options: [
        {
          text: '...',
          next: 'goToRoom:next',
        },
      ],
    },
  },
} as const;

// --- Made in Abyss ---

export const dennisAnime: Character = {
  id: 'dennisAnime',
  name: 'Dennis',
  portrait: '/images/transparent.png',
  dialogues: {
    greeting: {
      text: '...',
      options: [
        {
          text: '...',
          next: 'told_you',
        },
      ],
    },
    told_you: {
      text: '...',
      options: [
        {
          text: '...',
          next: 'season_3',
        },
      ],
    },
    season_3: {
      text: '...',
      options: [
        {
          text: '...',
          next: 'what_now',
        },
      ],
    },
    what_now: {
      text: '...',
      options: [
        {
          text: '...',
          next: 'goToRoom:next',
        },
      ],
    },
  },
} as const;

// --- Crossfit ---

export const dennisCrossfitHappy: Character = {
  id: 'dennisCrossfitHappy',
  name: 'Dennis',
  hidden: true,
  portrait: '/images/transparent.png',
  dialogues: {
    greeting: {
      text: '...',
      options: [
        {
          text: '...',
          next: 'goToRoom:next',
        },
      ],
    },
  },
} as const;

export const dennisCrossfitNotHappy: Character = {
  id: 'dennisCrossfitNotHappy',
  name: 'Dennis',
  hidden: true,
  portrait: '/images/transparent.png',
  dialogues: {
    greeting: {
      text: '...',
      options: [
        {
          text: '...',
          next: 'goToRoom:next',
        },
      ],
    },
  },
} as const;

export const tijanaCrossfit: Character = {
  id: 'tijanaCrossfit',
  name: 'Tijana',
  portrait: '/images/transparent.png',
  dialogues: {
    greeting: {
      text: '...',
      options: [
        {
          text: '...',
          next: 'make_worried_choice',
        },
      ],
    },
    make_worried_choice: {
      text: '...',
      options: [
        {
          text: '...',
          next: 'talkTo:dennisCrossfitNotHappy',
        },
        {
          text: '...',
          next: 'talkTo:dennisCrossfitHappy',
        },
      ],
    },
  },
} as const;

// --- Arduino ---

export const dennisArduino: Character = {
  id: 'dennisArduino',
  name: 'Dennis',
  portrait: '/images/transparent.png',
  dialogues: {
    greeting: {
      text: '...',
      options: [
        {
          text: '...',
          next: 'goToRoom:next',
        },
      ],
    },
  },
} as const;

// --- Berlin Clubbing ---

export const alex: Character = {
  id: 'alex',
  name: 'Alex',
  portrait: '/images/transparent.png',
  dialogues: {
    greeting: {
      text: '...',
      options: [
        {
          text: '...',
          next: 'to_alex',
        },
      ],
    },
    to_alex: {
      text: '...',
      options: [
        {
          text: '...',
          next: 'yes_mam',
        },
      ],
    },
    yes_mam: {
      text: '...',
      options: [
        {
          text: '...',
          next: 'goToRoom:next',
        },
      ],
    },
  },
} as const;

// --- Migrationsverket ---

export const bureaucrat: Character = {
  id: 'bureaucrat',
  name: 'Bureaucrat',
  portrait: '/images/transparent.png',
  dialogues: {
    greeting: {
      text: '...',
      options: [
        {
          text: '...',
          next: 'useless_answer',
        },
      ],
    },
    useless_answer: {
      text: '...',
      options: [
        {
          text: '...',
          next: 'useless_answer_part_2',
        },
      ],
    },
    useless_answer_part_2: {
      text: '...',
      options: [
        {
          text: '...',
          next: 'goToRoom:next',
        },
      ],
    },
  },
} as const;

// --- Fonts ---

export const dennisFonts: Character = {
  id: 'dennisFonts',
  name: 'Dennis',
  portrait: '/images/transparent.png',
  dialogues: {
    greeting: {
      text: '...',
      options: [
        {
          text: '...',
          next: 'the_fonts',
        },
      ],
    },
    the_fonts: {
      text: '...',
      options: [
        {
          text: '...',
          next: 'passionate',
        },
      ],
    },
    passionate: {
      text: '...',
      options: [
        {
          text: '...',
          next: 'goToRoom:next',
        },
      ],
    },
  },
} as const;

// --- Valentine's Day ---

export const tijanaValentine: Character = {
  id: 'tijanaValentine',
  name: 'Tijana',
  portrait: '/images/transparent.png',
  dialogues: {
    greeting: {
      text: '...',
      options: [
        {
          text: '...',
          next: 'talkTo:narratorValentine',
        },
      ],
    },
  },
} as const;

export const narratorValentine: Character = {
  id: 'narratorValentine',
  name: '',
  hidden: true,
  portrait: '/images/transparent.png',
  dialogues: {
    greeting: {
      text: '...',
      options: [
        {
          text: '...',
          next: 'talkTo:tijanaValentineSurprised',
        },
      ],
    },
  },
} as const;

export const tijanaValentineSurprised: Character = {
  id: 'tijanaValentineSurprised',
  name: 'Tijana',
  portrait: '/images/transparent.png',
  dialogues: {
    greeting: {
      text: '...',
      options: [
        {
          text: '...',
          next: 'talkTo:tijanaValentineTradition',
        },
      ],
    },
  },
} as const;

export const tijanaValentineTradition: Character = {
  id: 'tijanaValentineTradition',
  name: 'Tijana',
  hidden: true,
  portrait: '/images/transparent.png',
  dialogues: {
    greeting: {
      text: '...',
      options: [
        {
          text: '...',
          next: 'talkTo:dennisValentineThoughts',
        },
      ],
    },
  },
} as const;

export const dennisValentineThoughts: Character = {
  id: 'dennisValentineThoughts',
  name: 'Dennis',
  hidden: true,
  portrait: '/images/transparent.png',
  dialogues: {
    greeting: {
      text: '...',
      options: [
        {
          text: '...',
          next: 'goToRoom:next',
        },
        {
          text: '...',
          next: 'goToRoom:next',
        },
      ],
    },
  },
} as const;

// --- The Compliment ---

export const dennisCompliment: Character = {
  id: 'dennisCompliment',
  name: 'Dennis',
  portrait: '/images/transparent.png',
  dialogues: {
    greeting: {
      text: '...',
      options: [
        {
          text: '...',
          next: 'love_you_too',
        },
      ],
    },
    love_you_too: {
      text: '...',
      options: [
        {
          text: '...',
          next: 'goToRoom:next',
        },
      ],
    },
  },
} as const;

// --- Pink Wig ---

export const dennisPinkWig: Character = {
  id: 'dennisPinkWig',
  name: 'Dennis',
  portrait: '/images/transparent.png',
  dialogues: {
    greeting: {
      text: '...',
      options: [
        {
          text: '...',
          next: 'intimate_kiss',
        },
        {
          text: '...',
          next: 'fuck_off',
        },
      ],
    },
    intimate_kiss: {
      text: '...',
      options: [
        {
          text: '...',
          next: 'goToRoom:next',
        },
      ],
    },
    fuck_off: {
      text: '...',
      options: [
        {
          text: '...',
          next: 'goToRoom:next',
        },
      ],
    },
  },
} as const;
