// StudentEnrollmentPage.jsx
import React, { useState } from "react";
import "./StudentEnrollment.css";

function StudentEnrollmentPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    educationLevel: "",
    certificates: null,
    message: "",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Student Enrollment Submitted:", formData);
    alert("Enrollment Submitted Successfully!");
  };

  return (
    <div className="student-form-container">
      <h2>Student Enrollment Form</h2>
      <form className="student-form" onSubmit={handleSubmit}>
        <div className="form-grid">
          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Current Education Level</label>
            <select
              name="educationLevel"
              value={formData.educationLevel}
              onChange={handleChange}
              required
            >
              <option value="">Select</option>
              <option value="Class 1-5">Class 1–5</option>
              <option value="Class 6-10">Class 6–10</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Others">Others</option>
            </select>
          </div>

          <div className="form-group full-width">
            <label>Upload Previous Certificates (if any)</label>
            <input
              type="file"
              name="certificates"
              onChange={handleChange}
              accept=".pdf, .jpg, .png"
            />
          </div>

          <div className="form-group full-width">
            <label>Tell us more about your background</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write here..."
            ></textarea>
          </div>
        </div>

        <button type="submit">Submit Enrollment</button>
      </form>
    </div>
  );
}

export default StudentEnrollmentPage;
