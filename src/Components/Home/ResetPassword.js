import React, { useState } from 'react';
import { IoEyeOffSharp, IoEyeSharp } from "react-icons/io5";
import '../../App.css';
import '../../Responsive.css';
import ForgotImg from '../../images/forgot.png';
import LogoWhite from '../../images/logo-white.png';
const ResetPassword = () => {
    const [showPassword1, setShowPassword1] = useState(false);
    const togglePasswordVisibility1 = () => {
        setShowPassword1((prevShowPassword) => !prevShowPassword);
    };
    return (
        <div className='signUp-area '>
            {/* left  */}
            <div className='left left-forgot'>
                <img className='forgotImg' src={ForgotImg} alt="" />
                <h2>Reset
                    Password?</h2>
                <p>Don’t worry! It happens.</p>
                <p>Please enter the address associated
                    with your account.</p>
            </div>
            {/* right  */}
            <div className='right right-reset'>
                <img className='reset-logo' src={LogoWhite} alt="" />
                {/* mobile  */}
                <div className='forgot-mobile-main'>
                    <img className='forgotImg' src={ForgotImg} alt="" />
                    <h2>Reset
                        Password?</h2>
                    <p>Don’t worry! It happens. Please enter the address associated
                        with your account.</p>
                </div>
                <div className='signUp-Input reset-input'>

                    <div className="signUp-Input-Icon">
                        <input
                            type={showPassword1 ? "text" : "password"}
                            placeholder="Password"
                            name=""
                            id=""
                        />
                        <div onClick={togglePasswordVisibility1}>
                            {" "}
                            {showPassword1 ? (
                                <IoEyeSharp className="Input-Icon" />
                            ) : (
                                <IoEyeOffSharp className="Input-Icon" />
                            )}
                        </div>
                    </div>
                    <input type="password" placeholder='Confirm Password' name="" id="" />
                    <a href=""><button className='sign-btn submit reset-btn'>Submit</button></a>
                </div>

            </div>
        </div>
    );
};

export default ResetPassword;