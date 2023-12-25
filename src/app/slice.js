import { createSlice } from "@reduxjs/toolkit";
import {actors} from './data'

const initialState={
    data:actors,
    query:""
}
const userSlice= createSlice({
    name:"users",
    initialState,
    reducers:{
        addUser:(state,action)=>{
            state.data.push(action.payload);
        },
        queryUser:(state,action)=>{
            state.query=action.payload;
        },
        deleteUser:(state,action)=>{
            const {id} = action.payload;
            state.data=state.data.filter((f)=> f.id !== id)
        },
        editUser: (state, action) => {
            const { id, updatedUser } = action.payload;
            const index = state.data.findIndex((user) => user.id === id);
      
            if (index !== -1) {
              // Update user if found
              state.data[index] = { ...state.data[index], ...updatedUser };
            }
          },
    }
})

export const {addUser,queryUser,deleteUser,editUser}=userSlice.actions;
export default userSlice.reducer