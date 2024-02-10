import { useState } from "react";

import { pomodoro } from "./pomodoro";
import { useInterval } from "./use-interval";

export const useTimer = () => {
  const [remainingSeconds, setRemainingSeconds] = useState(
    pomodoro.detectRemainingSeconds()
  );
  const [elapsedSeconds, setElapsedSeconds] = useState(0);

  const [isRunning, setIsRunning] = useState(false);
  const [delay, setDelay] = useState(1000);

  const start = () => {
    setIsRunning(true);
  };

  const stop = () => {
    setIsRunning(false);
  };

  const reset = () => {
    setRemainingSeconds(0);
    setElapsedSeconds(0);
  };

  const setDelayValue = (value: number) => {
    setDelay(value);
  };

  useInterval(() => {
    setRemainingSeconds((prev) => prev - 1);
    setElapsedSeconds((prev) => prev + 1);
  }, 1000);

  return {
    remainingSeconds,
    elapsedSeconds,
    start,
    stop,
    reset,
    isRunning,
    delay,
    setDelayValue,
  };
};
