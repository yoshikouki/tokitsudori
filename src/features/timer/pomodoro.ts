// 00 ~ 25 Work time
// 25 ~ 30 Break time
// 30 ~ 55 Work time
// 55 ~ 60 Break time

const isWorkTime = () => new Date().getMinutes() % 30 < 25;
const isBreakTime = () => !isWorkTime();

const detectRemainingSeconds = (now = new Date()) => {
  const seconds = 60 - now.getSeconds();
  const minutes = isWorkTime()
    ? 25 - (now.getMinutes() % 30)
    : 5 - (now.getMinutes() % 30) - 25;
  const remainingSeconds = seconds + minutes * 60;
  return remainingSeconds;
};

export const pomodoro = {
  isWorkTime,
  isBreakTime,
  detectRemainingSeconds,
};
