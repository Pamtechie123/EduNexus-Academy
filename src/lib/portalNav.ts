import type { ComponentType } from "react";
import type { IconProps } from "@/components/icons";
import type { PortalKey } from "@/lib/constants";
import {
  LayoutDashboardIcon,
  BookOpenIcon,
  ClipboardListIcon,
  AwardIcon,
  CalendarIcon,
  MessageSquareIcon,
  UserRoundIcon,
  UsersIcon,
  ShieldCheckIcon,
  BarChartIcon,
} from "@/components/icons";

export interface NavItem {
  label: string;
  path: string;
  icon: ComponentType<IconProps>;
}

export const PORTAL_NAV: Record<PortalKey, NavItem[]> = {
  student: [
    { label: "Dashboard", path: "/student/dashboard", icon: LayoutDashboardIcon },
    { label: "Courses", path: "/student/courses", icon: BookOpenIcon },
    { label: "Assignments", path: "/student/assignments", icon: ClipboardListIcon },
    { label: "Results", path: "/student/results", icon: AwardIcon },
    { label: "Attendance", path: "/student/attendance", icon: CalendarIcon },
    { label: "Timetable", path: "/student/timetable", icon: CalendarIcon },
    { label: "Messages", path: "/student/messages", icon: MessageSquareIcon },
    { label: "Profile", path: "/student/profile", icon: UserRoundIcon },
  ],
  teacher: [
    { label: "Dashboard", path: "/teacher/dashboard", icon: LayoutDashboardIcon },
    { label: "Classes", path: "/teacher/classes", icon: UsersIcon },
    { label: "Courses", path: "/teacher/courses", icon: BookOpenIcon },
    { label: "Assignments", path: "/teacher/assignments", icon: ClipboardListIcon },
    { label: "Attendance", path: "/teacher/attendance", icon: CalendarIcon },
    { label: "Assessments", path: "/teacher/assessments", icon: AwardIcon },
    { label: "Messages", path: "/teacher/messages", icon: MessageSquareIcon },
    { label: "Profile", path: "/teacher/profile", icon: UserRoundIcon },
  ],
  parent: [
    { label: "Dashboard", path: "/parent/dashboard", icon: LayoutDashboardIcon },
    { label: "Child Progress", path: "/parent/progress", icon: BarChartIcon },
    { label: "Attendance", path: "/parent/attendance", icon: CalendarIcon },
    { label: "Results", path: "/parent/results", icon: AwardIcon },
    { label: "Timetable", path: "/parent/timetable", icon: CalendarIcon },
    { label: "Messages", path: "/parent/messages", icon: MessageSquareIcon },
    { label: "Profile", path: "/parent/profile", icon: UserRoundIcon },
  ],
  admin: [
    { label: "Dashboard", path: "/admin/dashboard", icon: LayoutDashboardIcon },
    { label: "Users", path: "/admin/users", icon: UserRoundIcon },
    { label: "Students", path: "/admin/students", icon: UsersIcon },
    { label: "Teachers", path: "/admin/teachers", icon: UserRoundIcon },
    { label: "Parents", path: "/admin/parents", icon: UsersIcon },
    { label: "Classes", path: "/admin/classes", icon: BookOpenIcon },
    { label: "Reports", path: "/admin/reports", icon: BarChartIcon },
    { label: "Settings", path: "/admin/settings", icon: ShieldCheckIcon },
  ],
};

export const PORTAL_ROLE_LABEL: Record<PortalKey, string> = {
  student: "Student Portal",
  teacher: "Teacher Portal",
  parent: "Parent Portal",
  admin: "Administrator",
};
