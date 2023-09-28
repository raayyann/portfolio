"use client";
import { useState } from "react";
import BackgroundParticle from "../components/BackgroundParticle";
import Wrapper from "@/components/Wrapper";
import Button from "@/components/Button";

export default function Home() {
  const opacity = useState(0);

  return (
    <Wrapper className="flex" delay={1000} opacity={opacity}>
      <BackgroundParticle />
      <div className="mx-auto flex h-screen items-center">
        <div>
          <h3 className="text-3xl text-pallete-2">hello! my name is</h3>
          <h1 className="text-6xl font-bold text-pallete-1">Rayyan Muhammad</h1>
          <div className="shadow-lg p-5 rounded-xl bg-pallete-1 text-pallete-4 mt-5">
            <p className="text-xl ff-mono text-center font-bold">
              send me an anonymous message :3
            </p>
            <input
              type="text"
              name="message"
              className="w-full ff-mono bg-slate-100 border border-pallete-2 p-2 py-3 rounded-md mt-3 outline-none"
              autoComplete="off"
              placeholder="write here"
              required
            />
            <button
              type="button"
              className="bg-pallete-4 ff-mono p-1 w-full rounded-md text-pallete-1 shadow-md mt-3 hover:opacity-90"
            >
              submit
            </button>
          </div>
          <div className="flex justify-center">
            <Button
              className="px-3 py-2 mx-1 bg-pallete-3 rounded-full text-pallete-1 mt-5 hover:opacity-75"
              href="/projects"
              opacity={opacity}
            >
              projects
            </Button>
            <Button
              className="px-3 py-2 mx-2 bg-pallete-3 rounded-full text-pallete-1 mt-5 hover:opacity-75"
              href="/aboutme"
              opacity={opacity}
            >
              about me
            </Button>
            <Button
              className="px-3 py-2 mx-2 bg-pallete-3 rounded-full text-pallete-1 mt-5 hover:opacity-75"
              href="contact"
              opacity={opacity}
            >
              contact
            </Button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
