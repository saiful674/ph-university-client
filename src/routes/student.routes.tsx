import AvailableCourses from "../pages/student/AvailableCourses";
import Schedule from "../pages/student/Schedule";
import StudentDashboard from "../pages/student/StudentDashboard";

export const studentPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <StudentDashboard />,
  },
  {
    name: "Class Schedule",
    path: "class-schedule",
    element: <Schedule />,
  },
  {
    name: "Available Courses",
    path: "available-courses",
    element: <AvailableCourses />,
  },
];
