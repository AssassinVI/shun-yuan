import React, { useLayoutEffect, useRef, useState, useEffect } from 'react'
// import sunlandSvg from "../../../img/index/svg/002-slogan.svg"
import { Routes, Route } from 'react-router-dom';
import SpliText from '../config/splitText';
import gsap from 'gsap';
import FancyBox from '../config/fancyBox';
const requireWebp = require.context("../../../img/team/design/webp", false, /^\.\/.*\.webp$/);
const webp = requireWebp.keys().map(requireWebp);
const requireSvg = require.context("../../../img/team/design/svg", false, /^\.\/.*\.svg$/);
const svg = requireSvg.keys().map(requireSvg);

export const DesignTeam = () => {
    const animateRef = useRef(null)
    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            let gg = gsap.timeline()

            gg.fromTo(".img-box", {
                clipPath: "polygon(0 0 , 0 100% , 0 100% , 0 0)"
            }, {
                clipPath: "polygon(0 0 , 0 100% , 100% 100% , 100% 0)",
                duration: 1.8
            }).from(".img-box .designer p", {
                x: 40,
                duration: 0.6,
                opacity: 0,
            }, "<+1").from(".img-box .designer img", {
                x: 40,
                duration: 0.6,
                opacity: 0,
            }, "<+0.3").from(".para-box .title span", {
                x: 80,
                duration: 0.6,
                stagger: 0.03,
                opacity: 0,
            }, "<+0.5").from(".para-box .para ", {
                x: 80,
                duration: 0.6,
                opacity: 0,
            }, "<+0.3").from(".nav li", {
                x: -40,
                duration: 0.6,
                opacity: 0,
                stagger: 0.3
            }, "<+0.4")
        }, [animateRef])
        return () => ctx.revert()
    }, [])

    return (
        <>
            <section className="designTeam" ref={animateRef}>
                <Routes>
                    <Route path="/architecturalDesigner" element={<ArchitecturalDesigner />}></Route>
                    <Route path="/postylateDesigner" element={<PostylateDesigner height={"87%"} right={"2vw"} />}></Route>
                    <Route path="/lightingDesigner" element={<LightingDesigner right={"14vw"} />}></Route>
                    <Route path="/lanscapeDesigner" element={<LanscapeDesigner right={"14vw"} />}></Route>
                </Routes>
                <img src={sunlandSvg} />
            </section>
        </>

    )
}


function ArchitecturalDesigner({ height, right }) {
    const para1 = {
        title: `ARCHITECTURAL DESIGN\nDESIGN CONCEPT`,
        paragraph: {
            para1: {
                paraInner1: `廖錦盈建築師事務所`,
                paraInner2: `廖錦盈`,
                paraInner3: `建築師`
            },
            para2: `倫敦大獎 創新建築美學`,
            para3: `三十餘年來遍布北台灣800個作品，囊括精品別墅、大型社\n區、華廈、摩天大樓，其中以林口、龜山最為集中，創新設\n計建築走在國際趨勢前端，為北台灣10大建築師並榮獲\n2018倫敦設計獎的肯定。`
        }
    }
    const fancyPara = [{
        title: `ARCHITECTURAL DESIGN\nDESIGN CONCEPT`,
        svgPara: svg[5].default,
        img: webp[4].default
    }]
    return (
        <>


            <ParaBox title={para1.title} para={para1.paragraph} linePosition={{ top: "-1vw" }} mb={"0.5vw"}>
                <div className="nav">
                    <TextNav title={"建築大師"} para={fancyPara} />
                </div>
            </ParaBox>
            <ImgBox>
                <div className="imgBox" style={{ height: height, right: right }}>
                    <img src={webp[0].default} />
                </div>
                <div className="designer">
                    <p>建築設計師</p>
                    <img src={svg[1].default} />
                </div>
            </ImgBox>

        </>

    )
}

function PostylateDesigner({ height, right }) {
    const para1 = {
        title: `POSTULATE DESIGN\nDESIGN CONCEPT`,
        paragraph: {
            para1: {
                paraInner1: `雲鼎設計`,
                paraInner2: `陳柏壽`,
                paraInner3: `設計師`
            },
            para2: `巧思構築 建築中介空間`,
            para3: `二十多年隨時代脈動整合空間設計，公設室內設計便是\n建築與景觀中間穿針引線的中介空間，扮演連續內外空\n間的角色，迎景入室，以光線、動線、家具家飾及材質\n，鋪陳每個空間特有的故事。`
        }
    }
    const fancyPara = [{
        title: `POSTULATE DESIGN\nDESIGN CONCEPT`,
        svgPara: svg[17].default,
        img: webp[14].default
    }]
    return (
        <>


            <ParaBox title={para1.title} para={para1.paragraph} linePosition={{ top: "-1vw" }} mb={"0.5vw"}>
                <div className="nav">
                    <TextNav title={"公設大師"} para={fancyPara} />
                </div>
            </ParaBox>
            <ImgBox>
                <div className="imgBox" style={{ height: height, right: right }}>
                    <img src={webp[1].default} />
                </div>
                <div className="designer">
                    <p>公設設計師</p>
                    <img src={svg[2].default} />
                </div>
            </ImgBox>

        </>

    )
}

function LightingDesigner({ height, right }) {
    const para1 = {
        title: `LIGHTING DESIGN\nDESIGN CONCEPT`,
        paragraph: {
            para1: {
                paraInner1: `日大照明`,
                paraInner2: `張文貴`,
                paraInner3: `設計總監`
            },
            para2: `點亮林口 星光璀璨之夜`,
            para3: `建築的光影能雕塑建築豐富層次，呈現夜間視覺印象，靜謐\n的燈光更刻畫出另一幅幸福溫暖的城市風貌；符合建築精神\n語彙的燈光設計，滿足能源環保、使用成本、維護考量，點\n亮城市天際線。`
        }
    }
    const fancyPara = [{
        title: `LIGHTING DESIGN\nDESIGN CONCEPT`,
        svgPara: svg[16].default,
        img: webp[13].default
    }]
    return (
        <>


            <ParaBox title={para1.title} para={para1.paragraph} linePosition={{ top: "-1vw" }} mb={"0.5vw"}>
                <div className="nav">
                    <TextNav title={"燈光大師"} para={fancyPara} />
                </div>
            </ParaBox>
            <ImgBox>
                <div className="imgBox" style={{ height: height, right: right }}>
                    <img src={webp[2].default} />
                </div>
                <div className="designer">
                    <p>燈光設計師</p>
                    <img src={svg[3].default} />
                </div>
            </ImgBox>

        </>

    )
}

function LanscapeDesigner({ height, right }) {
    const para1 = {
        title: `LANDSCAPE DESIGN\nDESIGN CONCEPT`,
        paragraph: {
            para1: {
                paraInner1: `六國景觀`,
                paraInner2: `蘇瑞泉`,
                paraInner3: `董事長`
            },
            para2: `國際格局 成就豪宅景觀`,
            para3: `台灣景觀業界中豪宅的第一把推手，包括天母富邦、仁愛鴻\n禧、信義富邦、信義之星等，與國外知名建築師合作信義\nD3 (英國 Norman Foster)、信義聯勤 (英國 Richard\n Rogers)等實力斐然。`
        }
    }
    const fancyPara = [{
        title: `LANDSCAPE DESIGN\nDESIGN CONCEPT`,
        svgPara: svg[10].default,
        img: require("../../../img/product/exterior/webp/004-idea.webp").default
    }]
    // , {
    //     title: `LANDSCAPE DESIGN\nDESIGN CONCEPT`,
    //     svgPara: svg[11].default,
    //     img: webp[10].default
    // }
    // , {
    //     title: `LANDSCAPE DESIGN\nDESIGN CONCEPT`,
    //     svgPara: svg[12].default,
    //     img: webp[11].default
    // }, {
    //     title: `LANDSCAPE DESIGN\nDESIGN CONCEPT`,
    //     svgPara: svg[13].default,
    //     img: webp[12].default
    // }
    return (
        <>



            <ParaBox title={para1.title} para={para1.paragraph} linePosition={{ top: "-1vw" }} mb={"0.5vw"}>
                <div className="nav">
                    <TextNav title={"景觀大師"} para={fancyPara} />
                </div>
            </ParaBox>




            <ImgBox>
                <div className="imgBox" style={{ height: height, right: right }}>
                    <img src={webp[3].default} />
                </div>
                <div className="designer">
                    <p>景觀設計師</p>
                    <img src={svg[4].default} />
                </div>
            </ImgBox>
        </>

    )
}
function ImgBox({ children }) {
    return (
        <div className="img-box">
            <img src={svg[0]} />
            {children}
        </div>
    )
}
function ParaBox({ title, para, linePosition, mb, children }) {
    return (
        <div className="para-box">
            <div className="paraBox">
                <div className="title">
                    <h2 style={{ whiteSpace: "pre-wrap" }}><SpliText text={title} /></h2>
                    <div className="line" style={linePosition}></div>
                </div>
                <div className="para">
                    <p style={{ whiteSpace: "pre-wrap", marginBottom: mb }}>{para.para1.paraInner1}<span>{para.para1.paraInner2}</span>{para.para1.paraInner3}</p>
                    <p style={{ whiteSpace: "pre-wrap" }}>{para.para2}</p>
                    <p style={{ whiteSpace: "pre-wrap" }}>{para.para3}</p>
                </div>
            </div >
            {children}
        </div>

    )
}

function TextNav({ title, para }) {
    const [slide, setSlide] = useState(0)
    const wrapperStyle = {
        display: "flex",
        width: "100%",
        height: "100%",
        position: "absolute",
        left: "0",
        top: "0",
        transistion: "0.3s"
    }
    const next = (e) => {
        e.stopPropagation();
        let newIndex = slide
        if (newIndex == para.length - 1) {
            return
        }
        setSlide(++newIndex)
    }
    const prev = (e) => {
        e.stopPropagation()
        let newIndex = slide
        if (newIndex == 0) {
            return
        }
        setSlide(--newIndex)
    }
    return (
        <ul>
            <li style={{ color: "#c3a457" }}>
                {title}
            </li>
            <li>
                <FancyBox text={"設計理念"}>
                    <div className="team">
                        <div className="designTeam">
                            {
                                para.map((item, i) => {
                                    return (
                                        <div className="wrapper" style={{ ...wrapperStyle, opacity: slide == i ? 1 : 0 }} >
                                            <div className="para-box">
                                                <div className="paraBox">
                                                    <div className="title">
                                                        <h2 style={{ whiteSpace: "pre-wrap" }}>{item.title}</h2>
                                                        <div className="line" style={{ top: "-1vw" }}></div>
                                                    </div>
                                                    <div className="paraSvg">
                                                        <img src={item.svgPara} />
                                                    </div>
                                                </div>
                                            </div>
                                            <ImgBox>
                                                <div className="fancyImg">
                                                    <img src={item.img} />
                                                </div>
                                            </ImgBox>
                                        </div>
                                    )
                                })
                            }
                            {para.length >= 2 && <>
                                <div className="prev" onClick={prev}>
                                    <img src={svg[15]} style={{ width: "1.5vw", height: "1.5vw" }} />
                                </div>
                                <div className="next" onClick={next}>
                                    <img src={svg[14]} style={{ width: "1.5vw", height: "1.5vw" }} />
                                </div>
                            </>}

                            <img src={sunlandSvg} />
                        </div>
                    </div>
                </FancyBox>

            </li>
        </ul>
    )
}