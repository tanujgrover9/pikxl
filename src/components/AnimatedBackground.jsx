
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";


export default function AnimatedBackground() {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <div className="absolute inset-0 -z-10">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/40 via-black/60 to-indigo-900/50"></div>

      {/* Particles */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: { transparent: true },
          fullScreen: { enable: false },
          particles: {
            number: { value: 40 },
            color: { value: ["#38bdf8", "#818cf8", "#06b6d4"] },
            shape: { type: "circle" },
            opacity: { value: 0.6 },
            size: { value: { min: 1, max: 4 } },
            move: {
              enable: true,
              speed: 1.2,
              direction: "none",
              outModes: "out",
            },
            links: {
              enable: true,
              color: "#38bdf8",
              distance: 150,
              opacity: 0.3,
              width: 1,
            },
          },
          interactivity: {
            events: {
              onHover: { enable: true, mode: "grab" },
              onClick: { enable: true, mode: "push" },
            },
            modes: {
              grab: { distance: 200, links: { opacity: 0.5 } },
              push: { quantity: 4 },
            },
          },
        }}
        className="w-full h-full"
      />
    </div>
  );
}
