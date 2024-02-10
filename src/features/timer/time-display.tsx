type Props = {
  seconds: number;
};

export const TimeDisplay = ({ seconds }: Props) => {
  const minutes = Math.floor(seconds / 60);
  const displaySeconds = (seconds % 60).toString().padStart(2, "0");
  return (
    <div className="tabular-nums font-black text-9xl">
      {minutes}:{displaySeconds}
    </div>
  );
};
