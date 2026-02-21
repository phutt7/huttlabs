import Image from "next/image";

const projects = [
  {
    title: "Smart False Window — Embedded Lighting System",
    image: "/images/project1.jpg",
    problem: "Simulate natural daylight indoors.",
    architecture: "Microcontroller-based PWM lighting system.",
    outcome: "Stable long-term deployed system."
  },
  {
    title: "Smart Light Alarm System",
    image: "/images/project2.jpg",
    problem: "Alarm-synchronized embedded lighting solution.",
    architecture: "Microcontroller + scheduling firmware.",
    outcome: "Reliable timed state transitions."
  },
  {
    title: "5×5 LED Matrix Audio-Reactive Display",
    image: "/images/project3.jpg",
    problem: "Real-time audio visualization system.",
    architecture: "Microcontroller + audio input processing + LED matrix.",
    outcome: "Responsive signal-driven display."
  }
];

export default function Projects() {
  return (
    <main>
      <h1 style={{ fontSize: "28px", fontWeight: "bold" }}>
        Projects
      </h1>

      <div style={{ marginTop: "40px", display: "flex", flexDirection: "column", gap: "60px" }}>
        {projects.map((project, index) => (
          <div key={index} style={{
            display: "flex",
            gap: "30px",
            alignItems: "center",
            flexWrap: "wrap"
          }}>
            
            <Image
              src={project.image}
              alt={project.title}
              width={300}
              height={200}
              style={{ borderRadius: "12px" }}
            />

            <div style={{ maxWidth: "500px" }}>
              <h2 style={{ fontSize: "20px", fontWeight: "600" }}>
                {project.title}
              </h2>

              <p style={{ marginTop: "10px" }}>
                <strong>Problem:</strong> {project.problem}
              </p>

              <p>
                <strong>Architecture:</strong> {project.architecture}
              </p>

              <p>
                <strong>Outcome:</strong> {project.outcome}
              </p>
            </div>

          </div>
        ))}
      </div>
    </main>
  );
}