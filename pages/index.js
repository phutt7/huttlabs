import Link from "next/link";

export default function Home() {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold">Embedded & Systems Engineer Delivering Customer-Facing Technical Solutions</h1>
      <p className="mt-4 text-lg">
        From requirements definition to deployed systems — hardware, integration, and implementation execution.
      </p>

      <ul className="list-disc ml-6 mt-4">
        <li>Systems-Level Ownership</li>
        <li>Cross-Functional Delivery</li>
        <li>Embedded & Energy Systems Experience</li>
      </ul>

      <div className="mt-6 flex gap-4">
        <Link href="/projects">
          <button className="bg-blue-600 text-white px-4 py-2 rounded">View Projects</button>
        </Link>
        <a href="/resume.pdf" target="_blank">
          <button className="bg-gray-600 text-white px-4 py-2 rounded">Download Resume</button>
        </a>
      </div>
    </div>
  );
}