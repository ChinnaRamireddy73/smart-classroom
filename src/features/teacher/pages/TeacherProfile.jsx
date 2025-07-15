import React, { useState } from "react";
import "./TeacherProfile.css";

const TeacherProfile = () => {
  const [profile, setProfile] = useState({
    name: "V. Chinna Ramireddy",
    email: "chinna@example.com",
    subject: "Computer Science",
    totalClasses: 15,
    uploadedVideos: 8,
  });

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  return (
    <div className="teacher-profile">
      <h2>👨‍🏫 My Profile</h2>
      <div className="profile-card">
        <div className="profile-left">
          <img
            src="https://i.pravatar.cc/150"
            alt="Profile"
            className="profile-img"
          />
          <button className="upload-btn">Change Photo</button>
        </div>

        <div className="profile-right">
          <label>
            Name:
            <input type="text" name="name" value={profile.name} onChange={handleChange} />
          </label>

          <label>
            Email:
            <input type="email" name="email" value={profile.email} onChange={handleChange} />
          </label>

          <label>
            Subject Expertise:
            <input type="text" name="subject" value={profile.subject} onChange={handleChange} />
          </label>

          <div className="stats">
            <span>📚 Classes: {profile.totalClasses}</span>
            <span>🎬 Videos: {profile.uploadedVideos}</span>
          </div>

          <button className="update-btn">Update Profile</button>
        </div>
      </div>
    </div>
  );
};

export default TeacherProfile;
// This code defines a simple teacher profile page with editable fields for name, email, and subject expertise.