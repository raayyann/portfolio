"use client";
import Button from "@/components/Button";
import Links from "@/components/Links";
import Wrapper from "@/components/Wrapper";
import { useState } from "react";

export default function Projects() {
  const opacity = useState(0);

  return (
    <Wrapper className="p-5" opacity={opacity}>
      <Button
        className="text-pallete-2 hover:opacity-75"
        href="/"
        opacity={opacity}
      >
        &lt; Back
      </Button>
      <h1 className="text-4xl font-bold text-pallete-1">Contact Me</h1>
      <p className="mt-5 text-pallete-1 text-xl font-bold">Contact</p>
      <a className="text-pallete-2" href="mailto:rayyan@rayy.my.id">
        rayyan@rayy.my.id
      </a>
      <Links className="mt-3" />
    </Wrapper>
  );
}
