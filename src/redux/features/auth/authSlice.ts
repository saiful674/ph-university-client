import { createSlice } from "@reduxjs/toolkit";
export type TUser = {
  userId: string;
  role: string;
  iat: number;
  exp: number;
};

type TAuthUser = {
  user: null | TUser;
  token: null | string;
};

const initialState: TAuthUser = {
  user: null,
  token: null,
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      const { user, token } = action.payload;
      state.user = user;
      state.token = token;
    },

    logout: (state) => {
      state.user = null;
      state.token = null;
    },
  },
});

export const { setUser, logout } = authSlice.actions;

export default authSlice.reducer;
