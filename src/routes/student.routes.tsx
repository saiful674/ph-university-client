import AvailableCourses from "../pages/student/AvailableCourses";
import SemesterRegistration from "../pages/student/SemesterRegistration";
import StudentDashboard from "../pages/student/StudentDashboard";

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
  {
    name: "Available Courses",
    path: "available-courses",
    element: <AvailableCourses />,
  },
];
