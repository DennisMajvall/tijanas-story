export interface Room {
  id: string;
  name: string;
  description: string;
  background: string;
  exits: { [key: string]: string };
  characters?: string[];
  introCharacter?: string;
  items?: string[];
}

export interface Character {
  id: string;
  name: string;
  portrait: string;
  hidden?: boolean;
  dialogues: {
    [key: string]: {
      text: string;
      options?: {
        text: string;
        next: string;
        action?: string;
      }[];
    };
  };
}
