import axios from "axios"
export const getPostsAction = () => async(dispatch) =>{
    try {
        const data = await axios.get("https://post-app-bay.vercel.app/getPosts")
        dispatch({type:"GET_POSTS", payload: data.data})
    } catch (error) {
        console.log(error);
    }
}

export const deletePostAction = (id) => async(dispatch) =>{
    try {
        await axios.delete(`https://post-app-bay.vercel.app/deletepost/${id}`)

        dispatch({type:"DELETE_POST", payload: id})


    } catch (error) {
        console.log(error);
    }
}

export const createPostAction = (postData) => async(dispatch) =>{
    try {
        const data = await axios.post("https://post-app-bay.vercel.app/createpost",postData)
        console.log(data.data);
        dispatch({type:"CREATE_POST", payload: data.data})
    } catch (error) {
        console.log(error);
    }
}

export const updatePostAction = (id,postData) => async(dispatch) =>{
    try {
        const data = await axios.patch(`https://post-app-bay.vercel.app/updatepost/${id}`, postData)
        dispatch({type:"UPDATE_POST", payload: data.data})
    } catch (error) {
        console.log(error);
    }
}