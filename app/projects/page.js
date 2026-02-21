import Image from "next/image";

const projects = [
  {
    title: "Smart False Window",
    image: "/images/project1.jpg",
    description:
      "Simulate natural daylight using microcontroller-based PWM lighting with thermal and timing constraints.",
  },
  {
    title: "Smart Light Alarm System",
    image: "/images/project2.jpg",
    description:
      "Embedded alarm-triggered lighting solution with scheduling logic and stable performance.",
  },
  {
    title: "5×5 LED Matrix Audio-Reactive Display",
    image: "/images/project3.jpg",
    description:
      "Real-time audio-reactive LED visualization built with signal processing and customized firmware.",
  },
];

export default function Projects() {
  return (
    <main style={{ textAlign: "center", padding: "40px 20px" }}>
      <h1 style={{ fontSize: "32px", fontWeight: "bold", marginBottom: "24px" }}>
        Projects
      </h1>

      <div
        style={{
          display: "grid",
          gap: "60px",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          justifyItems: "center",
        }}
      >
        {projects.map((p, i) => (
          <div
            key={i}
            style={{
              maxWidth: "400px",
              textAlign: "left",
              borderRadius: "12px",
              overflow: "hidden",
              boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
              backgroundColor: "#fff",
              color: "#000",
            }}
          >
            <Image
              src={p.image}
              alt={p.title}
              width={400}
              height={240}
              style={{ objectFit: "cover" }}
            />
            <div style={{ padding: "24px" }}>
              <h2
                style={{
                  fontSize: "20px",
                  fontWeight: "600",
                  marginBottom: "12px",
                }}
              >
                {p.title}
              </h2>
              <p style={{ fontSize: "16px", lineHeight: "1.6" }}>
                {p.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}