import Image from "next/image";

export default function Home() {
  return (
    <main className="max-w-5xl mx-auto px-6">

      {/* HERO */}
      <section id="hero" className="pt-24 text-center">
        <Image
          src="/images/profile.jpg"
          alt="Palmer Hutt"
          width={140}
          height={140}
          className="mx-auto rounded-full mb-8"
        />

        <h1 className="text-4xl font-bold mb-6">
          Palmer Hutt
        </h1>

        <p className="text-lg max-w-2xl mx-auto leading-relaxed text-slate-300">
          Embedded & Systems Engineer delivering customer-facing technical
          solutions from concept to deployment.
        </p>

        {/* LINKS */}
        <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm font-medium">
          <a href="/resume.pdf" className="underline hover:opacity-70">
            Resume
          </a>
          <a href="mailto:p.hutt96@gmail.com" className="underline hover:opacity-70">
            Email
          </a>
          <a
            href="https://www.linkedin.com/in/palmerhutt"
            target="_blank"
            className="underline hover:opacity-70"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/phutt7"
            target="_blank"
            className="underline hover:opacity-70"
          >
            GitHub
          </a>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="pt-24">
        <h2 className="text-3xl font-bold text-center mb-12">
          Projects
        </h2>

        <div className="grid gap-12 md:grid-cols-2">
          <div className="bg-slate-800 rounded-xl p-6 transition hover:-translate-y-2 hover:shadow-2xl">
            <h3 className="font-semibold text-xl mb-2">
              Smart False Window
            </h3>
            <p className="text-slate-300">
              Microcontroller-based PWM lighting system simulating natural daylight.
            </p>
          </div>

          <div className="bg-slate-800 rounded-xl p-6 transition hover:-translate-y-2 hover:shadow-2xl">
            <h3 className="font-semibold text-xl mb-2">
              Smart Light Alarm System
            </h3>
            <p className="text-slate-300">
              Embedded scheduling-based lighting with structured firmware logic.
            </p>
          </div>

          <div className="bg-slate-800 rounded-xl p-6 transition hover:-translate-y-2 hover:shadow-2xl">
            <h3 className="font-semibold text-xl mb-2">
              5×5 LED Matrix Audio-Reactive Display
            </h3>
            <p className="text-slate-300">
              Real-time audio-driven LED visualization system.
            </p>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="pt-24">
        <h2 className="text-3xl font-bold mb-8">
          About
        </h2>

        <p className="text-slate-300 leading-relaxed">
          Electrical and Embedded Systems Engineer focused on structured system
          delivery, cross-functional coordination, and real-world deployment.
        </p>

        <p className="mt-6 text-slate-300 leading-relaxed">
          I specialize in translating stakeholder requirements into executable
          technical architectures and validating system performance against
          defined criteria.
        </p>
      </section>

      {/* SKILLS */}
      <section id="skills" className="pt-24 text-center">
        <h2 className="text-3xl font-bold mb-8">
          Skills
        </h2>

        <div className="flex flex-wrap justify-center gap-4 text-sm">
          {[
            "Embedded Systems",
            "System Integration",
            "C / C++",
            "MATLAB",
            "Hardware Validation",
            "Technical Documentation",
          ].map((skill, i) => (
            <span
              key={i}
              className="px-4 py-2 border border-slate-600 rounded-full"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="pt-24 pb-24 text-center">
        <h2 className="text-3xl font-bold mb-8">
          Contact
        </h2>

        <div className="flex flex-wrap justify-center gap-6 text-sm font-medium">
          <a href="/resume.pdf" className="underline hover:opacity-70">
            Resume
          </a>
          <a href="mailto:p.hutt96@gmail.com" className="underline hover:opacity-70">
            Email
          </a>
          <a
            href="https://www.linkedin.com/in/palmerhutt"
            target="_blank"
            className="underline hover:opacity-70"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/phutt7"
            target="_blank"
            className="underline hover:opacity-70"
          >
            GitHub
          </a>
        </div>
      </section>

    </main>
  );
}