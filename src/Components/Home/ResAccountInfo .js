import React from "react";
import { FaRegCircleCheck } from "react-icons/fa6";
import { IoIosArrowBack } from "react-icons/io";
import '../../App.css';
import '../../Responsive.css';

const ResAccountInfo = () => {
    return (
        <div className="res-account-info">
            <div className="res-info-container">
                <div className="res-info-icon">
                    <IoIosArrowBack />
                </div>
                <div className="res-info-text">Account Info</div>
            </div>

            <div class="res-inputContainer">
                <div className="res-input-content">
                    <p>Username</p>
                    <div class="res-inputField">
                        <input type="text" placeholder="Name Surename" />
                        <div className="res-verify-icon">
                            <FaRegCircleCheck />
                        </div>
                    </div>
                </div>
                <div className="res-input-content">
                    <p>Email Address</p>
                    <div class="res-inputField">
                        <input type="text" placeholder="test@apple.com" />
                        <div className="res-verify-icon">
                            <FaRegCircleCheck />
                        </div>
                    </div>
                </div>
                <div class="res-input-content">
                    <p>Phone No</p>
                    <div class="res-inputField mb-0">
                        <div class="res-numberBox">
                            <div class="flag">
                                <img
                                    src="https://geo5.net/imagens/Bandeira-da-Africa-do-Sul.png"
                                    alt=""
                                    srcset=""
                                />
                            </div>
                            <span>+27</span>
                        </div>
                        <input type="text" placeholder="xxxxxxxxxxxx" />
                        <div className="res-verify-now-title">Verify Now</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResAccountInfo;