"use client";
import { useState } from "react";
import BackgroundParticle from "../components/BackgroundParticle";
import Wrapper from "@/components/Wrapper";
import Button from "@/components/Button";
import MessageBox from "@/components/MessageBox";
import Links from "@/components/Links";
import Donate from "@/components/Donate";

export default function Home() {
  const opacity = useState(0);

  return (
    <Wrapper className="flex" delay={500} opacity={opacity}>
      <BackgroundParticle />
      <div className="mx-auto flex h-screen items-center p-5">
        <div>
          <h3 className="text-3xl text-pallete-2">hello! my name is</h3>
          <h1 className="text-6xl font-bold text-pallete-1">Rayyan Muhammad</h1>
          <MessageBox />
          <div className="flex justify-center mt-5">
            <Button
              className="px-3 py-2 mx-1 bg-pallete-3 rounded-full text-pallete-1 hover:opacity-75"
              href="/projects"
              opacity={opacity}
            >
              projects
            </Button>
            <Button
              className="px-3 py-2 mx-2 bg-pallete-3 rounded-full text-pallete-1 hover:opacity-75"
              href="/aboutme"
              opacity={opacity}
            >
              about me
            </Button>
            <Button
              className="px-3 py-2 mx-2 bg-pallete-3 rounded-full text-pallete-1 hover:opacity-75"
              href="contact"
              opacity={opacity}
            >
              contact
            </Button>
          </div>
          <Donate />
          <Links className="justify-center mt-5" />
        </div>
      </div>
    </Wrapper>
  );
}
