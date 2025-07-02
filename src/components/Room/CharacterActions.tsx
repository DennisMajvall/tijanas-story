import React from 'react';
import { Character } from '../../data/gameData';

interface CharacterActionsProps {
  characters: Character[];
  onInitiateDialog: (characterId: string) => void;
}

export function CharacterActions({ characters, onInitiateDialog }: CharacterActionsProps) {
  if (!characters.length) return null;

  return (
    <div>
      <h2 className="text-xl font-semibold mb-3">Actions:</h2>
      <div className="grid grid-cols-2 gap-4">
        {characters.map((character) => (
          <button
            key={character.id}
            onClick={() => {
              onInitiateDialog(character.id);
            }}
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg transition-colors duration-200"
          >
            Talk to {character.name}
          </button>
        ))}
      </div>
    </div>
  );
}