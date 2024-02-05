import { Button, Layout } from "antd";
import { Outlet } from "react-router-dom";
import { logout } from "../../redux/features/auth/authSlice";
import { useAppDispatch } from "../../redux/hooks";
import SideBar from "./SideBar";

const { Header, Content } = Layout;

const MainLayout = () => {
  const dispatch = useAppDispatch();
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <SideBar />
      <Layout>
        <Header style={{ padding: 0 }}>
          {" "}
          <Button onClick={() => dispatch(logout())}>Logout</Button>
        </Header>
        <Content style={{ margin: "24px 16px 0" }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
