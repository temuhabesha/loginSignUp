import React, { useState } from 'react'
import './LoginSignup.css'
import { FaUserAlt } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";

const LoginSignup = () => {

const [action,setaction] = useState("Sign Up")

  return (
    <div className='container'>
        <div className="header">
            <div className="text">{action}</div>
            <div className="underline"></div>
        </div>
        <div className="inputs">
            {action==="LogIn"?<></>:<div className="input">
            <FaUserAlt className='img'/>
                <input type="text" placeholder='name'/>
            </div>}
            
            <div className="input">
            <MdOutlineMail className='img'/>
                <input type="email" placeholder='email'/>
            </div>
            <div className="input">
            <RiLockPasswordLine className='img'/>
                <input type="password" placeholder='password'/>
            </div>
        </div>
        {action==="Sign Up"?<></>:<div className="forgot-password">Lost Password? <span>Click Here</span>
            </div>}
        
        <div className="submit-container">
            <div className={action==="LogIn"?"submit gray":"submit"} onClick={()=>{setaction("Sign Up")}}>Sign Up</div>
            <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setaction("LogIn")}}>Login</div>
        </div>

    </div>
  )
}

export default LoginSignup
