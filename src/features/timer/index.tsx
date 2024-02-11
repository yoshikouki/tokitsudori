import { RippleAnimation } from "./ripple-animation";
import { TimeDisplay } from "./time-display";
import { useTimer } from "./use-timer";

function Timer() {
  const { remainingSeconds, isWorkTime, isBreakTime } = useTimer();
  return (
    <>
      <div className="text-5xl">
        {isWorkTime && "🚀"}
        {isBreakTime && "🍵"}
      </div>
      <TimeDisplay seconds={remainingSeconds} />
      <RippleAnimation />
    </>
  );
}

export default Timer;
