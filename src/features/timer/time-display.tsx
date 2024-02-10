type Props = {
  seconds: number;
};

export const TimeDisplay = ({ seconds }: Props) => {
  const minutes = Math.floor(seconds / 60);
  const displaySeconds = (seconds % 60).toString().padStart(2, "0");
  return (
    <div className="flex justify-center items-baseline tabular-nums font-black">
      <div className="text-9xl">{minutes}</div>
      <div className="text-5xl text-muted">{displaySeconds}</div>
    </div>
  );
};
