import React, { useState } from "react";
import { IoEyeOffSharp, IoEyeSharp } from "react-icons/io5";
import { MdOutlineArrowBackIos } from "react-icons/md";
import '../../App.css';
import '../../Responsive.css';

const ChangePassword = () => {
    const [showPassword1, setShowPassword1] = useState(false);
    const [showPassword2, setShowPassword2] = useState(false);
    const [showPassword3, setShowPassword3] = useState(false);
    const togglePasswordVisibility1 = () => {
        setShowPassword1((prevShowPassword) => !prevShowPassword);
    };
    const togglePasswordVisibility2 = () => {
        setShowPassword2((prevShowPassword) => !prevShowPassword);
    };
    const togglePasswordVisibility3 = () => {
        setShowPassword3((prevShowPassword) => !prevShowPassword);
    };

    return (
        <div className="res-account-info">
            <div className="res-info-container">
                <div className="res-info-icon">
                    <MdOutlineArrowBackIos />
                </div>
                <div className="res-info-text">Change Password</div>
            </div>

            <div class="res-inputContainer">
                <div className="res-input-content">
                    <p>Enter Old Password</p>
                    <div class="res-passField">
                        <input
                            type={showPassword1 ? "text" : "password"}
                            placeholder="*******"
                        />
                        <div className="res-pass-icon" onClick={togglePasswordVisibility1}>
                            {showPassword1 ? <IoEyeOffSharp /> : <IoEyeSharp />}
                        </div>
                    </div>
                </div>
                <div className="res-input-content">
                    <p>New Password</p>
                    <div class="res-passField">
                        <input
                            type={showPassword2 ? "text" : "password"}
                            placeholder="*******"
                        />
                        <div className="res-pass-icon" onClick={togglePasswordVisibility2}>
                            {showPassword2 ? <IoEyeOffSharp /> : <IoEyeSharp />}
                        </div>
                    </div>
                </div>
                <div className="res-input-content">
                    <p>New Password</p>
                    <div class="res-passField">
                        <input
                            type={showPassword3 ? "text" : "password"}
                            placeholder="*******"
                        />
                        <div className="res-pass-icon" onClick={togglePasswordVisibility3}>
                            {showPassword3 ? <IoEyeOffSharp /> : <IoEyeSharp />}
                        </div>
                    </div>
                </div>
                <div className="chng-btn">
                    <a href=""><button className='sign-btn submit reset-btn'>Submit</button></a>
                </div>
            </div>
        </div>
    );
};

export default ChangePassword;