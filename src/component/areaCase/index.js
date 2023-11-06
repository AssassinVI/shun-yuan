import React, {useRef, useEffect, useLayoutEffect} from 'react'

import { gsap } from 'gsap';
import CloudEffect from '../config/cloudEffect';
import ScaleDrag from "../config/scaleDrag";

export default function AreaCase() {

    const animateRef = useRef(null);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            // let gg = gsap.timeline({ delay: 0.6 })
            // gg.fromTo(".map_box .cloudEffect", {maskPosition:'-15% 64%'},{maskPosition:'31% 64%', duration: 5,});
              
        }, [animateRef])
        return () => ctx.revert()
    }, []);
    
    

    return (
        <section className="areaCase" ref={animateRef}>
            {/* <div class="iframe_div">
                <iframe src="https://www.leju.com.tw/page_search_result?oid=La7d1235760ea1e" frameborder="0" style={{width: '100%', height: '108vh', marginTop: '-61px'}}></iframe>
            </div> */}
            <img className="logo" src={require("../../../img/config/logo@2x.png").default} />
            
            <div className='map_box'>
                <ScaleDrag
                maxRatio={2.5}
                zoomImg1={require("../../../img/urban/svg/001-plus-button.svg").default}
                zoomImg2={require("../../../img/urban/svg/002-minus-button.svg").default}
                >
                    <img className="map" src={require("@/img/areaCase/areaCase.jpg").default} />
                </ScaleDrag>
            </div>

        </section>
    )
}


