import React from 'react'
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import SectionNav from "../layout/sectionNav"
import CloudEffect from '../config/cloudEffect';
import { useSelector } from 'react-redux';

export default function FifthPage() {
    const animateScope = useRef(null)
    const [type, setType] = useState("type1")
    const swiperState = useSelector(state => state.slideReducer.slide)
    const data = {
        title: "LUXURY\nMATERIALS",
        data: [{
            type: "type1",
            ch: "EMS系統",
            en: "EMS SYSTEM"
        }, {
            type: "type2",
            ch: "精選建材",
            en: "PRIME MATERIALS"
        }, {
            type: "type3",
            ch: "輕裝修",
            en: "LIGHT RENOVATION"
        }]
    }
    return (
        <section className="fifth-page" ref={animateScope} >
            <SectionNav data={data} type={type} handleClick={(e) => setType(e.target.className)} />
            <div className="fifth-page-right">
                <Link to={"/team/coporation/sunland"} className='type1' style={{ opacity: type === "type1" ? 1 : 0, pointerEvents: type === "type1" ? "auto" : "none" }}>
                    <CloudEffect start={type === "type1" && swiperState === 4} style={{ height: "100%" }}>
                        <img src={require("/img/index/webp/fifth-page-bg1.webp").default} style={{ opacity: (type === "type1" && swiperState === 4) ? 1 : 0, transition: "opacity 4.7s" }} />
                    </CloudEffect>

                </Link>
                <Link to={"/team/coporation/sunland"} className='type2' style={{ opacity: type === "type2" ? 1 : 0, pointerEvents: type === "type2" ? "auto" : "none" }}>
                    <CloudEffect start={type === "type2" && swiperState === 4} style={{ height: "100%" }}>
                        <img src={require("/img/index/webp/fifth-page-bg2.webp").default} style={{ opacity: (type === "type2" && swiperState === 4) ? 1 : 0, transition: "opacity 4.7s" }} />
                    </CloudEffect>
                </Link>
                <Link to={"/team/coporation/sunland"} className='type3' style={{ opacity: type === "type3" ? 1 : 0, pointerEvents: type === "type3" ? "auto" : "none" }}>
                    <CloudEffect start={type === "type3" && swiperState === 4} style={{ height: "100%" }}>
                        <img src={require("/img/index/webp/fifth-page-bg3.webp").default} style={{ opacity: (type === "type3" && swiperState === 4) ? 1 : 0, transition: "opacity 4.7s" }} />
                    </CloudEffect>
                </Link>
            </div>
        </section>
    )
}



