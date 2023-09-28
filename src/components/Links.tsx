import {
  FaDiscord,
  FaGithub,
  FaInstagram,
  FaSpotify,
  FaXTwitter,
} from "react-icons/fa6";
import LinkButton from "./LinkButton";

export default function Links({ className }: { className?: string }) {
  return (
    <div className={`flex ${className}`}>
      <LinkButton
        className="bg-pink-500"
        href="https://www.instagram.com/mengrayyy/"
        icon={<FaInstagram />}
      />
      <LinkButton
        className="bg-neutral-900"
        href="https://twitter.com/ryrysigitaris"
        icon={<FaXTwitter />}
      />
      <LinkButton
        className="bg-blue-500"
        href="https://discord.com/users/385949371331641353"
        icon={<FaDiscord />}
      />
      <LinkButton
        className="bg-neutral-900"
        href="https://github.com/raayyann/"
        icon={<FaGithub />}
      />
      <LinkButton
        className="bg-green-500"
        href="https://open.spotify.com/user/31grupln6turgpvuodsxxo6hmbba"
        icon={<FaSpotify />}
      />
      <LinkButton
        className="bg-green-500 w-auto px-3"
        href="https://open.spotify.com/artist/6zyZW3ipwnRo0fW2tDn9d0"
        icon={
          <>
            <FaSpotify />{" "}
            <span className="ml-1 font-semibold font-sans">Artist</span>
          </>
        }
      ></LinkButton>
    </div>
  );
}
