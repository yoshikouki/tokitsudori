import { useState } from "react";

import { TimeDisplay } from "./time-display";
import { useInterval } from "./use-interval";

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useInterval(() => {
    setSeconds((prev) => prev + 1);
  }, 1000);

  return (
    <>
      <TimeDisplay seconds={seconds} />
    </>
  );
}

export default Timer;
