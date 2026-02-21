import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div style={{ display: "flex", alignItems: "center", gap: "30px" }}>
        
        <Image
          src="/images/profile.jpg"
          alt="Palmer Hutt"
          width={120}
          height={120}
          style={{ borderRadius: "50%" }}
        />

        <div>
          <h1 style={{ fontSize: "32px", fontWeight: "bold" }}>
            Embedded & Systems Engineer Delivering Customer-Facing Technical Solutions
          </h1>

          <p style={{ marginTop: "16px" }}>
            From requirements definition to deployed systems — hardware, integration, and implementation execution.
          </p>
        </div>
      </div>

      <ul style={{ marginTop: "30px" }}>
        <li>Systems-Level Ownership</li>
        <li>Cross-Functional Delivery</li>
        <li>Embedded & Energy Systems Experience</li>
      </ul>

      <div style={{ marginTop: "24px" }}>
        <Link href="/projects" style={{ marginRight: "20px" }}>
          View Projects
        </Link>

        <a href="/resume.pdf" target="_blank">
          Download Resume
        </a>
      </div>
    </main>
  );
}