import React from 'react'
import { useRef, useState, useLayoutEffect, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CloudEffect from '../config/cloudEffect';
function ForthPage() {
    const animateScope = useRef(null)
    const swiperState = useSelector(state => state.slideReducer.slide)
    return (
        <section className="forth-page" ref={animateScope}>
            <div className="forth-page-bg">
                <Link to={"/team/coporation/sunland"}  >

                    <CloudEffect start={swiperState === 3} style={{ height: "100%" }}>
                        <img src={require("/img/index/webp/forth-page-bg.webp").default} style={{ opacity: swiperState === 3 ? 1 : 0, transition: "opacity 4.7s" }} />
                    </CloudEffect>

                </Link>
            </div>
            <ForthPagePara />
        </section>
    )
}
export default ForthPage;

function ForthPagePara() {
    return (
        <div className="forth-page-para" >
            <div className="title-box" >
                <h3>CONSTRUCTION<br />FLOOR</h3>
            </div>
            <div className="paraBox">
                <p>現代簡約造型風格，講究沈穩優雅品味，深淺色系建材運用及垂直線條分割，增加立面高聳感，適度調和深淺色調搭配，產生層次感。</p>

            </div>
        </div>
    )
}


