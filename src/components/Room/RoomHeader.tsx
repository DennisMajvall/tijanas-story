import React from 'react';

interface RoomHeaderProps {
  name: string;
  description: string;
}

export function RoomHeader({ name, description }: RoomHeaderProps) {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">{name}</h1>
      <p className="text-lg mb-6">{description}</p>
    </div>
  );
}