import { jwtDecode } from "jwt-decode";

export const varifyToken = (token: string) => {
  const decoded = jwtDecode(token);
  return decoded;
};
