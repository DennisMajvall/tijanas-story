import { useState, useEffect } from 'react';
import { Room, gameData } from '../data/gameData';

const pathnamePrefix = import.meta.env.BASE_URL.length;

export function useGameNavigation() {
  // Get initial room from URL or default to mainMenu
  const getInitialRoom = () => {
    const pathname = window.location.pathname.substring(pathnamePrefix); // Remove leading slash
    return pathname && gameData.rooms[pathname]
      ? gameData.rooms[pathname]
      : gameData.rooms.mainMenu;
  };

  const [currentRoom, setCurrentRoom] = useState<Room>(getInitialRoom());

  // Update URL when room changes
  useEffect(() => {
    const newPath = `${import.meta.env.BASE_URL}${currentRoom.id}`;
    if (window.location.pathname !== newPath) {
      window.history.pushState({}, '', newPath);
    }
  }, [currentRoom]);

  // Handle browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      const pathname = window.location.pathname.substring(pathnamePrefix);
      if (pathname && gameData.rooms[pathname]) {
        setCurrentRoom(gameData.rooms[pathname]);
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
