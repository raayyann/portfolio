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
  const [d, setDelay] = useState(delay);

  useEffect(() => {
    setOpacity(1);
    console.log(d);
    setTimeout(() => {
      setDelay(0);
    }, d);
  }, []);

  return (
    <div
      className={`${className} opacity-0 transition-opacity delay-${d} duration-1000 ease-in-out`}
      style={{ opacity: o }}
    >
      {children}
    </div>
  );
}
