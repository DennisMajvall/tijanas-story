interface RoomHeaderProps {
  name: string;
  description: string;
}

export function RoomHeader({ name, description }: RoomHeaderProps) {
  return (
    <div>
      <h1 className="mb-4 text-3xl font-bold">{name}</h1>
      <p className="mb-6 text-lg">{description}</p>
    </div>
  );
}
