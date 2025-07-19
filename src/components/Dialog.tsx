import { Character } from '../data/gameData';
import { useCountdownTrigger } from '../hooks/useCountdownTrigger';

interface DialogProps {
  character: Character;
  currentDialog: string;
  onChoice: (next: string) => void;
  onClose: () => void;
}

export function Dialog({
  character,
  currentDialog,
  onChoice,
  onClose,
}: DialogProps) {
  const dialog = character.dialogues[currentDialog];

  const { count, trigger } = useCountdownTrigger({
    onCountdownEnd: () => {
      character.dialogues['creativeNotAllowed'] =
        character.dialogues['you_are_done'];
    },
  });

  const onChoiceWrapper = (next: string) => {
    if (next === 'part2') {
      trigger();
    }
    onChoice(next);
  };

  return (
    <div className="fixed inset-0 flex items-end justify-center p-4 bg-black bg-opacity-65 sm:items-center">
      <div className="w-full max-w-2xl overflow-hidden text-white bg-gray-900 rounded-lg">
        <div className="flex items-start p-6">
          <img
            src={character.portrait}
            alt={character.name}
            className="object-cover w-24 h-24 mr-6 rounded-full"
          />
          <div className="flex-1">
            <h3 className="mb-2 text-xl font-bold">{character.name}</h3>
            <p className="mb-4 text-lg whitespace-pre-line">{dialog.text}</p>

            <div className="space-y-2">
              {dialog.options?.map((option, index) => (
                <button
                  key={index}
                  disabled={count <= 0 && option.next === 'manualLabor'}
                  onClick={() => onChoiceWrapper(option.next)}
                  className="block w-full px-4 py-2 text-left whitespace-pre-line transition-colors duration-200 bg-indigo-600 rounded hover:bg-indigo-700 disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  {option.text}
                </button>
              ))}
              <button
                onClick={onClose}
                disabled={character.hidden}
                className="block w-full px-4 py-2 text-left transition-colors duration-200 bg-gray-700 rounded hover:bg-gray-800"
              >
                End conversation abruptly
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
