
type Props = {
    seconds: number;
};

export const TimeDisplay = ({seconds}: Props) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = (seconds % 60).toString().padStart(2, '0');
    return (
        <div className="font-black text-9xl">
            {minutes}
            <span className="mx-1 font-semibold">:</span>
            {remainingSeconds}
        </div>
    );
};