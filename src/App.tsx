import React, { useState } from 'react';
import { Room } from './components/Room';
import { Dialog } from './components/Dialog';
import { gameData } from './data/gameData';

function App() {
  const [currentRoom, setCurrentRoom] = useState(gameData.rooms.mainMenu);
  const [activeCharacter, setActiveCharacter] = useState<string | null>(
    'narrator'
  );
  const [currentDialog, setCurrentDialog] = useState<string>('greeting');

  const handleMove = (direction: string) => {
    const nextRoomId = currentRoom.exits[direction];
    if (
      nextRoomId &&
      gameData.rooms[nextRoomId as keyof typeof gameData.rooms]
    ) {
      setCurrentRoom(gameData.rooms[nextRoomId as keyof typeof gameData.rooms]);
      setActiveCharacter(null);
    }
  };

  const handleInteract = (characterId: string) => {
    setActiveCharacter(characterId);
    setCurrentDialog('greeting');
  };

  const handleDialogChoice = (next: string) => {
    setCurrentDialog(next);
  };

  const handleCloseDialog = () => {
    setActiveCharacter(null);
  };

  return (
    <div className="min-h-screen">
      <Room
        room={currentRoom}
        onMove={handleMove}
        onInteract={handleInteract}
      />

      {activeCharacter && (
        <Dialog
          character={
            gameData.characters[
              activeCharacter as keyof typeof gameData.characters
            ]
          }
          currentDialog={currentDialog}
          onChoice={handleDialogChoice}
          onClose={handleCloseDialog}
        />
      )}
    </div>
  );
}

export default App;
