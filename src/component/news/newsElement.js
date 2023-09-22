import React, { useRef, useLayoutEffect } from 'react'
import { gsap } from 'gsap';
import { PopulationChart } from '../config/svgCollection';

const requireSvg = require.context("../../../img/news/newsElement/svg", false, /^\.\/.*\.svg$/);
const svg = requireSvg.keys().map(requireSvg);
const requireWebp = require.context("../../../img/news/newsElement/webp", false, /^\.\/.*\.webp$/);
const webp = requireWebp.keys().map(requireWebp);

export function Population() {
    const animateRef = useRef(null);
    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            let gg = gsap.timeline({ delay: 0.6 })
            gg.to(".chart", {
                clipPath: "polygon(0 100%, 100% 100%, 100% 0%, 0 0%)",
                stagger: 0.1,
                duration: 0.4
            }).from(".left .imgBox img", {
                opacity: 0,
                duration: 0.65
            })
        }, [animateRef])
        return () => ctx.revert()
    }, [])
    return (
        <section className='population' ref={animateRef}>
            <div className="left">
                <div className="titleBox">
                    <h2>最強人口結構</h2>
                    <h4>人口成長最快、平均年齡最低、家戶支配所得最高、市容最新的新興城市</h4>
                </div>
                <div className="imgBox">
                    <PopulationChart />
                    <img src={webp[0].default} />
                </div>
            </div>
            <div className="right">
                <div className="imgBox">
                    <img src={svg[1].default} />
                    <img className='triumph' src={webp[1].default} />
                </div>
                <div className="imgBox">
                    <img src={svg[2].default} />
                    <img className='triumph' src={webp[1].default} />
                </div>
                <div className="imgBox">
                    <img src={svg[3].default} />
                    <img className='triumph' src={webp[1].default} />
                </div>
            </div>
        </section>
    )
}

export function Image({ url }) {
    return (
        <img src={url} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
    )
}
