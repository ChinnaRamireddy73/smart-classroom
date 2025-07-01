import React from "react";
import "./TeacherDashboard.css";

function TeacherDashboard() {
  return (
    <div className="teacher-dashboard">
      <header className="dashboard-header">
        <h1>👩‍🏫 Teacher Dashboard</h1>
        <div className="dashboard-actions">
          <button>📤 Upload</button>
          <button>🗓️ Schedule</button>
          <button className="logout-btn">🚪 Logout</button>
        </div>
      </header>

      <main className="dashboard-content">
        <section className="profile-card">
          <div className="profile-header">
            <img src="/images/avatar_teacher.png" alt="Profile" />
            <div>
              <h2>👩‍💼 Profile</h2>
              <p><strong>Name:</strong> Mrs. Smith</p>
              <p><strong>Subject:</strong> Mathematics</p>
              <p><strong>Email:</strong> teacher@example.com</p>
            </div>
          </div>
        </section>

        <section className="upload-card">
          <h2>📚 Upload Materials</h2>
          <input type="file" />
          <button>Upload</button>
        </section>

        <section className="stats-card">
          <h2>📊 Class Overview</h2>
          <div className="stats-grid">
            <div className="stat-box">👩‍🎓 Students: <span>45</span></div>
            <div className="stat-box">📁 Files Uploaded: <span>12</span></div>
            <div className="stat-box">🕓 Sessions Scheduled: <span>5</span></div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default TeacherDashboard;
