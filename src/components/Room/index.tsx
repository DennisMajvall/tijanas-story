import { Room as RoomType } from '../../data/gameData';
import { gameData } from '../../data/gameData';
import { RoomHeader } from './RoomHeader';
import { CharacterActions } from './CharacterActions';
import { Navigation } from './Navigation';

interface RoomProps {
  room: RoomType;
  onMove: (direction: string) => void;
  onInitiateDialog: (characterId: string) => void;
  charactersTalkedTo: string[];
}

export function Room({
  room,
  onMove,
  onInitiateDialog,
  charactersTalkedTo,
}: RoomProps) {
  const characters = (room.characters || []).map(
    (id) => gameData.characters[id]
  );
  const canContinue =
    charactersTalkedTo.filter((s) => s.split(':')[0] === room.id).length ===
    characters.length;

  const [backgroundKey, backgroundValue] = getBackgroundImage(room.background);

  return (
    <div
      className="relative w-full min-h-screen transition-all duration-1000 bg-center bg-no-repeat bg-cover animate-fadeIn"
      style={{
        [backgroundKey]: backgroundValue,
        opacity: 0,
        animation: 'fadeIn ease 3s forwards',
      }}
    >
      <div className="absolute inset-0 flex bg-black bg-opacity-40">
        <div className="container px-4 py-8 mx-auto mt-auto">
          <div className="max-w-2xl p-6 mx-auto text-white bg-black rounded-lg bg-opacity-65 backdrop-blur-sm">
            <RoomHeader name={room.name} description={room.description} />

            <div className="space-y-8">
              <CharacterActions
                characters={characters}
                onInitiateDialog={onInitiateDialog}
              />

              <Navigation
                exits={room.exits}
                onMove={onMove}
                canContinue={canContinue}
                hasBackButton={room.id !== 'mainMenu'}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const getBackgroundImage = (roomBackground: string) => {
  if (roomBackground.startsWith('#')) {
    return ['background-color', roomBackground];
  } else if (
    roomBackground.startsWith('http') ||
    roomBackground.startsWith('/')
  ) {
    return ['background-image', `url(${roomBackground})`];
  }
  return '';
};
