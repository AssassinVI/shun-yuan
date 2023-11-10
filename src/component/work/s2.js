import React, {useRef, useEffect, useLayoutEffect, useState } from 'react'
import FancyBox from "@/src/component/config/fancyBox"
import FancyBox3 from "@/src/component/config/fancyBox3"
import { gsap } from 'gsap';
import CloudEffect from '../config/cloudEffect';

export default function Brand() {

    const animateRef = useRef(null);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            let gg = gsap.timeline({ delay: 0.6 })
            gg.from(".left .cloudEffect", {maskSize: 20, opacity:0, duration: 1.5, })
              .from(".left .thumbBox", {y:30, opacity:0, duration: 1.5, }, '<+=1')
              .from(".right .title, .right .card", {y:30, opacity:0, stagger:0.3, duration: 1.5, }, '<+=0.5');
              
        }, [animateRef])
        return () => ctx.revert()
    }, []);

    

    return (
        <section className="work" style={{width:'100%', height:'100%'}} ref={animateRef}>
            <div className='s2' style={{width:'100%', height:'100%'}}>
              <div className='left'>
                <CloudEffect start={true} style={{ height: "100%" }} maskSize={'100%'}>
                    <div className='imgBox'>
                        <img src={require("@/img/work/factory_img1.jpg").default} alt="" />
                    </div>
                </CloudEffect>

                <FancyBox3 thumbUrl={require("@/img/work/btn.svg").default} width='90%'>
                    <div className='workFancyBox2'>
                        <div className='title'>
                            <h2>廠驗報告</h2>
                        </div>
                        <div className='paperBox'>
                            <FancyBox thumbUrl={require("@/img/work/report01.jpg").default}>
                                <div className='report'>
                                    <img src={require("@/img/work/report01.jpg").default} alt="" />
                                </div>
                            </FancyBox>
                            <FancyBox thumbUrl={require("@/img/work/report02.jpg").default}>
                                <div className='report'>
                                    <img src={require("@/img/work/report02.jpg").default} alt="" />
                                </div>
                            </FancyBox>
                            <FancyBox thumbUrl={require("@/img/work/report03.jpg").default}>
                                <div className='report'>
                                    <img src={require("@/img/work/report03.jpg").default} alt="" />
                                </div>
                            </FancyBox>
                            <FancyBox thumbUrl={require("@/img/work/report04.jpg").default}>
                                <div className='report'>
                                    <img src={require("@/img/work/report04.jpg").default} alt="" />
                                </div>
                            </FancyBox>
                        </div>
                    </div>
                </FancyBox3>
              </div>
              <div className='right'>
                <div className='title'>
                    <h2>廠驗報告</h2>
                    <h4 className='en_font'>Factory Inspection Report</h4>
                </div>

                <div className='card'>
                    <FancyBox thumbUrl={require("@/img/work/video1-100.jpg").default}>
                        <div className='workFancyBox'>
                            <video src={require("@/img/work/video01.mp4").default} controls autoPlay muted></video>
                        </div>
                    </FancyBox>
                    <h2>混凝土抗壓測試</h2>
                </div>
                <div className='card'>
                    <FancyBox thumbUrl={require("@/img/work/video2-100.jpg").default}>
                       <div className='workFancyBox'>
                          <video src={require("@/img/work/video02.mp4").default} controls autoPlay muted></video></video>
                       </div>
                    </FancyBox>
                    <h2>鋼筋彎曲測試</h2>
                </div>
              </div>
            </div>
        </section>
    )
}


