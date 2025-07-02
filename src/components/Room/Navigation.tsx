interface NavigationProps {
  exits: { [key: string]: string };
  onMove: (direction: string) => void;
  canContinue: boolean;
  hasBackButton: boolean;
}

export function Navigation({
  exits,
  onMove,
  canContinue,
  hasBackButton = true,
}: NavigationProps) {
  return (
    <div className="flex justify-between gap-4">
      {hasBackButton && (
        <button
          onClick={() => window.history.back()}
          className="px-4 py-2 text-white transition-colors duration-200 rounded-lg opacity-50 bg-rose-800 hover:bg-rose-950"
        >
          Go back
        </button>
      )}
      {Object.keys(exits).map((direction) => (
        <button
          key={direction}
          disabled={!canContinue}
          onClick={() => canContinue && onMove(direction)}
          className="px-4 py-2 text-white transition-colors duration-200 bg-indigo-600 rounded-lg hover:bg-indigo-700 grow disabled:bg-indigo-900 disabled:cursor-not-allowed"
        >
          Go {direction}
        </button>
      ))}
    </div>
  );
}
