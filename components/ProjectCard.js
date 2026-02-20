import React from "react";

export default function ProjectCard({ project }) {
  return (
    <div className="border rounded p-4 shadow hover:shadow-lg transition">
      <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded"/>
      <h3 className="text-xl font-bold mt-2">{project.title}</h3>
      <p><strong>Problem:</strong> {project.problem}</p>
      <p><strong>Constraints:</strong> {project.constraints}</p>
      <p><strong>Architecture:</strong> {project.architecture}</p>
      <p><strong>Implementation:</strong> {project.implementation}</p>
      <p><strong>Challenges:</strong> {project.challenges}</p>
      <p><strong>Outcome:</strong> {project.outcome}</p>
    </div>
  );
}