import axios from "axios";
import { loginFalse, loginStart,loginSuccess } from "./loginReducer";


export const loginUser = async (user,dispatch,navigate) => {
    dispatch(loginStart());
    try {
        const res = await axios.post("https://airbnbnew.cybersoft.edu.vn/api/auth/signin",user)
        dispatch(loginSuccess(res.data.content));
        navigate("/")
    } catch (error) {
        dispatch(loginFalse())
    }
}