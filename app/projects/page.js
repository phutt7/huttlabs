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
      "Embedded scheduling-based lighting solution with structured firmware.",
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
    <main className="max-w-6xl mx-auto px-6 py-20">
      
      <h1 className="text-4xl font-bold text-center mb-16">
        Projects
      </h1>

      <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md overflow-hidden 
                       transition duration-300 hover:shadow-xl hover:-translate-y-2"
          >
            <Image
              src={project.image}
              alt={project.title}
              width={600}
              height={400}
              className="w-full h-56 object-cover"
            />

            <div className="p-6 text-left">
              <h2 className="text-xl font-semibold mb-3">
                {project.title}
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}