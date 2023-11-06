import React, {useRef, useEffect, useLayoutEffect, useState } from 'react'
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

    const case_list = [
        {
            img: [
            require('@/img/brand/case11.jpg').default, 
            ],
            text: "舜元帝磐",
        },
        {
            img: [
                require('@/img/brand/case21.jpg').default, 
                require('@/img/brand/case22.jpg').default, 
                require('@/img/brand/case23.jpg').default, 
            ],
            text: "拾貳賦、獨立森林",
        },
        {
            img: [
                require('@/img/brand/case31.jpg').default, 
                require('@/img/brand/case32.jpg').default, 
            ],
            text: "舜元睦森林",
        },
        {
            img: [
                require('@/img/brand/case41.jpg').default,
                require('@/img/brand/case42.jpg').default, 
                require('@/img/brand/case43.jpg').default, 
            ],
            text: "舜元知了",
        },
        {
            img: [
                require('@/img/brand/case51.jpg').default,
            ],
            text: "舜元知茵",
        },
        {
            img: [
                require('@/img/brand/case61.jpg').default,
                require('@/img/brand/case62.jpg').default,
                require('@/img/brand/case63.jpg').default,
            ],
            text: "舜元境朗",
        },
    ];


    function FancyChildren({ data, i }) {
        //Fancy modal換頁邏輯
            const [slide, setSlide] = useState(0)
            const navStyle = {
                position: "absolute",
                top: 0,
                bottom: 0,
                margin: "auto 0",
                width: "3vw",
                height: "3vw",
                pointerEvents: "auto",
                cursor: "pointer",
                padding: '0.5vw',
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                borderRadius: '100%',
                boxShadow: '1px 1px 5px rgb(0 0 0 / 50%)'
            }
    
            const next = (e) => {
                e.stopPropagation();
                let newIndex = slide
                if (newIndex == data[i].img.length - 1) {
                    return
                }
                setSlide(++newIndex)
            }
            const prev = (e) => {
                e.stopPropagation()
                let newIndex = slide
                if (newIndex == 0) {
                    return
                }
                setSlide(--newIndex)
            }
            return (
                <>
                    {data && data[i].img.map((itemInner, innerI) => {
                        return (
                            <div className='wrapper' style={{ position: "absolute", left: 0, top: 0, width: "100%", height: "100%", transition: 'opacity 0.5s', opacity: slide == innerI ? 1 : 0 }}>
                                <img src={itemInner} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                                <p style={{ position: "absolute", right: "1.5vw", bottom: "1vw", color: "#fff", fontSize: "0.8vw", letterSpacing: "0.1em", filter: "drop-shadow(0 0 3px #000)" }}>{data[i].text}</p>
                            </div>
                        )
    
                    })}
                    {data && data[i].img.length >= 2 && <>
                        <div className="prev" onClick={prev} style={{ ...navStyle, left: "1.5vw" }}>
                            <img src={require("@/img/equipment/svg/003-arrow.svg").default} style={{ width: "100%", height: "100%", pointerEvents: "none"  ,transform: 'rotateY(180deg)',}} />
                        </div>
                        <div className="next" onClick={next} style={{ ...navStyle, right: "5.5vw" }}>
                            <img src={require("@/img/equipment/svg/003-arrow.svg").default} style={{ width: "100%", height: "100%", pointerEvents: "none", }} />
                        </div>
                    </>}
                </>
    
            )
    }

    return (
        <section className="brand" style={{width:'100%', height:'100%'}} ref={animateRef}>
            <div className='s2' style={{width:'100%', height:'100%'}}>
              <div className='map'>
                <div className='point_box'>
                    {case_list.map((item, i) => {
                         return (
                            <FancyBox text={''} >
                                <FancyChildren data={case_list} i={i} />
                            </FancyBox>
                        );
                    })}
                </div>
                <img src={require('@/img/brand/brand_img2.png').default} />
              </div>
            </div>
        </section>
    )
}


