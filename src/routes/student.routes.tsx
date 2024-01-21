import StudentDashboard from "../pages/student/StudentDashboard";
import SemesterRegistration from "../pages/student/semesterRegistration";

export const studentPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <StudentDashboard />,
  },
  {
    name: "Semester Registration",
    path: "semester-registration",
    element: <SemesterRegistration />,
  },
];
