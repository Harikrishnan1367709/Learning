import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  Users: [],
};

export const userSlice = createSlice({
  name: "Users",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.Users = [...state.Users, action.payload];
    },
    deleteUser: (state, action) => {
      state.Users = state.Users.filter((_, index) => index !== action.payload);
    },
  },
});

export const { setUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;
