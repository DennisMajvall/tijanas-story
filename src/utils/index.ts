export const roomIdWithCharacterId = (roomId: string, characterId?: string) =>
  characterId ? `${roomId}:${characterId}` : '';
