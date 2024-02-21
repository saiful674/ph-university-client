import { Button, Col, Flex } from "antd";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import PhForm from "../components/forms/PhForm";
import PhInput from "../components/forms/PhInput";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { TUser, setUser } from "../redux/features/auth/authSlice";
import { useAppDispatch } from "../redux/hooks";
import { varifyToken } from "../utils/varifyToken";

const Login = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [login] = useLoginMutation();

  const onSubmit = async (data: { userId: string; password: string }) => {
    const toastId = toast.loading("loggin in...");
    const userInfo = {
      id: data.userId,
      password: data.password,
    };
    try {
      const res = await login(userInfo).unwrap();
      // decoded access token and get user info
      const user = varifyToken(res.data.accessToken) as TUser;
      console.log(res);
      // force user to chenge password after login default password
      if (res?.data?.needsPasswordChange) {
        navigate(`/change-password`);
      } else {
        // set user data
        navigate(`/${user.role}/dashboard`);
      }
      dispatch(setUser({ user, token: res.data.accessToken }));
      toast.success("Login successful", { id: toastId, duration: 2000 });
    } catch (err) {
      if (err) {
        toast.error("Something went wrong!", { id: toastId, duration: 2000 });
      }
    }
  };

  return (
    <Flex justify="center" style={{ marginTop: "20px" }}>
      <Col span={12}>
        <PhForm onSubmit={onSubmit}>
          <PhInput name={"userId"} type={"text"} label={"User Id"} />
          <PhInput name={"password"} type={"text"} label={"Password"} />
          <Button
            htmlType="submit"
            style={{ marginTop: "10px", fontWeight: "500" }}
          >
            Submit
          </Button>
        </PhForm>
      </Col>
    </Flex>
  );
};

export default Login;
