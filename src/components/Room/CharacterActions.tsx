import { Character } from '../../data/gameData';

interface CharacterActionsProps {
  characters: Character[];
  onInitiateDialog: (characterId: string) => void;
}

export function CharacterActions({
  characters,
  onInitiateDialog,
}: CharacterActionsProps) {
  if (!characters.length) return null;

  return (
    <div>
      {/* <h2 className="mb-3 text-xl font-semibold">Actions:</h2> */}
      <div className="grid grid-cols-2 gap-4">
        {characters.map((character) =>
          character.hidden ? null : (
            <button
              key={character.id}
              onClick={() => {
                onInitiateDialog(character.id);
              }}
              className="px-4 py-2 text-white transition-colors duration-200 rounded-lg bg-emerald-600 hover:bg-emerald-700"
            >
              {character.id === 'dennisBumbleProfile'
                ? 'View Bumble Profile'
                : 'Listen to ' + character.name}
            </button>
          )
        )}
      </div>
    </div>
  );
}
