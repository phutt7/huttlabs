import Image from "next/image";

const projects = [
  {
    title: "Smart False Window",
    image: "/images/project1.jpg",
    description:
      "Microcontroller-based PWM lighting system simulating natural daylight.",
  },
  {
    title: "Smart Light Alarm System",
    image: "/images/project2.jpg",
    description:
      "Embedded scheduling-based lighting with structured firmware logic.",
  },
  {
    title: "5×5 LED Matrix Audio-Reactive Display",
    image: "/images/project3.jpg",
    description:
      "Real-time audio-driven LED visualization system.",
  },
];

export default function Projects() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-20 text-white">
      <h1 className="text-4xl font-bold text-center mb-16">
        Projects
      </h1>

      <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">

        <div className="bg-slate-800 rounded-xl p-6 transition hover:-translate-y-2 hover:shadow-2xl">
          <h2 className="text-xl font-semibold mb-3">
            Smart False Window
          </h2>
          <p className="text-slate-300">
            Microcontroller-based PWM lighting system simulating natural daylight.
          </p>
        </div>

        <div className="bg-slate-800 rounded-xl p-6 transition hover:-translate-y-2 hover:shadow-2xl">
          <h2 className="text-xl font-semibold mb-3">
            Smart Light Alarm System
          </h2>
          <p className="text-slate-300">
            Embedded scheduling-based lighting with structured firmware logic.
          </p>
        </div>

        <div className="bg-slate-800 rounded-xl p-6 transition hover:-translate-y-2 hover:shadow-2xl">
          <h2 className="text-xl font-semibold mb-3">
            5×5 LED Matrix Audio-Reactive Display
          </h2>
          <p className="text-slate-300">
            Real-time audio-driven LED visualization system.
          </p>
        </div>

      </div>
    </main>
  );
}