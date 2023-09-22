import React, { useLayoutEffect } from 'react';
import { useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { BrandLogo } from '../config/svgCollection';
import SectionNav from '../layout/sectionNav';
import CloudEffect from '../config/cloudEffect';
import { gsap } from "gsap";
function SecondPage() {
    const secondPage = useRef();
    const [type, setType] = useState("type1")
    const team = {
        title: "BRAND\nCONCEPT",
        data: [{
            type: "type1",
            ch: "品牌理念",
            en: "BRAND CONCEPT"
        }, {
            type: "type2",
            ch: "順億營造",
            en: "CONSTRUCTION METHOD"
        }, {
            type: "type3",
            ch: "建築團隊",
            en: "BUILDING TEAM"
        }]
    }

    const handleClick = ((e) => {
        setType(e.target.className)
    })

    return (
        <section className="second-page" ref={secondPage}>
            <CoverLogo type={type} />
            <SectionNav handleClick={handleClick} data={team} type={type} />
        </section>
    )
}

export default SecondPage;

function CoverLogo({ type }) {
    const swiperState = useSelector(state => state.slideReducer.slide)
    const animationRef = useRef(null)
    useLayoutEffect(()=>{
        if(type === "type1"&&swiperState===1){
            let ctx = gsap.context(() => {
                let gg = gsap.timeline()
                gg.to(`.type1 svg path`, {
                    strokeDashoffset:0,
                    duration: 3.5,
                }, "<").to(`.type1 svg`, {
                    opacity:0
                },">-1.5").from(`.type1 .box`, {
                    opacity:0,
                },"<")
    
            }, animationRef)
            return () => ctx.revert(); // cleanup
        }
    },[swiperState,type])
    return (
        <div className="cover-logo" ref={animationRef}>
            <Link to={"/team/coporation/sunland"} className='type1' style={{ opacity: type === "type1" ? 1 : 0, pointerEvents: type === "type1" ? "auto" : "none" }}>
                <BrandLogo />
                <div className="box">
                    <img src={require("/img/index/webp/006-brand-bg.webp").default} />
                </div>
                <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 435.08 385.54">
                    <g >
                        <g>
                        <path d="m325.29,156L435.08,0h-72.05l-82.83,117.34L197.37,0H0v97.06c20.08-22.87,49.45-37.38,82.27-37.38h85.06l39.59,56.26h-124.65c-29.48,0-53.39,23.9-53.39,53.39s23.9,53.39,53.39,53.39h42.98c60.5,0,109.54,49.04,109.54,109.54,0,19.36-5.06,37.51-13.87,53.29h88.94s125.22-177.92,125.22-177.92V0l-109.79,156Zm109.1,51.4l-123.83,175.96v-205.21L434.39,2.19v205.21Z"/>
                        <path d="m125.25,278.77h-42.98c-32.82,0-62.19-14.51-82.27-37.38v144.15h125.25c29.48,0,53.39-23.9,53.39-53.39s-23.9-53.39-53.39-53.39Z"/>
                        </g>
                    </g>
                </svg>
            </Link>
            <Link to={"/team/coporation/sunland"} className='type2' style={{ opacity: type === "type2" ? 1 : 0, pointerEvents: type === "type2" ? "auto" : "none" }}>

                <CloudEffect start={type === "type2" && swiperState === 1}>
                    <img src={require("/img/index/webp/003-second-page-team2.webp").default} style={{ opacity: (type === "type2" && swiperState === 1) ? 1 : 0, transition: "opacity 4.7s" }} />
                </CloudEffect>

            </Link>
            <Link to={"/team/coporation/sunland"} className='type3' style={{ opacity: (type === "type3" && swiperState === 1) ? 1 : 0, pointerEvents: type === "type3" ? "auto" : "none" }}>
                <CloudEffect start={type === "type3" && swiperState === 1}>
                    <img src={require("/img/index/webp/004-second-page-team3.webp").default} style={{ opacity: type === "type3" ? 1 : 0, transition: "opacity 4.7s" }} />
                </CloudEffect>
            </Link>
        </div>
    )
}
