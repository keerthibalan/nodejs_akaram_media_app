import * as PostUpload from '../api/PostUpload'

export const uploadImage = (data)=> async(dispatch)=>{
    try{
        await PostUpload.uploadImage(data)
    }catch(error){
        console.log(error)
    }
}

export const uploadPost = (data)=> async(dispatch)=>{
    dispatch({type: "UPLOAD_POST_START"})
    try{
        const newPost = await PostUpload.uploadPost(data)
        dispatch({type: "UPLOAD_POST_SUCCESS", data: newPost.data})
    }catch(error){
        console.log(error)
        dispatch({type: "UPLOAD_POST_FAIL"})
    }
}