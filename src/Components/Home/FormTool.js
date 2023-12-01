import React from 'react';
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import '../../App.css';
import '../../Responsive.css';
import num from "../../images/num.png";
const FormTool = () => {
    return (
        <div>
            <div className='features-bg'>
                <div className=' tool-container'>
                    <div className='cross'>
                        <RxCross2 />
                    </div>
                    <div className='fromTool-head'>
                        <img src={num} alt='' />
                        <h1>How do you want to take your contraceptives?</h1>
                    </div>
                    <p>Contraceptives are also known as birth control, family planning or prevention. They are used to prevent pregnancy.</p>
                    <h6> <span className='list'>A</span> Take it myself</h6>
                    <h6> <span className='list'>B</span>Have it administered or inserted by a<br></br> nurse or doctor</h6>
                </div>
                <div className='fe-icon fe-icon-right'>
                    <MdOutlineArrowForwardIos />
                </div>
            </div>
        </div>
    );
};

export default FormTool;