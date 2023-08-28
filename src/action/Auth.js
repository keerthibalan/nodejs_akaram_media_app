import * as Auth from '../api/Auth'

export const logIn = (formData) => async(dispatch) => {

    //Store the data in redux
    dispatch({type: "AUTH_START"})
    try{
        const {data} = await Auth.logIn(formData)
        dispatch({type: "AUTH_SUCCESS", data: data})
    }catch(error){
        console.log(error)
        dispatch({type: "AUTH_FAIL"})
    } 
}


export const signUp = (formData) => async(dispatch) => {

    //Store the data in redux
    dispatch({type: "AUTH_START"})
    try{
        const {data} = await Auth.signUp(formData)
        dispatch({type: "AUTH_SUCCESS", data: data})
    }catch(error){
        console.log(error)
        dispatch({type: "AUTH_FAIL"})
    }
}