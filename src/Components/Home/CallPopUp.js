import React from "react";
import { RxCross1 } from "react-icons/rx";
import "../../App.css";
import "../../Responsive.css";
import helpCenter from "../../images/helpCenter.png";
import needHelp from "../../images/needHelp.png";
import whatsapp from "../../images/whatsapp.png";

const CallPopUp = ({ setShowCallPopUp }) => {
    return (
        <div className="popup">
            <div className="popup-container">
                <div className="img-container">
                    <img src={needHelp} className="popup-img" alt="" />
                    <div
                        className="close-btn"
                        onClick={() => setShowCallPopUp(false)}
                    >
                        <RxCross1 />
                    </div>
                </div>
                <div className="popup-content">
                    <div className="popup-text">
                        <h3>Need Help?</h3>
                        <p>
                            If you feel you need to speak to someone, please
                            <br></br> contact the local counselor or contact
                            loveLife:
                        </p>
                    </div>
                    <div className="contact-info">
                        <div className="help-center">
                            <img src={helpCenter} alt="" srcset="" />
                            <h2>Cell Center : 0800 128 900</h2>
                        </div>
                        <div className="contact">
                            <img src={whatsapp} alt="" srcset="" />
                            <h2>Chat with someone</h2>
                        </div>
                        <div className="contact-sms">
                            <img src={whatsapp} alt="" srcset="" />
                            <h2>Send "Please call me"</h2>
                        </div>
                        <div className="contact-sms">
                            <img src={whatsapp} alt="" srcset="" />
                            <h2>Send "Please call me"</h2>
                        </div>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Quis ipsum suspendisse ultrices gravida.
                        Risus commodo viverra maecenas accumsan lacus vel
                        facilisis.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CallPopUp;
