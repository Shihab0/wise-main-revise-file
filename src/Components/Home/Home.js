import React, { useState } from "react";
import { FaAngleRight } from "react-icons/fa6";
import { IoSearchSharp } from "react-icons/io5";
import { LuUser2 } from "react-icons/lu";
import "../../App.css";
import "../../Responsive.css";
import Logo from "../../images/b-logo.png";
import Box1 from "../../images/box1.png";
import Box2 from "../../images/box2.png";
import Box3 from "../../images/box3.png";
import Box4 from "../../images/box4.png";
import Box5 from "../../images/box5.png";
import Box6 from "../../images/box6.png";
import Icon5 from "../../images/call.png";
import Icon1 from "../../images/icon1.png";
import Icon2 from "../../images/icon2.png";
import Icon3 from "../../images/icon3.png";
import Icon4 from "../../images/icon4.png";
import MbIcon1 from "../../images/mb1.png";
import MbIcon2 from "../../images/mb2.png";
import MbIcon3 from "../../images/mb3.png";
import MbIcon4 from "../../images/mb4.png";
import Banner from "../../images/mobile-banner.jpg";
import Topics from "../../images/topics.png";
import Slide from "../Slide/Slide";
import Slide2 from "../Slide/slide2";
import CallPopUp from "./CallPopUp";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import MobileHamburger from "../HamburgerMenu/MobileHamburger";

const Home = () => {
  const [showCallPopUp, setShowCallPopUp] = useState(false);

  return (
    <div className="wise-wrapper">
      {/*---------------------------------sidebar menu----------------------------------  */}
      <div className="sidebar-wrapper">
        <div className="menu">
          <img className="b-logo" src={Logo} alt="" />
        </div>
        <div className="menu">
          <HamburgerMenu />
          <p>Menu</p>
        </div>
        <div className="menu">
          <img src={Icon1} alt="" />
          <p>Recent</p>
        </div>
        <div className="menu">
          <img src={Icon2} alt="" />
          <p>Clinic Finder</p>
        </div>
        <div className="menu" onClick={() => setShowCallPopUp(true)}>
          <img src={Icon3} alt="" />
          <p>Need Help</p>
        </div>
        <div className="menu">
          <img src={Icon4} alt="" />
          <p>Home</p>
        </div>

        <div className="call">
          <img src={Icon5} alt="" />
        </div>
      </div>
      {/* ---------------------------------home-----------------------------------  */}
      {/* top-section  */}
      <div className="main ">
        {/* desktop  */}
        <div className="top-sec">
          <div className="search-box ">
            <IoSearchSharp className="search-icon" />
            <input
              placeholder="Search for topics or type your question here"
              className="input-f"
              type="text"
            />
          </div>
          <div>
            <LuUser2 className="user-icon" />
          </div>
        </div>
        {/* mobile  */}
        <div className="mobile-nav">
          <div className="menu">
            <img className="b-logo" src={Logo} alt="" />
          </div>
          <div>
            <LuUser2 className="user-icon" />
          </div>
        </div>
        {/* -----------------------------box-wrapper------------------------------  */}
        <div className="mb-banner">
          <img src={Banner} alt="" />
        </div>
        {/* mobile  */}
        <div className="search-box search-mobile ">
          <IoSearchSharp className="search-icon" />
          <input
            placeholder="Search for topics or type your question here"
            className="input-f"
            type="text"
          />
        </div>
        {/* mobile  */}
        <div className="box-main">
          <div className="box-wrapper">
            <div className="single-box">
              <img src={Box1} alt="" />
              <p>Family planning: Which method should I use?</p>
            </div>
            <div className="single-box">
              <img src={Box2} alt="" />
              <p>Discussing condoms with your partner? Learn how!</p>
            </div>
          </div>
          <div className="box-wrapper">
            <div className="single-box">
              <img src={Box3} alt="" />
              <p>HIV prevention pills: Is PrEP for you?</p>
            </div>
            <div className="single-box">
              <img src={Box4} alt="" />
              <p>Should you get tested for HIV? Find out</p>
            </div>
          </div>
          <div className="box-wrapper">
            <div className="single-box">
              <img src={Box5} alt="" />
              <p>Are you dating? Check if your relationship is healthy</p>
            </div>
            <div className="single-box">
              <img src={Box6} alt="" />
              <p>Use our Clinic Finder to find your nearest clinic</p>
            </div>
          </div>
        </div>
        {/* desktop  */}
        <div className="box-desktop">
          <div className="box-wrapper">
            <div className="single-box">
              <img src={Box1} alt="" />
              <p>Family planning: Which method should I use?</p>
            </div>
            <div className="single-box">
              <img src={Box2} alt="" />
              <p>Discussing condoms with your partner? Learn how!</p>
            </div>
            <div className="single-box">
              <img src={Box3} alt="" />
              <p>HIV prevention pills: Is PrEP for you?</p>
            </div>
          </div>
          <div className="box-wrapper">
            <div className="single-box">
              <img src={Box4} alt="" />
              <p>Should you get tested for HIV? Find out</p>
            </div>
            <div className="single-box">
              <img src={Box5} alt="" />
              <p>Are you dating? Check if your relationship is healthy</p>
            </div>
            <div className="single-box">
              <img src={Box6} alt="" />
              <p>Use our Clinic Finder to find your nearest clinic</p>
            </div>
          </div>
        </div>

        {/*---------------------------------- how ----------------------------- */}
        <Slide2 />

        {/* <div className="how container">
                    <img src={How} alt="" />
                    <div className="how-text">
                        <h3>How can we help you?</h3>
                        <i>
                            The knowledge hub for teens on all things sexual
                            health
                        </i>
                    </div>
                </div> */}
        {/* -------------------------------slider --------------------------- */}
        <Slide />

        {/* -----------------------------hot topoics ----------------------------*/}
        <div className="topics-area">
          <div className="topics-title">
            <p>Hot Topics</p>
          </div>
          <div className="topics-main">
            <div className="single-topics">
              <div className="top-fl">
                <img src={Topics} alt="" />
                <p>Mental Health: What is the deal?</p>
              </div>
              <FaAngleRight className="topic-arrow" />
            </div>
            <div className="single-topics">
              <div className="top-fl">
                <img src={Topics} alt="" />
                <p>What is abuse?</p>
              </div>
              <FaAngleRight className="topic-arrow" />
            </div>
            <div className="single-topics">
              <div className="top-fl">
                <img src={Topics} alt="" />
                <p>What is the difference between PrEP, PEP, and ART?</p>
              </div>
              <FaAngleRight className="topic-arrow" />
            </div>
            <div className="single-topics">
              <div className="top-fl">
                <img src={Topics} alt="" />
                <p>Emergency contraceptive pill</p>
              </div>
              <FaAngleRight className="topic-arrow" />
            </div>
            <div className="single-topics">
              <div className="top-fl">
                <img src={Topics} alt="" />
                <p>Masturbation</p>
              </div>
              <FaAngleRight className="topic-arrow" />
            </div>
            <div className="single-topics">
              <div className="top-fl">
                <img src={Topics} alt="" />
                <p>Why do men get erections in the morning?</p>
              </div>
              <FaAngleRight className="topic-arrow" />
            </div>
          </div>
        </div>
        {/* mobile nav  */}
        <div className="mb-bottom-nav">
          <div className="menu-mb">
            <img src={MbIcon1} alt="" />
            <p>Home</p>
          </div>
          <div className="menu-mb">
            <img src={MbIcon2} alt="" />
            <p>Clinic Finder</p>
          </div>
          <div className="menu-mb">
            <img src={MbIcon3} alt="" />
            <p>Recent</p>
          </div>
          <div className="menu-mb">
            <img src={MbIcon4} alt="" />
            <p>Need help?</p>
          </div>
          <div className="menu-mb">
            <MobileHamburger />
            <p>Menu</p>
          </div>
        </div>
      </div>

      <div className={`${showCallPopUp ? "block" : "hidden"}`}>
        <CallPopUp setShowCallPopUp={setShowCallPopUp} />
      </div>
    </div>
  );
};

export default Home;
