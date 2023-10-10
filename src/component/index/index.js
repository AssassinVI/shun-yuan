import React from 'react';
import Banner from "./banner"
import SecondPage from './secondPage';
import ThirdPage from './thirdPage';
import ForthPage from './forthPage';
import FifthPage from './fifthPage';
import SixthPage from './sixthPage';
import VideoIn from './videoIn';
import { useEffect, useRef } from 'react';
//引入redux
import { connect, } from 'react-redux';
import { slideChangeAction } from '../redux/action/slideChange';
//引入swiper
import Swiper from 'swiper';
import 'swiper/css';

import preloadImage from "../config/preload"


const requireWebp1 = require.context("../../../img", true, /^\.\/.*\.webp$/);
const allWebp = requireWebp1.keys().map(requireWebp1);
//組合成首頁
function Home({ slideChangeAction, myState, teamState }) {
    const swiperRef = useRef()

    let swiper1;
    //斜走特效
    useEffect(() => {

        if (swiperRef.current) {

            //Swiper.use([EffectCreative]); // Import the EffectCreative module
            swiper1 = new Swiper(swiperRef.current, {
                // Optional parameters
                direction: 'vertical',
                // If you want to enable mousewheel support
                speed: 700,
                effect: "fade",
                
                on: {

                    slideChangeTransitionStart: function (e) {

                        slideChangeAction(e.activeIndex)
                    }

                },
            });
            swiper1.slideTo(myState, 0)
        }
        allWebp.forEach((item, i) => {
            preloadImage(item.default)
        });

    }, []);

    useEffect(() => {
      if(myState === -1){
        swiperRef.current.swiper.slideTo(0)
      }else{
        swiperRef.current.swiper.slideTo(myState)
      }
    }, [myState])

    return (
        <div className='index' >
            <VideoIn />
            <div ref={swiperRef} className="swiper-container">
                <div className="swiper-wrapper">
                    <div className="swiper-slide slide1"><Banner /></div>
                    {/* <div className="swiper-slide slide2"> <SecondPage /></div>
                    <div className="swiper-slide slide3"><ThirdPage /></div>
                    <div className="swiper-slide slide4">< ForthPage /></div>
                    <div className="swiper-slide slide5">< FifthPage /></div>
                    <div className="swiper-slide slide6">< SixthPage /></div> */}

                </div>
            </div>



        </div>
    )
}
const mapStateToProps = (state) => {

    return {
        myState: state.slideReducer.slide,
        teamState: state.teamReducer.flag
    };
};

const mapDispatchToProps = {
    slideChangeAction
}

export default React.memo(connect(mapStateToProps, mapDispatchToProps)(Home)); 
