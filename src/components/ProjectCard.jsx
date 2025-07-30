import React from "react";
import { Link } from "react-router-dom";


export default function ProjectCard({ project }) {
  return (
    <div className="card">
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <Link to={`/project/${project.id}`}>View Details</Link>
      <p><small>Author: {project.author}</small></p>
    </div>
  );
}
