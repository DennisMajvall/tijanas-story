import { useState, useCallback } from 'react';

type UseCountdownTriggerOptions = {
  onCountdownEnd: () => void;
};

export function useCountdownTrigger({
  onCountdownEnd,
}: UseCountdownTriggerOptions) {
  const [count, setCount] = useState(5);

  const trigger = useCallback(() => {
    setCount((prev) => {
      if (prev > 1) {
        return prev - 1;
      } else {
        onCountdownEnd();
        return 0;
      }
    });
  }, [onCountdownEnd]);

  return { count, trigger };
}
