import { createSlice } from "@reduxjs/toolkit";
import { actors } from "./data";

const initialState = {
  data: actors,
  users: [],
  query: "",
};
const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action) => {
      const { id, name, email, username } = action.payload;
      state.users.push({ id, name, email, username });
    },
    queryUser: (state, action) => {
      state.query = action.payload;
    },
    deleteUser: (state, action) => {
      const { id } = action.payload;
      state.users = state.users.filter((f) => f.id !== id);
    },
    editUser: (state, action) => {
      const { id, updatedUser } = action.payload;
      const index = state.users.findIndex((user) => user.id === id);

      if (index !== -1) {
        // Update user if found
        state.users[index] = { ...state.users[index], ...updatedUser };
      }
    },
    setUsers: (state, action) => {
      state.users = action.payload;
    },
  },
});

export const { addUser, queryUser, deleteUser, editUser,setUsers } = userSlice.actions;
export const selectUsers=(state)=>state.user.users;
export default userSlice.reducer;
