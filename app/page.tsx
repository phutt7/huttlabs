export default function Home() {
  return (
    <main style={{ padding: "40px", maxWidth: "800px", margin: "auto" }}>
      <h1 style={{ fontSize: "32px", fontWeight: "bold" }}>
        Embedded & Systems Engineer Delivering Customer-Facing Technical Solutions
      </h1>

      <p style={{ marginTop: "16px", fontSize: "18px" }}>
        From requirements definition to deployed systems — hardware, integration, and implementation execution.
      </p>

      <ul style={{ marginTop: "20px" }}>
        <li>Systems-Level Ownership</li>
        <li>Cross-Functional Delivery</li>
        <li>Embedded & Energy Systems Experience</li>
      </ul>

      <div style={{ marginTop: "24px" }}>
        <a href="/projects" style={{ marginRight: "20px" }}>
          View Projects
        </a>

        <a href="/resume.pdf" target="_blank">
          Download Resume
        </a>
      </div>
    </main>
  );
}