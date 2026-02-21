import Image from "next/image";

export default function About() {
  return (
    <main>
      <h1 style={{ fontSize: "28px", fontWeight: "bold" }}>About</h1>

      <div style={{ marginTop: "30px" }}>
        <Image
          src="/images/profile.jpg"
          alt="Palmer Hutt"
          width={250}
          height={250}
          style={{ borderRadius: "12px" }}
        />
      </div>

      <p style={{ marginTop: "30px", lineHeight: "1.6" }}>
        Electrical and Embedded Systems Engineer focused on structured system delivery,
        cross-functional coordination, and real-world deployment.
      </p>

      <p style={{ marginTop: "20px", lineHeight: "1.6" }}>
        I specialize in translating stakeholder requirements into executable technical architectures,
        validating performance, and ensuring systems function reliably in production environments.
      </p>
    </main>
  );
}