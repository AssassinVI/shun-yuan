import React, { useState, useLayoutEffect, useRef } from 'react'
import FancyBox from "../config/fancyBox"
import gsap from 'gsap';
import RunNumber from '../config/runNumber';
import { taoyuanData, linkouData, taipeiData, newTaipeiData } from './portfolioData';
const requireWebp = require.context("../../../img/team/coporation/portfolio/webp", false, /^\.\/.*\.webp$/);
const webp = requireWebp.keys().map(requireWebp);
const requireSvg = require.context("../../../img/team/coporation/portfolio/svg", false, /^\.\/.*\.svg$/);
const svg = requireSvg.keys().map(requireSvg);
export default function Portfolio() {
    const animateRef = useRef(null);
    const [type, setType] = useState(0)
    const [isAnimate, setIsanimate] = useState(false)
    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            let gg = gsap.timeline();
            gg.from(".right .title h3", {
                x: 50,
                opacity: 0,
                duration: 0.8,
                delay: 0.5
            }, "<").from(".right .para p", {
                x: 50,
                opacity: 0,
                duration: 0.8,
                stagger: 0.3
            }, "<+0.3").from(".right .imgBox", {
                y: 50,
                opacity: 0,
                duration: 0.8,
            }, "<+0.6").from(".total .case p", {
                y: 30,
                opacity: 0,
                duration: 0.8,
            }, "<+0.3").from(".total .household p", {
                y: "5vw",
                opacity: 0,
                duration: 0.8,
            }, "<+0.3").from(".total span", {
                y: "8vw",
                duration: 1,
            }, "<+0.3")
        }, [animateRef])
        return () => ctx.revert()
    }, [])
    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            let gg = gsap.timeline();
            gg.from(".slice-bg img", {
                y: 20,
                opacity: 0,
                duration: 1.2,
                stagger: 0.4
            }).from(".square-bg img", {
                y: -50,
                opacity: 0,
                duration: 1.2,
                onStart: () => {
                    setTimeout(() => {
                        setIsanimate(false)
                    }, 300)

                }
            }, "<+0.6")
        }, [animateRef])
        return () => ctx.revert()
    }, [type])
    const fadeOut = (city) => {
        setIsanimate(true)
        let ctx = gsap.context(() => {
            let gg = gsap.timeline()
            if (city != 0) {
                gg.to(".slice-bg", {
                    opacity: 0,
                    duration: 0.2
                }).to(".square-bg img", {
                    y: -50,
                    opacity: 0,
                    duration: 0.3,
                }, "<").to(".area", {
                    opacity: 0,
                    duration: 0.2
                }, "<").then(() => {
                    setType(city)
                })
            }
        }, [animateRef])
    }
    return (
        <>
            <section className="portfolio" ref={animateRef}>
                <div className="left">
                    {type == 0 ? <div className="slice-bg">
                        <img src={webp[0].default} />
                        <img src={webp[1].default} />
                        <img src={webp[2].default} />
                        <img src={webp[3].default} />
                    </div> : type == "taoyuan" ?
                        <Area data={taoyuanData} setType={setType} type={type} />
                        : type == "taipei" ?
                            <Area data={taipeiData} setType={setType} type={type} />
                            : type == "newTaipei" ?
                                <Area data={newTaipeiData} setType={setType} type={type} />
                                : <Area data={linkouData} setType={setType} type={type} />
                    }


                    <div className="square-bg">
                        <img src={svg[0].default} />
                    </div>

                </div>
                <div className="right">
                    <div className="paraBox">
                        <div className="title">
                            <h3>堅持自我建築理念 成就完美產品規劃</h3>
                        </div>
                        <div className="para">
                            <p>森聯握有的庫存土地，將於有計劃之情況下，設計出具有特殊建築、綠化環保、節能標準等理念之美好空間，並提升住戶生活品味。</p>
                            <p>累積四十年品牌，總案量已超過一萬五千戶以上。在大台北地區開枝散葉，共創一片生生不息的建築森林。</p>
                        </div>
                    </div>
                    <div className="imgBox" >
                        <img src={webp[4].default} />
                        <p className='taipei' onClick={() => {
                            fadeOut("taipei")
                        }} style={{ pointerEvents: isAnimate ? "none" : type == "taipei" ? "none" : "auto" }}>台北<RunNumber target={13} speed={95} delay={1800} />案</p>
                        <p className='linkou' onClick={() => {
                            fadeOut("linkou")
                        }} style={{ pointerEvents: isAnimate ? "none" : type == "linkou" ? "none" : "auto" }}>林口<RunNumber target={26} speed={60} delay={1900} />案</p>
                        <p className='newTaipei' onClick={() => {
                            fadeOut("newTaipei")
                        }} style={{ pointerEvents: isAnimate ? "none" : type == "newTaipei" ? "none" : "auto" }}>新北<RunNumber target={32} speed={40} delay={2000} />案</p>
                        <p className='taoyuan' onClick={() => {
                            fadeOut("taoyuan")
                        }} style={{ pointerEvents: isAnimate ? "none" : type == "taoyuan" ? "none" : "auto" }}>桃園<RunNumber target={21} speed={65} delay={2100} />案</p>
                        <div className="box" style={{ position: "absolute" }}>
                            <p className='en'>PROJECTS</p>
                            <p className='ch'>經典之作</p>
                            <FancyBox>
                                <div className="imgBox" style={{ width: "100%", height: "100%", backgroundColor: "#EEF0F2" }}>
                                    <img src={webp[5].default} style={{ position: "absolute", top: 0, left: 0, right: 0, height: "100%", width: "auto", margin: "0 auto" }} />
                                </div>

                            </FancyBox>
                        </div>

                    </div>
                </div>
                <div className="total">
                    <div className="case">
                        <p>全台共</p>
                        <RunNumber target={92} gap={3} speed={30} delay={2700} />
                        <p>案</p>
                    </div>
                    <div className="household">
                        <p>累計</p>
                        <RunNumber target={15259} gap={40} init={11256} speed={8} delay={2700} />
                        <p>戶</p>
                    </div>
                </div>
            </section>
            {/* <Pdf url={"./portfolio.pdf"} active={active} setActive={setActive} /> */}
        </>

    )
}

function Area({ data, setType, type }) {
    const animateRef = useRef(null)
    const closeStyle = {

        position: "absolute",
        backgroundColor: "#fff",
        width: "100%", height: "2px",
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        margin: "auto"
    }
    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            let gg = gsap.timeline()
            gg.from(animateRef.current, {
                opacity: 0,
                duration: 1,
                y: 30,
                delay: 0.15

            }).from(".area-form", {
                opacity: 0,
                duration: 1,
                y: 30,

            }, "<+0.3").from(".close", {
                opacity: 0,
                duration: 1,
                y: 30,

            }, "<")
        }, [animateRef])
        return () => ctx.revert()
    }, [type])
    const fadeOut = () => {
        let ctx = gsap.context(() => {
            let gg = gsap.timeline()
            gg.to(animateRef.current, {
                opacity: 0,
                duration: 0.3
            }).then(() => {
                setType(0)
            })
        }, [animateRef])
    }
    return (
        <section className="area" ref={animateRef}>
            <div className="area-title">
                <h3>{data.title}</h3>
            </div>
            <div className="area-form">
                <div className="area-form-head">
                    <h4>完工年度</h4>
                    <h4>案名</h4>
                </div>
                <div className="area-form-body">
                    {data.body.map((item, i) => {
                        return (
                            <div className="box">
                                <p>{item.year}</p>
                                <p>{item.name}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="close" style={{ position: "absolute", right: "0.7vw", top: "3.6vw", cursor: "pointer", width: "2vw", height: "2vw" }} onClick={fadeOut}>
                <div className="line1" style={{ ...closeStyle, transform: "rotate(45deg)" }}></div>
                <div className="line2" style={{ ...closeStyle, transform: "rotate(-45deg)" }}></div>
            </div>
        </section>
    )
}
