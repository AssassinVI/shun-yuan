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
    const slideMax=3;

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
                          <FancyBox2 className='banner' width={'80%'} thumbUrl={require('@/img/materials/eHome/ehome1@2x.jpg').default}>
                            <div className='flex_box'>
                                <div className='left' style={{flex:'1 1 10%'}}><img style={{padding:'5vw 5.5vw'}} src={require("@/img/materials/eHome/txt1_1@2x.png").default} /></div>
                                <div className='right' style={{flex:'1 1 55%'}}><img style={{padding: '4vw 3vw 1vw 0vw'}} src={require("@/img/materials/eHome/txt1_2@2x.png").default} /></div>
                            </div>
                          </FancyBox2>
                          <i className='enter_icon'> 
                             <Close_svg line_style={slide_svg} />
                          </i>
                        </div>
                        <h2>智慧電子鎖</h2>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='banner_box'>
                          <FancyBox2 className='banner' width={'80%'} thumbUrl={require('@/img/materials/eHome/ehome2@2x.jpg').default}>
                            <div className='flex_box'>
                                <div className='left' style={{flex:'1 1 21%'}}><img style={{padding:'6vw 4vw'}} src={require("@/img/materials/eHome/txt2_1@2x.png").default} /></div>
                                <div className='right'><img style={{padding:'2vw 3vw 2vw 0'}} src={require("@/img/materials/eHome/txt2_2@2x.png").default} /></div>
                            </div>
                          </FancyBox2>
                           <i className='enter_icon'> 
                             <Close_svg line_style={slide_svg} />
                           </i>
                        </div>
                        <h2>室內控制對講主機</h2>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='banner_box'>
                          <FancyBox2 className='banner' thumbUrl={require('@/img/materials/eHome/ehome3@2x.jpg').default}>
                            <div className='flex_box'>
                                <div className='left' style={{flex:'1 1 15%'}}><img style={{padding:'8vw 7vw'}} src={require("@/img/materials/eHome/txt3_1@2x.png").default} /></div>
                                <div className='right'><img style={{padding:'7vw 9vw 7vw 3vw'}} src={require("@/img/materials/eHome/txt3_2@2x.png").default} /></div>
                            </div>
                          </FancyBox2>
                           <i className='enter_icon'> 
                             <Close_svg line_style={slide_svg} />
                           </i>
                           
                        </div>
                        <h2>門口對講機</h2>
                    </SwiperSlide>
                   
                </Swiper>
            </div>

            <div className='slide_menu'>
              <button className='menu_btn' type='button' onClick={() => setSlideNum(0)}>智慧電子鎖</button>
              <button className='menu_btn' type='button' onClick={() => setSlideNum(1)}>室內控制對講主機</button>
              <button className='menu_btn' type='button' onClick={() => setSlideNum(2)}>門口對講機</button>

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