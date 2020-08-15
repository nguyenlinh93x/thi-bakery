import React, { useState, CSSProperties } from "react";
import { useSpring, animated } from "react-spring";
import "./styles.less";

interface Props {
  alt: string;
  src: string;
  style?: CSSProperties;
}

const calc = (x: number, y: number) => [
  -(y - window.innerHeight / 2) / 20,
  (x - window.innerWidth / 2) / 20,
  1.1,
];
const trans = (scale: number) => `scale(${scale})`;

export const ImageScale: React.FC<Props> = ({ alt, src, style }) => {
  const [props, set] = useSpring(() => ({
    x: 1,
    config: { mass: 5, tension: 350, friction: 80 },
  }));

  return (
    <div
      // onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
      // onMouseLeave={() => set({ xys: [0, 0, 1] })}
      className="overlay"
      onMouseMove={({ clientX: x, clientY: y }) => set({ x: 1.1 })}
      onMouseLeave={() => set({ x: 1 })}
      // style={{
      //   zIndex: 2,
      //   overflow: 'hidden',
      //   cursor: 'pointer'
      // }}
    >
      <animated.img
        alt={alt}
        src={src}
        style={{
          ...style,
          width: "100%",
          objectFit: "cover",
          zIndex: 1,
          willChange: "transform",
          transform: props.x.interpolate(trans),
        }}
      />
    </div>
  );
};
