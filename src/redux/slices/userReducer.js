import { createReducer, createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'userSlice',
    initialState : {
        listUser: []
    },
    reducers: {
      getListUser: (state,action) => {
        state.listUser = action.payload
      }
    }
})

export const {getListUser} = userSlice.actions;

export default userSlice.reducer