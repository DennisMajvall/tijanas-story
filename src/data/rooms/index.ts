import { Room } from '../types';
import { mainMenu } from './mainMenu';
import { sep12Sweden } from './sep12Sweden';
import { cornStarch } from './cornStarch';
import { npcOnCloseDoor } from './npcOnCloseDoor';
import { abdallahFloor } from './abdallahFloor';
import { rollerSkateDisco } from './rollerSkateDisco';
import { meetFamily } from './meetFamily';
import { motherVisiting } from './motherVisiting';
import { headphonesBalcony } from './headphonesBalcony';
import { madeInAbyssAnime } from './madeInAbyssAnime';
import { crossfitNov1 } from './crossfitNov1';
import { arduino } from './arduino';
import { alexDarkroom } from './alexDarkroom';
import { migrationsverket } from './migrationsverket';
import { stpln } from './stpln';
import { applePicking } from './applePicking';
import { bronMartinSaga } from './bronMartinSaga';
import { manyFontsHome } from './manyFontsHome';
import { rapa } from './rapa';
import { bikingBelgrade1hr } from './bikingBelgrade1hr';
import { valentineCryGiftTradition } from './valentineCryGiftTradition';
import { looksFakePhotoshop } from './looksFakePhotoshop';
import { pinkWigEtc } from './pinkWigEtc';

export const rooms: Record<string, Room> = {
  mainMenu,
  sep12Sweden,
  cornStarch,
  npcOnCloseDoor,
  abdallahFloor,
  rollerSkateDisco,
  meetFamily,
  motherVisiting,
  headphonesBalcony,
  madeInAbyssAnime,
  crossfitNov1,
  arduino,
  alexDarkroom,
  migrationsverket,
  stpln,
  applePicking,
  bronMartinSaga,
  manyFontsHome,
  rapa,
  bikingBelgrade1hr,
  valentineCryGiftTradition,
  looksFakePhotoshop,
  pinkWigEtc
} as const;