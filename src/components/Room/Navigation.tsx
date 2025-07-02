import React from 'react';

interface NavigationProps {
  exits: { [key: string]: string };
  onMove: (direction: string) => void;
  canContinue: boolean;
  hasBackButton: boolean;
}

export function Navigation({ exits, onMove, canContinue, hasBackButton = true }: NavigationProps) {
  return (
    <div className="flex gap-4 justify-between">
      {hasBackButton && 
      <button
        onClick={() => window.history.back()}
        className="opacity-50 bg-rose-800 hover:bg-rose-950 text-white px-4 py-2 rounded-lg transition-colors duration-200"
      >
        Go back
      </button>
      }
      {Object.entries(exits).map(([direction, _]) => (
        <button
          key={direction}
          disabled={!canContinue}
          onClick={() => canContinue && onMove(direction)}
          className="bg-indigo-600 hover:bg-indigo-700 grow text-white px-4 py-2 rounded-lg transition-colors duration-200 disabled:bg-indigo-900 disabled:cursor-not-allowed"
        >
          Go {direction}
        </button>
      ))}
    </div>
  );
}