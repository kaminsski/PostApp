import axios from "axios"
import { toast } from "react-toastify"
export const registerAction = (authData) => async(dispatch) =>{
    try {
        const data = await axios.post("https://post-app-bay.vercel.app/register", authData)
        dispatch({type:"REGISTER", payload: data})
        window.location = "/"
    } catch (error) {
        console.log(error);
    }
}

export const loginAction = (authData) => async(dispatch) =>{
    try {
        const data = await axios.post("https://post-app-bay.vercel.app/login", authData)
        dispatch({type:"LOGIN", payload: data})
        window.location = "/"
    } catch (error) {
        toast(error.response.data.msg, {
            position:"top-right",
            autoClose:5000
        })
    }
}