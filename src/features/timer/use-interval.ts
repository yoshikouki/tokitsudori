import { useEffect, useRef } from "react";

export const useInterval = (callback: () => void, delay: number) => {
  const callbackRef = useRef<() => void>();

  callbackRef.current = callback;

  useEffect(() => {
    if (!delay) return;

    const tick = () => {
      if (!callbackRef.current) return;

      callbackRef.current();
    };

    const interval = setInterval(tick, delay);
    return () => clearInterval(interval);
  }, [delay]);
};
