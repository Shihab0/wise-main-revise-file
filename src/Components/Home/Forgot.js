// import React from 'react';
import '../../App.css';
import '../../Responsive.css';
import ForgotImg from '../../images/forgot.png';
import LogoWhite from '../../images/logo-white.png';


// import Forgot from '../../images/sign1.png';
const Forgot = () => {
    return (
        <div className='signUp-area forgot-main'>
            {/* left  */}
            <div className='left left-forgot'>
                <img className='forgotImg' src={ForgotImg} alt="" />
                <h2>Forgot
                    Password?</h2>
                <p>Don’t worry! It happens.</p>
                <p>Please enter the address associated
                    with your account.</p>
            </div>
            {/* right  */}
            <div className='right right-forgot'>
                <img className='forgot-logo' src={LogoWhite} alt="" />

                {/* mobile  */}
                <div className='forgot-mobile-main'>
                    <img className='forgotImg' src={ForgotImg} alt="" />
                    <h2>Forgot
                        Password?</h2>
                    <p>Don’t worry! It happens. Please enter the address associated
                        with your account.</p>
                </div>
                <div className='signUp-Input forgot-input'>
                    <input type="text" placeholder='Username/email' name="" id="" />
                    <a href=""><button className='sign-btn submit'>Submit</button></a>
                </div>

            </div>
        </div>
    );
};

export default Forgot;