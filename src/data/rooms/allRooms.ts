import { Room } from '../types';

export const mainMenu: Room = {
  id: 'mainMenu',
  name: 'Welcome to Your Story',
  description: '...',
  background: '/images/transparent.png',
  exits: {
    next: 'sep12Sweden',
  },
  characters: ['mainMenuDennis'],
} as const;

export const sep12Sweden: Room = {
  id: 'sep12Sweden',
  name: '12 Sep, Sweden',
  description: '...',
  background: '/images/transparent.png',
  exits: {
    next: 'datingApps',
  },
} as const;

export const datingApps: Room = {
  id: 'datingApps',
  name: 'Dating Apps',
  description: '...',
  background: '/images/transparent.png',
  exits: {
    next: 'swipingNo',
  },
} as const;

export const swipingNo: Room = {
  id: 'swipingNo',
  name: 'Bumble',
  description: '...',
  background: '/images/transparent.png',
  exits: {
    next: 'bumble',
  },
  characters: ['narratorBumble'],
  introCharacter: 'narratorBumble',
} as const;

export const bumble: Room = {
  id: 'bumble',
  name: 'Bumble',
  description: '...',
  background: '/images/transparent.png',
  characters: ['dennisBumbleProfile'],
  exits: {
    next: 'npcOnCloseDoor',
  },
} as const;

export const npcOnCloseDoor: Room = {
  id: 'npcOnCloseDoor',
  name: 'Is he an NPC?',
  description: '...',
  background: '/images/transparent.png',
  exits: {
    next: 'npcOnCloseDoorPart2',
  },
  characters: ['tijanaNpc', 'narratorNpc'],
} as const;

export const npcOnCloseDoorPart2: Room = {
  id: 'npcOnCloseDoorPart2',
  name: 'Is he an NPC?',
  description: '...',
  background: '/images/transparent.png',
  exits: {
    next: 'abdallahFloor',
  },
  characters: [],
} as const;

export const abdallahFloor: Room = {
  id: 'abdallahFloor',
  name: "Abdallah's Place",
  description: '...',
  background: '/images/transparent.png',
  exits: {
    next: 'stpln',
  },
  characters: ['abdallah'],
} as const;

export const stpln: Room = {
  id: 'stpln',
  name: 'STPLN',
  description: '...',
  background: '/images/transparent.png',
  exits: {
    next: 'applePicking',
  },
  characters: ['stplnNarrator'],
} as const;

export const applePicking: Room = {
  id: 'applePicking',
  name: 'Communal Apple Picking',
  description: '...',
  background: '/images/transparent.png',
  exits: {
    next: 'rollerSkateDisco',
  },
  characters: ['applePickerGuide'],
} as const;

export const rollerSkateDisco: Room = {
  id: 'rollerSkateDisco',
  name: 'Roller Skate Disco',
  description: '...',
  background: '/images/transparent.png',
  exits: {
    next: 'meetFamily',
  },
  characters: ['rollerInstructor', 'dennisRollerSkate'],
} as const;

export const meetFamily: Room = {
  id: 'meetFamily',
  name: 'Meeting the Family',
  description: '...',
  background: '/images/transparent.png',
  exits: {
    next: 'motherVisiting',
  },
  characters: ['dennisFamily'],
} as const;

export const motherVisiting: Room = {
  id: 'motherVisiting',
  name: "Mom's Visit",
  description: '...',
  background: '/images/transparent.png',
  exits: {
    next: 'headphonesBalcony',
  },
  characters: ['dennisMomsit'],
} as const;

export const headphonesBalcony: Room = {
  id: 'headphonesBalcony',
  name: 'The Balcony Incident',
  description: '...',
  background: '/images/transparent.png',
  exits: {
    next: 'madeInAbyssAnime',
  },
  characters: ['neighbour'],
} as const;

export const madeInAbyssAnime: Room = {
  id: 'madeInAbyssAnime',
  name: 'Made in Abyss',
  description: '...',
  background: '/images/transparent.png',
  exits: {
    next: 'crossfitNov1',
  },
  characters: ['dennisAnime'],
} as const;

export const crossfitNov1: Room = {
  id: 'crossfitNov1',
  name: 'Crossfit Hell',
  description: '...',
  background: '/images/transparent.png',
  exits: {
    next: 'arduino',
  },
  characters: [
    'tijanaCrossfit',
    'dennisCrossfitHappy',
    'dennisCrossfitNotHappy',
  ],
} as const;

export const arduino: Room = {
  id: 'arduino',
  name: 'Project: Robot',
  description: '...',
  background: '/images/transparent.png',
  exits: {
    next: 'alexDarkroom',
  },
  characters: ['dennisArduino'],
} as const;

export const alexDarkroom: Room = {
  id: 'alexDarkroom',
  name: 'KitKatClub',
  description: '...',
  background: '/images/transparent.png',
  exits: {
    next: 'migrationsverket',
  },
  characters: ['alex'],
} as const;

export const migrationsverket: Room = {
  id: 'migrationsverket',
  name: 'Migrationsverket',
  description: '...',
  background: '/images/transparent.png',
  exits: {
    next: 'manyFontsHome',
  },
  characters: ['bureaucrat'],
} as const;

export const manyFontsHome: Room = {
  id: 'manyFontsHome',
  name: 'The Horrible Fonts',
  description: '...',
  background: '/images/transparent.png',
  exits: {
    next: 'valentineCryGiftTradition',
  },
  characters: ['dennisFonts'],
} as const;

export const valentineCryGiftTradition: Room = {
  id: 'valentineCryGiftTradition',
  name: "A Valentine's Tradition",
  description: '...',
  background: '/images/transparent.png',
  exits: {
    next: 'looksFakePhotoshop',
  },
  characters: [
    'tijanaValentine',
    'narratorValentine',
    'tijanaValentineTradition',
    'dennisValentineThoughts',
  ],
} as const;

export const looksFakePhotoshop: Room = {
  id: 'looksFakePhotoshop',
  name: 'The Ultimate Compliment',
  description: '...',
  background: '/images/transparent.png',
  exits: {
    next: 'pinkWigEtc',
  },
  characters: ['dennisCompliment'],
} as const;

export const pinkWigEtc: Room = {
  id: 'pinkWigEtc',
  name: 'The Pink Wig',
  description: '...',
  background: '/images/transparent.png',
  exits: {
    next: 'theEnd',
  },
  characters: ['dennisPinkWig'],
} as const;

export const theEnd: Room = {
  id: 'theEnd',
  name: 'The End',
  description: '...',
  background: '/images/transparent.png',
  exits: {},
} as const;
