// src/routes/AppRoutes.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";

// Public Pages
import HomePage from "../components/common/HomePage";
import StudentEnrollment from "../features/enrollment/pages/StudentEnrollmentPage";
import VolunteerApplication from "../features/volunteer/pages/VolunteerApplication";
import CalendarPage from "../features/classroom/pages/CalendarPage";

// Dashboards and Private Pages
import StudentDashboard from "../features/dashboard/pages/StudentDashboard";
import TeacherDashboard from "../features/dashboard/pages/TeacherDashboard";
import AdminDashboard from "../features/dashboard/pages/AdminDashboard";
import TeacherProfile from "../features/teacher/pages/TeacherProfile";

// ProtectedRoute Wrapper
import ProtectedRoute from "./ProtectedRoute";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<HomePage />} />
      <Route path="/calendar" element={<CalendarPage />} />
      <Route path="/student-enroll" element={<StudentEnrollment />} />
      <Route path="/volunteer-apply" element={<VolunteerApplication />} />

      {/* Student Routes (only if role === 'student') */}
      <Route
        path="/student-dashboard"
        element={
          <ProtectedRoute allowedRoles={["student"]}>
            <StudentDashboard />
          </ProtectedRoute>
        }
      />

      {/* Teacher Routes (only if role === 'teacher') */}
      <Route
        path="/teacher-dashboard"
        element={
          <ProtectedRoute allowedRoles={["teacher"]}>
            <TeacherDashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/profile"
        element={
          <ProtectedRoute allowedRoles={["teacher"]}>
            <TeacherProfile />
          </ProtectedRoute>
        }
      />

      {/* Admin Route (only if role === 'admin') */}
      <Route
        path="/admin-dashboard"
        element={
          <ProtectedRoute allowedRoles={["admin"]}>
            <AdminDashboard />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
