"use client";
import Button from "@/components/Button";
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
      <h1 className="text-4xl font-bold text-pallete-1">About Me</h1>
      <p className="mt-2 text-pallete-2">malas nulis :l liat nanti</p>
    </Wrapper>
  );
}
