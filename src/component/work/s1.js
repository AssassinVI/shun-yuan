import React, {useRef, useEffect, useLayoutEffect} from 'react'
import {Link} from 'react-router-dom'
import FancyBox3 from "@/src/component/config/fancyBox3"
import { gsap } from 'gsap';
import CloudEffect from '../config/cloudEffect';

export default function Brand() {

    const animateRef = useRef(null);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            let gg = gsap.timeline({ delay: 0.6 })
            gg.from(".work .cloudEffect", {maskSize: 20, opacity:0, duration: 1.5, });
              
        }, [animateRef])
        return () => ctx.revert()
    }, []);



    return (
        <section className="work" style={{width:'100%', height:'100%'}} ref={animateRef}>
            <div className='s1' style={{width:'100%', height:'100%'}}>
              <div className='title'>
                 <h1>六大工法</h1>
                 <h2>SIX CATEGORIES OF<br/>CONSTRUCTION METHOD</h2>
              </div>

              <CloudEffect start={true} style={{ height: "100%" }} maskSize={'130%'}>
                <div className='work_box'>
                    <FancyBox3 text={''} width={'70%'}>
                        <div className='workFancyBox'>
                            <div className='img_box'>
                                <img src={require("@/img/work/work1.jpg").default} />
                                <span>情境示意圖</span>
                            </div>
                            <div className='txt_box'>
                            <h2>聚脲樹酯</h2>
                            <div className='workLine'></div>
                            <p>舜元在一樓及頂樓景觀區使用高性能聚脲樹酯，<br/>能有效抵抗來自極端天氣及植物根系的侵蝕，大幅延長建築物的使用壽命。</p>
                            </div>
                        </div>
                    </FancyBox3>
                    <FancyBox3 text={''} width={'80%'}>
                        <div className='workFancyBox'>
                            <div className='img_box'>
                                <img src={require("@/img/work/work2.jpg").default} />
                                <span>情境示意圖</span>
                            </div>
                            <div className='txt_box'>
                            <h2>浴室全區防水180cm</h2>
                            <div className='workLine'></div>
                            <p>有別於傳統濕區180cm、乾區120cm的防水標準，採用全區180cm、五道高分子防水工法。</p>
                            </div>
                        </div>
                    </FancyBox3>
                    <FancyBox3 text={''} width={'80%'}>
                        <div className='workFancyBox'>
                            <div className='img_box'>
                                <img src={require("@/img/work/work3.jpg").default} />
                                <span>情境示意圖</span>
                            </div>
                            <div className='txt_box'>
                            <h2>門檻雙重斷水</h2>
                            <div className='workLine'></div>
                            <p>傳統石材門檻僅能阻擋表面的水。舜元的兩道斷水機制於樓板上加裝預鑄止水墩，<br/>能保護木地板、牆面免受水蝕侵擾。</p>
                            
                            </div>
                        </div>
                    </FancyBox3>
                    <FancyBox3 text={''} width={'80%'}>
                        <div className='workFancyBox'>
                            <div className='img_box'>
                                <img src={require("@/img/work/work4.jpg").default} />
                                <span>情境示意圖</span>
                            </div>
                            <div className='txt_box'>
                            <h2>自在呼吸</h2>
                            <div className='workLine'></div>
                            <p>當層各戶排氣，主、次浴雙陶瓷暖風機，在浴室裡也能自在呼吸。</p>
                            
                            </div>
                        </div>
                    </FancyBox3>
                    <FancyBox3 text={''} width={'80%'}>
                        <div className='workFancyBox'>
                            <div className='img_box'>
                                <img src={require("@/img/work/work5.jpg").default} />
                                <span>情境示意圖</span>
                            </div>
                            <div className='txt_box'>
                            <h2>深層排水</h2>
                            <div className='workLine'></div>
                            <p>看不到的地方，也能排得乾淨。深層排水接頭能有效排出磁磚下方沙漿層的含水，<br/>大幅降低白華及牆角壁癌產生的機率。</p>
                            
                            </div>
                        </div>
                    </FancyBox3>
                    <FancyBox3 text={''} width={'70%'}>
                        <div className='workFancyBox'>
                            <div className='img_box'>
                                <img src={require("@/img/work/work6.jpg").default} />
                                <span>情境示意圖</span>
                            </div>
                            <div className='txt_box'>

                            <h2>總存水彎</h2>
                            <div className='workLine'></div>
                            <p>來自浴室所有排水孔的毛髮髒污，都集中在總存水彎，設有提籠方便清潔；<br/>另外達成水封作用，水管異味、泡沫不亂竄。</p>
                            
                            </div>
                        </div>
                    </FancyBox3>
                    <img  src={require("@/img/work/workImg.webp").default} />
                </div>
              </CloudEffect>
              

            </div>
        </section>
    )
}


