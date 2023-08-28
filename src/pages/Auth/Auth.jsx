import React, { useState } from "react";
import './Auth.css'
import Logo from '../../img/logo.png'
import { useDispatch, useSelector } from "react-redux";
import { logIn, signUp } from "../../action/Auth";

const Auth = () => {
    const dispatch = useDispatch()
    const loading = useSelector((state)=>state.authReducer.loading)
    const [isSignup, setIsSignup] = useState(true);
    // console.log(loading);
    const [data, setData] = useState({
        firstname: "",
        lastname: "",
        password: "",
        confirmpass: "",
        username: ""
    })
    const [confirmpass, setConfirmPass] = useState(true);
    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };   

    const handleSubmit = (e) =>{
       e.preventDefault();
       if(isSignup){
          data.password === data.confirmpass
            ? dispatch(signUp(data))
            : setConfirmPass(false);          
       }else{
            dispatch(logIn(data))
       }
    };
    const resetForm = () =>{
        setConfirmPass(true)
        setData({
            firstname: "",
            lastname: "",
            password: "",
            confirmpass: "",
            username: ""
        })

    }
    return (
        <div className="Auth">
            <div className="a-left">
                <img src={Logo} alt="" />
                <div className="WebName">
                    <h1>Akaram World Media</h1>
                    <h6>Explore the People ideas throught the world</h6>
                </div>
            </div>

            <div className="a-right">
                <form className="InfoForm authForm" onSubmit={handleSubmit}>

                    <h3>{isSignup ? "Sign up" : "Login"}</h3>
                    {isSignup &&
                        <div>
                            <input type="text" 
                                placeholder="FirstName" 
                                className="InfoInput" 
                                name='firstname' 
                                onChange={handleChange}
                                value={data.firstname}/>
                            <input type="text" 
                                placeholder="LastName" 
                                className="InfoInput" 
                                name='lastname' 
                                onChange={handleChange} 
                                value={data.lastname}/>
                        </div>
                    }

                    <div>
                        <input type="text"
                            placeholder="UserName"
                            className="InfoInput"
                            name='username'
                            onChange={handleChange}
                            value={data.username}/>
                    </div>
                    <div>
                        <input type="password" 
                            placeholder="Password" 
                            className="InfoInput" 
                            name='password' 
                            onChange={handleChange}
                            value={data.password}/>
                        {isSignup &&
                            <input type="password" 
                                placeholder="Confirmpassword" 
                                className="InfoInput" 
                                name='confirmpass' 
                                onChange={handleChange}
                                value={data.confirmpass}/>
                        }

                    </div>
                    <span style={{display: confirmpass? "none": "block", color: 'red', fontSize: '12px', alignSelf: "flex-end", marginRight: "5px"}}>
                        * Confirm password is not same
                    </span>
                    <div>
                        <span style={{ fontSize: '12px', cursor: "pointer" }} onClick={() => {setIsSignup((prev) => !prev);  resetForm()}} >
                            {isSignup ? "Alerady have an accont. Login!" : "Don't have an account Sign Up"}
                        </span>
                    </div>
                    <button className="button infoButton" type="submit" >
                        {isSignup ? "Signup" : "Log In"}
                    </button>


                </form>

            </div>
        </div>
    );
}

export default Auth