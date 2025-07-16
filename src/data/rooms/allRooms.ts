import { Room } from '../types';

export const mainMenu: Room = {
  id: 'mainMenu',
  name: 'Welcome to Your Story',
  description:
    'A journey through memories, moments, and meaningful experiences.',
  background: '/images/mainMenu.png',
  exits: {
    next: 'sep12Sweden',
  },
  characters: ['mainMenuDennis'],
} as const;

export const sep12Sweden: Room = {
  id: 'sep12Sweden',
  name: '12 Sep, Sweden',
  description:
    "Aahhhh, I've finally arrived!\n\nClean air, empty streets and a fun project ahead of me. This will be great!",
  background: '/images/sep12Sweden.jpg',
  exits: {
    next: 'datingApps',
  },
} as const;

export const datingApps: Room = {
  id: 'datingApps',
  name: 'Dating Apps',
  description:
    "Uuuugggggggggh I'm so tired of Serbian guys on dating apps. I really hope the selection here in Sweden will be better!",
  background: '/images/datingApps.jpg',
  exits: {
    next: 'swipingNo',
  },
} as const;

export const swipingNo: Room = {
  id: 'swipingNo',
  name: 'Bumble',
  description:
    "Uuuugggggggggh I'm so tired of Serbian guys on dating apps. I really hope the selection here in Sweden will be better!",
  background: '/images/datingApps.jpg',
  exits: {
    next: 'bumble',
  },
  characters: ['narratorBumble'],
  introCharacter: 'narratorBumble',
} as const;

export const bumble: Room = {
  id: 'bumble',
  name: 'Bumble',
  description: "Oh who's this guy? He looks cute.",
  background: '/images/bumble.png',
  characters: ['dennisBumbleProfile'],
  exits: {
    next: 'npcOnCloseDoor',
  },
} as const;

export const npcOnCloseDoor: Room = {
  id: 'npcOnCloseDoor',
  name: 'Is he an NPC?',
  description:
    "Dennis.. You're standing in the hallway and Tijana is about to leave for work.",
  background: '/images/npcOnCloseDoor.png',
  exits: {
    next: 'npcOnCloseDoorPart2',
  },
  characters: ['tijanaNpc', 'narratorNpc'],
} as const;

export const npcOnCloseDoorPart2: Room = {
  id: 'npcOnCloseDoorPart2',
  name: 'Is he an NPC?',
  description:
    'You swing the door back open.\nDennis is standing there in the exact same position.\n\nAha! I knew it!!!',
  background: '/images/dennis-npc-door.jfif',
  exits: {
    next: 'abdallahFloor',
  },
  characters: [],
} as const;

export const abdallahFloor: Room = {
  id: 'abdallahFloor',
  name: "Abdallah's Place",
  description: 'A friendly stranger invited you for dinner at his apartment...',
  background: '/images/abdallahFloor.png',
  exits: {
    next: 'stpln',
  },
  characters: ['abdallah'],
} as const;

export const stpln: Room = {
  id: 'stpln',
  name: 'STPLN',
  description:
    'You arrive at the co-working space, ready to start your creative journey.',
  background: '/images/stpln.jfif',
  exits: {
    next: 'applePicking',
  },
  characters: ['stplnNarrator'],
} as const;

export const applePicking: Room = {
  id: 'applePicking',
  name: 'Communal Apple Picking',
  description: 'You are at a communal apple picking ceremony.',
  background: '/images/applePicking.png',
  exits: {
    next: 'rollerSkateDisco',
  },
  characters: ['applePickerGuide'],
} as const;

export const rollerSkateDisco: Room = {
  id: 'rollerSkateDisco',
  name: 'Roller Skate Disco',
  description:
    "You're at a roller skate disco with Dennis. The music is pumping, and an instructor is trying to get everyone started.",
  background: '/images/rollerSkateDisco.png',
  exits: {
    next: 'meetFamily',
  },
  characters: ['rollerInstructor', 'dennisRollerSkate'],
} as const;

export const meetFamily: Room = {
  id: 'meetFamily',
  name: 'Meeting the Family',
  description:
    "Tijana: This feels so wrong. I usually don't let my boyfriends meet my family.\nAt least not before a year or maybe even two.",
  background: '/images/meetFamily.webp',
  exits: {
    next: 'motherVisiting',
  },
  characters: ['dennisFamily'],
} as const;

export const motherVisiting: Room = {
  id: 'motherVisiting',
  name: "Mom's Visit",
  description:
    "Your mother is visiting. She's a whirlwind of energy.\n\n'Hey Tijana, look at this!\nI'm over here.\nNow I'm here.\nNow here!\n\nHey are you coming? Keep up.",
  background: '/images/motherVisiting.jpg',
  exits: {
    next: 'headphonesBalcony',
  },
  characters: ['dennisMomsit'],
} as const;

export const headphonesBalcony: Room = {
  id: 'headphonesBalcony',
  name: 'The Balcony Incident',
  description:
    "Aaahh!! OMG 😱 That did not just happen!! Wtf?!\nWtf am I gonna do?? Those were Dennis's headphones!\n\n*You race downstairs and frantically knock on the neighbour's door.*",
  background: '/images/headphonesBalcony.png',
  exits: {
    next: 'madeInAbyssAnime',
  },
  characters: ['neighbour'],
} as const;

export const madeInAbyssAnime: Room = {
  id: 'madeInAbyssAnime',
  name: 'Made in Abyss',
  description:
    'You and Dennis are watching the end of an episode of "Made in Abyss".\n\nOn screen: Mitty!! Nooooo! 😭',
  background: '/images/madeInAbyssAnime.jpeg',
  exits: {
    next: 'crossfitNov1',
  },
  characters: ['dennisAnime'],
} as const;

export const crossfitNov1: Room = {
  id: 'crossfitNov1',
  name: 'Crossfit Hell',
  description:
    'Gasps for air.\nSweat flying everywhere.\nSurrounded by gym freaks.',
  background: '/images/crossfitNov1.webp',
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
  description:
    'Daddy? 😇💖\nCan we get an Arduino? Can we build a robot together? Beep boop 🤖\nPlease please please please! 😇',
  background: '/images/arduino.jpg',
  exits: {
    next: 'alexDarkroom',
  },
  characters: ['dennisArduino'],
} as const;

export const alexDarkroom: Room = {
  id: 'alexDarkroom',
  name: 'KitKatClub',
  description: 'Uhn Tiss Uhn Tiss Uhn Tiss 🎵🧡💛💚💜💙🖤🎵',
  background: '/images/alexDarkroom.jpg',
  exits: {
    next: 'migrationsverket',
  },
  characters: ['alex'],
} as const;

export const migrationsverket: Room = {
  id: 'migrationsverket',
  name: 'Migrationsverket',
  description:
    'Hey, we were on your website and found some of the instructions unclear, could you help us with some of our questions?',
  background: '/images/migrationsverket.jpg',
  exits: {
    next: 'manyFontsHome',
  },
  characters: ['bureaucrat'],
} as const;

export const manyFontsHome: Room = {
  id: 'manyFontsHome',
  name: 'The Horrible Fonts',
  description:
    "What? You've never heard of AirBnB art? Really?\nHave you been living under a stone?",
  background: '/images/manyFontsHome.jpg',
  exits: {
    next: 'valentineCryGiftTradition',
  },
  characters: ['dennisFonts'],
} as const;

export const valentineCryGiftTradition: Room = {
  id: 'valentineCryGiftTradition',
  name: "A Valentine's Tradition",
  description: "Happy Valentine's!\n\n",
  background: '/images/valentineCryGiftTradition.png',
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
  description:
    "Wow.\nI love your dick.\nIt's straight, it has the perfect size, perfect shape and all!\nIt kinda even looks fake, like it's been photoshopped!",
  background: '/images/looksFakePhotoshop.png',
  exits: {
    next: 'pinkWigEtc',
  },
  characters: ['dennisCompliment'],
} as const;

export const pinkWigEtc: Room = {
  id: 'pinkWigEtc',
  name: 'The Pink Wig',
  description:
    "Oh! It's finally here! The pink wig and all.\n*You try it on.*\nDamn, I actually look good in this, wow, didn't think pink hair color would fit me that well 😮 I gotta show Dennis this!",
  background: '/images/pinkWigEtc.jpg',
  exits: {
    next: 'theEnd',
  },
  characters: ['dennisPinkWig'],
} as const;

export const theEnd: Room = {
  id: 'theEnd',
  name: 'The End',
  description:
    "That's it for now. I hope you liked my little story even though I had to rush the quality of the images a bit to finish it faster (sorry!)\n\nI love you super much Tijana and I'm so, so happy to have you in my life.\n\nI hope we can continue this story of ours together, for the rest of our lives.\nFull of adventures and fun times.\n\nForever yours! ❤️",
  background: '/images/theEnd.jpg',
  exits: {},
} as const;
