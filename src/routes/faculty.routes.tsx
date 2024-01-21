import CreateClass from "../pages/faculty/CreateClass";
import FacultyDashboard from "../pages/faculty/FacultyDashboard";

export const facultyPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <FacultyDashboard />,
  },
  {
    name: "Class Management",
    children: [
      {
        name: "Create Class",
        path: "create-class",
        element: <CreateClass />,
      },
    ],
  },
];
