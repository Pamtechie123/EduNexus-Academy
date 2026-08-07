import type { ComponentType } from "react";
import type { IconProps } from "@/components/icons";
import {
  GraduationCapIcon,
  ClipboardListIcon,
  UsersIcon,
  ShieldCheckIcon,
} from "@/components/icons";

export type PortalKey = "student" | "teacher" | "parent" | "admin";

export interface PortalInfo {
  key: PortalKey;
  label: string;
  shortLabel: string;
  icon: ComponentType<IconProps>;
  accent: "teal" | "amber" | "navy" | "slate";
  tagline: string;
  description: string;
  features: string[];
  loginPath: string;
  dashboardPath: string;
}

export const PORTALS: PortalInfo[] = [
  {
    key: "student",
    label: "Student Portal",
    shortLabel: "Student",
    icon: GraduationCapIcon,
    accent: "teal",
    tagline: "Track assignments, grades, and what's due next.",
    description:
      "Assignments, results, attendance, and timetable in one focused, mobile-friendly view.",
    features: ["Assignments & submissions", "Grades & report cards", "Attendance & timetable"],
    loginPath: "/login/student",
    dashboardPath: "/student/dashboard",
  },
  {
    key: "teacher",
    label: "Teacher Portal",
    shortLabel: "Teacher",
    icon: ClipboardListIcon,
    accent: "amber",
    tagline: "Manage classes, grade faster, and keep parents in the loop.",
    description:
      "Course materials, assignment grading, attendance, and messaging built for a full teaching day.",
    features: ["Course materials", "Grading & assessments", "Attendance & messaging"],
    loginPath: "/login/teacher",
    dashboardPath: "/teacher/dashboard",
  },
  {
    key: "parent",
    label: "Parent Portal",
    shortLabel: "Parent",
    icon: UsersIcon,
    accent: "navy",
    tagline: "See exactly how your child is doing, in real time.",
    description:
      "A linked view of every child's attendance, grades, and messages from their teachers.",
    features: ["Linked-child dashboard", "Report cards", "Teacher messages"],
    loginPath: "/login/parent",
    dashboardPath: "/parent/dashboard",
  },
  {
    key: "admin",
    label: "Administrator Portal",
    shortLabel: "Administrator",
    icon: ShieldCheckIcon,
    accent: "slate",
    tagline: "Run the whole school from one dashboard.",
    description:
      "User management, academic setup, announcements, and school-wide reporting.",
    features: ["User & role management", "Academic structure", "School-wide reports"],
    loginPath: "/login/admin",
    dashboardPath: "/admin/dashboard",
  },
];

export const SCHOOL_STATS = [
  { value: "1,240+", label: "Students enrolled" },
  { value: "86", label: "Teaching staff" },
  { value: "1,980", label: "Parent accounts" },
  { value: "4", label: "Secure portals, 1 platform" },
];

export const SITE_NAME = "EduNexus Academy";
