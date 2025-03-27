import React from 'react';
import { Room as RoomType } from '../data/gameData';

interface RoomProps {
  room: RoomType;
  onMove: (direction: string) => void;
  onInteract: (characterId: string) => void;
}

export function Room({ room, onMove, onInteract }: RoomProps) {
  return (
    <div 
      className="relative min-h-screen w-full bg-cover bg-center transition-all duration-1000"
      style={{ backgroundImage: `url(${room.background})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-40">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-2xl mx-auto bg-black bg-opacity-75 text-white p-6 rounded-lg backdrop-blur-sm">
            <h1 className="text-3xl font-bold mb-4">{room.name}</h1>
            <p className="text-lg mb-6">{room.description}</p>
            
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                {Object.entries(room.exits).map(([direction, _]) => (
                  <button
                    key={direction}
                    onClick={() => onMove(direction)}
                    className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg transition-colors duration-200"
                  >
                    Go {direction}
                  </button>
                ))}
              </div>
              
              {room.characters && (
                <div className="mt-6">
                  <h2 className="text-xl font-semibold mb-3">Characters present:</h2>
                  <div className="grid grid-cols-2 gap-4">
                    {room.characters.map((characterId) => (
                      <button
                        key={characterId}
                        onClick={() => onInteract(characterId)}
                        className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg transition-colors duration-200"
                      >
                        Talk to {characterId}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}