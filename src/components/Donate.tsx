import { useEffect, useState } from "react";

export default function Donate() {
  const [open, setOpen] = useState(false);

  const handleMessage = (e: MessageEvent) => {
    if (e.data.type == "embed.modalClosed") setOpen(false);
  };

  useEffect(() => {
    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  });

  return (
    <>
      <button
        className="block mx-auto mt-2 px-3 py-2 bg-pallete-3 rounded-full text-pallete-1 hover:opacity-75"
        onClick={() => {
          setOpen(true);
        }}
      >
        💸 buy me a candy 🍬
      </button>
      {open && (
        <div className="block fixed top-0 left-0 w-full h-full z-40">
          <iframe
            src="https://trakteer.id/raayyan/tip/embed/modal"
            className="w-full h-full border-none"
          ></iframe>
        </div>
      )}
    </>
  );
}
