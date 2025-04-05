import React, {useState} from 'react';
import { Link } from "react-router-dom";
import './Login.css';

function Login(){

    const [email, setEmail]=useState("");
    const [password, setPassword]=useState("");

    function handleEmail(e){
        setEmail(e.target.value);
    }

    function handlePassword(e){
        setPassword(e.target.value);
    }

    return(
        <>
        <div className={`login-container ${email || password ? "form-active" : ""}`}>
            <h2>Login</h2>
            <div className='input-box'>
                <input type="text" placeholder="Email/Username" value={email} onChange={handleEmail}/><br/>
            </div>
            <div className='input-box'>
            <input type="password" placeholder="Password" value={password} onChange={handlePassword}/>
            </div>
            <div className='forgot-pass' style={{ display: "flex", justifyContent: "flex-end", margin: "10px 0" }}>
                <a href="#">Forgot Password?</a>
            </div>
            <Link to='/postloginhome'>
                <button>Sign In →</button>
            </Link>
        </div>
        </>
    );

}

export default Login