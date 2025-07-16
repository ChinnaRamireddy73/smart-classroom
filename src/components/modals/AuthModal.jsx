// src/components/common/AuthModal.jsx
import React, { useState } from "react";
import "./AuthModal.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

function AuthModal({ type, onClose }) {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    role: "student",
  });

  const [mode, setMode] = useState(type); // "login" or "signup"
  const navigate = useNavigate();
  const { setUser } = useAuth();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate storing user (in real case, call backend)
    if (mode === "signup") {
      const users = JSON.parse(localStorage.getItem("users")) || [];
      users.push(formData);
      localStorage.setItem("users", JSON.stringify(users));
      alert("Signup successful!");
      setMode("login");
      return;
    }

    // Login mode
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const foundUser = users.find(
      (u) =>
        u.email === formData.email &&
        u.password === formData.password &&
        u.role === formData.role
    );

    if (foundUser) {
      setUser({ isAuthenticated: true, role: foundUser.role });
      onClose();

      switch (foundUser.role) {
        case "student":
          navigate("/student-dashboard");
          break;
        case "teacher":
          navigate("/teacher-dashboard");
          break;
        case "admin":
          navigate("/admin-dashboard");
          break;
        default:
          navigate("/");
      }
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>{mode === "login" ? "Login" : "Signup"}</h2>

        <form onSubmit={handleSubmit}>
          {mode === "signup" && (
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          )}

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
            <option value="student">Student</option>
            <option value="teacher">Teacher</option>
            <option value="admin">Admin</option>
          </select>

          <button type="submit">{mode === "login" ? "Login" : "Signup"}</button>
        </form>

        <p style={{ marginTop: "10px" }}>
          {mode === "login" ? "Don't have an account?" : "Already have an account?"}
          <button onClick={() => setMode(mode === "login" ? "signup" : "login")} className="switch-btn">
            {mode === "login" ? "Signup" : "Login"}
          </button>
        </p>

        <button className="close-btn" onClick={onClose}>X</button>
      </div>
    </div>
  );
}

export default AuthModal;
