import React, {useRef, useEffect, useLayoutEffect} from 'react'
import Glow from '../config/glow'
import FancyBox from "@/src/component/config/fancyBox"
import { gsap } from 'gsap';
import CloudEffect from '../config/cloudEffect';

export default function Vr720() {

    const vr720Ref = useRef(undefined);

    const animateRef = useRef(null);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            let gg = gsap.timeline({ delay: 0.6 })
            gg.fromTo(".map_box .cloudEffect", {maskPosition:'-15% 64%'},{maskPosition:'31% 64%', duration: 5,});
              
        }, [animateRef])
        return () => ctx.revert()
    }, []);

    useEffect(()=>{
        vr720Ref.current.scrollLeft=200;
    }, [vr720Ref]);
    
    

    return (
        <section className="vr720" ref={animateRef}>
            <div className='vr720_btn'>
                <FancyBox text={`720環景`}>
                  <iframe src="https://www.720yun.com/t/adakn9qwzr7?scene_id=112286084" frameborder="0"></iframe>
                </FancyBox>
            </div>

            <div className='map_box'>
              <CloudEffect start={true} style={{ height: "100%" }} maskSize={'1000%'}>
                <div className='img_box' ref={vr720Ref}>
                    <div className='map'>   
                        <Glow number={40} color={"#fff"} />
                        <img  src={require('../../../img/vr720/map@2x.jpg').default} />
                    </div>
                    
                </div>
              </CloudEffect>
                
            </div>
        </section>
    )
}


