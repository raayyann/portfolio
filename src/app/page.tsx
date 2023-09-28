"use client";
import { useState } from "react";
import BackgroundParticle from "../components/BackgroundParticle";
import Wrapper from "@/components/Wrapper";
import Button from "@/components/Button";
import LinkButton from "@/components/LinkButton";
import {
  FaDiscord,
  FaGithub,
  FaInstagram,
  FaSpotify,
  FaXTwitter,
} from "react-icons/fa6";

export default function Home() {
  const opacity = useState(0);

  return (
    <Wrapper className="flex" delay={1000} opacity={opacity}>
      <BackgroundParticle />
      <div className="mx-auto flex h-screen items-center p-5">
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
              className="bg-pallete-4 ff-mono p-1 w-full rounded-md text-pallete-1 shadow-md mt-3 hover:opacity-75"
            >
              submit
            </button>
          </div>
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
          <div className="flex justify-center mt-4">
            <LinkButton
              className="bg-pink-500"
              href="https://www.instagram.com/mengrayyy/"
              children={<FaInstagram />}
            />
            <LinkButton
              className="bg-neutral-900"
              href="https://twitter.com/ryrysigitaris"
              children={<FaXTwitter />}
            />
            <LinkButton
              className="bg-blue-500"
              href="https://discord.com/users/385949371331641353"
              children={<FaDiscord />}
            />
            <LinkButton
              className="bg-neutral-900"
              href="https://github.com/raayyann/"
              children={<FaGithub />}
            />
            <LinkButton
              className="bg-green-500"
              href="https://open.spotify.com/user/31grupln6turgpvuodsxxo6hmbba"
              children={<FaSpotify />}
            />
            <LinkButton
              className="bg-green-500 w-auto px-3"
              href="https://open.spotify.com/artist/6zyZW3ipwnRo0fW2tDn9d0"
            >
              <FaSpotify />{" "}
              <span className="ml-1 font-semibold font-sans">Artist</span>
            </LinkButton>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
