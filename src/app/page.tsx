"use client";
import { useEffect, useState } from "react";
import BackgroundParticle from "./components/BackgroundParticle";

export default function Home() {
  const [opacity, setOpacity] = useState(0);
  const [delay, setDelay] = useState(700);
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    setOpacity(1);
    setTimeout(() => {
      setDelay(0);
    }, 100);
  }, []);

  return (
    <div
      className={`flex opacity-0 transition-opacity delay-${delay} duration-1000 ease-in-out`}
      style={{ opacity }}
    >
      <BackgroundParticle />
      <div className="mx-auto flex h-screen items-center p-5">
        <div>
          <h3 className="text-3xl text-pallete-2">hello! my name is</h3>
          <h1 className="text-6xl font-bold text-pallete-1">rayyan muhammad</h1>
          <div className="flex justify-center">
            <button
              className="px-3 py-2 mx-1 bg-pallete-3 rounded-full text-pallete-1 mt-5 hover:opacity-75"
              disabled={disabled}
              onClick={() => {
                setDisabled(true);
                setOpacity(0);
              }}
            >
              projects
            </button>
            <button
              className="px-3 py-2 mx-2 bg-pallete-3 rounded-full text-pallete-1 mt-5 hover:opacity-75"
              disabled={disabled}
            >
              about me
            </button>
            <button
              className="px-3 py-2 mx-2 bg-pallete-3 rounded-full text-pallete-1 mt-5 hover:opacity-75"
              disabled={disabled}
            >
              contact
            </button>
          </div>
        </div>
      </div>
      {/* <div className="mx-auto flex h-screen w-screen p-5 bg-pallete-4">
        <h1 className="text-3xl font-bold text-pallete-1">Projects</h1>
      </div> */}
    </div>
  );
}
