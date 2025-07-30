import React from "react";
import { getCurrentUser, getProjects } from "../utils/storage";

export default function Profile() {
  const user = getCurrentUser();
  if (!user) return <p>Please log in to view your profile.</p>;

  const all = getProjects();
  const mine = all.filter((p) => p.author === user.name);

  return (
    <div>
      <h2>Profile</h2>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>

      <h3>Your Projects</h3>
      {mine.length === 0 ? (
        <p>No projects yet.</p>
      ) : (
        mine.map((p) => (
          <div key={p.id} className="card">
            <h4>{p.title}</h4>
            <p>{p.description}</p>
          </div>
        ))
      )}
    </div>
  );
}
