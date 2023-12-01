import React from 'react';
import { LuClock9 } from "react-icons/lu";
import { RxCross2 } from "react-icons/rx";
import '../../App.css';
import '../../Responsive.css';
import BlogTopImg from '../../images/blog-banner.jpg';
import blogBgBtt from "../../images/blog-bg-btt.jpg";
import BlogCircle from '../../images/blog-circle.jpg';
import DownloadIcon from '../../images/download.png';
import FontSize from '../../images/fontSize.png';
import PlayerIcon from '../../images/player.jpg';
import shareIcon from '../../images/share.png';


const BlogPost = () => {
    return (
        <div>
            <div className=' blog-cross'>
                <RxCross2 />
            </div>
            {/* mobile  */}
            <div className='blog-bottom blog-bottom-mobile'>
                <p className='p1'>Your Body | <span className='female'>Female Body</span></p>
                <div className="clock-main">
                    <LuClock9 className='clock' />
                    <p className='p2'>2 minute read</p>
                </div>
            </div>
            {/* end  */}
            <div className='blog-Hero'>
                <img src={BlogTopImg} alt="" />
                <h1>That time of the month <br></br>— your period</h1>
            </div>
            <div className='blog-bottom blog-bottom-desktop'>
                <p className='p1'>Your Body | <span className='female'>Female Body</span></p>
                <div className="clock-main">
                    <LuClock9 className='clock' />
                    <p className='p2'>2 minute read</p>
                </div>
            </div>
            <div className='blg-container'>
                <div className="blog-icon">
                    <div className='single-blog-icon'>
                        <img src={PlayerIcon} alt="" />
                        <p>Listen</p>
                    </div>
                    <div className='single-blog-icon'>
                        <img src={FontSize} alt="" />
                        <p>Font size</p>
                    </div>
                    <div className='single-blog-icon'>
                        <img src={DownloadIcon} alt="" />
                        <p>Download</p>
                    </div>
                    <div className='single-blog-icon'>
                        <img src={shareIcon} alt="" />
                        <p>Share</p>
                    </div>
                </div>

                <div className="blog-text-main">
                    <div className='blg-first-text'>
                        <p className='text-f1'> Menstruation, or getting your period, is the number of days (usually 2-7 days) every month when blood comes out of your vagina. It can be scary at first! But this is a natural process that is normal.</p>
                        <div className='f1-q'>
                            <h1>Why do you get your period?</h1>
                            <p>Most females have thousands of eggs inside their ovaries (the part of the body that makes the eggs).</p>
                        </div>

                        <p>During puberty, these eggs in the ovaries start to ripen and are released one at a time, every month. The ripened egg is ready to receive sperm so if sperm enters the egg through a process called fertilization, then a female can become pregnant. When you’re not pregnant, then the egg is shed from the body once a month. It is shed together with the extra lining of the uterus (womb). A typical menstrual cycle happens about every 28 days, but it can be longer or shorter depending on your body.</p>

                        <div className="f2-q">
                            <h1>The days of the cycle</h1>
                            <p>It is important to remember that not everyone’s cycle follows the same days.</p>
                        </div>


                    </div>
                    <div className='blg-second-text'>
                        <div className='second-text-main'>
                            <p className='day-q'> Days 1- 5: You are on your period</p>
                            <p className='day-ans'>Day 1 is the first day you start bleeding. This means your uterus is losing its wall lining. You may feel some stomach cramps and be uncomfortable. If your symptoms are really bad, then you can go to the clinic and a healthcare provider will prescribe medication to help you. In some cases, the provider may recommend that you start the contraceptive pill.</p>

                            <p className='day-q'>Days 6 – 13: Your period ends, and your body prepares a new egg</p>

                            <p>A new egg is getting ripe inside your ovary. Your uterus wall is growing thicker to prepare for the release of the egg.</p>

                            <p className='day-q'>Days 14 – 19: Ovulation time!</p>

                            <p className='day-ans'> As the egg travels towards the uterus, you are very fertile. This means that your body is ready for sperm to join with the egg. So, make sure you either: use a condom when having sex, are on a contraceptive or avoid sex during this time if you don’t want to fall pregnant.</p>

                            <p className='day-q'>Days 19 – 28: Egg reaches the uterus</p>

                            <p className='day-ans'> Your egg reaches the uterus. If you are not pregnant, your period will start. You will restart your cycle beginning with Day 1 of your menstrual cycle.</p>
                        </div>
                        <div className='bl-bg'>
                            <img src={BlogCircle} alt='' />
                        </div>
                        <div className="blg-bg-last">
                            <img src={blogBgBtt} alt="" />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default BlogPost;