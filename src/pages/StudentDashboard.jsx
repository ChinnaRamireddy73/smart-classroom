// src/pages/StudentDashboard.jsx
import React, { useEffect } from "react";
import "./StudentDashboard.css";

function StudentDashboard() {
  useEffect(() => {
    // JS code runs here
    const profileBtn = document.getElementById("profile-btn");
    const profileSection = document.getElementById("profile-section");

    profileBtn.addEventListener("click", () => {
      profileSection.scrollIntoView({ behavior: "smooth" });
    });
  }, []);

  return (
    <div className="student-dashboard">
      <header>
        <h1>Student Dashboard</h1>
        <nav>
          <button id="profile-btn">Profile</button>
          <button>Classes</button>
          <button>Assignments</button>
          <button>Logout</button>
        </nav>
      </header>

      <main>
        <section id="profile-section" className="card">
          <h2>Profile</h2>
          <p><strong>Name:</strong> John Doe</p>
          <p><strong>Class:</strong> 10th Grade</p>
          <p><strong>Email:</strong> student@example.com</p>
        </section>

        <section className="card">
          <h2>Your Progress</h2>
          <p>Level: 1</p>
          <progress value="20" max="100">20%</progress>
        </section>
      </main>
    </div>
  );
}

export default StudentDashboard;
