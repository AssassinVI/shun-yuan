import React from 'react';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import SectionNav from '../layout/sectionNav';
import CloudEffect from '../config/cloudEffect';


function SixthPage() {
    const animate = useRef(null)
    const swiperState = useSelector(state => state.slideReducer.slide)
    const [type, setType] = useState("type1")
    const data = {
        title: "LIVE\nENVIRONMENT",
        data: [{
            type: "type1",
            ch: "市場個案",
            en: "MARKET CASE"
        }, {
            type: "type2",
            ch: "房貸試算",
            en: "MORTGAGE CALCULATION"
        }]
    }


    return (
        <section className="sixth-page" ref={animate}>
            <div className="sixth-page-left">
                <Link to={"/team/coporation/sunland"} className='type1' style={{ opacity: type === "type1" ? 1 : 0, pointerEvents: type === "type1" ? "auto" : "none" }}>

                    <CloudEffect start={type === "type1" && swiperState === 5} style={{ height: "100%" }}>
                        <img src={require("/img/index/webp/sixth-page-bg1.webp").default} style={{ opacity: (type === "type1" && swiperState === 5) ? 1 : 0, transition: "opacity 4.7s" }} />
                    </CloudEffect>

                </Link>
                <Link to={"/team/coporation/sunland"} className='type2' style={{ opacity: type === "type2" ? 1 : 0, pointerEvents: type === "type2" ? "auto" : "none" }}>
                    <CloudEffect start={type === "type2" && swiperState === 5} style={{ height: "100%" }}>
                        <img src={require("/img/index/webp/sixth-page-bg2.webp").default} style={{ opacity: (type === "type2" && swiperState === 5) ? 1 : 0, transition: "opacity 4.7s" }} />
                    </CloudEffect>
                </Link>
            </div>
            <SectionNav handleClick={(e) => setType(e.target.className)} data={data} type={type} />
        </section>
    )
}
export default SixthPage



