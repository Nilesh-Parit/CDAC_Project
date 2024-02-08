import React from "react";
import './LoginPage.css'

const LoginPage = ()=>{
    return(
        <div className="container">
            <div className="header">
                <div className="text">SIGN UP</div>
                <div className="underline"></div>
            </div>    
            <div className="inputFields">
                <div className="input">
                    {/* <label className="uname">Username</label>
                    <br/> */}
                    <input type="text" placeholder="Insert Username"/>
                </div> 
                <div className="input">
                {/* <label className="email">Email</label> 
                    <br/> */}
                    <input type="email" placeholder="Insert Email"/>
                </div>
                <div className="input">
                {/* <label className="pword">Password</label>
                    <br/> */}
                    <input type="password" placeholder="Insert Password"/>
                </div>
            </div>
            <div className="forgot_passowrd"><span>Forgot password?</span></div>
            <div className="btn_container">
                <div className="submit">Submit</div>
                <div className="submit">Login</div>
            </div>
        </div>
    );
};
export default LoginPage