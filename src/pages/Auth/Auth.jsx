import React from "react";
import './Auth.css'
import Logo from '../../img/logo.png'

const Auth = () => {
    return(
        <div className="Auth">
            <div className="a-left">
                <img src={Logo} alt="" />
                <div className="WebName">
                    <h1>Akaram World Media</h1>
                    <h6>Explore the People ideas throught the world</h6>
                </div>
            </div>

            {/* <SignUp/> */}
            <Login/>
        </div>
    );
}

function Login(){
    return(
        <div className="a-right">
            <form  className="InfoForm authForm">

                <h3>Login </h3>
                <div>
                    <input type="text" placeholder="UserName" className="InfoInput" name='username' />
                </div>
                <div>
                    <input type="text" placeholder="Password" className="InfoInput" name='password'/>
                </div>
                <div>
                    <span style={{fontSize: '12px'}}>Dosn't have an accont. Sign up</span>
                    <button className="button infoButton" type="submit">Login</button>
                </div>
               
            </form>

        </div>
    );
}

function SignUp(){
    return(
        <div className="a-right">
            <form  className="InfoForm authForm">

                <h3>Sing up</h3>
                <div>
                    <input type="text" placeholder="FirstName" className="InfoInput" name='firstname'/>
                    <input type="text" placeholder="LastName" className="InfoInput" name='lastname'/>
                </div>
                <div>
                    <input type="text" placeholder="UserName" className="InfoInput" name='username' />
                </div>
                <div>
                    <input type="text" placeholder="Password" className="InfoInput" name='password'/>
                    <input type="text" placeholder="Confirmpassword" className="InfoInput" name='confirmpass'/>
                </div>
                <div>
                    <span style={{fontSize: '12px'}}>Alerady have an accont. Login!</span>
                </div>
                <button className="button infoButton" type="submit">Signup</button>
            </form>

        </div>
    );
}
export default Auth