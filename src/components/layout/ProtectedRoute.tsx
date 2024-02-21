import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { TUser, logout } from "../../redux/features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { varifyToken } from "../../utils/varifyToken";
type TProtectedRouteProps = {
  children: ReactNode;
  role?: string | undefined;
};
const ProtectedRoute = ({ children, role }: TProtectedRouteProps) => {
  const { token } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  let user;

  if (!token) {
    return <Navigate to={"/login"} replace={true}></Navigate>;
  }

  if (token) {
    user = varifyToken(token) as TUser;
  }

  if (role && role !== user?.role) {
    dispatch(logout());
    return <Navigate to={"/login"} replace={true}></Navigate>;
  }

  return children;
};

export default ProtectedRoute;
