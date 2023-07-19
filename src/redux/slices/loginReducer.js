import { createSlice } from "@reduxjs/toolkit";


const loginReducer = createSlice({
    name: 'loginReducer',
    initialState: {
        login: {
            currentUser: null,
            isFetching: false,
            error: false
        }

    },
    reducers: {
        loginStart: (state) => {
            state.login.isFetching = true;
        },
        loginSuccess: (state,action) => {
            state.login.isFetching = false;
            state.login.currentUser = action.payload;
            state.login.error = false;
        },
        loginFalse: (state) => {
            state.login.isFetching = false;
            state.login.error = true;
        }
    }
})
export const {
    loginStart,
    loginSuccess, 
    loginFalse,
} = loginReducer.actions

export default loginReducer.reducer;