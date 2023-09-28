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
      <h1 className="text-4xl font-bold text-pallete-1">Projects</h1>
      <p className="mt-2 text-pallete-2">
        i don&lsquo;t have any big projects yet but just take a look at my{" "}
        <a
          href="https://github.com/raayyann/"
          target="_blank"
          className="border-b"
        >
          github
        </a>{" "}
        :) stay tuned!
      </p>
    </Wrapper>
  );
}
