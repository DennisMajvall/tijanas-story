import React, { useState, useEffect } from 'react';
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

export function Room({ room, onMove, onInitiateDialog, charactersTalkedTo }: RoomProps) {  
  const characters = (room.characters || []).map(id => gameData.characters[id]);
  const canContinue = charactersTalkedTo.filter(s => s.split(':')[0] === room.id).length === characters.length;
  
  return (
    <div 
      className="relative min-h-screen w-full bg-cover bg-center transition-all duration-1000"
      style={{ backgroundImage: `url(${room.background})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-40">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-2xl mx-auto bg-black bg-opacity-75 text-white p-6 rounded-lg backdrop-blur-sm">
            <RoomHeader 
              name={room.name} 
              description={room.description} 
            />
            
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