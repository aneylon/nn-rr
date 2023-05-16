import { createSlice } from "@reduxjs/toolkit";
import { users } from "./exampleData";
export const userSlice = createSlice({
  name: "users",
  initialState: { value: users },
  reducers: {
    addUser: (state, action) => {
      state.value.push(action.payload);
    },
    deleteUser: (state, action) => {
      state.value = state.value.filter((user) => user.id !== action.payload.id);
    },
    updateUser: (state, action) => {
      console.log("update user");
      state.value.map((user) => {
        if (user.id === action.payload.id)
          user.userName = action.payload.userName;
      });
      return state;
    },
  },
});
export default userSlice.reducer;
export const { addUser, deleteUser, updateUser } = userSlice.actions;
