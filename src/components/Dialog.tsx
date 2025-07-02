import React from 'react';
import { Character } from '../data/gameData';

interface DialogProps {
  character: Character;
  currentDialog: string;
  onChoice: (next: string) => void;
  onClose: () => void;
}

export function Dialog({ character, currentDialog, onChoice, onClose }: DialogProps) {
  const dialog = character.dialogues[currentDialog];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-end sm:items-center justify-center p-4">
      <div className="bg-gray-900 text-white rounded-lg max-w-2xl w-full overflow-hidden">
        <div className="flex items-start p-6">
          <img
            src={character.portrait}
            alt={character.name}
            className="w-24 h-24 rounded-full object-cover mr-6"
          />
          <div className="flex-1">
            <h3 className="text-xl font-bold mb-2">{character.name}</h3>
            <p className="text-lg mb-4 whitespace-pre-line">{dialog.text}</p>
            
            <div className="space-y-2">
              {dialog.options?.map((option, index) => (
                <button
                  key={index}
                  onClick={() => onChoice(option.next)}
                  className="block w-full text-left bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded transition-colors duration-200"
                >
                  {option.text}
                </button>
              ))}
              <button
                onClick={onClose}
                className="block w-full text-left bg-gray-600 hover:bg-gray-700 px-4 py-2 rounded transition-colors duration-200"
              >
                End conversation
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}