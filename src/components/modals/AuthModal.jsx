// AuthModal.jsx
import React, { useState } from "react";
import "./AuthModal.css";
import { useNavigate } from "react-router-dom";

function AuthModal({ type, onClose }) {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    role: "Student",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // For now, just redirect based on role
    if (formData.role === "Student") navigate("/student-dashboard");
    else if (formData.role === "Teacher") navigate("/teacher-dashboard");
    else navigate("/admin-dashboard");
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>{type === "login" ? "Login" : "Signup"}</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <select name="role" value={formData.role} onChange={handleChange}>
            <option value="Student">Student</option>
            <option value="Teacher">Teacher</option>
            <option value="Admin">Admin</option>
          </select>
          <button type="submit">{type === "login" ? "Login" : "Signup"}</button>
        </form>
        <button className="close-btn" onClick={onClose}>X</button>
      </div>
    </div>
  );
}

export default AuthModal;
