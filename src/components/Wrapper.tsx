import { Dispatch, SetStateAction, useEffect, useState } from "react";

export default function Wrapper({
  className = "",
  delay = 0,
  opacity,
  children,
}: {
  className?: string;
  opacity: [number, Dispatch<SetStateAction<number>>];
  delay?: number;
  children: React.ReactNode;
}) {
  const [o, setOpacity] = opacity;

  useEffect(() => {
    setTimeout(() => {
      setOpacity(1);
    }, delay);
  }, [delay, setOpacity]);

  return (
    <div
      className={`${className} opacity-0 transition-opacity duration-1000 ease-in-out container mx-auto`}
      style={{ opacity: o }}
    >
      {children}
    </div>
  );
}
