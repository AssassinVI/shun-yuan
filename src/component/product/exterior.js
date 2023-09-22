import React, { useState, useRef, useLayoutEffect } from 'react'
import { gsap } from 'gsap';
import SpliText from '../config/splitText';
const requireSvg = require.context("../../../img/product/exterior/svg", false, /^\.\/.*\.svg$/);
const svg = requireSvg.keys().map(requireSvg);
const requireWebp = require.context("../../../img/product/exterior/webp", false, /^\.\/.*\.webp$/);
const webp = requireWebp.keys().map(requireWebp);

export default function Exterior() {
    const [type, setType] = useState("light")
    const animateRef = useRef(null)
    const data = [{
        type: "light",
        img: webp[0].default,
        period: {
            icon: svg[0],
            text: "05:00~18:30"
        }
    }, {
        type: "night",
        img: webp[1].default,
        period: {
            icon: svg[1],
            text: "18:30~21:30"
        }
    }, {
        type: "lateNight",
        img: webp[2].default,
        period: {
            icon: svg[1],
            text: "21:30~22:30"
        }
    }, {
        type: "midNight",
        img: webp[3].default,
        period: {
            icon: svg[1],
            text: "22:30~05:00"
        }
    }, {
        type: "constructor",
        img: webp[4].default,
        period: {
            icon: svg[2],
            text: "建築巧思"
        }
    }]
    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            let gg = gsap.timeline();
            gg.from(".right .titleBox h2 span", {
                stagger: 0.05,
                x: 30,
                opacity: 0
            }).from(".right ul li", {
                stagger: 0.2,
                x: 30,
                opacity: 0
            }, "<+0.6")
        }, [animateRef])
        return () => ctx.revert()
    }, [])
    return (
        <section className='exterior' ref={animateRef}>
            <div className="left">
                {data.map((item, i) => {
                    return (
                        <img src={item.img} key={item.type} style={{ position: "absolute", objectFit: "cover", left: 0, top: 0, width: "100%", height: "100%", opacity: type == item.type ? 1 : 0 }} />
                    )
                })}
            </div>
            <div className="right">
                <div className="titleBox">
                    <h2><SpliText text={"ARCHITECTURE"} /></h2>
                    <div className="line"></div>
                </div>
                <ul>
                    {data.map((item, i) => {
                        return (
                            <li style={{ display: "flex", alignItems: "center" }} onClick={() => setType(item.type)}>
                                <img src={item.period.icon} style={{ width: "1.5vw", height: "auto" }} />
                                <p style={{ color: type == item.type ? "#c2a357" : "#000" }}>{item.period.text}</p>
                            </li>
                        )
                    })}
                </ul>
            </div>
            <img src={require("../../../img/index/svg/002-slogan.svg")} style={{ position: "absolute", right: "1.5vw", bottom: 0, width: "38.5%", height: "auto" }} />
        </section>
    )
}
