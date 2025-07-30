import React from "react";
import { useParams } from "react-router-dom";
import { getProjects } from "../utils/storage";

export default function ProjectDetails() {
  const { id } = useParams();
  const all = getProjects();
  const proj = all.find((p) => p.id.toString() === id);
  if (!proj) return <p>Project not found.</p>;

  return (
    <div className="container">
      <h2>{proj.title}</h2>
      <p>{proj.description}</p>
      <p>Link: <a href={proj.link} target="_blank">{proj.link}</a></p>
      <p><em>By: {proj.author}</em></p>
    </div>
  );
}
