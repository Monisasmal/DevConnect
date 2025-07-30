import React, { useState, useEffect } from "react";
import { getCurrentUser, getProjects, saveProjects } from "../utils/storage";
import ProjectCard from "../components/ProjectCard";

export default function Home() {
  const [projects, setProjects] = useState([]);
  const [form, setForm] = useState({ title: "", description: "", link: "" });

  const user = getCurrentUser();

  useEffect(() => {
    setProjects(getProjects());
  }, []);

  const handleAdd = (e) => {
    e.preventDefault();
    if (!user) {
      alert("You must be logged in to add a project.");
      return;
    }
    if (!form.title || !form.description || !form.link) {
      alert("Complete all fields");
      return;
    }
    const newProj = {
      id: Date.now(),
      ...form,
      author: user.name,
    };
    const updated = [...projects, newProj];
    saveProjects(updated);
    setProjects(updated);
    setForm({ title: "", description: "", link: "" });
  };

  return (
    <div className="container">
      <h2>All Projects</h2>
      <form onSubmit={handleAdd}>
        <input
          placeholder="Title"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
        />
        <textarea
          placeholder="Description"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
        />
        <input
          placeholder="Link"
          value={form.link}
          onChange={(e) => setForm({ ...form, link: e.target.value })}
        />
        <button type="submit">Add Project</button>
      </form>

      {projects.map((proj) => (
        <ProjectCard key={proj.id} project={proj} />
      ))}
    </div>
  );
}
