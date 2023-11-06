import React, {useRef, useEffect, useLayoutEffect} from 'react'

import { gsap } from 'gsap';
import CloudEffect from '../config/cloudEffect';

export default function AreaCase() {

    const vr720Ref = useRef(undefined);

    const animateRef = useRef(null);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            // let gg = gsap.timeline({ delay: 0.6 })
            // gg.fromTo(".map_box .cloudEffect", {maskPosition:'-15% 64%'},{maskPosition:'31% 64%', duration: 5,});
              
        }, [animateRef])
        return () => ctx.revert()
    }, []);

    // useEffect(()=>{
    //     vr720Ref.current.scrollLeft=200;
    // }, [vr720Ref]);
    
    

    return (
        <section className="areaCase" ref={animateRef}>
            <div class="iframe_div">
                <iframe src="https://www.leju.com.tw/page_search_result?oid=La7d1235760ea1e" frameborder="0" style={{width: '100%', height: '108vh', marginTop: '-61px'}}></iframe>
            </div>
        </section>
    )
}


