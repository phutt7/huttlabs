import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-20 text-center">
      
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

      <p className="text-lg max-w-2xl mx-auto leading-relaxed text-gray-700">
        Embedded & Systems Engineer delivering customer-facing technical solutions
        from concept to deployment.
      </p>

      <div className="mt-10 flex justify-center gap-6">
        <Link
          href="/projects"
          className="px-6 py-3 border border-black rounded-lg 
                     transition hover:bg-black hover:text-white"
        >
          View Projects
        </Link>

        <a
          href="/resume.pdf"
          className="px-6 py-3 border border-black rounded-lg 
                     transition hover:bg-black hover:text-white"
        >
          Download Resume
        </a>
      </div>
    </main>
  );
}