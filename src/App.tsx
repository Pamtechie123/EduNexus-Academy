import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PublicLayout } from "@/components/layout/PublicLayout";
import { NotFoundPage } from "@/pages/StubPage";

import HomePage from "@/pages/public/HomePage";

import StudentLoginPage from "@/pages/auth/StudentLoginPage";
import TeacherLoginPage from "@/pages/auth/TeacherLoginPage";
import ParentLoginPage from "@/pages/auth/ParentLoginPage";
import AdminLoginPage from "@/pages/auth/AdminLoginPage";
import ForgotPasswordPage from "@/pages/auth/ForgotPasswordPage";
import ResetPasswordPage from "@/pages/auth/ResetPasswordPage";
import ChangePasswordPage from "@/pages/auth/ChangePasswordPage";
import AccessDeniedPage from "@/pages/auth/AccessDeniedPage";

import StudentDashboardPage from "@/pages/student/DashboardPage";
import StudentCoursesPage from "@/pages/student/CoursesPage";
import StudentAssignmentsPage from "@/pages/student/AssignmentsPage";
import StudentResultsPage from "@/pages/student/ResultsPage";
import StudentAttendancePage from "@/pages/student/AttendancePage";
import StudentTimetablePage from "@/pages/student/TimetablePage";
import StudentMessagesPage from "@/pages/student/MessagesPage";
import StudentProfilePage from "@/pages/student/ProfilePage";

import TeacherDashboardPage from "@/pages/teacher/DashboardPage";
import TeacherClassesPage from "@/pages/teacher/ClassesPage";
import TeacherCoursesPage from "@/pages/teacher/CoursesPage";
import TeacherAssignmentsPage from "@/pages/teacher/AssignmentsPage";
import TeacherAttendancePage from "@/pages/teacher/AttendancePage";
import TeacherAssessmentsPage from "@/pages/teacher/AssessmentsPage";
import TeacherMessagesPage from "@/pages/teacher/MessagesPage";
import TeacherProfilePage from "@/pages/teacher/ProfilePage";

import ParentDashboardPage from "@/pages/parent/DashboardPage";
import ParentProgressPage from "@/pages/parent/ProgressPage";
import ParentAttendancePage from "@/pages/parent/AttendancePage";
import ParentResultsPage from "@/pages/parent/ResultsPage";
import ParentTimetablePage from "@/pages/parent/TimetablePage";
import ParentMessagesPage from "@/pages/parent/MessagesPage";
import ParentProfilePage from "@/pages/parent/ProfilePage";

import AdminDashboardPage from "@/pages/admin/DashboardPage";
import AdminUsersPage from "@/pages/admin/UsersPage";
import AdminStudentsPage from "@/pages/admin/StudentsPage";
import AdminTeachersPage from "@/pages/admin/TeachersPage";
import AdminParentsPage from "@/pages/admin/ParentsPage";
import AdminClassesPage from "@/pages/admin/ClassesPage";
import AdminReportsPage from "@/pages/admin/ReportsPage";
import AdminSettingsPage from "@/pages/admin/SettingsPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PublicLayout />}>
          <Route path="/" element={<HomePage />} />
        </Route>

        <Route path="/login/student" element={<StudentLoginPage />} />
        <Route path="/login/teacher" element={<TeacherLoginPage />} />
        <Route path="/login/parent" element={<ParentLoginPage />} />
        <Route path="/login/admin" element={<AdminLoginPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/reset-password" element={<ResetPasswordPage />} />
        <Route path="/change-password" element={<ChangePasswordPage />} />
        <Route path="/access-denied" element={<AccessDeniedPage />} />

        {/* Student portal */}
        <Route path="/student/dashboard" element={<StudentDashboardPage />} />
        <Route path="/student/courses" element={<StudentCoursesPage />} />
        <Route path="/student/assignments" element={<StudentAssignmentsPage />} />
        <Route path="/student/results" element={<StudentResultsPage />} />
        <Route path="/student/attendance" element={<StudentAttendancePage />} />
        <Route path="/student/timetable" element={<StudentTimetablePage />} />
        <Route path="/student/messages" element={<StudentMessagesPage />} />
        <Route path="/student/profile" element={<StudentProfilePage />} />

        {/* Teacher portal */}
        <Route path="/teacher/dashboard" element={<TeacherDashboardPage />} />
        <Route path="/teacher/classes" element={<TeacherClassesPage />} />
        <Route path="/teacher/courses" element={<TeacherCoursesPage />} />
        <Route path="/teacher/assignments" element={<TeacherAssignmentsPage />} />
        <Route path="/teacher/attendance" element={<TeacherAttendancePage />} />
        <Route path="/teacher/assessments" element={<TeacherAssessmentsPage />} />
        <Route path="/teacher/messages" element={<TeacherMessagesPage />} />
        <Route path="/teacher/profile" element={<TeacherProfilePage />} />

        {/* Parent portal */}
        <Route path="/parent/dashboard" element={<ParentDashboardPage />} />
        <Route path="/parent/progress" element={<ParentProgressPage />} />
        <Route path="/parent/attendance" element={<ParentAttendancePage />} />
        <Route path="/parent/results" element={<ParentResultsPage />} />
        <Route path="/parent/timetable" element={<ParentTimetablePage />} />
        <Route path="/parent/messages" element={<ParentMessagesPage />} />
        <Route path="/parent/profile" element={<ParentProfilePage />} />

        {/* Admin portal */}
        <Route path="/admin/dashboard" element={<AdminDashboardPage />} />
        <Route path="/admin/users" element={<AdminUsersPage />} />
        <Route path="/admin/students" element={<AdminStudentsPage />} />
        <Route path="/admin/teachers" element={<AdminTeachersPage />} />
        <Route path="/admin/parents" element={<AdminParentsPage />} />
        <Route path="/admin/classes" element={<AdminClassesPage />} />
        <Route path="/admin/reports" element={<AdminReportsPage />} />
        <Route path="/admin/settings" element={<AdminSettingsPage />} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}
