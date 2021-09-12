// import { isTerminatorless } from '@babel/types'
import React, { useState } from 'react';
import './formStyles.css';
import eye from "../../images/eye.png"

const Form = () => {

    const [setRole, set] = useState("default");
    const [shownPassword, setShownPassword] = useState(false);
    const [showEmail, setShownEmail] = useState(false);
    const [showName, setName] = useState('')
    const [emailAddress, validEmail] = useState('');
    const [errors, setErrors] = useState('');
    const [passwordError, setPasswordError] = useState ('')
    const [showLabel, setLabel] = useState(false)
    const [nameLabel, setNameLabel] = useState(false)
    const [passwordLabel, setPasswordLabel] = useState(false)
    const [givenPassword, setGivenPassword] = useState('')


    const changedEmail = (e) => {
        e.preventDefault();
        validEmail(e.target.value);
        if (!emailAddress) {
           setErrors('Email address is required')
        } else if (!/\S+@\S+/.test(emailAddress)) {
            setErrors('Email address is invalid')
        } else {
            setErrors('')
        }

        setLabel(!emailAddress > 0 ? false : true);
        
    }

    const handleName = (e) => {
        e.preventDefault();
        setName(e.target.value)

        setNameLabel(!e > 0 ? false : true);
    }

    const handlePassword = (e) => {
        e.preventDefault();
        setGivenPassword(e.target.value);
        if (!givenPassword.length < 8) {
            setPasswordError("Minimum of 8 characters")
        } else {
            setPasswordError('')
        }

        setPasswordLabel(!e > 0 ? false : true);
    }

    const handleToggleVisiblity = () => {
        setShownPassword(shownPassword ? false : true);
    }

    const handleEmailVisibility = () => {
        setShownEmail(showEmail ? false : true);
    }

    const handleChange = (e) => {
        e.preventDefault()
        set(e.target.value);
    }


        return (
            <>
              <div className="container">
                <div className="text">
                    <h1>Let's set up your account</h1>
                    <p>Already have an account?   <span className="tandc">Sign in</span></p>
                </div>
                <form action="" className="formContainer">
                    <div className="inputContainer">
                        <label htmlFor="name" className={ nameLabel ? "lText" : "activeName"}>Your Name</label>
                        <input type="text" name="name" placeholder="Your name" value={showName} onChange={handleName} />
                    </div>
                    <div className="inputContainer eyeToggle">
                        <label htmlFor="email" className={ showLabel ? "lTex" : "activeEmail" } >Email address</label>
                        <input type={showEmail ? "text" : "password"} className="selectType" name="emailAddress" id={errors.length > 0 ? "error" : "" } value={emailAddress} onChange={changedEmail} placeholder="Email address" />
                        {showLabel ?  <img src={eye} className="eyeIcon" onClick={handleEmailVisibility} alt="" />  : " "} 
                        <span id="spanError" >{errors}</span>
                    </div>
                    <div className="inputContainer">
                        <select name="" id="" className="selectType" value={setRole} onChange={handleChange}> 
                            <option name="" value="I would describe my user type as">I would describe my user type as</option>
                            <option name="" value="Developer">Developer</option>
                            <option name="" value="Designer">Designer</option>
                        </select>
                    </div>
                    <div className="inputContainer eyeToggle">
                        <label htmlFor="password" className={ passwordLabel ? "lText" : "activePw"}>Password</label>
                        <input type={shownPassword ? "text" : "password"} className="selectType" name="password" placeholder="Password" value={givenPassword} onChange={handlePassword} />
                        <img src={eye} className="eyeIcon" onClick={handleToggleVisiblity} alt="eye" />
                        <span id="spanError" >{passwordError}</span>
                    </div>
                     <button type="submit"className="submitForm">Next</button>
                </form>
                <div className="privacy">
                    <p>By clicking the "Next" button, you agree to creating 
                        a free account, and to <span className="tandc">Terms of
                        Service </span> and <span className="tandc">Privacy Policy</span>
                    </p>
                </div>
              </div>  
            </>
        )
}

export default Form
