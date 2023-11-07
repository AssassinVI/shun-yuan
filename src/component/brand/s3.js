import React, {useRef, useEffect, useLayoutEffect} from 'react'
import {Link} from 'react-router-dom'
import Glow from '../config/glow'
import FancyBox from "@/src/component/config/fancyBox"
import { gsap } from 'gsap';
import CloudEffect from '../config/cloudEffect';

export default function Brand() {

    const animateRef = useRef(null);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            let gg = gsap.timeline({ delay: 0.4 })
            gg.from(".img_box .cloudEffect", {maskSize: 20, opacity:0, duration: 1.5,})
              .from(".txt_box img", { opacity:0, x:20, filter:'blur(10px)', duration: 1.5,}, '<+=0.5')
              
        }, [animateRef])
        return () => ctx.revert()
    }, []);



    return (
        <section className="brand" style={{width:'100%', height:'100%'}} ref={animateRef}>
            <div className='s3' style={{width:'100%', height:'100%'}}>
              <div className='img_box'>
                <CloudEffect start={true} style={{ height: "100%" }} maskSize={'130%'}>
                    <img src={require('@/img/brand/brand_img3.jpg').default} />
                </CloudEffect>
              </div>
              <div className='txt_box'>
                <img src={require('@/img/brand/brand_txt3@2x.webp').default} />
              </div>
            </div>
        </section>
    )
}


