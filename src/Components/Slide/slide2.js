import React from "react";
import Carousel from "react-elastic-carousel";
import { FaAngleRight } from "react-icons/fa6";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import How from '../../images/how.jpg';
import "../Slide/slide.css";

const Slide2 = () => {

    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 480, itemsToShow: 1 },
        { width: 800, itemsToShow: 2 },
        { width: 1024, itemsToShow: 1 },
    ];

    return (
        <div className="slide-container">
            <Carousel
                itemsToScroll={1}
                itemsToShow={3}
                itemPadding={[10, 10]}
                enableAutoPlay
                autoPlaySpeed={1500}
                outerSpacing={0}
                breakPoints={breakPoints}
            >

                <div className="how container">
                    <img src={How} alt="" />
                    <div className="how-text">
                        <h3>How can we help you?</h3>
                        <i>The knowledge hub for teens on all things sexual health</i>
                    </div>
                    <FaAngleRight className='how-arrow' />
                </div>


            </Carousel>
        </div>
    );
};

export default Slide2;
