# EduNexus Academy — Page-by-Page Build Plan

Every page below is now a real, routed page in `src/App.tsx` — nothing in
the app falls back to a placeholder anymore. This file tracks build order
and is the map for wiring up a real backend next.

Legend: ✅ built (real UI + mock data) · 🔌 needs a backend to be "real"

## Phase 0 — Public Site

- ✅ Home page (`src/pages/public/HomePage.tsx`)

## Phase 1 — Foundation & Authentication

- ✅ Student login (`src/pages/auth/StudentLoginPage.tsx`)
- ✅ Teacher login (`src/pages/auth/TeacherLoginPage.tsx`)
- ✅ Parent login (`src/pages/auth/ParentLoginPage.tsx`)
- ✅ Administrator login (`src/pages/auth/AdminLoginPage.tsx`)
- ✅ Forgot password (`src/pages/auth/ForgotPasswordPage.tsx`)
- ✅ Reset password (`src/pages/auth/ResetPasswordPage.tsx`)
- ✅ Change password (`src/pages/auth/ChangePasswordPage.tsx`)
- ✅ Access denied (`src/pages/auth/AccessDeniedPage.tsx`)
- 🔌 Real backend auth / protected-route guard (forms currently simulate
  sign-in client-side — see "What's simulated" below)

## Phase 2 — Admin Portal & Academic Setup

- ✅ Dashboard (`src/pages/admin/DashboardPage.tsx`)
- ✅ Users (`src/pages/admin/UsersPage.tsx`)
- ✅ Students (`src/pages/admin/StudentsPage.tsx`)
- ✅ Teachers (`src/pages/admin/TeachersPage.tsx`)
- ✅ Parents (`src/pages/admin/ParentsPage.tsx`)
- ✅ Classes & Subjects (`src/pages/admin/ClassesPage.tsx`)
- ✅ Reports (`src/pages/admin/ReportsPage.tsx`)
- ✅ Settings (`src/pages/admin/SettingsPage.tsx`)

## Phase 3 — Teacher Portal

- ✅ Dashboard (`src/pages/teacher/DashboardPage.tsx`)
- ✅ Classes (`src/pages/teacher/ClassesPage.tsx`)
- ✅ Course materials (`src/pages/teacher/CoursesPage.tsx`)
- ✅ Assignments (`src/pages/teacher/AssignmentsPage.tsx`)
- ✅ Attendance (`src/pages/teacher/AttendancePage.tsx`)
- ✅ Assessments (`src/pages/teacher/AssessmentsPage.tsx`)
- ✅ Messages (`src/pages/teacher/MessagesPage.tsx`)
- ✅ Profile (`src/pages/teacher/ProfilePage.tsx`)

## Phase 4 — Student Portal

- ✅ Dashboard (`src/pages/student/DashboardPage.tsx`)
- ✅ Courses (`src/pages/student/CoursesPage.tsx`)
- ✅ Assignments (`src/pages/student/AssignmentsPage.tsx`)
- ✅ Results (`src/pages/student/ResultsPage.tsx`)
- ✅ Attendance (`src/pages/student/AttendancePage.tsx`)
- ✅ Timetable (`src/pages/student/TimetablePage.tsx`)
- ✅ Messages (`src/pages/student/MessagesPage.tsx`)
- ✅ Profile (`src/pages/student/ProfilePage.tsx`)

## Phase 5 — Parent Portal

- ✅ Dashboard (`src/pages/parent/DashboardPage.tsx`)
- ✅ Child Progress (`src/pages/parent/ProgressPage.tsx`)
- ✅ Attendance (`src/pages/parent/AttendancePage.tsx`)
- ✅ Results (`src/pages/parent/ResultsPage.tsx`)
- ✅ Timetable (`src/pages/parent/TimetablePage.tsx`)
- ✅ Messages (`src/pages/parent/MessagesPage.tsx`)
- ✅ Profile (`src/pages/parent/ProfilePage.tsx`)

## Phase 6 — Security, QA & Launch

- 🔌 Cross-portal access-control audit (needs a real backend)
- 🔌 Form & data validation against real API responses
- ⬜ Performance, pagination & loading-state pass
- ⬜ Accessibility & usability review
- ⬜ Production build & deployment

---

## What's simulated right now

There is no backend yet, so:

- The four login forms validate input client-side, then navigate straight
  to the matching dashboard — no real credential check happens.
- "Forgot password" and "Reset password" show their success states
  without actually sending or verifying anything.
- Every dashboard and portal page renders realistic **mock data** defined
  at the top of its file — swap this for real API calls once the backend
  exists.
- There's no session storage or route guard yet, so any URL is reachable
  directly by typing it in — that's the "real backend auth" item above.
- Table "actions" (e.g. **Create user**, **Add student**) render but
  aren't wired to anything yet.

## Working convention

Every page is a real route in `App.tsx`, using the shared `PortalShell`
(sidebar + topbar) for the three authenticated portals plus admin, and
`AuthLayout` for the sign-in / password flows. Shared building blocks
live in `src/components/portal/` (`StatCard`, `PanelCard`, `DataTable`,
`ProgressBar`, `Badge`, `ListItem`, `InfoRow`) — reuse those instead of
one-off markup when adding new pages later.
