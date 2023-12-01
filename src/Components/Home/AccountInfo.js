import React, { useState } from "react";
import { FaAngleDown, FaAngleRight, FaRegCircleCheck, FaRegCircleUser } from "react-icons/fa6";
import { LuFolderLock, LuUser2 } from "react-icons/lu";
import { MdLanguage, MdNotificationsActive, MdOutlineArrowBackIos } from "react-icons/md";
import { RiShareForward2Fill } from "react-icons/ri";
import { TbPasswordMobilePhone } from "react-icons/tb";
import '../../App.css';
import '../../Responsive.css';
import Help from '../../images/help.png';
import LogoWhite from '../../images/logo-white.png';
import PrintImg from '../../images/print.png';
const AccountInfo = () => {
    const [openItem, setOpenItem] = useState(null);

    const toggleItem = (index) => {
        setOpenItem(openItem === index ? null : index);
    };

    const getIcon = (index) =>
        openItem === index ? <FaAngleDown /> : <FaAngleRight />;

    return (
        <div className="accountInfoContainer">
            <div className="single-account">
                <p>Your Profile</p>

                <div className="user">
                    <FaRegCircleUser />
                </div>

                <span>Welcome</span>
                <h2>Name Surname</h2>
                <div>
                    <button className="btn-active">Upload avatar</button>
                </div>
                <div>
                    <button className="btn">Logout</button>
                </div>
            </div>

            <div className="right-single-account">

                <div className="accordion-container">
                    {/* -----------------mobile ---------------- */}
                    <div className="acc-main-mb">
                        <div className="pro-arrow-fl">
                            <a href=""><MdOutlineArrowBackIos className="back" /></a>
                            <p>Profile</p>
                        </div>
                        <div className="acc-pro-mb-fl">
                            <div className="single-account-mobile">
                                <div className="user-mb">
                                    <FaRegCircleUser />
                                </div>

                                <div className="sur">
                                    <span>Welcome</span>
                                    <h2>Name Surname</h2>
                                </div>
                            </div>
                            <img className="print-mb" src={PrintImg} alt="" />
                        </div>
                    </div>

                    <div className="acc-logo-main">
                        <img className='acc-logo' src={LogoWhite} alt="" />
                    </div>
                    <div className="accordion-title" onClick={() => toggleItem(1)}>
                        <div className="accordion-icon-title">
                            <span>
                                {" "}
                                <LuUser2 />
                            </span>
                            Account Info
                        </div>
                        <div className="open-accordion">{getIcon(1)}</div>
                    </div>
                    {openItem === 1 && (
                        <div className="accordion-details">
                            <div class="infoContainer">
                                <div class="inputContainer">
                                    <p>Username</p>
                                    <div class="inputField">
                                        <input type="text" placeholder="Name Surename" />
                                        <div className="verify-icon">
                                            <FaRegCircleCheck />
                                        </div>
                                    </div>
                                </div>
                                <div class="inputContainer">
                                    <p>Email Address</p>
                                    <div class="inputField">
                                        <input type="email" placeholder="test@gmail.com" />
                                        <div className="verify-icon">
                                            <FaRegCircleCheck />
                                        </div>
                                    </div>
                                </div>
                                <div class="inputContainer">
                                    <p>Phone No</p>
                                    <div class="inputField">
                                        <div class="numberBox">
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
                                        <div className="verify-now-title">Verify Now</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/*------------------- 2 ---------------------*/}
                    <div className="accordion-title" onClick={() => toggleItem(2)}>
                        <div className="accordion-icon-title">
                            <span>
                                {" "}
                                <TbPasswordMobilePhone />
                            </span>
                            Password
                        </div>
                        <div className="open-accordion">{getIcon(2)}</div>
                    </div>
                    {openItem === 1 && (
                        <div className="accordion-details">
                            <div className=""></div>
                        </div>
                    )}
                    {/* --------------3---------------- */}
                    <div className="accordion-title" onClick={() => toggleItem(3)}>
                        <div className="accordion-icon-title">
                            <span>
                                <LuFolderLock />
                            </span>
                            Privacy Policy
                        </div>
                        <div className="open-accordion">{getIcon(3)}</div>
                    </div>
                    {openItem === 3 && (
                        <div className="accordion-details">
                            <div className=""></div>
                        </div>
                    )}
                    {/* -----------------------4------------------- */}

                    <div className="accordion-title" onClick={() => toggleItem(4)}>
                        <div className="accordion-icon-title">
                            <span>
                                <MdNotificationsActive />
                            </span>
                            Notification
                        </div>
                        <div className="open-accordion">{getIcon(4)}</div>
                    </div>
                    {openItem === 4 && (
                        <div className="accordion-details">
                            <div className=""></div>
                        </div>
                    )}
                    {/* --------------5---------------- */}
                    <div className="accordion-title" onClick={() => toggleItem(5)}>
                        <div className="accordion-icon-title">
                            <span>
                                <MdLanguage />
                            </span>
                            Language Option
                        </div>
                        <div className="open-accordion">{getIcon(5)}</div>
                    </div>
                    {openItem === 5 && (
                        <div className="accordion-details">
                            <div className=""></div>
                        </div>
                    )}
                    {/* --------------6---------------- */}
                    <div className="accordion-title" onClick={() => toggleItem(6)}>
                        <div className="accordion-icon-title">
                            <span>
                                <RiShareForward2Fill />
                            </span>
                            Share with Friends
                        </div>
                        <div className="open-accordion">{getIcon(6)}</div>
                    </div>
                    {openItem === 6 && (
                        <div className="accordion-details">
                            <div className=""></div>
                        </div>
                    )}
                    {/* help  */}
                    <div className="help-main">
                        <div className="help">
                            <img src={Help} alt="" />
                            <p>How can we help you?</p>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default AccountInfo;