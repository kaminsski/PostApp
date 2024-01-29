
const postReducer = (state={posts:[]},action) =>{
    switch (action.type) {
        case "GET_POSTS":
            return {
                posts: action.payload
            }
        case "CREATE_POST":
            return {
                posts: [...state.posts ,action.payload]
            
            }    
        case "DELETE_POST":
            return {
                posts: [...state.posts.filter((post) => post._id !== action.payload)]
            
            }   

        case "UPDATE_POST":
            console.log(action.payload);
            return {
                posts: [...state.posts.map(post => post._id === action.payload._id ? action.payload : post)]
            
            }   
            
    
        default:
            return state;
    }
}

export default postReducer