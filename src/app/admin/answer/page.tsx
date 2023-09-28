"use client";
import BackgroundParticle from "../../../components/BackgroundParticle";
import { useSearchParams } from "next/navigation";

export default function Answer() {
  const searchParams = useSearchParams();
  const message = searchParams.get("message") || "";

  return (
    <div>
      <BackgroundParticle />
      <div className="mx-auto flex h-screen justify-center items-center p-5">
        <div className="shadow-lg p-5 rounded-xl bg-pallete-1 text-pallete-4 mt-5">
          <p className="text-xl ff-mono text-center font-bold">
            send me an anonymous message :3
          </p>
          <input
            type="text"
            className="w-full ff-mono bg-slate-100 border border-pallete-2 p-2 py-3 rounded-md mt-3 outline-none"
            autoComplete="off"
            placeholder="write here"
            required
            disabled
            value={message}
          />
        </div>
      </div>
    </div>
  );
}
