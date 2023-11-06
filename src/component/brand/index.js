import React, {useRef, useEffect, useLayoutEffect} from 'react'
import {Link, Route, Routes, useLocation} from 'react-router-dom'
import Glow from '../config/glow'
import FancyBox from "@/src/component/config/fancyBox"
import { gsap } from 'gsap';
import CloudEffect from '../config/cloudEffect';
import BrandS1 from './s1';
import BrandS2 from './s2';
import BrandS3 from './s3';
import BrandS4 from './s4';

export default function Brand() {

    const animateRef = useRef(null);
    const location = useLocation();

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            let gg = gsap.timeline({ delay: 0.6 })
            gg.fromTo(".map_box .cloudEffect", {maskPosition:'-15% 64%'},{maskPosition:'31% 64%', duration: 5,});
              
        }, [animateRef])
        return () => ctx.revert()
    }, []);

    useEffect(()=>{
        console.log(location.pathname);
    },[])


    return (
        <section className="brand" style={{width:'100%', height:'100%'}} ref={animateRef}>
            <img className="logo" src={require("../../../img/config/logo@2x.png").default} />

            <div className='nav' >
               <Link className={location.pathname.indexOf('s1')!=-1 ? 'active':''} to={'/brand/s1'}>品牌理念</Link>
               <Link className={location.pathname.indexOf('s2')!=-1 ? 'active':''} to={'/brand/s2'}>歷年業績</Link>
               <Link className={location.pathname.indexOf('s3')!=-1 ? 'active':''} to={'/brand/s3'}>客戶服務</Link>
               <Link className={location.pathname.indexOf('s4')!=-1 ? 'active':''} to={'/brand/s4'}>HOMIES專享服務</Link>
            </div>

            <Routes>
                <Route path="s1" element={<BrandS1 />} />
                <Route path="s2" element={<BrandS2 />} />
                <Route path="s3" element={<BrandS3 />} />
                <Route path="s4" element={<BrandS4 />} />
            </Routes>
           
        </section>
    )
}


