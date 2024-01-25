import { useForm } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { setUser } from "../redux/features/auth/authSlice";
import { useAppDispatch } from "../redux/hooks";
import { varifyToken } from "../utils/varifyToken";

const Login = () => {
  const dispatch = useAppDispatch();
  const { register, handleSubmit } = useForm();

  const [login, { error }] = useLoginMutation();

  console.log("error =>", error);

  const onSubmit = async (data) => {
    const userInfo = {
      id: data.id,
      password: data.password,
    };
    const res = await login(userInfo).unwrap();
    // decoded access token and get user info
    const user = varifyToken(res.data.accessToken);
    // set user data
    dispatch(setUser({ user, token: res.data.accessToken }));
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
