import React, { useLayoutEffect, useRef, useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom';

import SpliText from '../config/splitText';
import gsap from 'gsap';
const requireWebp = require.context("../../../img/team/coporation/sunland/webp", false, /^\.\/.*\.webp$/);
const sunlandWebp = requireWebp.keys().map(requireWebp);
const requireSvg2 = require.context("../../../img/team/coporation/oliv/svg", false, /^\.\/.*\.svg$/);
const olivSvg = requireSvg2.keys().map(requireSvg2);
const requireSvg3 = require.context("../../../img/team/coporation/sunland/svg", false, /^\.\/.*\.svg$/);
const sunlandSvg = requireSvg3.keys().map(requireSvg3);
const requireWebp2 = require.context("../../../img/team/coporation/oliv/webp", false, /^\.\/.*\.webp$/);
const olivWebp = requireWebp2.keys().map(requireWebp2);
const indexSvg = require.context("../../../img/index/svg", false, /^\.\/.*\.svg$/);
const svg = indexSvg.keys().map(indexSvg);
export const Coporation = () => {
    const animateRef = useRef(null);
    const [animate, setAnimate] = useState("nav1")
    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            gsap.config({ nullTargetWarn: false })
            let gg = gsap.timeline()
            gg.from(".left", {
                x: -40,
                opacity: 0,
                duration: 1.4
            }).from(".right .title span", {
                x: 80,
                duration: 0.6,
                stagger: 0.03,
                opacity: 0,
            }, "<+0.5").from(".right .para p", {
                x: 40,
                duration: 0.6,
                opacity: 0
            }, "<+0.8").from(".right .nav li", {
                x: -40,
                duration: 0.6,
                opacity: 0,
                stagger: 0.3
            }, "<+0.4").from(".right .slogan", {
                x: -40,
                duration: 0.6,
                opacity: 0,
            }, "<")
        }, [animateRef])
        return () => ctx.revert()
    }, [animate])
    return (
        <div className='coporation' ref={animateRef}>
            <Routes>
                <Route path="/sunland" element={<Sunland animate={animate} setAnimate={setAnimate} />}></Route>
                <Route path="/oliv" element={<Oliv animate={animate} setAnimate={setAnimate} />}></Route>

            </Routes>
        </div>

    )
}

function Sunland({ animate, setAnimate }) {
    const para1 = {
        title: `ABOUT\nSUNLAND DEVELOPMENT`,
        paragraph: {
            para1: `開創林口住宅文明推手`,
            para2: `每座城市，都有屬於自己的人文故事，「森聯機構」四十年淬煉，以大樹精神根植大林口，二十年來累積27部作品創作出林口地表上的建築森林，薈萃整座城市的美好，引領未來開創住宅新視野。`
        }
    }
    const para2 = {
        title: `SUNLAND DEVELOPMENT\nDESIGN CONCEPT`,
        paragraph: {
            para1: `林口第28號作品 以「Classy Home」敬獻未來`,
            para2: `匯集林口正核心菁華，「森聯機構」以無價時間圓滿整合二千坪大基地，突破重重難關，苛求完美成就稀有，四面大街廓、森海藝術地景，璀璨耀眼，榮耀一整座林口！`
        }
    }
    const para3 = {
        title: `SUNLAND DEVELOPMENT\nDESIGN CONCEPT`,
        paragraph: {
            para1: `林口最高住宅地標締造者`,
            para2: `「森聯機構」以建築超越建築，文化三路「森聯摩天41」高達160米擎天地標，成就林口天際線最美的仰望，未來對望「東森媒體總部」，兩大地標定義林口黃金軸線、核心中的核心。`
        }
    }
    const [para, setPara] = useState(para1);

    return (
        <>
            <div className="sunland">
                <div className="left">
                    {animate == "nav3" ?
                        <Swiper41 /> : animate == "nav1" ? <ImgBox url={sunlandWebp[0].default} /> : <ImgBox url={sunlandWebp[5].default} />
                    }
                </div>


                <div className="right">
                    <ParaBox title={para.title} para={para.paragraph} linePosition={{ bottom: "-1vw" }} mb={"0.5vw"} />
                    <SunlandNav para={para} setPara={setPara} para1={para1} para2={para2} para3={para3} setAnimate={setAnimate} animate={animate} />
                </div>
                <img src={svg[2]} />
            </div>

        </>


    )
}

function SunlandNav({ setPara, para1, para2, para3, setAnimate, animate }) {
    const changePara1 = () => {
        setPara(para1)
    }
    const changePara2 = () => {
        setPara(para2)
    }
    const changePara3 = () => {
        setPara(para3)
    }
    return (
        <div className="nav">
            <ul>
                <li onClick={() => {
                    setAnimate("nav1")
                    changePara1()
                }}
                    style={{ color: animate == "nav1" ? "#c3a457" : "#000" }}>森聯深耕</li>
                <li onClick={() => {
                    setAnimate("nav2")
                    changePara2()
                }}
                    style={{ color: animate == "nav2" ? "#c3a457" : "#000" }}>設計理念</li>
                <li >
                    <Link to="/team/portfolio">
                        歷年業績
                    </Link>
                </li>
                <li onClick={() => {
                    setAnimate("nav3")
                    changePara3()
                }} style={{ color: animate == "nav3" ? "#c3a457" : "#000" }}>摩天41</li>
            </ul>
        </div>
    )
}

function Oliv({ animate, setAnimate }) {
    const para1 = {
        title: `OLIVE TREE\nDESIGN CONCEPT`,
        paragraph: {
            para1: `象徵著公司旺盛的生命力，同心的凝聚力、完美的創造力，從扎根開始、茁壯、開發、結果。\n從自身的本質學能開始，深入了解工作領域的每一事物虛心的學習，清楚的表達，生活在理性與感性之間自我要求、細心探討，堅持做到完美。`,
            para2: `面對問題、重視環節、尊重客戶，秉持著熱忱與服務的精神重視每一事物上的表現，如何在點、線、面上，做選擇與要求。`
        }
    }
    const para2 = {
        title: `ABOUT\nOLIVE TREE`,
        paragraph: {
            para1: `森聯機構CLASSY HOME建案，\n2021年公司開始參與規劃，\n與建築設計團隊為使個案產品更加完美，\n我們不斷自生活中尋找新鮮題材融入本案，掌握時代變化，\n洞察趨勢生活及居住者習慣的改變，\n期許讓本社區成為未來客戶享受美好的生活所在。\n這是我們所堅持與嚮往的情境.......`,
            para2: `回歸居住者角度，深度思考建築每一個面向，\n積極與森聯互動參與規劃建議，\n目的是為了讓社區更好，成為客戶最有價值的人生資產。`
        }
    }

    const [text, setText] = useState("para1")
    return (
        <>
            <div className="oliv">
                <div className="left">
                    {text == "para1" ?
                        <ImgBox url={olivWebp[0].default} /> :
                        <ImgBox url={olivWebp[1].default} />
                    }

                </div>

                <div className="right">
                    {text == "para1" ?
                        <ParaBox title={para1.title} para={para1.paragraph} linePosition={{ bottom: "-1vw" }} mb={"0"} /> :
                        <ParaBox title={para2.title} para={para2.paragraph} linePosition={{ bottom: "-1vw" }} mb={"1.5vw"} />
                    }

                    <div className="slogan" style={{ display: text == "para1" ? "flex" : "none" }}>
                        <img src={olivSvg[0]} />
                        <img src={olivSvg[1].default} />
                        <img src={olivSvg[2]} />
                        <img src={olivSvg[3]} />
                    </div>
                    <OlivNav text={text} setText={setText} setAnimate={setAnimate} animate={animate} />
                </div>

            </div>

        </>
    )


}
function OlivNav({ text, setText, animate, setAnimate }) {


    return (
        <div className="nav">
            <ul>
                <li
                    onClick={() => {
                        setText("para1");
                        setAnimate(!animate)
                    }}
                    style={{ color: text == "para1" ? "#c3a457" : "#000" }}
                >橄欖樹行銷</li>
                <li
                    onClick={() => {
                        setText("para2");
                        setAnimate(!animate)
                    }}
                    style={{ color: text == "para2" ? "#c3a457" : "#000" }}
                >設計理念</li>
            </ul>
        </div>
    )
}
//共用
function ImgBox({ url }) {
    return (
        <div className="imgBox">
            <img src={url} />
        </div>
    )
}

function ParaBox({ title, para, linePosition, mb }) {
    return (
        <div className="paraBox">
            <div className="title">
                <h2 style={{ whiteSpace: "pre-wrap" }}><SpliText text={title} /></h2>
                <div className="line" style={linePosition}></div>
            </div>
            <div className="para">
                <p style={{ whiteSpace: "pre-wrap", marginBottom: mb }}>{para.para1}</p>
                <p style={{ whiteSpace: "pre-wrap" }}>{para.para2}</p>
            </div>
        </div>
    )
}

function Swiper41() {
    let count;
    const [slide, setSlide] = useState(0);
    const slider = useRef(null);
    const image = [
        sunlandWebp[1],
        sunlandWebp[2],
        sunlandWebp[3],
        sunlandWebp[4],
        sunlandWebp[6],
        sunlandWebp[7],
    ]
    return (
        <div className="swiperBox" ref={slider}>
            {image.map((item, i) => {
                return (
                    <div key={i} className="imgBox" style={{ opacity: slide == i ? "1" : "0", pointerEvents: "none", transition: "0.5s" }}>
                        <img src={item.default} />
                    </div>
                )
            })}
            <div className="navBox">
                <div className="prev" onClick={() => {
                    if (slide >= 1 && slide < slider.current.children.length - 1) {
                        count = slide
                        count--
                        setSlide(count)
                        console.log(slide)
                    }
                }}>
                    <img src={sunlandSvg[0]} />
                </div>
                <div className="next" onClick={() => {
                    if (slider.current) {
                        if (slide >= 0 && slide < slider.current.children.length - 2) {
                            count = slide
                            count++
                            setSlide(count)

                        }
                    }
                }}>
                    <img src={sunlandSvg[0]} />
                </div>
            </div>
        </div>
    )
}