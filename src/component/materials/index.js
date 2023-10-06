import React, {useRef, useEffect, useLayoutEffect, useState} from 'react'
import FancyBox2 from "@/src/component/config/fancyBox2"
import { gsap } from 'gsap';
import CloudEffect from '../config/cloudEffect';

export default function Materials() {


    const animateRef = useRef(null);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            let gg = gsap.timeline({ delay: 0.6 })
            gg.from(".txt_box h2, .txt_box p", {x: -20, opacity:0, filter:'blur(15px)', stagger:0.3, duration: 1.5,})
              .from(".img_box .b_line", {width: '0%', height: '0%', stagger:0.15, duration: 1,}, '<+=0.5')
              .from(".img_box .thumbBox", { opacity:0, filter:'brightness(3)', stagger:0.2, duration: 1,}, '<+=0.8')
              .from(".img_box .logo", {x: -20, opacity:0, filter:'blur(15px)', duration: 1,}, '<+=1')
              
        }, [animateRef])
        return () => ctx.revert()
    }, []);




    return (
        <section className="materials" ref={animateRef}>
            <div className='box'>
                <img className="logo" src={require("../../../img/life/2x/logo@2x.png").default} />
                <div className='txt_box'>
                  <h2>CONSTRUCTION<br/>EQUIPMENT</h2>
                  <p>現代簡約造型風格，講究沈穩優雅品味，深淺色系建材運用及垂直線條分割，增加立面高聳感，適度調和深淺色調搭配，產生層次感。</p>
                </div>
                <div className='img_box'>
                  <div className='box1 box'>
                    <img className='logo' src={require("@/img/materials/logo_m_1.svg")} />
                    <FancyBox2 thumbUrl={require("@/img/materials/img_m_1.jpg").default}>
                        <div className='content_box'>
                         <button className='close_btn'><img src={require("@/img/config/close_icon.svg")} /></button>
                          <div className='all_box'>
                            <img src={require("@/img/materials/img_m_1.jpg").default} />
                            <div className='flex_box'>
                                <div className='left'><img src={require("@/img/materials/txt1_1@2x.png").default} /></div>
                                <div className='right'><img src={require("@/img/materials/txt1_2.svg").default} /></div>
                            </div>
                          </div>
                        </div>
                      
                    </FancyBox2>
                    <div className='b_line'></div>
                  </div>
                  <div className='box2 box'>
                    <img className='logo' src={require("@/img/materials/logo_m_2.svg")} />
                    <FancyBox2 thumbUrl={require("@/img/materials/img_m_2.jpg").default}>
                      <img className='img' src={require("@/img/materials/img_m_2.jpg").default} />
                    </FancyBox2>
                  </div>
                  <div className='box3 box'>
                    <img className='logo' src={require("@/img/materials/logo_m_3.svg")} />
                    <FancyBox2 thumbUrl={require("@/img/materials/img_m_3.jpg").default}>
                      <img className='img' src={require("@/img/materials/img_m_3.jpg").default} />
                    </FancyBox2>
                    <div className='b_line'></div>
                    <div className='b_line'></div>
                  </div>
                  <div className='box4 box'>
                    <img className='logo' src={require("@/img/materials/logo_m_4.svg")} />
                    <FancyBox2 thumbUrl={require("@/img/materials/img_m_4.jpg").default}>
                      <img className='img' src={require("@/img/materials/img_m_4.jpg").default} />
                    </FancyBox2>
                  </div>
                  <div className='box5 box'>
                    <img className='logo' src={require("@/img/materials/logo_m_5.svg")} />
                    <FancyBox2 thumbUrl={require("@/img/materials/img_m_5.jpg").default}>
                      <img className='img' src={require("@/img/materials/img_m_5.jpg").default} />
                    </FancyBox2>
                    <div className='b_line'></div>
                  </div>
                  <div className='box6 box'>
                    <img className='logo' src={require("@/img/materials/logo_m_6.svg")} />
                    <FancyBox2 thumbUrl={require("@/img/materials/img_m_6.jpg").default}>
                      <img className='img' src={require("@/img/materials/img_m_6.jpg").default} />
                    </FancyBox2>
                    <div className='b_line'></div>
                  </div>
                  <div className='box7 box'>
                    <img className='logo' src={require("@/img/materials/logo_m_7.svg")} />
                    <FancyBox2 thumbUrl={require("@/img/materials/img_m_7.jpg").default}>
                      <img className='img' src={require("@/img/materials/img_m_7.jpg").default} />
                    </FancyBox2>
                    <div className='b_line'></div>
                  </div>
                  <div className='box8 box'>
                    <img className='logo' src={require("@/img/materials/logo_m_8.svg")} />
                    <FancyBox2 thumbUrl={require("@/img/materials/img_m_8.jpg").default}>
                      <img className='img' src={require("@/img/materials/img_m_8.jpg").default} />
                    </FancyBox2>
                    <div className='b_line'></div>
                    <div className='b_line'></div>
                  </div>
                  <div className='box9 box'>
                    <img className='logo' src={require("@/img/materials/logo_m_9.svg")} />
                    <FancyBox2 thumbUrl={require("@/img/materials/img_m_9.jpg").default}>
                      <img className='img' src={require("@/img/materials/img_m_9.jpg").default} />
                    </FancyBox2>
                    <div className='b_line'></div>
                    <div className='b_line'></div>
                  </div>

                </div>
            </div>
        </section>
    )
}