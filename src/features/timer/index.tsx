import { TimeDisplay } from "./time-display";
import { useTimer } from "./use-timer";

function Timer() {
  const { remainingSeconds } = useTimer();
  return (
    <>
      <TimeDisplay seconds={remainingSeconds} />
    </>
  );
}

export default Timer;
