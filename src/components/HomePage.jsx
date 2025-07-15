import React, { useState } from "react";
import "./HomePage.css";
import heroImg from "../images/Online learning-bro.png";
import AuthModal from "./AuthModal";
import FlowModal from "./FlowModal"; // Make sure this file exists and is styled
import { useNavigate } from "react-router-dom";

function HomePage() {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [selectedFlow, setSelectedFlow] = useState(null);
  const navigate = useNavigate();


  const closeModal = () => {
    setShowLogin(false);
    setShowSignup(false);
    setSelectedFlow(null); // Close flow modal
  };

  const handleCardClick = (flowType) => {
    setSelectedFlow(flowType);
  };

  const flowContent = {
    teacher: {
      title: "👩‍🏫 Teacher Volunteer Flow",
      steps: [
        "Click 'Join as a Volunteer' on homepage.",
        "Fill out the application and upload resume.",
        "Admin reviews and verifies your profile.",
        "After approval, login credentials are emailed.",
        "Start uploading content and taking classes."
      ]
    },
    student: {
      title: "👨‍🎓 Student Enrollment Flow",
      steps: [
        "Click 'Enroll Now' on homepage.",
        "Submit registration form with basic details.",
        "Upload previous academic certificates if available.",
        "Admin verifies your application.",
        "Login credentials will be shared via email."
      ]
    },
    admin: {
      title: "🔐 Admin Review Process",
      steps: [
        "Review teacher applications and resumes.",
        "Verify student backgrounds and documents.",
        "Ensure safety and quality standards.",
        "Approve verified users and assign access roles."
      ]
    }
  };

  return (
    <div>
      <nav className="navbar">
        <div className="navbar-left">
          <span className="site-name">Smart Classroom</span>
        </div>
        <div className="navbar-right">
          <button className="nav-btn login-btn" onClick={() => setShowLogin(true)}>Login</button>
          <button className="nav-btn signup-btn" onClick={() => setShowSignup(true)}>Signup</button>
        </div>
      </nav>

      {(showLogin || showSignup) && (
        <AuthModal
          type={showLogin ? "login" : "signup"}
          onClose={closeModal}
        />
      )}

      <section className="hero-section">
        <div className="hero-text">
          <h1>Empowering Education for All</h1>
          <p>
            Smart Classroom is a community-driven platform to educate
            underprivileged learners for free through the power of volunteers.
          </p>
          <blockquote className="animated-quote">
            "Education is the most powerful weapon which you can use to change the world."
            <br />
            <span>— Nelson Mandela</span>
          </blockquote>
          <div className="hero-buttons">                  
            <button onClick={() => navigate("/volunteer-apply")}>Join as a Volunteer</button>
            <button onClick={() => navigate("/student-enroll")}>Enroll Now</button> 
          </div>
        </div>
        <div className="hero-img">
          <img src={heroImg} alt="Learning Illustration" />
        </div>
      </section>

      <section className="how-it-works">
        <h2 className="how-heading">How It Works</h2>
        <div className="cards">
          <button className="card how-card" onClick={() => handleCardClick("teacher")}>
            <div className="icon">🧑‍🏫</div>
            <h3>Teach as a Volunteer</h3>
            <p>Apply, get verified, and start sharing your knowledge online.</p>
          </button>
          <button className="card how-card" onClick={() => handleCardClick("student")}>
            <div className="icon">👩‍🎓</div>
            <h3>Enroll as a Student</h3>
            <p>Submit your details and upload academic certificates (if any).</p>
          </button>
          <button className="card how-card" onClick={() => handleCardClick("admin")}>
            <div className="icon">🔐</div>
            <h3>Admin Review</h3>
            <p>Admins verify all profiles to maintain quality and safety.</p>
          </button>
        </div>
      </section>

      {selectedFlow && (
        <FlowModal data={flowContent[selectedFlow]} onClose={closeModal} />
      )}
    </div>
  );
}

export default HomePage;
