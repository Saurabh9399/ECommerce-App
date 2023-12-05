import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: localStorage.getItem("user"),
    error: null,
  },
  reducers: {
    setUser: (state, action) => {
        localStorage.setItem("user", state.user)
      state.user = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    logoutUser: (state) => {
        localStorage.setItem('user', null);
      state.user = null;
    },
    getUser: (state) => {
        state.user = localStorage.getItem('user');
    }
  },
});

export const { setUser, setError, logoutUser,getUser } = authSlice.actions;

export default authSlice.reducer;
