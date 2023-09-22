import React from 'react';
import { useRef } from 'react';
import Video from "/video/banner-cloud.mp4";
// Import animation libary
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
gsap.registerPlugin(ScrollTrigger);
const requireSvg = require.context("../../../img/index/svg", false, /^\.\/.*\.svg$/);
const svg = requireSvg.keys().map(requireSvg);
const requireWebp = require.context("../../../img/index/webp", false, /^\.\/.*\.webp$/);
const webp = requireWebp.keys().map(requireWebp);
// const require1x = require.context("../../../img/index/1x", false, /^\.\/.*\.png$/);
// const x = require1x.keys().map(require1x);


//Banner組件
export default function Banner() {
    const banner = useRef();
    const slideRedux = useSelector(state=>state.slideReducer.slide)
   
    return (
        <section className='banner' ref={banner} style={{filter:slideRedux === 0 ?"brightness(1) blur(0)":"brightness(2) blur(1em)",transition:"3s"}}>
            <div className="imgBox">
                <img src={webp[0].default} />
            </div>
            <div className="logoBox">
                <img src={require("../../../img/index/svg/logo.svg").default} />
            </div>
            <img src={require("@/img/index/webp/banner-cloud.png").default} className="cloud cloud1" />
            <img src={require("@/img/index/webp/banner-cloud.png").default} className="cloud cloud2" />
            <img src={require("@/img/index/webp/banner-cloud.png").default} className="cloud cloud3" />
        </section>

    )
}
