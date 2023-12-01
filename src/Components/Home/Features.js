import React from 'react';
import { IoIosArrowBack } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import '../../App.css';
import '../../Responsive.css';
import features from "../../images/features.png";

const Features = () => {
    return (
        <div>
            <div className='features-bg'>
                <div className='cross'>
                    <RxCross2 />
                </div>
                <div className='features-responsive'>
                    <img src={features} alt="" />
                    <h1>What is the best contraceptive for me?</h1>
                    <p >You get to decide when (and if) you are ready to start a family!
                        <br></br>
                        <br></br>
                        Let Dr. Vuyi help you find the best method for you. All you have to do is answer a few short
                        questions.</p>
                    <button className='btn-features'>Find my contraceptive</button>

                </div>
                <div className='fe-icon'>
                    <IoIosArrowBack />
                </div>
            </div>

        </div>
    );
};

export default Features;