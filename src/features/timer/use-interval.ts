import { useEffect, useRef } from "react";

export const useInterval = (callback: () => void, delay: number) => {
  const callbackRef = useRef<() => void>();
  callbackRef.current = callback;

  useEffect(() => {
    const tick = () => callbackRef.current && callbackRef.current();
    const interval = setInterval(tick, delay);

    return () => clearInterval(interval);
  }, [delay]);
};
