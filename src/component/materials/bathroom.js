import React, {useRef, useEffect, useLayoutEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import FancyBox2 from "@/src/component/config/fancyBox2"
import { gsap } from 'gsap';
//引入swiper
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css';



export default function Page() {

    const animateRef = useRef(null);
    const [slideNum, setSlideNum]=useState(0);
    const SlideRef=useRef(null);
    const slideMax=5;

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {

            let gg = gsap.timeline({ delay: 0.6 })
            gg.from(".materials_page .bg", { opacity:0,  scale:3.5, duration: 1.5,})
              .from(".materials_page .slide_box", { opacity:0, filter:'blur(15px) brightness(5)', duration: 1,}, '>-=0.3')
              .from(".slide_menu .menu_btn, .slide_menu .slide_nav button", { opacity:0, y:15, stagger:0.2, duration: 1,}, '>-=0.5');
              
        }, [animateRef])
        return () => ctx.revert()
    }, []);

    useEffect(()=>{
        let gg = gsap.timeline();

        if(slideNum >=0 && slideNum < slideMax){
            SlideRef.current.slideTo(slideNum);
            gg.to('.slide_menu .menu_btn', {color:'#000', duration:1})
              .to(`.slide_menu .menu_btn:nth-of-type(${slideNum+1})`, {color:'#5e94a3', duration:1}, '<');
        }
        else if(slideNum<=0){
            setSlideNum(0);
        }
        else{
            setSlideNum(slideMax-1);
        }
        
    }, [slideNum]);

    const close_svg={
        fill: 'none',
        stroke: '#306677',
        strokeMiterlimit: 10
    }
    const slide_svg={
        fill: 'none',
        stroke: '#fff',
        strokeWidth:3,
        strokeMiterlimit: 10
    }


    return (

        <section ref={animateRef} className="materials_page">

            <Link className='close_btn' to="/materials" >
                <Close_svg line_style={close_svg} />
            </Link>
            
            <div className='bg'>
               <h1>DESIGN</h1>
            </div>

            <div className='slide_box'>
                <Swiper
                    speed={1000}
                    spaceBetween={30}
                    slidesPerView={1.6}
                    onSlideChange={(slide) => {
                        setSlideNum(slide.activeIndex);
                    }}
                    centeredSlides={true}
                    onSwiper={(swiper) => {
                        SlideRef.current = swiper;
                    }}
                >
                    <SwiperSlide>
                        <div className='banner_box'>
                          <FancyBox2 className='banner' thumbUrl={require('@/img/materials/bathroom/bathroom1@2x.jpg').default}>
                            <div className='flex_box'>
                                <div className='left' style={{flex:'1 1 30%'}}><img style={{padding:'10vw 4.5vw'}} src={require("@/img/materials/bathroom/txt1_1@2x.png").default} /></div>
                                <div className='right'><img style={{padding: '11vw 8vw 11vw 3vw'}} src={require("@/img/materials/bathroom/txt1_2@2x.png").default} /></div>
                            </div>
                          </FancyBox2>
                          <i className='enter_icon'> 
                             <Close_svg line_style={slide_svg} />
                          </i>
                        </div>
                        <h2>IN WASH 全自動電腦馬桶</h2>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='banner_box'>
                          <FancyBox2 className='banner' thumbUrl={require('@/img/materials/bathroom/bathroom2@2x.jpg').default}>
                            <div className='flex_box'>
                                <div className='left'><img style={{padding:'9vw 4vw'}} src={require("@/img/materials/bathroom/txt2_1@2x.png").default} /></div>
                                <div className='right'><img style={{padding:'2vw'}} src={require("@/img/materials/bathroom/txt2_2@2x.png").default} /></div>
                            </div>
                          </FancyBox2>
                           <i className='enter_icon'> 
                             <Close_svg line_style={slide_svg} />
                           </i>
                        </div>
                        <h2>ALFA DIVERTA下崁盆</h2>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='banner_box'>
                          <FancyBox2 className='banner' thumbUrl={require('@/img/materials/bathroom/bathroom3@2x.jpg').default}>
                            <div className='flex_box'>
                                <div className='left' style={{flex:'1 1 30%'}}><img style={{padding:'10vw 4vw'}} src={require("@/img/materials/bathroom/txt3_1@2x.png").default} /></div>
                                <div className='right'><img style={{padding:'7vw 7vw 7vw 0'}} src={require("@/img/materials/bathroom/txt3_2@2x.png").default} /></div>
                            </div>
                          </FancyBox2>
                           <i className='enter_icon'> 
                             <Close_svg line_style={slide_svg} />
                           </i>
                           
                        </div>
                        <h2>ALFA VICTORIA一體式面盆</h2>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='banner_box'>
                          <FancyBox2 className='banner' thumbUrl={require('@/img/materials/bathroom/bathroom4@2x.jpg').default}>
                            <div className='flex_box'>
                                <div className='left' style={{flex:'1 1 15%'}}><img style={{padding:'10vw 3vw'}} src={require("@/img/materials/bathroom/txt4_1@2x.png").default} /></div>
                                <div className='right'><img src={require("@/img/materials/bathroom/txt4_2@2x.png").default} /></div>
                            </div>
                          </FancyBox2>
                           <i className='enter_icon'> 
                             <Close_svg line_style={slide_svg} />
                           </i>
                        </div>
                        <h2>ALFA 淋浴龍頭</h2>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='banner_box'>
                          <FancyBox2 className='banner' thumbUrl={require('@/img/materials/bathroom/bathroom5@2x.jpg').default}>
                            <div className='flex_box'>
                                <div className='left' style={{flex:'1 1 15%'}}><img style={{padding:'10vw 6vw'}} src={require("@/img/materials/bathroom/txt5_1@2x.png").default} /></div>
                                <div className='right'><img src={require("@/img/materials/bathroom/txt5_2@2x.png").default} /></div>
                            </div>
                           </FancyBox2>
                           <i className='enter_icon'> 
                             <Close_svg line_style={slide_svg} />
                           </i>
                        </div>
                        <h2>ALFA單槍龍頭</h2>
                    </SwiperSlide>
                    
                </Swiper>
            </div>

            <div className='slide_menu'>
              <button className='menu_btn' type='button' onClick={() => setSlideNum(0)}>全自動電腦馬桶</button>
              <button className='menu_btn' type='button' onClick={() => setSlideNum(1)}>下崁盆</button>
              <button className='menu_btn' type='button' onClick={() => setSlideNum(2)}>一體式面盆</button>
              <button className='menu_btn' type='button' onClick={() => setSlideNum(3)}>淋浴龍頭</button>
              <button className='menu_btn' type='button' onClick={() => setSlideNum(4)}>單槍龍頭</button>
              <div className='slide_nav'>
                    <button onClick={() => setSlideNum(slideNum-1)}><i className="fa-solid fa-arrow-left"></i></button>
                    <button onClick={() => setSlideNum(slideNum+1)}><i className="fa-solid fa-arrow-right"></i></button>
                </div>
            </div>
            
            
           
        </section>
    )
}


function Close_svg ({line_style}) {

    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60.69 60.69">
            <g>
                <g>
                <line className="cls-1" style={line_style} x1="60.34" y1=".35" x2=".35" y2="60.34"/>
                <line className="cls-1" style={line_style} x1=".35" y1=".35" x2="60.34" y2="60.34"/>
                </g>
            </g>
        </svg>
    )
}