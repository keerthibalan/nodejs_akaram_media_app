const postReducer = (
    state = {posts: null, loading: false, error: false, uploading: false},
    action 
    ) => {
        switch(action.type){
            case "UPLOAD_POST_START":
                return {...state, uploading: true, error: false}
            case "UPLOAD_POST_SUCCESS":
                return {...state, posts: [action.data, ...state.posts], uploading: false, error: false}
            case "UPLOAD_POST_FAIL":
                return {...state, uploading: false, error: true}
            default:
                return state;
        }
    
    }
    
    export  default postReducer