import React, {useRef, useEffect, useLayoutEffect, useState} from 'react'
import FancyBox3 from "@/src/component/config/fancyBox3"
import { gsap } from 'gsap';
import CloudEffect from '../config/cloudEffect';

export default function Exterior() {


    const animateRef = useRef(null);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            let gg = gsap.timeline({ delay: 0.6 })
            // gg.from(".house_box .txt_box h1, .house_box .txt_box p, .house_box .txt_box button", {y: 40, opacity:0, filter:'blur(15px)', stagger:0.3, duration: 1.5,})
              
        }, [animateRef])
        return () => ctx.revert()
    }, []);


    return (
        <section className="ems" ref={animateRef}>
              <img className='logo' src={require('@/img/config/logo_w@2x.png').default} alt="" />
              <div className='txt_box'>
                <h2>EMS系統是什麼?</h2>
                <p>今年3/28，歐盟正式拍板2035年禁售燃油車。</p>
                <ul>
                    <li>讓電動車實現獨立供電、使用者付費。</li>
                    <li>智能調控電量-守護社區用電安全。</li>
                    <li>完整擴充性-為社區未來鋪路。</li>
                    <li>線路整體佈設-公設空間使用無爭議。</li>
                </ul>
                <div className='btn_box'>
                  <FancyBox3 text={'優勢比較'} width={'90%'}>
                    <div className="all_box ems_page1">
                        <div className='box1' style={{position:'relative'}}>
                           <img src={require('@/img/ems/ems_img1@2x.jpg').default} alt="" />
                           <span style={{position: 'absolute', bottom: '1vw', right: '2vw', letterSpacing: '0.1em', fontSize: '1vw', zIndex: 1, color: '#fff'}}>情境示意圖</span>
                        </div>
                        <div className='box2'>
                           <h2 className='enTitle'>BEFORE&AFTER</h2>
                           <h3>導入EMS系統前後差異</h3>
                           <p>國内自2018年起，開放讓有充電樁設置需求的住戶，可採後拉的方式安裝，但該方案僅電動車發展初期的權宜作法，未來電動車數量持續增加，就可能面臨既有線路容量不足的問題。因此能一次到位的「專設一戶搭配MS電能管理系統」整合方案無論在用電安全、易於管理及線材集中設的美觀上，都更符合電動車發展的大趨勢，有助於提升社區競爭力與歸屬感。</p>
                           <img src={require('@/img/ems/ems_txt1.svg').default} alt="" />
                        </div>
                    </div>
                  </FancyBox3>
                  <FancyBox3 text={'規劃流程'} width={'90%'}>
                    <div className="all_box ems_page2">
                        <div className='box1' style={{position:'relative'}}>
                           <img src={require('@/img/ems/ems_img2@2x.jpg').default} alt="" />
                           <span style={{position: 'absolute', bottom: '1vw', right: '2vw', letterSpacing: '0.1em', fontSize: '1vw', zIndex: 1, color: '#fff'}}>情境示意圖</span>
                        </div>
                        <div className='box2'>
                           <img src={require('@/img/ems/ems_txt2.svg').default} alt="" />
                        </div>
                    </div>
                  </FancyBox3>

                </div>
              </div>
              <img className='bg' src={require('@/img/ems/EMS_bg@2x.jpg').default} alt="" />

              <span style={{position: 'absolute', bottom: '1vw', right: '2vw', letterSpacing: '0.1em', fontSize: '1vw', zIndex: 1, color: '#fff'}}>情境示意圖</span>
        </section>
    )
}