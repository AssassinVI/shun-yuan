import React, {useRef, useEffect, useLayoutEffect, useState} from 'react'
import FancyBox3 from "@/src/component/config/fancyBox3"
import { gsap } from 'gsap';
import CloudEffect from '../config/cloudEffect';

export default function Exterior() {


    const animateRef = useRef(null);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            let gg = gsap.timeline({ delay: 0.6 })
                gg.from(".team .title", {y: 40, opacity:0, filter:'blur(15px)',duration: 1.5,})
                  .from(".team .teamBox .one", {y: 40, opacity:0, filter:'blur(15px)', stagger:0.3, duration: 1.5,}, '<+=0.5')
              
        }, [animateRef])
        return () => ctx.revert()
    }, []);


    return (
        <section className="team" ref={animateRef}>
              <img className='logo' src={require('@/img/config/logo@2x.png').default} alt="" />
              <div className='title'>
                <h1>PROJECT TEAM</h1>
                <h2>建築團隊</h2>
              </div>
              <div className='teamBox'>
                <div className='one'>
                  <img className='teamLine' src={require('@/img/team/teamLine.svg').default} alt="" />
                  <FancyBox3 thumbUrl={require('@/img/team/team1.webp').default} width={'90%'}>
                    <div className='flex_box teamFancyBox'>
                      <div className='left'>
                        <img src={require('@/img/team/img1-100.jpg').default} alt="" />
                        <span className='img_txt'>情境示意圖</span>
                      </div>
                      <div className='right'>
                        <img src={require('@/img/team/txt1@2x.png').default} alt="" />
                      </div>
                    </div>
                  </FancyBox3>
                </div>
                
                <div className='one'>
                   <img className='teamLine' src={require('@/img/team/teamLine.svg').default} alt="" />
                   <FancyBox3 thumbUrl={require('@/img/team/team2.webp').default} width={'90%'}>
                    <div className='flex_box teamFancyBox'>
                      <div className='left'>
                        <img src={require('@/img/team/img2-100.jpg').default} alt="" />
                        <span className='img_txt'>情境示意圖</span>
                      </div>
                      <div className='right'>
                        <img src={require('@/img/team/txt2@2x.png').default} alt="" style={{padding:'0 2vw'}} />
                      </div>
                    </div>
                  </FancyBox3>
                </div>

                <div className='one'>
                   <img className='teamLine' src={require('@/img/team/teamLine.svg').default} alt="" />
                   <FancyBox3 thumbUrl={require('@/img/team/team3.webp').default} width={'90%'}>
                    <div className='flex_box teamFancyBox'>
                      <div className='left'>
                        <img src={require('@/img/team/img3-100.jpg').default} alt="" />
                        <span className='img_txt'>情境示意圖</span>
                      </div>
                      <div className='right'>
                        <img src={require('@/img/team/txt3@2x.png').default} alt="" style={{padding:'0 2vw'}} />
                      </div>
                    </div>
                  </FancyBox3>
                </div>

                <div className='one'>
                   <img className='teamLine' src={require('@/img/team/teamLine.svg').default} alt="" />
                   <FancyBox3 thumbUrl={require('@/img/team/team4.webp').default} width={'90%'}>
                    <div className='flex_box teamFancyBox'>
                      <div className='left'>
                        <img src={require('@/img/team/img4-100NEW.jpg').default} alt="" />
                        <span className='img_txt'>作品圖</span>
                      </div>
                      <div className='right'>
                        <img src={require('@/img/team/txt4@2x.png').default} alt="" style={{padding:'0 2vw'}} />
                      </div>
                    </div>
                  </FancyBox3>
                </div>
                
                
              </div>
        </section>
    )
}