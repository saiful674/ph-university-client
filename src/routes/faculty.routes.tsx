import FacultyDashboard from "../pages/faculty/FacultyDashboard";
import MyClasses from "../pages/faculty/MyClasses";
import MyStudent from "../pages/faculty/MyStudent";

export const facultyPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <FacultyDashboard />,
  },
  {
    name: "My Classes",
    path: "classes",
    element: <MyClasses />,
  },
  {
    path: "courses/:registerSemesterId/:courseId",
    element: <MyStudent />,
  },
];
