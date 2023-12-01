import React from "react";
import Carousel from "react-elastic-carousel";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import sliderImg from "../../images/sl.png";
import sliderImg2 from "../../images/slider.png";
import "../Slide/slide.css";

const Slide = () => {

    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 480, itemsToShow: 1 },
        { width: 800, itemsToShow: 2 },
        { width: 1024, itemsToShow: 3 },
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
                <div>
                    <div className="slider-body2 slider-body">

                        <div className="single-slider">
                            <h1>Your body</h1>
                            <p>
                                Any questions about your body? On how it looks,
                                feels, or changes? We have the answers for you
                                right here.
                            </p>
                        </div>
                        <img src={sliderImg2} alt="" />

                    </div>
                    {/* <div className="slider-body">
                        <div className="single-slider">
                            <h1>Your body</h1>
                            <p>
                                Any questions about your body? On how it looks,
                                feels, or changes? We have the answers for you
                                right here.
                            </p>
                        </div>
                        <img src={sliderImg2} alt="" />
                    </div> */}
                </div>

                <div>
                    <div className="slider-body2">
                        <img src={sliderImg} alt="" />
                        <div className="single-slider">
                            <h1>All about sex</h1>
                            <p>
                                Sex can be fun. But it can also be confusing or scary. We cover all you need to know about sex.
                            </p>
                        </div>

                    </div>
                </div>
                <div>
                    <div className="slider-body2">
                        <img src={sliderImg} alt="" />
                        <div className="single-slider">
                            <h1>All about sex</h1>
                            <p>
                                Sex can be fun. But it can also be confusing or scary. We cover all you need to know about sex.
                            </p>
                        </div>

                    </div>
                </div>
                <div>
                    <div className="slider-body2">
                        <img src={sliderImg} alt="" />
                        <div className="single-slider">
                            <h1>All about sex</h1>
                            <p>
                                Sex can be fun. But it can also be confusing or scary. We cover all you need to know about sex.
                            </p>
                        </div>

                    </div>
                </div>
                <div>
                    <div className="slider-body2">
                        <img src={sliderImg} alt="" />
                        <div className="single-slider">
                            <h1>All about sex</h1>
                            <p>
                                Sex can be fun. But it can also be confusing or scary. We cover all you need to know about sex.
                            </p>
                        </div>

                    </div>
                </div>
                <div>
                    <div className="slider-body2">
                        <img src={sliderImg} alt="" />
                        <div className="single-slider">
                            <h1>All about sex</h1>
                            <p>
                                Sex can be fun. But it can also be confusing or scary. We cover all you need to know about sex.
                            </p>
                        </div>

                    </div>
                </div>
            </Carousel>
        </div>
    );
};

export default Slide;
