import "./ripple-animation.css";

export const RippleAnimation = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      <div className="ripple" />
    </div>
  );
};
