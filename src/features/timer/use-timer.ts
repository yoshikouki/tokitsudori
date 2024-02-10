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
  const [isWorkTime, setIsWorkTime] = useState(pomodoro.isWorkTime());
  const [isBreakTime, setIsBreakTime] = useState(pomodoro.isBreakTime());

  useInterval(() => {
    setRemainingSeconds(pomodoro.detectRemainingSeconds());
    setIsWorkTime(pomodoro.isWorkTime());
    setIsBreakTime(pomodoro.isBreakTime());
  }, delay);

  return {
    remainingSeconds,
    delay,
    isWorkTime,
    isBreakTime,
  };
};
