import { useRouter } from "next/navigation";
import { Dispatch, SetStateAction, useState } from "react";

export default function Button({
  className,
  href,
  opacity,
  children,
}: {
  className: string;
  href: string;
  opacity: [number, Dispatch<SetStateAction<number>>];
  children: React.ReactNode;
}) {
  const [disabled, setDisabled] = useState(false);
  const [o, setOpacity] = opacity;

  const router = useRouter();

  const clickHandle = () => {
    setDisabled(true);
    setOpacity(0);
    setTimeout(() => {
      router.push(href);
    }, 1000);
  };

  return (
    <button className={className} disabled={disabled} onClick={clickHandle}>
      {children}
    </button>
  );
}
