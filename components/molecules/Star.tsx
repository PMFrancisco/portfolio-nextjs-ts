import React from "react";

interface StarProps {
  style: React.CSSProperties;
}

const getRandomAnimationDuration = () => {
  return `${2 + Math.random()}s`;
};

export const Star: React.FC<StarProps> = ({ style }) => {
  const animationDuration = getRandomAnimationDuration();

  return (
    <div className="absolute" style={{ left: style.left, top: style.top }}>
      <div className="relative">
        <div
          className="w-2 h-2 bg-[#CCCCCC]"
          style={{ ...style, zIndex: 1 }}
        ></div>
        <div
          className="w-6 h-6 bg-[#FFFFFF80]  absolute"
          style={{
            zIndex: 0,
            animation: `twinkle ${animationDuration} infinite`,
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        ></div>
      </div>
    </div>
  );
};
