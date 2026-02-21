import Image from "next/image";

export default function Home() {
  return (
    <main
      style={{
        textAlign: "center",
        padding: "60px 20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Image
        src="/images/profile.jpg"
        alt="Palmer Hutt"
        width={150}
        height={150}
        style={{ borderRadius: "50%" }}
      />

      <h1
        style={{
          fontSize: "36px",
          fontWeight: "700",
          marginTop: "24px",
        }}
      >
        Palmer Hutt
      </h1>

      <p
        style={{
          fontSize: "18px",
          marginTop: "12px",
          maxWidth: "600px",
          lineHeight: "1.7",
        }}
      >
        Embedded & Systems Engineer delivering customer-facing technical solutions from concept to deployment.
      </p>

      <div style={{ marginTop: "30px", display: "flex", gap: "20px" }}>
        <a
          href="/projects"
          style={{
            padding: "10px 20px",
            border: "2px solid #000",
            fontWeight: "600",
            textDecoration: "none",
          }}
        >
          Projects
        </a>

        <a
          href="/resume.pdf"
          style={{
            padding: "10px 20px",
            border: "2px solid #000",
            fontWeight: "600",
            textDecoration: "none",
          }}
        >
          Resume
        </a>
      </div>
    </main>
  );
}