import { Character } from '../types';

// --- Main Menu ---

export const mainMenuDennis: Character = {
  id: 'mainMenuDennis',
  name: 'Dennis',
  portrait: '/images/dennis-face.jpg',
  dialogues: {
    greeting: {
      text: 'Welcome to this interactive journey!\nThis is a true story - your story.\n\nEach scene represents a real moment, a memory that actually happened, or well... somewhat, based on my memory!\n\nAre you ready to begin?',
      options: [
        {
          text: 'Yes',
          next: 'start_journey',
        },
        {
          text: 'Yes, but we both know your memory is what it is 🙄',
          next: 'bad_memory',
        },
      ],
    },
    start_journey: {
      text: 'Excellent!\n\nEach choice you make will guide you through these memories in a unique way.',
      options: [
        {
          text: 'Begin the Story',
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

// --- Bumble ---

export const narratorBumble: Character = {
  id: 'narratorBumble',
  name: '',
  hidden: true,
  portrait: '/images/transparent.png',
  dialogues: {
    greeting: {
      text: 'Lame.',
      options: [
        {
          text: 'Swipe left ❌',
          next: 'swipeNo1',
        },
      ],
    },
    swipeNo1: {
      text: 'Laame.',
      options: [
        {
          text: 'Swipe left again... ❌',
          next: 'swipeNo2',
        },
      ],
    },
    swipeNo2: {
      text: 'Laaame.',
      options: [
        {
          text: 'Omg No! ❌',
          next: 'goToRoom:next',
        },
      ],
    },
  },
} as const;

export const dennisBumbleProfile: Character = {
  id: 'dennisBumbleProfile',
  name: 'Dennis Bumble profile',
  portrait: '/images/dennis-face.jpg',
  dialogues: {
    greeting: {
      text: "But… What's up with that profile text? Why are there 5000 emojis in it??\n\nUgh.. fuck it, maybe he just doesn't know how to write a good profile.",
      options: [
        {
          text: 'Browse through his pictures',
          next: 'continue',
        },
      ],
    },
    continue: {
      text: "He looks like he's a nice person though, and also... even though he's soooo bad at taking pictures of himself; he's hot! 😍",
      options: [
        {
          text: 'Continue reading',
          next: 'continueMore',
        },
      ],
    },
    continueMore: {
      text: "Wouldn't it be funny if he one day ends up being my husband, haha yeah as if..\nTelling people we randomly met on Bumble right after I arrived in Sweden 😂 What are the odds?\n\nThere's no way..",
      options: [
        {
          text: 'Swipe right ✔',
          next: 'goToRoom:next',
        },
        {
          text: 'Swipe left ❌',
          next: 'tryAgain',
        },
      ],
    },
    tryAgain: {
      text: 'Ha-ha 😒',
      options: [
        {
          text: 'Try again',
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
  portrait: '/images/tijana-face.jpg',
  dialogues: {
    greeting: {
      text: "All right it's time for me to go to work now..\n\nBut I can't shake off this strange feeling that when I leave you're just going to stand there, frozen right behind that door waiting for me to get home again like an NPC.\n\nYou're not actually an NPC are you?",
      options: [
        {
          text: 'Whaaat? Of course not, hehehehe…',
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
      text: 'You leave the apartment, closing the door behind you.',
      options: [
        {
          text: 'Wait 5 seconds...',
          next: 'afterWaiting',
        },
      ],
    },
    afterWaiting: {
      text: '...is he?',
      options: [
        {
          text: 'Open the door!',
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
  portrait: '/images/abdallah.png',
  dialogues: {
    greeting: {
      text: 'Hey gurl, I heard you were new in Sweden and I like to take care of newcomers, especially the young and pretty ones.\nSo what do you say.. Come over to my place and we can have dinner?\nI know this great place near my apartment, they actually sell the best kebabs in town.',
      options: [
        {
          text: "Wow what a friendly guy!\nHe couldn't possibly be having any ulterior motive for this right?\nSure! Sounds fun 😊",
          next: 'at_his_place',
        },
      ],
    },
    at_his_place: {
      text: "Ahem ok, so here we are. You can take a seat there and I'll be right back from the kitchen.",
      options: [
        {
          text: "Take a seat where? I don't see any chairs...\nDo you mean the couch?\nWhat if I spill?",
          next: 'on_the_floor',
        },
      ],
    },
    on_the_floor: {
      text: "Couch? Don't be ridiculous.\nI meant the floor, I always sit on the floor when eating dinner.",
      options: [
        {
          text: 'Oookay then...',
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
      text: "Welcome to your new life.\nYou may have expectations to work on your design skills here as was advertised, but...\n\nSince you also agreed to “help manage the facility” we'll make sure you spend at least 99% of your time here doing that instead, hehehe.\n\nHave fun!",
      options: [
        {
          text: 'Eh what?',
          next: 'part2',
        },
      ],
    },
    part2: {
      text: "Oh you don't seem busy at all with any of your own projects!\nCome help out in the co-working space 🤗",
      options: [
        {
          text: 'Move around chairs',
          next: 'manualLabor',
        },
        {
          text: 'Serve coffee',
          next: 'manualLabor',
        },
        {
          text: 'Paint a wall',
          next: 'manualLabor',
        },
        {
          text: 'Be creative and learn something useful',
          next: 'creativeNotAllowed',
        },
      ],
    },
    creativeNotAllowed: {
      text: "Sorry that option isn't available right now. We need you to do some more manual labor work first.",
      options: [
        {
          text: '(Sigh)',
          next: 'part2',
        },
      ],
    },
    manualLabor: {
      text: 'Work work...',
      options: [
        {
          text: 'Go back',
          next: 'part2',
        },
      ],
    },
    you_are_done: {
      text: "Oh would you look at that? It's already 5pm!\nYou can go home now, you did a great job today! 👏",
      options: [
        {
          text: '..thanks?',
          next: 'goToRoom:next',
        },
      ],
    },
  },
} as const;

export const applePickerGuide: Character = {
  id: 'applePickerGuide',
  name: 'Event Organizer',
  portrait: '/images/applePickerGuide.jpg',
  dialogues: {
    greeting: {
      text: "Hey all, welcome to this year's communal apple picking ceremony, look around and you'll find a bunch of of trees… with apples on them… well, you know what to do! See you here in 20 minutes.",
      options: [
        {
          text: 'Pick an apple.',
          next: 'pick1',
        },
      ],
    },
    pick1: {
      text: 'You picked an apple, you know have 1 Apple.',
      options: [
        {
          text: 'Pick an apple.',
          next: 'pick2',
        },
      ],
    },
    pick2: {
      text: 'You picked an apple, you know have 2 Apples.',
      options: [
        {
          text: 'Pick an apple.',
          next: 'pick3',
        },
      ],
    },
    pick3: {
      text: 'You picked an apple, you know have 3 Apples, one of them has a worm in it.',
      options: [
        {
          text: 'Pick one last apple.',
          next: 'gatherRound',
        },
      ],
    },
    gatherRound: {
      text: "Gather round, gather around, make a big circle here around me. We'll take all of our collected apples and put them in this pot, and guess what? Then we'll eat them! Exciting, right? 😀",
      options: [
        {
          text: 'Oh I have to tell Dennis he missed out on something epic. Apples, wow. 🙃',
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
  portrait: '/images/rollerInstructor.webp',
  dialogues: {
    greeting: {
      text: "Ah ah ah Stayin' Alive, stayin' Alive.\nOkay now everyone are you ready?!\n\nPut your feet like this, yeah yeah like that.\n Now we're going to make a big circle with our feet to move forward.",
      options: [
        {
          text: "I can't do this. I'm afraid I will just crash into someone...\nI'm gonna chicken out.",
          next: 'talkTo:dennisRollerSkate',
        },
      ],
    },
  },
} as const;

export const dennisRollerSkate: Character = {
  id: 'dennisRollerSkate',
  name: 'Dennis',
  portrait: '/images/dennis-face.jpg',
  hidden: true,
  dialogues: {
    greeting: {
      text: "Oh come on, don't be a wuss 😁 You're better than that.\nI know you can do anything you put your mind to.\nHere, take my hands, I'll support you, we'll do it together 💕",
      options: [
        {
          text: '*Wobble forward like Bambi on ice.*',
          next: 'doing_great',
        },
      ],
    },
    doing_great: {
      text: "Woohoo that's it you're doing great!",
      options: [
        {
          text: 'Give Dennis a big kiss.',
          next: 'dance_moves',
        },
      ],
    },
    dance_moves: {
      text: "💋!\n\nOkay now it's time to let loose and break out some dance moves.\nAre you ready? Check this out!",
      options: [
        {
          text: "(Fuck that's impressive)",
          next: 'record_him',
        },
        {
          text: 'Be a creep and record him skating 😍',
          next: 'record_him',
        },
      ],
    },
    record_him: {
      text: 'You record him as he effortlessly glides around the disco floor.',
      options: [
        {
          text: 'What a guy.',
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
  portrait: '/images/dennis-face.jpg',
  dialogues: {
    greeting: {
      text: "What?! That's crazy!\n\nYou met my mom during our first week together.\n\nI have nothing against meeting your family. I actually look forward to it!",
      options: [
        {
          text: "No no no you don't understand, my mother is crazy and I don't want you to meet her.",
          next: 'how_bad',
        },
      ],
    },
    how_bad: {
      text: 'Hahaha! Oh come on, how bad could it be?',
      options: [
        {
          text: "You'll see...",
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
  portrait: '/images/dennis-face.jpg',
  dialogues: {
    greeting: {
      text: "Oh that sure was something. Your mom is fun, she's like this Japanese tourist walking around with a camera hanging around their neck, taking pictures of and being astonished by everything, even the most unremarkable of things. I like her!",
      options: [
        {
          text: "She's intense! I can't take it any more! I'm so sorry for having you put up with her, I understand if you don't want to anymore.",
          next: 'she_is_intense',
        },
      ],
    },
    she_is_intense: {
      text: "What do you mean? Sure she's intense, but I also find her very smart plus; she's fun talking to.",
      options: [
        {
          text: "Easy for you to say. I'm exhausted!\nI can't believe we booked new year's partying back to back with my mother visiting and then us going straight back to work.\nIt's too much! What were we thinking?",
          next: 'what_were_we_thinking',
        },
      ],
    },
    what_were_we_thinking: {
      text: "Uff.. yeah, you're right. What the hell were we thinking.. 😵‍💫\n\nLet's learn from our mistakes and make sure we get some actual rest on our upcoming holidays.",
      options: [
        {
          text: 'Deal. 🤝',
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
  portrait: '/images/neighbour.jpg',
  dialogues: {
    greeting: {
      text: 'Hello? Who are you?',
      options: [
        {
          text: 'Uhhm, hi, so, eeeh. A thing happened.',
          next: 'it_worked',
        },
      ],
    },
    it_worked: {
      text: "*After a bizarre and frantic explanation involving gestures and pointing, the neighbour retrieves the headphones and hands them to you.*\n\nOh god I can't believe that worked!",
      options: [
        {
          text: 'Should I tell Dennis about this?',
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
  portrait: '/images/dennis-face.jpg',
  dialogues: {
    greeting: {
      text: '*sniffles*',
      options: [
        {
          text: 'Made in Abyss is so good! I wanna watch more of it!',
          next: 'told_you',
        },
      ],
    },
    told_you: {
      text: "See! I told you 😀 Not all Anime is the same and there's something for everybody out there! I'm so glad you like it.",
      options: [
        {
          text: "Nanachi is so cool 😎 she's just like me",
          next: 'season_3',
        },
      ],
    },
    season_3: {
      text: 'Oh no, I think that was the last episode..',
      options: [
        {
          text: 'What? We finished watching every episode?! Already? 😟',
          next: 'what_now',
        },
      ],
    },
    what_now: {
      text: 'Yeah… Season 3 is confirmed but no release date, estimations say late 2025.',
      options: [
        {
          text: "Okay 😟 let's watch it when it comes out!",
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
  portrait: '/images/dennis-face.jpg',
  dialogues: {
    greeting: {
      text: "Good girl! But we both know that's not what happened 🙂",
      options: [
        {
          text: 'Fine...',
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
  portrait: '/images/dennis-face.jpg',
  dialogues: {
    greeting: {
      text: 'Evil 😮',
      options: [
        {
          text: 'Continue',
          next: 'goToRoom:next',
        },
      ],
    },
  },
} as const;

export const tijanaCrossfit: Character = {
  id: 'tijanaCrossfit',
  name: 'Tijana',
  portrait: '/images/tijana-face.jpg',
  dialogues: {
    greeting: {
      text: 'Who the hell are these crazy people? How can they do this to themselves?\n\nOmg it hurts. My stomach hurts so bad.',
      options: [
        {
          text: 'I need to take a break.',
          next: 'make_worried_choice',
        },
      ],
    },
    make_worried_choice: {
      text: 'Should I go to the dressing room without saying a single word to Dennis so I can make him super worried?',
      options: [
        {
          text: "Yes. *evil laugh* 😈 It's payback for all the times he farted!",
          next: 'talkTo:dennisCrossfitNotHappy',
        },
        {
          text: "No, that's mean.",
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
  portrait: '/images/dennis-face.jpg',
  dialogues: {
    greeting: {
      text: 'Sure honey. Some day.',
      options: [
        {
          text: "...Maybe December 2025. We'll see…",
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
  portrait: '/images/alex.png',
  dialogues: {
    greeting: {
      text: "Hey guys, when you come to Berlin what do you say about going to KitKat? It's this amazing super gay sex club!\nEvery week they even host “Fisting Fridays” 🥳",
      options: [
        {
          text: "Hahaha, that sounds awesome! Let's do it.",
          next: 'to_alex',
        },
      ],
    },
    to_alex: {
      text: 'Great!',
      options: [
        {
          text: "Psst Alex, I need you to keep an eye on Dennis.\nMake sure he doesn't cheat on me with anyone in there.\nNo anal fisting for him!",
          next: 'yes_mam',
        },
      ],
    },
    yes_mam: {
      text: 'You got it! 🧐',
      options: [
        {
          text: 'Continue',
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
  portrait: '/images/bureaucrat.jpg',
  dialogues: {
    greeting: {
      text: 'Sure, what are your questions?',
      options: [
        {
          text: 'Explain the situation and ask for clarification.',
          next: 'useless_answer',
        },
      ],
    },
    useless_answer: {
      text: 'Okay one moment...\n...\n...\nOk here we go! This is the generic info we have on our website about this matter.\nI can give you a link to it if you want?',
      options: [
        {
          text: '...wtf',
          next: 'useless_answer_part_2',
        },
      ],
    },
    useless_answer_part_2: {
      text: 'Was there anything else I can help you with?',
      options: [
        {
          text: "That was a bust.. God they're so useless, stupid bureaucrats.",
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
  portrait: '/images/dennis-face.jpg',
  dialogues: {
    greeting: {
      text: "Yeah, I guess so, but I mean… the art isn't THAT bad is it?\nIt's just a bit generic!",
      options: [
        {
          text: "A bit?\nNo! I wanna puke whenever I see it, they're so easy to notice and they all look like shit. One has to have no taste in art whatsoever in order not to hate it.",
          next: 'the_fonts',
        },
      ],
    },
    the_fonts: {
      text: 'Hahaha naah, there\'s a time and place for everything.\nBut any sentence starting with "Home is where..." is always super cringy.\n\nHowever, regarding the fonts of this one, hehe.. I didn\'t even think about it. "It\'s just fonts."',
      options: [
        {
          text: 'Just fon..?!”!”¤#/(“¤!”?!1..ts??',
          next: 'passionate',
        },
      ],
    },
    passionate: {
      text: "Wow, you're really passionate about fonts huh? 😅",
      options: [
        {
          text: '🤯 You have no idea',
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
  portrait: '/images/tijana-face.jpg',
  dialogues: {
    greeting: {
      text: "I made you a gift, here, I've worked like crazy for the past couple of days in order to make it.\nI hope you like it, it's a collection of things that have happened since I came here and met you.",
      options: [
        {
          text: 'Give Dennis the handmade booklet',
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
      text: 'Dennis looks through the handmade booklet you gave him.\nHe looks happy, but at the same time, deeply touched.\n\nHe starts crying.',
      options: [
        {
          text: 'Observe Dennis',
          next: 'talkTo:tijanaValentineSurprised',
        },
      ],
    },
  },
} as const;

export const tijanaValentineSurprised: Character = {
  id: 'tijanaValentineSurprised',
  name: 'Tijana',
  portrait: '/images/tijana-face.jpg',
  dialogues: {
    greeting: {
      text: "Hehehe, wow, I didn't expect you to react that strongly to it.",
      options: [
        {
          text: "How could I not? It's amazing, this is the best gift I have ever received!",
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
  portrait: '/images/tijana-face.jpg',
  dialogues: {
    greeting: {
      text: "Really?? Well then, from here on out, I'll make one every year for valentine's! It will be our little tradition ♥️",
      options: [
        {
          text: 'Aww 😍',
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
  portrait: '/images/dennis-face.jpg',
  dialogues: {
    greeting: {
      text: "Dennis's secret thoughts:\n\nDamn, how ironic isn't this? I can't believe we had the same idea.\nIt's almost exactly what I wanted to make for her as an advent gift last x-mas but moved it up for her birthday so I'll have enough time to make it properly.\n\nMaybe I should make a game for her as a yearly tradition as well? 🤔\nI wonder if she would like that…",
      options: [
        {
          text: 'Yes I would 💖\nI believe you can make it interesting in new ways every year.',
          next: 'goToRoom:next',
        },
        {
          text: "No thank you 💖\nI'd prefer a different type of gift next year.",
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
  portrait: '/images/dennis-face.jpg',
  dialogues: {
    greeting: {
      text: 'Ahahaha, what? Photoshopped?\n\nDamn that must be the best compliment I have ever received, never thought I would hear that one haha.\n\nThank you honey! You just made my day!',
      options: [
        {
          text: 'Aww 🥰 I love you daddy 💗',
          next: 'love_you_too',
        },
      ],
    },
    love_you_too: {
      text: 'I love you too!',
      options: [
        {
          text: '🥰',
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
  portrait: '/images/dennis-face.jpg',
  dialogues: {
    greeting: {
      text: "His jaw drops.\n\nWow you look cute! Omg 😍 You're adorable!\n\nGet over here so I can kiss you!",
      options: [
        {
          text: 'Move closer',
          next: 'intimate_kiss',
        },
        {
          text: 'Push tongue into Dennis mouth as he tries to kiss you.',
          next: 'fuck_off',
        },
      ],
    },
    intimate_kiss: {
      text: "As you share an intimate kiss together Dennis whispers:\nWe were really made for each other, weren't we?",
      options: [
        {
          text: "I feel like I'm in heaven when I'm with you 💖",
          next: 'goToRoom:next',
        },
      ],
    },
    fuck_off: {
      text: '😑 fuck off…….',
      options: [
        {
          text: 'Hehehehe 😈',
          next: 'goToRoom:next',
        },
      ],
    },
  },
} as const;
