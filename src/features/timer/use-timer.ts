import { useState } from "react";

import { pomodoro } from "./pomodoro";
import { useInterval } from "./use-interval";

type Props = {
  delay?: number;
};

export const useTimer = (props?: Props) => {
  const delay = props?.delay || 1000;

  const [remainingSeconds, setRemainingSeconds] = useState(
    pomodoro.detectRemainingSeconds()
  );

  useInterval(() => {
    setRemainingSeconds(pomodoro.detectRemainingSeconds());
  }, delay);

  return {
    remainingSeconds,
    stop,
    delay,
  };
};
