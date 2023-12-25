import { createSlice } from "@reduxjs/toolkit";
import { actors } from "./data";

const loadState = () => {
  try {
    const serializedState = localStorage.getItem("userState");
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (error) {
    console.error("Error loading state from local storage:", error);
    return undefined;
  }
};

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("userState", serializedState);
  } catch (error) {
    console.error("Error saving state to local storage:", error);
  }
};

const initialState = loadState() || {
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
      saveState(state);
    },
    queryUser: (state, action) => {
      state.query = action.payload;
      saveState(state);
    },
    deleteUser: (state, action) => {
      const { id } = action.payload;
      state.users = state.users.filter((f) => f.id !== id);
      saveState(state);
    },
    editUser: (state, action) => {
      const { id, updatedUser } = action.payload;
      const index = state.users.findIndex((user) => user.id === id);

      if (index !== -1) {
        // Update user if found
        state.users[index] = { ...state.users[index], ...updatedUser };
        saveState(state);
      }
    },
    setUsers: (state, action) => {
      state.users = action.payload;
      saveState(state);
    },
  },
});

export const { addUser, queryUser, deleteUser, editUser, setUsers } =
  userSlice.actions;
export const selectUsers = (state) => state.user.users;
export default userSlice.reducer;
