import React, { useRef, useLayoutEffect, useState } from 'react'
import { gsap } from 'gsap';
import ScaleDrag from "../config/scaleDrag"
import SpliText from '../config/splitText';
export default function Planet() {
    const animateRef = useRef(null);
    const [type, setType] = useState(1)
    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            let gg = gsap.timeline()
            gg.to(".left", {
                opacity: 1,
            }).to(".right", {
                opacity: 1,
            }, "<").from(".titleBox-active h2 span", {
                stagger: 0.05,
                opacity: 0,
                x: 30
            }, "<+0.5").from(".left h4 ", {
                opacity: 0,
                x: 30
            }, "<+0.8").from(".left p", {
                opacity: 0,
                x: 30
            }, "<+0.3").from(".left img", {
                opacity: 0,
                x: 30
            }, "<").from(".left .more", {
                opacity: 0,
                x: 30
            }, "<+0.3").from(".right img", {
                opacity: 0,
                y: 30,
                duration: 1.5
            }, "<").to(".navBox", {
                opacity: 1,
            }, "<")
        }, [animateRef]);
        return () => ctx.revert();
    }, [type])
    const fadeOut = (t) => {
        let ctx = gsap.context(() => {
            let gg = gsap.timeline()
            gg.to(".left", {
                opacity: 0,
            }).to(".right", {
                opacity: 0,
            }, "<").to(".navBox", {
                opacity: 0,
            }, "<").then(() => {
                setType(t)
            })
        }, [animateRef]);
    }
    return (
        <section className='planet' ref={animateRef}>
            {typeof (type) == "number" ? <PlanetView type={type} setType={setType} fadeOut={fadeOut} /> : <LightView />}
            <ul className="nav" style={{ pointerEvents: "auto" }}>
                <li onClick={() => fadeOut(1)} style={{ color: typeof (type) == "number" ? "#c2a357" : "#000" }}>森活藝景</li>
                <li onClick={() => fadeOut("light")} style={{ color: typeof (type) == "string" ? "#c2a357" : "#000" }}>光影藝術</li>
            </ul>
        </section>
    )
}


function PlanetView({ type, setType, fadeOut }) {

    const data = [{
        type: 1,
        text: {
            title: "LANDSCAPE DESIGN \nDESIGN CONCEPT",
            smallLabel: "環區綠園道 都會生態 跳島美學",
            para: "四面臨路退縮植雙排大樹，250坪草坪廣場開放式花園健走步道，廣植163棵大樹吸引鳥類與昆蟲作為都市生態跳島，美化街景淨化空氣，親子散步享受大樹下悠閒時光，初春櫻花浪漫風吹成雪，夏天光臘樹「獨角仙大道」蟬聲盈耳，為奢華寧靜注入自然音符。"
        },
        img: require("../../../img/product/planet/webp/000-planet-bg1.webp").default
    }, {
        type: 2,
        text: {
            title: "LANDSCAPE DESIGN",
            paraImg: require("../../../img/product/planet/webp/004-planet2-paraImg.webp").default
        },
        img: require("../../../img/product/planet/webp/001-planet-bg2.webp").default
    }, {
        type: 3,
        text: {
            title: "LANDSCAPE DESIGN",
            paraImg: require("../../../img/product/planet/webp/005-planet3-paraImg.webp").default
        },
        img: require("../../../img/product/planet/webp/002-planet-bg3.webp").default
    }]
    const handleNext = () => {
        const prevType = type;
        let nextType;
        if (prevType < 3) {
            nextType = prevType + 1
            fadeOut(nextType)
        }


    }
    const handlePrev = () => {
        const prevType = type;
        let nextType;
        if (prevType > 1) {
            nextType = prevType - 1
            fadeOut(nextType)
        }

    }
    const navStyle = {
        width: "1.5vw",
        height: "1.5vw",
    }
    return (
        <>
            {data.map((item, i) => {
                return (
                    <div className="left" style={{ display: type == item.type ? "block" : "none" }}>
                        <div className={`titleBox ${type == item.type && "titleBox-active"}`}>
                            <h2><SpliText text={item.text.title} /></h2>
                            <div className="line"></div>
                        </div>
                        {item.text.smallLabel && <h4>{item.text.smallLabel}</h4>}
                        {item.text.para && <p>{item.text.para}</p>}
                        {item.text.paraImg && <img src={item.text.paraImg} />}
                    </div>
                )
            })}
            {data.map((item, i) => {
                return (
                    <div className="right" style={{ display: type == item.type ? "block" : "none" }}>
                        <ScaleDrag maxRatio={2} zoomImg1={require("../../../img/urban/svg/001-plus-button.svg")} zoomImg2={require("../../../img/urban/svg/002-minus-button.svg")}>
                            <img src={item.img} />
                        </ScaleDrag>
                    </div>
                )
            })}
            {typeof (type) == "number" &&
                <div className="navBox" style={{ display: "flex", justifyContent: "space-between", position: "absolute", zIndex: 30, bottom: "7.5vw", left: "33%", width: "9.5vw", pointerEvents: "auto", height: "1.5vw", opacity: 0 }}>
                    <div className="prev" onClick={handlePrev} style={{ padding: "1.5vw 0 3vw 3vw", pointerEvents: "auto", cursor: "pointer" }}>
                        <img src={require("../../../img/product/planet/svg/001-arrow.svg")} style={{ ...navStyle }} />
                    </div>
                    <div className="next" onClick={handleNext} style={{ padding: "1.5vw 3vw 3vw 0", pointerEvents: "auto", cursor: "pointer" }}>
                        <img src={require("../../../img/product/planet/svg/001-arrow.svg")} style={{ ...navStyle, transform: "rotate(180deg)" }} />
                    </div>
                </div >

            }

        </>

    )
}

function LightView() {
    const item = {
        text: {
            title: "LANDSCAPE DESIGN",
            paraImg: require("../../../img/product/planet/svg/000-lightView-paraImg.svg").default
        },
        img: require("../../../img/product/planet/webp/003-planet-bg4.webp").default
    }
    return (
        <>
            <div className="left" >
                <div className={`titleBox titleBox-active`}>
                    <h2><SpliText text={item.text.title} /></h2>
                    <div className="line"></div>
                </div>
                {item.text.smallLabel && <h4>{item.text.smallLabel}</h4>}
                {item.text.para && <p>{item.text.para}</p>}
                {item.text.paraImg && <img src={item.text.paraImg} />}
            </div>
            <div className="right">
                <ScaleDrag maxRatio={2} zoomImg1={require("../../../img/urban/svg/001-plus-button.svg")} zoomImg2={require("../../../img/urban/svg/002-minus-button.svg")}>
                    <img src={item.img} />
                </ScaleDrag>
            </div>
        </>

    )
}