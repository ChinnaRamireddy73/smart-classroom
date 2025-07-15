import React, { useState } from "react";
import "./VolunteerForm.css";

function VolunteerForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    expertise: "",
    availability: "",
    resume: null,
    motivation: "",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Volunteer Form Submitted:", formData);
    alert("Your volunteer application has been submitted successfully!");
    // Clear form
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      expertise: "",
      availability: "",
      resume: null,
      motivation: "",
    });
  };

  return (
    <div className="volunteer-form-container">
      <h2>Join as a Volunteer</h2>
      <form className="volunteer-form" onSubmit={handleSubmit}>
        {/* Full Name */}
        <div>
          <label htmlFor="fullName">Full Name</label>
          <input
            id="fullName"
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        {/* Phone Number */}
        <div>
          <label htmlFor="phone">Phone Number</label>
          <input
            id="phone"
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>

        {/* Area of Expertise */}
        <div>
          <label htmlFor="expertise">Area of Expertise</label>
          <input
            id="expertise"
            type="text"
            name="expertise"
            value={formData.expertise}
            onChange={handleChange}
            required
          />
        </div>

        {/* Availability */}
        <div className="full-width">
          <label htmlFor="availability">Availability (hours per week)</label>
          <input
            id="availability"
            type="text"
            name="availability"
            value={formData.availability}
            onChange={handleChange}
          />
        </div>

        {/* Resume Upload */}
        <div className="full-width">
          <label htmlFor="resume">Upload Resume</label>
          <input
            id="resume"
            type="file"
            name="resume"
            onChange={handleChange}
            accept=".pdf,.doc,.docx"
          />
        </div>

        {/* Motivation */}
        <div className="full-width">
          <label htmlFor="motivation">Why do you want to volunteer?</label>
          <textarea
            id="motivation"
            name="motivation"
            value={formData.motivation}
            onChange={handleChange}
            placeholder="Tell us why you're passionate about teaching..."
          ></textarea>
        </div>

        {/* Submit Button */}
        <button type="submit">Submit Application</button>
      </form>
    </div>
  );
}

export default VolunteerForm;
