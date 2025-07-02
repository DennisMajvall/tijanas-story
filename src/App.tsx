import React, { useState, useEffect, useReducer } from 'react';
import { Room } from './components/Room';
import { Dialog } from './components/Dialog';
import { gameData } from './data/gameData';
import { useGameNavigation } from './hooks/useGameNavigation';
import { roomIdWithCharacterId } from './utils';

function App() {
  const { currentRoom, navigateToRoom } = useGameNavigation();
  const [activeCharacter, setActiveCharacter] = useState<string | null>(null);
  const [currentDialog, setCurrentDialog] = useState<string>('');
  const [charactersTalkedTo, setCharactersTalkedTo] = useReducer(
    (state: string[], action: string) => [...new Set([...state, roomIdWithCharacterId(currentRoom.id, action)])],
    []
  );

  // Show initial greeting dialog when entering a room with characters
  useEffect(() => {
    const characters = currentRoom.characters || [];
    if (!characters.length) return;

    const introCharacter = currentRoom.introCharacter;
    const character = gameData.characters[introCharacter];
    const alreadyTalkedToIntroCharacter = charactersTalkedTo.includes(roomIdWithCharacterId(currentRoom.id, introCharacter));
    if (character?.dialogues.greeting && !alreadyTalkedToIntroCharacter) {
      initiateDialog(introCharacter);
    }
  }, [currentRoom.id]);

  const handleMove = (direction: string) => {
    const nextRoomId = currentRoom.exits[direction];
    if (!nextRoomId) return;

    setCurrentDialog('');
    setActiveCharacter(null);
    navigateToRoom(nextRoomId);
  };

  const initiateDialog = (characterId: string) => {
    setCurrentDialog('greeting');
    setActiveCharacter(characterId);
    setCharactersTalkedTo(characterId);
  };

  const handleDialogChoice = (next: string) => {
    const [action, ...rest] = next.split(':');
    if (action === 'goToRoom') 
      handleMove(rest.join(':'));
    else
      setCurrentDialog(next);
  };

  const handleCloseDialog = () => setActiveCharacter(null);

  return (
    <div className="min-h-screen">
      <p>{JSON.stringify(charactersTalkedTo)}</p>
      
      <Room
        room={currentRoom}
        onMove={handleMove}
        onInitiateDialog={initiateDialog}
        charactersTalkedTo={charactersTalkedTo}
        key={currentRoom.id}
      />
      
      {activeCharacter && (
        <Dialog
          character={gameData.characters[activeCharacter as keyof typeof gameData.characters]}
          currentDialog={currentDialog}
          onChoice={handleDialogChoice}
          onClose={handleCloseDialog}
        />
      )}
    </div>
  );
}

export default App;