import { Room as RoomType } from '../../data/gameData';
import { gameData } from '../../data/gameData';
import { RoomHeader } from './RoomHeader';
import { CharacterActions } from './CharacterActions';
import { Navigation } from './Navigation';
import { notIncludedScenes } from './notIncludedScenes';

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
      className="relative w-full min-h-screen transition-all duration-1000 bg-black bg-center bg-no-repeat bg-cover"
      style={{
        [backgroundKey]: backgroundValue,
        opacity: 0,
        animation: 'fadeIn ease 3s forwards',
      }}
    >
      <div className="absolute inset-0 flex ">
        <div
          className={
            'container px-4 py-8 mx-auto mt-auto' +
            (room.id === 'theEnd' ? ' mb-auto' : '')
          }
        >
          <div
            className="max-w-2xl p-6 mx-auto text-white bg-black rounded-lg bg-opacity-65 backdrop-blur-sm"
            style={{
              opacity: room.id === 'theEnd' ? 0 : 1,
              animation:
                room.id === 'theEnd' ? 'fadeIn ease 3s 3s forwards' : 'none',
            }}
          >
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
                hasBackButton={!['mainMenu', 'theEnd'].includes(room.id)}
              />
            </div>

            {room.id === 'theEnd' && (
              <>
                <div
                  className="mt-20 text-gray-500 whitespace-pre-line cursor-pointer hover:text-emerald-600"
                  onClick={(e) => {
                    e.currentTarget.textContent = notIncludedScenes;
                    e.currentTarget.className = 'mt-20 whitespace-pre-line';
                  }}
                  style={{
                    opacity: 0,
                    animation: 'fadeIn ease 3s 8s forwards',
                  }}
                >
                  See the ones that didn't make the cut
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

const getBackgroundImage = (roomBackground: string) => {
  if (roomBackground.startsWith('#')) {
    return ['backgroundColor', roomBackground];
  } else if (roomBackground.startsWith('/')) {
    return [
      'backgroundImage',
      `url(${import.meta.env.BASE_URL}${roomBackground})`,
    ];
  } else if (roomBackground.startsWith('http')) {
    return ['backgroundImage', `url(${roomBackground})`];
  }
  return '';
};
