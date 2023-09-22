import React from 'react';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import SectionNav from '../layout/sectionNav';
import CloudEffect from '../config/cloudEffect';


function ThirdPage() {
    const animate = useRef(null)
    const swiperState = useSelector(state => state.slideReducer.slide)
    const [type, setType] = useState("type1")
    const data = {
        title: "LIVE\nENVIRONMENT",
        data: [{
            type: "type1",
            ch: "空拍圖",
            en: "AERIAL VIEWS"
        }, {
            type: "type2",
            ch: "生活機能圖",
            en: "LIFE FUNCTION"
        }]
    }


    return (
        <section className="third-page" ref={animate}>
            <SectionNav handleClick={(e) => setType(e.target.className)} data={data} type={type} />
            <div className="third-page-right">
                <Link to={"/team/coporation/sunland"} className='type1' style={{ opacity: type === "type1" ? 1 : 0, pointerEvents: type === "type1" ? "auto" : "none" }}>

                    <CloudEffect start={type === "type1" && swiperState === 2} style={{ height: "100%" }}>
                        <img src={require("/img/index/webp/third-page-bg1.webp").default} style={{ opacity: (type === "type1" && swiperState === 2) ? 1 : 0, transition: "opacity 4.7s" }} />
                    </CloudEffect>

                </Link>
                <Link to={"/team/coporation/sunland"} className='type2' style={{ opacity: (type === "type2" && swiperState === 2) ? 1 : 0, pointerEvents: type === "type2" ? "auto" : "none" }}>
                    <CloudEffect start={type === "type2" && swiperState === 2} style={{ height: "100%" }}>
                        <img src={require("/img/index/webp/third-page-bg2.webp").default} style={{ opacity: (type === "type2" && swiperState === 2) ? 1 : 0, transition: "opacity 4.7s" }} />
                    </CloudEffect>
                </Link>
            </div>
        </section>
    )
}
export default ThirdPage



