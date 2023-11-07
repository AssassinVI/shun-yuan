import React, {useRef, useEffect, useLayoutEffect, useState} from 'react'
import FancyBox from "@/src/component/config/fancyBox"
import { gsap } from 'gsap';
import CloudEffect from '../config/cloudEffect';

export default function Exterior() {

    //-- 日夜切換用 --
    const [dayAndNight, setDayAndNight]=useState('day');
    const [NextdayAndNight, setNextdayAndNight]=useState('night');
    //-- 判斷底圖切換才顯示 --
    const [nextHouseShow, setNextHouseShow]=useState(false);

    const animateRef = useRef(null);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            let gg = gsap.timeline({ delay: 0.6 })
            gg.from(".house_box .txt_box h1, .house_box .txt_box p, .house_box .txt_box button", {y: 40, opacity:0, filter:'blur(15px)', stagger:0.3, duration: 1.5,})
              
        }, [animateRef])
        return () => ctx.revert()
    }, []);


   useEffect(()=>{

        let gg = gsap.timeline();

        if(dayAndNight=='night'){
            gg.to('.house_box .txt_box h1, .house_box .txt_box p', {color: '#fff' ,duration: 1.5})
              .to('.house_box .txt_box h1 .line', {backgroundColor: '#fff' ,duration: 1.5}, '<')
              .to('.house_box .txt_box button img', {filter: 'brightness(10)' ,duration: 1.5}, '<');
        }
        else{
            gg.to('.house_box .txt_box h1', {color: '#000' ,duration: 1.5})
            .to('.house_box .txt_box p', {color: '#565654' ,duration: 1.5}, '<')
            .to('.house_box .txt_box h1 .line', {backgroundColor: '#000' ,duration: 1.5}, '<')
            .to('.house_box .txt_box button img', {filter: 'brightness(1)' ,duration: 1.5}, '<');
        }

        gg.fromTo(".house_box .house .cloudEffect", {
            'maskSize':'20%',
            opacity:0,
        },
        {
            'maskSize':'500%',
            'MaskPosition':'33% 48%',
            opacity:1,
            duration: 3,
        }, '<')
        
   }, [dayAndNight]);
    
    function change_day (type) {
        setNextHouseShow(true);
        setDayAndNight(type); 

        if(type=='day'){
            setNextdayAndNight('night');
        }
        else{
            setNextdayAndNight('day');
        }
    }

    return (
        <section className="exterior" ref={animateRef}>
            <div className='house_box'>
                <div className='txt_box'>
                    <h1>中心商圈．收藏山景<br/>眾神聚集的緣結之地 <span className='line'></span></h1>
                    <p>街隱中興，大器退縮靜巷林蔭，敲開光與綠的空隙。庭院森深以樹為籬，保有居住隱密自在，回應鄰里友善餘裕。</p>
                    <button className='sun_btn' onClick={()=>{change_day('day')}}> <img src={require('@/img/exterior/sun_btn.svg').default} /></button>
                    <button className='night_btn' onClick={()=>{change_day('night'); setNextHouseShow(true)}}> <img src={require('@/img/exterior/night_btn.svg').default} /></button>
                </div>

                <div className='house'>
                   <CloudEffect start={true} style={{ height: "100%" }} maskSize={'500%'}>
                     <img src={require(`@/img/exterior/${dayAndNight}.jpg`).default} />
                   </CloudEffect>
                     <img className='next_house' style={{opacity: nextHouseShow ? 1 : 0}} src={require(`@/img/exterior/${NextdayAndNight}.jpg`).default} />
                </div>
            </div>
        </section>
    )
}