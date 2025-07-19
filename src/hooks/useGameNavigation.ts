import { useState, useEffect, useMemo } from 'react';
import { Room, gameData } from '../data/gameData';

const basePathname = import.meta.env.BASE_URL;
console.log('🚀 -> basePathname:', basePathname);

const getRoomId = () => window.location.pathname.substring(basePathname.length);

export function useGameNavigation() {
  // Get initial room from URL or default to mainMenu
  const getInitialRoom = useMemo(() => {
    const roomId = getRoomId();
    console.log('🚀 -> getInitialRoom -> roomId:', roomId);
    return roomId && gameData.rooms[roomId]
      ? gameData.rooms[roomId]
      : gameData.rooms.mainMenu;
  }, []);

  const [currentRoom, setCurrentRoom] = useState<Room>(getInitialRoom);

  // Update URL when room changes
  useEffect(() => {
    const newPath = `${import.meta.env.BASE_URL}${currentRoom.id}`;
    console.log('🚀 -> useEffect -> newPath:', newPath);
    if (window.location.pathname !== newPath) {
      window.history.pushState({}, '', newPath);
    }
  }, [currentRoom]);

  // Handle browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      const roomId = getRoomId();
      console.log('🚀 -> handlePopState -> pathname:', roomId);
      if (roomId && gameData.rooms[roomId]) {
        setCurrentRoom(gameData.rooms[roomId]);
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateToRoom = (roomId: string) => {
    if (gameData.rooms[roomId as keyof typeof gameData.rooms]) {
      setCurrentRoom(gameData.rooms[roomId as keyof typeof gameData.rooms]);
    }
  };

  return {
    currentRoom,
    navigateToRoom,
  };
}
