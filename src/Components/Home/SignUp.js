
import "../../App.css";
import "../../Responsive.css";
import LogoWhite from "../../images/logo-white.png";
import SignUpImg from "../../images/sign1.png";

const SignUp = () => {

    return (
        <div className="signUp-area">
            {/* left  */}
            <div className="left left-signup">
                <h1>Big title goes here and here and here to make three lines.</h1>
                <div className="signImg">
                    <img src={SignUpImg} alt="" />
                </div>
            </div>
            {/* right  */}
            <div className="right right-signup">
                <img className="signUp-logo" src={LogoWhite} alt="" />
                <div className="signUp-Input">
                    <div className="signUp-Input-Icon">
                        <input type="text" placeholder="Name" name="" id="" />
                    </div>
                    <div className="signUp-Input-Icon">
                        <input type="text" placeholder="Email" name="" id="" />
                    </div>
                    <div>
                        <input type="password" placeholder='Password' name="" id="" />

                        {/* <LuEye className='eye' /> */}
                    </div>

                    <a href="">
                        <button className="sign-btn">Sign up</button>
                    </a>
                    <a href="">
                        <button className="sign-btn sign-btn-fb">
                            Sign up with Facebook
                        </button>
                    </a>
                    <p className="or">
                        Already have an account?{" "}
                        <a className="or" href="">
                            Login
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
