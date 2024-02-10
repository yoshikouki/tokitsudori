// 00 ~ 25 Work time
// 25 ~ 30 Break time
// 30 ~ 55 Work time
// 55 ~ 60 Break time

const isWorkTime = (datetime = new Date()) => datetime.getMinutes() % 30 < 25;
const isBreakTime = (datetime = new Date()) => !isWorkTime(datetime);

const detectRemainingSeconds = (datetime = new Date()) => {
  const seconds = 60 - datetime.getSeconds();
  const minutes = isWorkTime(datetime)
    ? 24 - (datetime.getMinutes() % 30)
    : 4 - (datetime.getMinutes() % 5);
  const remainingSeconds = seconds + minutes * 60;
  return remainingSeconds;
};

export const pomodoro = {
  isWorkTime,
  isBreakTime,
  detectRemainingSeconds,
};
