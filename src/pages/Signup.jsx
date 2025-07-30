import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getUsers, saveUsers } from "../utils/storage";

export default function Signup() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    const users = getUsers();
    if (users.find((u) => u.email === form.email)) {
      alert("Email already registered");
      return;
    }
    users.push(form);
    saveUsers(users);
    alert("Signup successful! Please login.");
    navigate("/login");
  };

  return (
    <div className="container">
    <form onSubmit={handleSignup}>
      <h2>Signup</h2>
      <input
        type="text"
        placeholder="Name"
        value={form.name}
        required
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />
      <input
        type="email"
        placeholder="Email"
        value={form.email}
        required
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />
      <input
        type="password"
        placeholder="Password"
        value={form.password}
        required
        onChange={(e) => setForm({ ...form, password: e.target.value })}
      />
      <button type="submit">Signup</button>
    </form>
    </div>
  );
}
