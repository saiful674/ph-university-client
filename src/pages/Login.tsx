import { JwtPayload } from "jwt-decode";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { TUser, setUser } from "../redux/features/auth/authSlice";
import { useAppDispatch } from "../redux/hooks";
import { varifyToken } from "../utils/varifyToken";

const Login = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const [login] = useLoginMutation();

  const onSubmit = async (data) => {
    const toastId = toast.loading("loggin in...");
    const userInfo = {
      id: data.id,
      password: data.password,
    };
    try {
      const res = await login(userInfo).unwrap();
      // decoded access token and get user info
      const user: JwtPayload = varifyToken(res.data.accessToken) as TUser;
      // set user data
      dispatch(setUser({ user, token: res.data.accessToken }));
      toast.success("Login successful", { id: toastId, duration: 2000 });
      navigate(`/${user.role}/dashboard`);
    } catch (error) {
      if (err) {
        toast.error("Something went wrong!", { id: toastId, duration: 2000 });
      }
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>User Id</label>
      <input type="text" {...register("id")} />

      <label>Password</label>
      <input type="text" {...register("password")} />

      <input type="submit" />
    </form>
  );
};

export default Login;
