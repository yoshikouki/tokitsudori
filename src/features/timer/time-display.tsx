type Props = {
  seconds: number;
  size?: number;
  strokeWidth?: number;
  fontSize?: number;
};

export const TimeDisplay = ({
  seconds,
  size = 200,
  strokeWidth = 16,
  fontSize = 60,
}: Props) => {
  const minutes = Math.floor(seconds / 60);
  const radius = size / 2 - strokeWidth / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset =
    circumference - ((seconds % 60) / 60) * circumference;

  return (
    <div className="flex justify-center items-center h-screen">
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        <circle
          transform={`rotate(-86 ${size / 2} ${size / 2})`}
          className="stroke-foreground fill-none"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
        />
        <text
          className="fill-primary"
          x={size / 2}
          y={size / 2}
          fontSize={fontSize}
          textAnchor="middle"
          dominantBaseline="central"
        >
          {minutes}
        </text>
      </svg>
    </div>
  );
};
