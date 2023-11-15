import React, {useRef, useEffect, useLayoutEffect, useState} from 'react'
import FancyBox2 from "@/src/component/config/fancyBox2"
import { Outlet, Link } from "react-router-dom";
import { gsap } from 'gsap';

export default function Materials() {

    const animateRef = useRef(null);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            let gg = gsap.timeline({ delay: 0.6 })
            gg.from(".txt_box h2, .txt_box p", {x: -20, opacity:0, filter:'blur(15px)', stagger:0.3, duration: 1.5,})
              .from(".img_box .b_line", {width: '0%', height: '0%', stagger:0.15, duration: 1,}, '<+=0.5')
              .from(".img_box .thumbBox", { opacity:0, filter:'brightness(3)', stagger:0.15, duration: 1,}, '<+=0.5')
              .from(".img_box .logo", {x: -20, opacity:0, filter:'blur(15px)', duration: 1,}, '<+=1')
              
        }, [animateRef])
        return () => ctx.revert()
    }, []);

    return (
        <section className="materials" ref={animateRef}>

          {/* 子分頁輸出 */}
          <Outlet />

            <div className='box'>
                <img className="mainLogo" src={require("../../../img/config/logo@2x.png").default} />
                <div className='txt_box'>
                  <h2>MATERIALS & EQUIPMENTS</h2>
                  <p>優越的品質，來自對細節的講究<br/>嚴選機能建材，打造每一方寸都深得人心的住宅<br/>化繁為簡，讓生活舒心自在</p>
                </div>
                <div className='img_box'>
                  <div className='box1 box'>
                    <img className='logo' src={require("@/img/materials/logo_m_1.svg").default} />
                    <FancyBox2 thumbUrl={require("@/img/materials/img_m_1.jpg").default}>
                        <div className='flex_box'>
                            <div className='left'>
                              <img src={require("@/img/materials/txt1_1@2x.png").default} />
                              
                            </div>
                            <div className='right'><img src={require("@/img/materials/txt1_2.svg").default} /></div>
                        </div>
                    </FancyBox2>
                    <div className='b_line'></div>
                  </div>
                  <div className='box2 box'>
                    <img className='logo' src={require("@/img/materials/logo_m_2.svg").default} />
                    <FancyBox2 thumbUrl={require("@/img/materials/img_m_2.jpg").default}>
                        <div className='flex_box'>
                            <div className='left'><img src={require("@/img/materials/txt2_1@2x.png").default} style={{padding:'9vw'}} /></div>
                        </div>
                    </FancyBox2>
                  </div>
                  <div className='box3 box'>
                    <img className='logo' src={require("@/img/materials/logo_m_3.svg").default} />
                    <FancyBox2 thumbUrl={require("@/img/materials/img_m_3.jpg").default}>
                        <div className='flex_box'>
                            <div className='left'>
                              <img src={require("@/img/materials/txt3_1@2x.webp").default} />
                              
                            </div>
                            <div className='right'><img src={require("@/img/materials/txt3_2@2x.png").default} style={{padding: '4vw 4vw 4vw 0vw'}} /></div>
                        </div>
                    </FancyBox2>
                    <div className='b_line'></div>
                    <div className='b_line'></div>
                  </div>
                  <div className='box4 box'>
                    <img className='logo' src={require("@/img/materials/logo_m_4.svg").default} />
                    <FancyBox2 thumbUrl={require("@/img/materials/img_m_4.jpg").default}>
                        <div className='flex_box'>
                            <div className='left' style={{flex:'1 1 35%'}}>
                              <img src={require("@/img/materials/txt4_1@2x.png").default} style={{padding:'9vw 4vw'}} />
                              
                            </div>
                            <div className='right'><img src={require("@/img/materials/txt4_2@2x.png").default} /></div>
                        </div>
                    </FancyBox2>
                  </div>
                  <div className='box5 box'>
                    <img className='logo' src={require("@/img/materials/logo_m_5.svg").default} />
                    <FancyBox2 thumbUrl={require("@/img/materials/img_m_5.jpg").default}>
                        <div className='flex_box'>
                            <div className='left'>
                              <img src={require("@/img/materials/txt5_1@2x.png").default} style={{padding: '8vw 4vw'}} />
                              
                            </div>
                            <div className='right'><img src={require("@/img/materials/txt5_2@2x.png").default} /></div>
                        </div>
                    </FancyBox2>
                    <div className='b_line'></div>
                  </div>
                  <div className='box6 box'>
                    <img className='logo' src={require("@/img/materials/logo_m_6.svg").default} />
                    <FancyBox2 thumbUrl={require("@/img/materials/img_m_6.jpg").default} width={'80%'}>
                        <div className='flex_box'>
                            <div className='left' style={{flex:'1 1 43%'}}><img src={require("@/img/materials/txt6_1@2x.png").default} style={{padding:'4vw 0'}} /></div>
                            <div className='right' style={{flex:'1 1 40%'}}><img src={require("@/img/materials/txt6_2@2x.png").default} style={{padding:'3vw 3.5vw'}} /></div>
                        </div>
                    </FancyBox2>
                    <div className='b_line'></div>
                  </div>
                  <div className='box7 box'>
                    <img className='logo' src={require("@/img/materials/logo_m_7.svg").default} />

                    <div className='thumbBox'>
                     <Link to={"/materials/kitchenware"}>
                       <img className='img' src={require("@/img/materials/img_m_7.jpg").default} />
                     </Link>
                    </div>

                    <div className='b_line'></div>
                  </div>
                  <div className='box8 box'>
                    <img className='logo' src={require("@/img/materials/logo_m_8.svg").default} />
                      <div className='thumbBox'>
                        <Link to={"/materials/bathroom"}>
                          <img className='img' src={require("@/img/materials/img_m_8.jpg").default} />
                        </Link>
                      </div>
                    <div className='b_line'></div>
                    <div className='b_line'></div>
                  </div>
                  <div className='box9 box'>
                    <img className='logo' src={require("@/img/materials/logo_m_9.svg").default} />
                    <div className='thumbBox'>
                      <Link to={"/materials/eHome"}>
                         <img className='img' src={require("@/img/materials/img_m_9.jpg").default} />
                      </Link>
                    </div>

                    <div className='b_line'></div>
                    <div className='b_line'></div>
                  </div>
                </div>
            </div>
        </section>
    )
}