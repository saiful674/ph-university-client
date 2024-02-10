import { Layout, Menu } from "antd";
import { Navigate } from "react-router-dom";
import { TUser } from "../../redux/features/auth/authSlice";
import { useAppSelector } from "../../redux/hooks";
import { adminPaths } from "../../routes/admin.routes";
import { facultyPaths } from "../../routes/faculty.routes";
import { studentPaths } from "../../routes/student.routes";
import { sideBarItemsGenerator } from "../../utils/sideBarItemsGenerator";
import { varifyToken } from "../../utils/varifyToken";
const { Sider } = Layout;

const SideBar = () => {
  const { token } = useAppSelector((state) => state.auth);
  let user;

  if (!token) {
    return <Navigate to={"/login"} replace={true}></Navigate>;
  }

  if (token) {
    user = varifyToken(token) as TUser;
  }

  const userRole = {
    ADMIN: "admin",
    FACULTY: "faculty",
    STUDENT: "student",
  };

  let sideBarPath;

  switch (user?.role) {
    case userRole.ADMIN:
      sideBarPath = sideBarItemsGenerator(adminPaths, userRole.ADMIN);
      break;
    case userRole.FACULTY:
      sideBarPath = sideBarItemsGenerator(facultyPaths, userRole.FACULTY);
      break;
    case userRole.STUDENT:
      sideBarPath = sideBarItemsGenerator(studentPaths, userRole.STUDENT);
  }

  return (
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={(broken) => {
        console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
    >
      <div
        style={{
          color: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "4rem",
          fontSize: "20px",
          fontWeight: "bold",
        }}
      >
        <span>PH-University</span>
      </div>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["4"]}
        items={sideBarPath}
      />
    </Sider>
  );
};

export default SideBar;
