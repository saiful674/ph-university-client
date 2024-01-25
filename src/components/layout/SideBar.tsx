import { Layout, Menu } from "antd";
import { useAppSelector } from "../../redux/hooks";
import { adminPaths } from "../../routes/admin.routes";
import { facultyPaths } from "../../routes/faculty.routes";
import { studentPaths } from "../../routes/student.routes";
import { sideBarItemsGenerator } from "../../utils/sideBarItemsGenerator";
const { Sider } = Layout;

const SideBar = () => {
  const user = useAppSelector((state) => state.auth.user);
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
