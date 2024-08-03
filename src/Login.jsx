import React from "react"
import './Login.css'
import { useState } from "react"
import username_icon from './assets/user.png'
import email_icon from './assets/email.png'
import password_icon from './assets/lock.png'
export default function Login() {
    let [task, setTask] = useState("Sign-Up");
    return (
        <>
            <div className="container">
                <div className="header">
                    <div className="text">{task}</div>
                </div>
                <div className="inputs">
                    {task === "Login" ? <div></div> : <div className="input">
                        <img src={username_icon} alt="username" />
                        <input type="text" placeholder="Username" />
                    </div>}
                    <div className="input">
                        <img src={email_icon} alt="email" />
                        <input type="email" placeholder="Email" />
                    </div>
                    <div className="input">
                        <img src={password_icon} alt="password" />
                        <input type="password" placeholder="Password" />
                    </div>
                </div>
                {task === "Sign-Up" ? <div></div> : <div className="forgot-password">Forgot password? <span>Click here</span></div>
                }
                <div className="submit-container">
                    <button className="submit" onClick={() => { setTask("Sign-Up") }}>Sign Up</button>
                    <button className="submit" onClick={() => { setTask("Login") }}>Login</button>

                </div>
            </div>
        </>
    )
}