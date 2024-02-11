type Props = {
  seconds: number;
};

export const TimeDisplay = ({ seconds }: Props) => {
  const minutes = Math.floor(seconds / 60);
  const percentage = (seconds % 60) * (100 / 60);

  return (
    <div className="flex justify-center items-center h-screen">
      <svg width="0" height="0">
        <defs>
          <clipPath id="clipPath">
            <text
              x="50%"
              y="50%"
              textAnchor="middle"
              dominantBaseline="middle"
              fontSize="120"
              fontFamily="Arial"
            >
              {minutes}
            </text>
          </clipPath>
        </defs>
      </svg>
      <div
        className="text-9xl font-bold"
        style={{
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          color: "transparent",
          lineHeight: 0.69,
          paddingTop: "0em",
          paddingBottom: "0.05em",
          backgroundImage: `linear-gradient(0deg, #007bff ${percentage}%, #f8f9fa ${percentage}%)`,
        }}
      >
        {minutes}
      </div>
    </div>
  );
};
