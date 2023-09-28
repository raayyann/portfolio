import Particles from "react-particles";
import { loadFull } from "tsparticles";

export default function BackgroundParticle() {
  return (
    <div className="relative -z-10">
      <Particles
        init={loadFull}
        options={{
          background: {
            color: {
              value: "#27374D",
            },
          },
          fpsLimit: 60,
          particles: {
            color: {
              value: "#DDE6ED",
            },
            move: {
              direction: "top",
              enable: true,
              random: true,
              speed: 2,
              straight: true,
            },
            number: {
              density: {
                enable: true,
                area: 1000,
              },
              value: 50,
            },
            shape: {
              type: "star",
            },
            size: {
              value: { min: 0.5, max: 2.5 },
            },
          },
        }}
        height="100vh"
        width="100vw"
      />
    </div>
  );
}
