import React, { useState, useRef, useLayoutEffect } from 'react'
import { gsap } from 'gsap';

const requireWebp = require.context("../../../img/product/cafe/webp", false, /^\.\/.*\.webp$/);
const webp = requireWebp.keys().map(requireWebp);


export default function Cafe() {
    const [type, setType] = useState(1)
    const animateRef = useRef(null)
    const handleNext = () => {
        const prevType = type;
        let nextType;
        if (prevType < 3) {
            nextType = prevType + 1
        } else {
            nextType = prevType
        }

        setType(nextType)
    }
    const handlePrev = () => {
        const prevType = type;
        let nextType;
        if (prevType > 1) {
            nextType = prevType - 1
        } else {
            nextType = prevType
        }

        setType(nextType)
    }
    const navStyle = {
        width: "1.5vw",
        height: "1.5vw",
        border: "4px solid #fff",
        borderBottom: "none",
        marginTop: "-1.5vw"
    }
    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            let gg = gsap.timeline();
            gg.from(".left img", {
                x: 35,
                opacity: 0,
            }).from(".left h4", {
                x: 35,
                opacity: 0,
                stagger: 0.3
            }, "<+0.3").from(".left p", {
                x: 35,
                opacity: 0,
                stagger: 0.3
            }, "<+0.3").from(".right .imgBox", {
                y: 35,
                opacity: 0,
            }, "<+0.45")
        }, [animateRef])
        return () => ctx.revert()
    }, [])
    return (
        <section className='cafe' ref={animateRef}>
            <div className="left">
                <img src={require("../../../img/product/cafe/svg/000-cafe-logo.svg").default} />
                <div className="paraBox">
                    <h4>Mori Café森 花園秘境中的特調咖啡</h4>
                    <p>融入林口AI科技元宇宙新基因，獨棟圓形「Mori Café森」水晶玻璃屋，整個蛋型平面配置獨樹一格，透明帷幕外牆當陽光透過玻璃閃爍著秘境中的珠寶，五感交織在充滿綠色植感花園秘境之中讓人心情愉悅，等一個人的咖啡，工作中場醒腦、二樓平台吹風…滿滿的咖啡因讓美好上癮！</p>
                    <p>MORI CAFÉ森 具備功能:</p>
                    <p>• 專屬社區咖啡風味<br />• 服務時間：8:00AM~22:00PM<br />• 提供社區餐點服務<br />• Party包場</p>
                </div>
            </div>
            <div className="right">
                <div className="imgBox">
                    <img src={require("../../../img/team/design/webp/007-postulate-fancyImg3-preload.webp").default} />
                    {/* {[...Array(3)].map((item, i) => {
                        return (
                            <img src={webp[i].default} style={{ opacity: type == i + 1 ? 1 : 0, transition: "opacity 0.3s" }} />
                        )
                    })} */}
                    {/* <div className="navBox" style={{ display: "flex", justifyContent: "space-between", position: "absolute", zIndex: 30, top: 0, bottom: 0, margin: "auto 0", width: "100%", height: 0, padding: "0 0vw" }}>
                        <div className="prev" onClick={handlePrev} style={{ padding: "1.5vw 2vw 3vw", pointerEvents: "auto", cursor: "pointer" }}>
                            <div style={{ ...navStyle, borderRight: "none", transform: "rotate(-45deg)", }}></div>
                        </div>
                        <div className="next" onClick={handleNext} style={{ padding: "1.5vw 2vw 3vw", pointerEvents: "auto", cursor: "pointer" }}>
                            <div style={{ ...navStyle, borderLeft: "none", transform: "rotate(45deg)" }}></div>
                        </div>
                    </div > */}
                </div>
                <div className="bg">
                    <img src={require("../../../img/product/cafe/svg/001-gray-bg.svg").default} />
                </div>
            </div>
        </section>
    )
}
