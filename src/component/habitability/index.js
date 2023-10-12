import React, {useRef, useEffect, useLayoutEffect, useState} from 'react'
import FancyBox from "@/src/component/config/fancyBox"
import { gsap } from 'gsap';
import CloudEffect from '../config/cloudEffect';

export default function Habitability() {

    
    const animateRef = useRef(null);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            let gg = gsap.timeline({ delay: 0.6 })
            gg.from(".left .cloudEffect", {maskSize: 20, opacity:0, duration: 1.5,})
              .from(".right .enTitle, .right h1, .right ul li, .right .svg_box", {opacity:0, x:40, filter:'blur(15px)', stagger:0.2,  duration: 1,}, '<+=0.5')
              
        }, [animateRef])
        return () => ctx.revert()
    }, []);




    return (
        <section className="habitability" ref={animateRef}>
            <img className="logo" src={require("../../../img/config/logo@2x.png").default} />
            <div className='flex_box'>
               <div className='left'>
                 <CloudEffect start={true} style={{ height: "100%" }} maskSize={'122%'}>
                     <img src={require("@/img/habitability/banner.jpg").default} />
                 </CloudEffect>
               </div>
               <div className='right'>
                 <h2 className='enTitle'>LIGHT INTERIOR <br />DESIGN</h2>
                 <h1>適居方案</h1>
                 <ul>
                    <li>全室空調</li>
                    <li>全室天花板+崁燈</li>
                    <li>系統櫃</li>
                    <li>主浴鏡櫃</li>
                    <li>客浴鏡櫃</li>
                 </ul>

                   <div className='svg_box'>
                    <h3>系統櫃配置</h3>
                    {/* 右下角平面小圖 */}
                    <svg id="floor_Standard" data-name="圖層 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 346 156.32">
                            <g data-name="圖層 1">
                                <g>
                                <polygon className="A1_rect" points="57.78 10.99 57.78 .5 14.12 .5 14.12 6.08 11.55 6.08 11.55 10.99 2.66 10.99 2.66 35.36 1.58 35.36 1.58 60.43 0 60.43 0 87.84 1.58 87.84 1.58 87.84 8.41 87.84 8.41 82.93 42.96 82.93 42.96 89.21 72.15 89.21 72.15 82.93 72.15 80.3 72.15 10.99 57.78 10.99"/>
                                <polygon className="A3_rect" points="72.55 86.48 95.12 86.48 95.12 149.22 66.1 149.22 66.1 146.41 34.32 146.41 34.32 149.27 29.02 149.27 29.02 146.95 9.4 146.95 9.4 153.09 1.95 153.09 1.95 134.83 4.99 134.83 4.99 118.13 1.92 118.13 1.92 110.56 4.42 110.56 4.42 102.19 1.92 102.19 1.92 97.71 4.99 97.71 4.99 90.21 8.81 90.21 8.81 85.3 42.37 85.3 42.37 91.6 72.64 91.6 72.55 86.48"/>
                                <polygon className="A2_rect" points="139.46 68.84 139.46 13.39 139.53 13.39 139.53 5.89 87.34 5.89 87.34 10.1 74.65 10.1 74.65 83.5 134.99 83.5 139.46 83.5 140.62 83.5 140.62 68.84 139.46 68.84"/>
                                <polygon className="B1_rect" points="228.03 10.99 228.03 .5 271.69 .5 271.69 6.08 274.26 6.08 274.26 10.99 283.15 10.99 283.15 35.36 284.22 35.36 284.22 60.43 285.81 60.43 285.81 87.84 284.22 87.84 284.22 87.84 277.4 87.84 277.4 82.93 242.84 82.93 242.84 89.21 213.66 89.21 213.66 82.93 213.66 80.3 213.66 10.99 228.03 10.99"/>
                                <polygon className="B3_rect" points="213.26 86.48 190.68 86.48 190.68 149.22 219.71 149.22 219.71 146.41 251.49 146.41 251.49 149.27 256.79 149.27 256.79 146.95 276.4 146.95 276.4 153.09 283.86 153.09 283.86 134.83 280.81 134.83 280.81 118.13 283.88 118.13 283.88 110.56 281.38 110.56 281.38 102.19 283.88 102.19 283.88 97.71 280.81 97.71 280.81 90.21 277 90.21 277 85.3 243.44 85.3 243.44 91.6 213.17 91.6 213.26 86.48"/>
                                <polygon className="B2_rect" points="145.35 68.84 145.35 13.39 145.27 13.39 145.27 5.89 197.46 5.89 197.46 10.1 210.16 10.1 210.16 83.5 149.82 83.5 145.35 83.5 144.18 83.5 144.18 68.84 145.35 68.84"/>
                                <text className="A1"  transform="translate(18.39 56.89)"><tspan x="0" y="0">A1</tspan></text>
                                <text className="A3"  transform="translate(32.39 127.89)"><tspan x="0" y="0">A3</tspan></text>
                                <text className="B3"  transform="translate(206.89 127.89)"><tspan x="0" y="0">B3</tspan></text>
                                <text className="B1"  transform="translate(228.89 56.89)"><tspan x="0" y="0">B1</tspan></text>
                                <text className="A2"  transform="translate(86.39 55.89)"><tspan x="0" y="0">A2</tspan></text>
                                <text className="B2"  transform="translate(152.39 55.89)"><tspan x="0" y="0">B2</tspan></text>
                                </g>
                            </g>
                        </svg>
                    </div>
               </div>
               
            </div>
        </section>
    )
}