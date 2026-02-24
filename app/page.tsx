"use client";

import { useState } from "react";
import Image from "next/image";
import { Mail, Linkedin, Github, FileText } from "lucide-react";



export default function Home() {
	const [activeProject, setActiveProject] = useState<number | null>(null);

const toggleProject = (id: number) => {
  setActiveProject(activeProject === id ? null : id);
};

const projects = [
  {
    id: 0,
    title: "Coming Soon",
    image: "/images/project0.jpg",
    preview: "New Embedded project",
    skills: ["Embedded Systems", "PWM Control", "Firmware Architecture", "Hardware Validation"],
    description:
      "Get ready for something so boring it's exciting!",
  },
  {
    id: 1,
    title: "Smart False Window – Embedded Lighting System ",
    image: "/images/project1.jpg",
    preview: "Microcontroller-based lighting system simulating natural daylight for better ambiance and energy efficiency.",
    skills: ["C/C++", "System Optimization", "Power Management", "Testing"],
    description:
      "Simulated natural daylight cycles through custom microcontroller-based lighting architecture, enhancing indoor ambiance and energy efficiency. Integrated hardware components and enclosure design considerations, ensuring long-term reliability and consistent performance under real-world operating conditions. Implemented precision PWM control logic to manage brightness transitions while upholding thermal stability and component longevity. ",
  },
  {
    id: 2,
    title: "Smart Light Alarm System",
    image: "/images/project2.jpg",
    preview: "Embedded scheduling-based lighting with structured firmware logic.",
    skills: ["Embedded Systems", "State Machines", "Timing Logic", "Validation"],
    description:
      "Automated lighting schedules with embedded firmware logic, enabling timed state transitions for alarm and lighting scenarios. Incorporated hardware-software controls for reliable synchronization between microcontroller signals and physical lighting outputs.",
  },
  {
    id: 3,
    title: "5×5 LED Matrix Audio-Reactive Display",
    image: "/images/project3.jpg",
    preview: "Real-time audio-driven LED visualization system.",
    skills: ["Signal Processing", "Real-Time Systems", "Interrupt Handling", "Visualization"],
    description:
      "Designed real-time audio processing firmware driving 5×5 LED matrix display, translating sound input into dynamic visual patterns. Executed signal processing algorithms on microcontroller to synchronize LED outputs with live audio input for immersive visual feedback. Heightened performance for low-latency response, delivering visually responsive and consistent audio-reactive displays.",
  },
];
  return (
    <main className="max-w-5xl mx-auto px-6">
	
	{/* NAVBAR */}
<header className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
  <nav className="bg-slate-900/80 backdrop-blur-md border border-slate-700 px-8 py-3 rounded-full shadow-lg">
    
    <div className="flex items-center space-x-6 text-sm">
      
      {/* Name */}
      <div className="pr-6 border-r border-slate-600">
        <p className="text-lg font-semibold text-white tracking-wide">
          Palmer Hutt
        </p>
      </div>

      {/* Links */}
      <div className="flex items-center space-x-8">
        <a href="#hero" className="text-slate-300 hover:text-white transition">
          Home
        </a>
        <a href="#projects" className="text-slate-300 hover:text-white transition">
          Projects
        </a>
        <a href="#skills" className="text-slate-300 hover:text-white transition">
          Skills
        </a>
        <a href="#about" className="text-slate-300 hover:text-white transition">
          About
        </a>
        <a href="#contact" className="text-slate-300 hover:text-white transition">
          Contact
        </a>
      </div>

    </div>

  </nav>
</header>


      {/* HERO */}
      <section id="hero" className="pt-40 text-center">
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
          I’m a Solutions and Integration Engineer with a background in systems implementation and customer-facing technical delivery. I’ve owned projects from early requirements and system design through deployment, validation, and post-launch support. I enjoy taking complex technical problems and turning them into practical, production-ready solutions that actually work in the real world.
		  </p>
		  
		  <p className="text-lg max-w-2xl mx-auto leading-relaxed text-slate-300">
		  Most of my experience centers around integration work — coordinating across teams, aligning technical constraints with business goals, and making sure implementations stay on track. I’m comfortable working in fast-moving or partially defined environments, bringing structure where needed while staying focused on execution and measurable outcomes.
		</p>
		
		<p className="text-lg max-w-2xl mx-auto leading-relaxed text-slate-300">
        I see myself as someone who bridges technical depth with clear communication. I take ownership, document thoroughly, and prioritize reliability and long-term success over quick fixes. At the end of the day, I’m motivated by building systems that scale well and deliver real value to both customers and the organizations behind them.
        </p>

        {/* LINKS */}
        <div className="mt-8 flex justify-center gap-8">
  <a
    href="/resume.pdf"
    target="_blank"
    className="hover:opacity-70 transition"
  >
    <FileText size={22} />
  </a>

  <a
    href="mailto:p.hutt96@gmail.com"
    className="hover:opacity-70 transition"
  >
    <Mail size={22} />
  </a>

  <a
    href="https://www.linkedin.com/in/palmerhutt"
    target="_blank"
    className="hover:opacity-70 transition"
  >
    <Linkedin size={22} />
  </a>

  <a
    href="https://github.com/phutt7"
    target="_blank"
    className="hover:opacity-70 transition"
  >
    <Github size={22} />
  </a>
</div>
      </section>

      {/* PROJECTS */}
	  <section id="projects" className="pt-24">
	    <h2 className="text-3xl font-bold text-center mb-12">
		    Projects
			  </h2>
			  
			  <div className="space-y-8">
    {projects.map((project) => (
      <div
        key={project.id}
        className="bg-slate-800 rounded-xl overflow-hidden border border-slate-700 transition"
      >
        {/* Clickable Header */}
        <button
          onClick={() => toggleProject(project.id)}
          className="w-full text-left"
        >
          <Image
            src={project.image}
            alt={project.title}
            width={800}
            height={500}
            className="w-full h-56 object-cover"
          />

          <div className="p-6 flex justify-between items-center">
            <div>
              <h3 className="font-semibold text-xl mb-2">
                {project.title}
              </h3>
              <p className="text-slate-300 text-sm">
                {project.preview}
              </p>
            </div>

            <span className="text-2xl text-slate-400">
              {activeProject === project.id ? "−" : "+"}
            </span>
          </div>
        </button>

        {/* Expanded Content */}
        <div
          className={`transition-all duration-500 ease-in-out overflow-hidden ${
            activeProject === project.id
              ? "max-h-[1000px] opacity-100 px-6 pb-6"
              : "max-h-0 opacity-0"
          }`}
        >
          {/* Skill Bubbles */}
          <div className="flex flex-wrap gap-3 mb-6">
            {project.skills.map((skill, i) => (
              <span
                key={i}
                className="px-4 py-2 text-sm border border-slate-600 rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* Full Description */}
          <p className="text-slate-300 leading-relaxed">
            {project.description}
          </p>
        </div>
      </div>
    ))}
  </div>
</section>

	{/* SKILLS */}
<section id="skills" className="pt-24">
  <h2 className="text-3xl font-bold text-center mb-12">
    Skills
  </h2>

  <div className="max-w-5xl mx-auto space-y-12">

    {/* CORE EXPERTISE */}
    <div>
      <h3 className="text-xl font-semibold mb-4 text-slate-300">
        Core Expertise
      </h3>
      <div className="flex flex-wrap gap-3">
        {[
          "Systems Integration",
          "Solutions Engineering",
          "Technical Implementation",
          "Enterprise SaaS Implementations",
          "Scalable System Design",
          "Workflow Automation",
          "Configuration Management",
          "Production Deployments",
        ].map((skill, i) => (
          <span
            key={i}
            className="px-4 py-2 text-sm border border-slate-600 rounded-full"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>

    {/* INTEGRATION & APIs */}
    <div>
      <h3 className="text-xl font-semibold mb-4 text-slate-300">
        Integration & APIs
      </h3>
      <div className="flex flex-wrap gap-3">
        {[
          "API Integrations",
          "REST APIs",
          "Webhooks",
          "Data Mapping",
          "Data Transformation",
          "JSON",
          "XML",
          "CSV",
          "SQL Querying",
          "Data Reconciliation",
        ].map((skill, i) => (
          <span
            key={i}
            className="px-4 py-2 text-sm border border-slate-600 rounded-full"
          >
            {skill}
          </span>
          ))}
      </div>
    </div>

    {/* IMPLEMENTATION & DELIVERY */}
    <div>
      <h3 className="text-xl font-semibold mb-4 text-slate-300">
        Implementation & Delivery
      </h3>
      <div className="flex flex-wrap gap-3">
        {[
          "Implementation Planning",
          "Customer Onboarding",
          "Requirements Gathering",
          "Go-Live Support",
          "Post-Implementation Support",
          "Remote Project Delivery",
          "Project Coordination",
          "Cross-Functional Collaboration",
          "Stakeholder Communication",
          "Risk Mitigation",
        ].map((skill, i) => (
          <span
            key={i}
            className="px-4 py-2 text-sm border border-slate-600 rounded-full"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>

    {/* VALIDATION & OPERATIONS */}
    <div>
      <h3 className="text-xl font-semibold mb-4 text-slate-300">
        Validation & Operations
      </h3>
      <div className="flex flex-wrap gap-3">
        {[
          "System Validation",
          "Acceptance Testing",
          "Integration Testing",
          "Operational Readiness",
          "Troubleshooting",
          "Root Cause Analysis",
          "Issue Resolution",
          "Client-Facing Technical Support",
          "Support Process Standardization",
          "Technical Documentation",
          "Technical Problem Solving",
        ].map((skill, i) => (
          <span
            key={i}
            className="px-4 py-2 text-sm border border-slate-600 rounded-full"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>

  </div>
</section>


	{/* ABOUT */} 
	<section id="about" className="pt-24 text-center max-w-3xl mx-auto">
	<h2 className="text-3xl font-bold mb-8">	
		About 
	</h2> 
		<p className="text-slate-300 font-bold">
			Professional Overview 
			</p> 
			
			<p className="text-slate-300">
				Results-driven Solutions and Integration Engineer with a strong background in systems integration, technical implementation, and customer-facing solution delivery. Experienced in owning implementations from initial requirements through deployment, validation, and post-launch support. Recognized for translating complex technical and operational needs into scalable, production-ready solutions that drive adoption, reliability, and long-term customer success. 
		</p> 
		
		
		<p className="pt-10 text-slate-300 font-bold">
			Implementation & Systems Integration Expertise
			</p> 
			
			<p className="text-slate-300">
				Proven expertise in end-to-end technical implementation, including system design, integration planning, validation, and troubleshooting. Adept at working across distributed and remote environments, coordinating cross-functional teams, and ensuring seamless execution against timelines and milestones. Brings a structured, execution-focused mindset to integration work, balancing technical depth with practical delivery outcomes.
		</p> 
		
		
		<p className="pt-10 text-slate-300 font-bold">
			Customer-Facing & Cross-Functional Leadership
			</p> 
			<p className="text-slate-300">
			Trusted technical partner to customers and internal stakeholders, known for clear communication and strong ownership throughout the implementation lifecycle. Skilled at bridging engineering, operations, and business teams to resolve complex issues, mitigate risk, and sustain momentum. Comfortable operating in partially documented environments while establishing clear processes, documentation, and repeatable workflows.
		</p>

		
		<p className="pt-10 text-slate-300 font-bold">
			Value-Driven Engineering & Execution
			</p> 
		
			<p className="text-slate-300">
				Brings a systems-oriented approach grounded in reliability, validation, and continuous improvement. Experienced in designing and supporting integrated solutions that meet functional, regulatory, and operational requirements. Motivated by delivering high-quality implementations that scale effectively, improve customer outcomes, and contribute measurable value to the organization. 
		</p>
		
	</section>

      {/* CONTACT */}
      <section id="contact" className="pt-24 pb-24 text-center">
        <h2 className="text-3xl font-bold mb-8">
          Contact
        </h2>

        <div className="flex justify-center gap-8 mt-6">
  <a
    href="/resume.pdf"
    target="_blank"
    className="hover:opacity-70 transition"
  >
    <FileText size={22} />
  </a>

  <a
    href="mailto:p.hutt96@gmail.com"
    className="hover:opacity-70 transition"
  >
    <Mail size={22} />
  </a>

  <a
    href="https://www.linkedin.com/in/palmerhutt"
    target="_blank"
    className="hover:opacity-70 transition"
  >
    <Linkedin size={22} />
  </a>

  <a
    href="https://github.com/phutt7"
    target="_blank"
    className="hover:opacity-70 transition"
  >
    <Github size={22} />
  </a>
</div>
      </section>

    </main>
  );
}