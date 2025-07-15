  import React, { useState } from "react";
  import { useNavigate } from "react-router-dom";
  import "./TeacherDashboard.css";
  import { FaSearch, FaDownload, FaCalendarAlt } from "react-icons/fa";
  import { MdOutlineMenuBook } from "react-icons/md";
  import { PiStudentBold } from "react-icons/pi";
  import { Link } from "react-router-dom";


  const TeacherDashboardRedesign = () => {
    const [darkMode, setDarkMode] = useState(false);
    const navigate = useNavigate();

    const toggleDarkMode = () => {
      setDarkMode(!darkMode);
      document.body.classList.toggle("dark-mode");
    };

    const logout = () => {
      alert("Logged out successfully!");
      navigate("/"); // Redirect to homepage
    };

    return (
      <div className="dashboard">
        <aside className="sidebar rich">
  <div className="logo">📘</div>
  <ul className="nav-icons">
    <li title="Calendar">
      <Link to="/calendar"><FaCalendarAlt /> <span>Calendar</span></Link>
    </li>
    <li title="My Classes">
      <Link to="/dashboard"><MdOutlineMenuBook /> <span>Classes</span></Link>
    </li>
    <li title="Students">
      <Link to="/students"><PiStudentBold /> <span>Students</span></Link>
    </li>
    <li title="Profile">
      <Link to="/profile"><img src="https://i.pravatar.cc/20" alt="P" /> <span>Profile</span></Link>
    </li>
  </ul>
  <div className="user-profile">
    <img src="https://i.pravatar.cc/40" alt="User" />
    <button className="logout-btn" onClick={logout}>Logout</button>
  </div>
</aside>


        <main className="main-content">
          <header className="top-bar">
            <div className="search">
              <FaSearch />
              <input type="text" placeholder="Search for classes or students" />
            </div>
            <div className="top-right">
              <button onClick={toggleDarkMode} className="dark-toggle">
                {darkMode ? "☀️ Light" : "🌙 Dark"}
              </button>
              <img src="https://i.pravatar.cc/40" alt="User" className="top-avatar" />
            </div>
          </header>

          <div className="content-grid">
            <section className="calendar">
              <div className="calendar-header">
                <button>Week</button>
                <button className="active">Month</button>
              </div>
              <div className="calendar-body">
                <h4>July 2022</h4>
                <div className="calendar-days">
                  {[...Array(31).keys()].map(d => <span key={d}>{d + 1}</span>)}
                </div>
              </div>
            </section>

            <section className="lessons">
              <h3>Upcoming Lessons</h3>
              <div className="lesson-card blue">
                <p>11:00 - <strong>James Smith</strong> (English)</p>
              </div>
              <div className="lesson-card red">
                <p>12:00 - <strong>Amanda Green</strong> (German)</p>
              </div>
            </section>

            <section className="students">
              <h3>My Students</h3>
              <div className="student-card">
                <img src="https://i.pravatar.cc/60?img=1" alt="Student" />
                <div>
                  <p><strong>Jason Jordan</strong></p>
                  <p>English <span className="flag">🇬🇧</span></p>
                  <span className="score red">3.7 ★</span>
                </div>
              </div>
              <div className="student-card">
                <img src="https://i.pravatar.cc/60?img=2" alt="Student" />
                <div>
                  <p><strong>Marjorie Lewis</strong></p>
                  <p>Spanish <span className="flag">🇪🇸</span></p>
                  <span className="score blue">5.0 ★</span>
                </div>
              </div>
            </section>

            <section className="classes">
              <h3>My Classes</h3>
              <div className="class-card">
                <h4>English</h4>
                <p>I need more lessons on Past perfect and Past perfect continuous...</p>
                <span>09.11.23</span>
              </div>
              <div className="class-card">
                <h4>Spanish</h4>
                <p>In the past month, I’ve learned about 1,000 new words...</p>
                <span>12.11.23</span>
              </div>
            </section>

            <section className="documents">
              <h3>Documents</h3>
              <ul>
                <li><span className="tag xls">XLS</span> Exam Results 2023.xlsx <FaDownload /></li>
                <li><span className="tag doc">DOC</span> Pronouns test.docx <FaDownload /></li>
                <li><span className="tag ppt">PPT</span> Daily activities.ppt <FaDownload /></li>
                <li><span className="tag xls">XLS</span> 10th grade students.xlsx <FaDownload /></li>
              </ul>
            </section>
          </div>
        </main>
      </div>
    );
  };

  export default TeacherDashboardRedesign;
