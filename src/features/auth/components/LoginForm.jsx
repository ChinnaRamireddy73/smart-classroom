import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";

const LoginForm = () => {
  const [role, setRole] = useState("teacher"); // default role for testing
  const navigate = useNavigate();
  const { setUser } = useAuth();

  const handleLogin = (e) => {
    e.preventDefault();

    // 🔧 TEMPORARY: Force teacher login for testing
    setUser({
      isAuthenticated: true,
      role: "teacher",
    });
    navigate("/teacher-dashboard");

    /*
    // ✅ ORIGINAL CODE (Enable later for real login)
    setUser({
      isAuthenticated: true,
      role: role,
    });

    switch (role) {
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
    */
  };

  return (
    <form onSubmit={handleLogin}>
      <h2>Login</h2>

      <label>Choose Role:</label>
      <select value={role} onChange={(e) => setRole(e.target.value)} required>
        <option value="student">Student</option>
        <option value="teacher">Teacher</option>
        <option value="admin">Admin</option>
      </select>

      <br />
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
