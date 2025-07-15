import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./components/HomePage";
import StudentDashboard from "./pages/StudentDashboard";
import TeacherDashboard from "./pages/TeacherDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import StudentEnrollment from "./pages/StudentEnrollmentForm";
import VolunteerApplication from "./pages/VolunteerApplication";
import CalendarPage from "./pages/CalendarPage";
import TeacherProfile from "./pages/TeacherProfile";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/calendar" element={<CalendarPage />} />
        <Route path="/student-enroll" element={<StudentEnrollment />} />
        <Route path="/volunteer-apply" element={<VolunteerApplication />} />
        <Route path="/student-dashboard" element={<StudentDashboard />} />
        <Route path="/teacher-dashboard" element={<TeacherDashboard />} />
        <Route path="/profile" element={<TeacherProfile />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
