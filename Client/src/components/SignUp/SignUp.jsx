import React, {useState} from 'react';
import './SignUp.css';

function SignUp(){

    const [fullName, setFullName]=useState("");
    const [userName, setUserName]=useState("");
    const [instituteName, setinstituteName]=useState("");
    const [batch, setBatch]=useState("");
    const [role, setRole]=useState("");
    const [linkedin, setLinkedin]=useState("");
    const [github, setGithub]=useState("");
    const [gradYear, setGradYear]=useState("");
    const [email, setEmail]=useState("");
    const [password, setPassword]=useState("");

    function handleFullName(e){
        setFullName(e.target.value);
    }

    function handleUserName(e){
        setUserName(e.target.value);
    }

    function handleInstituteName(e){
        setinstituteName(e.target.value);
    }

    function handleGradYear(e){
        setGradYear(e.target.value);
    }

    function handleBatch(e){
        setBatch(e.target.value);
    }

    function handleRole(e){
        setRole(e.target.value);
    }

    function handleLinkedin(e){
        setLinkedin(e.target.value);
    }

    function handleGithub(e){
        setGithub(e.target.value);
    }

    function handleEmail(e){
        setEmail(e.target.value);
    }

    function handlePassword(e){
        setPassword(e.target.value);
    }
    
    return(
        <>
        <div className={`signup-container ${fullName || userName || instituteName || role|| linkedin || gradYear || github|| gradYear || email || password ? "form-active" : ""}`}>
            <h2>Sign Up</h2>
            <div className="input-box">
                <input type="text" placeholder="Full Name" value={fullName} onChange={handleFullName} />
                <input type="text" placeholder="Username" value={userName} onChange={handleUserName} />
            </div>
            <div className='input-box'>
                <select value={instituteName} placeholder="Choose your institute" onChange={handleInstituteName} style={{ color: instituteName ? "black" : "#8c8c8c" }}>
                    <option value="" disabled hidden>Choose Your Institution</option>
                    <option value="Institute A">AISSMS COE</option>
                    <option value="Institute B">AISSMS IOIT</option>
                    <option value="Institute C">AISSMS Management</option>
                </select>
                <input type="text" placeholder="Grad Year" value={gradYear} onChange={handleGradYear}/>
            </div>
            <div className='input-box'>
                <input type="text" placeholder="Batch" value={batch} onChange={handleBatch}/>
                <select type="text" placeholder="Role" value={role} onChange={handleRole} required>
                    <option value="" disabled hidden>Choose Your Role</option>
                    <option value="Student">Student</option>
                    <option value="Alumni">Alumni</option>
                </select>
            </div>
            <div className='input-box'>
                <input type="text" placeholder="LinkedIn" value={linkedin} onChange={handleLinkedin}/>
                <input type="text" placeholder="GitHub" value={github} onChange={handleGithub}/>
            </div>
            <div className='input-box'>
            <input type="text" placeholder="Email" value={email} onChange={handleEmail}/>
            <input type="password" placeholder="Password" value={password} onChange={handlePassword}/>
            </div>
                <button>Sign Up →</button>
            </div>
        </>
    );

}

export default SignUp
