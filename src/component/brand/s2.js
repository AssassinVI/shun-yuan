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
            let gg = gsap.timeline({ delay: 0.6 })
            gg.fromTo(".map_box .cloudEffect", {maskPosition:'-15% 64%'},{maskPosition:'31% 64%', duration: 5,});
              
        }, [animateRef])
        return () => ctx.revert()
    }, []);



    return (
        <section className="brand" style={{width:'100%', height:'100%'}} ref={animateRef}>
            <div className='s2' style={{width:'100%', height:'100%'}}>
              <div className='map'>
                <img src={require('@/img/brand/brand_img2.png').default} />
              </div>
            </div>
        </section>
    )
}


