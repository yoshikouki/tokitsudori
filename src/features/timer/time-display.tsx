import { dateTimeFormatter } from "@/lib/formatter";

type Props = {
  seconds: number;
};

export const TimeDisplay = ({ seconds }: Props) => {
  return (
    <div className="font-black text-9xl">
      {dateTimeFormatter.format(new Date(0, 0, 0, 0, seconds))}
    </div>
  );
};
