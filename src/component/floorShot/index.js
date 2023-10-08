import React, {useRef, useEffect, useLayoutEffect, useState} from 'react'
import FancyBox from "@/src/component/config/fancyBox";
import ScaleDrag from "../config/scaleDrag";
import { gsap } from 'gsap';

export default function Exterior() {

    const [nowType, setNowType]=useState(1);
    const [nowfloorNum, setNowfloorNum]=useState(0);
    const animateRef = useRef(null);


    const map_list=[
        {
            type: 1,
            title: '現況套繪',
            en: 'BUILDING SPACING',
            map: 'floor_dis_map@2x.webp',
        },
        {
            type: 2,
            title: '樓層空拍',
            en: 'FLOOR PHOTOGRAPHY',
            map: 'map2@2x.webp',
        },
        {
            type: 3,
            title: '鄰房棟距',
            en: 'BUILDING DISTANCE',
            map: 'map2@2x.webp',
        },
    ];

    const photo_list=[
        {
            type: 'A1_left',
            img: [
                require('../../../img/floorShot/photo/A1_left_4F.jpg').default, 
                require('../../../img/floorShot/photo/A1_left_8F.jpg').default, 
                require('../../../img/floorShot/photo/A1_left_12F.jpg').default, 
            ],
            text: "A1西向",
        },
        {
            type: 'A1_top',
            img: [
                require('../../../img/floorShot/photo/A1_top_4F.jpg').default, 
                require('../../../img/floorShot/photo/A1_top_8F.jpg').default, 
                require('../../../img/floorShot/photo/A1_top_12F.jpg').default, 
            ],
            text: "A1北向",
        },
        {
            type: 'A2_top',
            img: [
                require('../../../img/floorShot/photo/A2_top_4F.jpg').default, 
                require('../../../img/floorShot/photo/A2_top_8F.jpg').default, 
                require('../../../img/floorShot/photo/A2_top_12F.jpg').default, 
            ],
            text: "A2北向",
        },
        {
            type: 'A2_down',
            img: [
                require('../../../img/floorShot/photo/A2_down_4F.jpg').default, 
                require('../../../img/floorShot/photo/A2_down_8F.jpg').default, 
                require('../../../img/floorShot/photo/A2_down_12F.jpg').default, 
            ],
            text: "A2南向",
        },
        {
            type: 'A3_down',
            img: [
                require('../../../img/floorShot/photo/A3_down_4F.jpg').default, 
                require('../../../img/floorShot/photo/A3_down_8F.jpg').default, 
                require('../../../img/floorShot/photo/A3_down_12F.jpg').default, 
            ],
            text: "A3南向",
        },
        {
            type: 'B1_right',
            img: [
                require('../../../img/floorShot/photo/B1_right_4F.jpg').default, 
                require('../../../img/floorShot/photo/B1_right_8F.jpg').default, 
                require('../../../img/floorShot/photo/B1_right_12F.jpg').default, 
            ],
            text: "B1東向",
        },
        {
            type: 'B1_top',
            img: [
                require('../../../img/floorShot/photo/B1_top_4F.jpg').default, 
                require('../../../img/floorShot/photo/B1_top_8F.jpg').default, 
                require('../../../img/floorShot/photo/B1_top_12F.jpg').default, 
            ],
            text: "B1北向",
        },
        {
            type: 'B2_top',
            img: [
                require('../../../img/floorShot/photo/A2_top_4F.jpg').default, 
                require('../../../img/floorShot/photo/A2_top_8F.jpg').default, 
                require('../../../img/floorShot/photo/A2_top_12F.jpg').default, 
            ],
            text: "B2北向",
        },
        {
            type: 'B2_down',
            img: [
                require('../../../img/floorShot/photo/A2_down_4F.jpg').default, 
                require('../../../img/floorShot/photo/A2_down_8F.jpg').default, 
                require('../../../img/floorShot/photo/A2_down_12F.jpg').default, 
            ],
            text: "B2南向",
        },
        {
            type: 'B3_down',
            img: [
                require('../../../img/floorShot/photo/B3_down_4F.jpg').default, 
                require('../../../img/floorShot/photo/B3_down_8F.jpg').default, 
                require('../../../img/floorShot/photo/B3_down_12F.jpg').default, 
            ],
            text: "B3南向",
        },
    ];


    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            let gg = gsap.timeline({ delay: 0.6 })
         
        }, [animateRef])
        return () => ctx.revert()
    }, []);


    useEffect(()=>{
        let gg = gsap.timeline();
        if(nowType==2 || nowType==3){
            gg.to('.mapBox .map_div .map', {rotate: '-14deg', scale:1.2, x:'-10%', y:'-3%', duration: 0.8});

            if(nowType==2){
                gg.to('.mapBox .distanceBox', {opacity: 0, visibility: 'hidden'}, '<')
                  .to('.mapBox .photoBox', {opacity: 1, y:0, visibility: 'visible'}, '<+=0.5');
            }
            else{
                gg.to('.mapBox .photoBox', {opacity: 0, visibility: 'hidden'}, '<')
                  .to('.mapBox .distanceBox', {opacity: 1, visibility: 'visible'}, '<+=0.5');
            }
        }
        else{
            gg.to('.mapBox .map_div .map', {rotate: '0deg', scale:1, x:'0', y:'0', duration: 0.8})
              .to('.mapBox .photoBox', {opacity: 0, y:-10, duration: 0.3}, '<')
              .to('.mapBox .photoBox', {visibility: 'hidden'}, '<')
              .to('.mapBox .distanceBox', {opacity: 0,  duration: 0.3}, '<')
              .to('.mapBox .distanceBox', {visibility: 'hidden'}, '<');
        }
    }, [nowType]);

    useEffect(()=>{
        let gg = gsap.timeline();
        gg.fromTo('.photo_box img', {opacity: 0},{opacity: 1, duration: 1});
    }, [nowfloorNum]);


    
    


    return (
        <section className="floorShot" ref={animateRef}>

                <img className="logo" src={require("../../../img/config/logo@2x.png").default} />

                <div className='txtBox'>
                    <h2>FLOOR DISTANCE <span className='s_line'></span> </h2>
                    <div className='list'>
                      {
                        map_list.map((item, index)=>{
                            return(
                                <button type="button" key={`item${index}`} onClick={() => {setNowType(item.type)}}>
                                        <img
                                            className="icon"
                                            src={require("../../../img/config/list_icon.png").default}
                                            style={{ transform: nowType == item.type ? "rotate(180deg)" : "rotate(0deg)" }}
                                        />
                                        <span className="title" style={{ transform: nowType == item.type ? "translateX(15px)" : "translateX(0px)", color: nowType == item.type ? "#2d6473" : "#000" }} >{item.title}</span>
                                        <span className="en" style={{ transform: nowType == item.type ? "translateX(15px)" : "translateX(0px)", color: nowType == item.type ? "#2d6473" : "#000"  }}>{item.en}</span>
                                </button>
                            )
                        })
                      }
                       
                    </div>
                </div>

                <div className='mapBox'>
                    <ScaleDrag
                        maxRatio={2.5}
                        zoomImg1={require("../../../img/urban/svg/001-plus-button.svg").default}
                        zoomImg2={require("../../../img/urban/svg/002-minus-button.svg").default}
                    >

                        <div className='photoBox'>
                          {
                            photo_list.map((item)=>{

                                return(
                                    <div className={`photo_btn ${item.type}`} key={`photo${item.type}`}>
                                        <FancyBox thumbUrl={require("@/img/floorShot/photo.svg").default} >
                                          <div className='photo_box'>
                                            <div className='floor_list'>
                                              <button onClick={(e)=>{e.stopPropagation(); setNowfloorNum(0)}} style={{ backgroundColor: nowfloorNum==0 ? '#fff':'#306677', color: nowfloorNum==0 ? '#306677' : '#fff'}}>4F</button>
                                              <button onClick={(e)=>{e.stopPropagation(); setNowfloorNum(1)}} style={{ backgroundColor: nowfloorNum==1 ? '#fff':'#306677', color: nowfloorNum==1 ? '#306677' : '#fff'}}>8F</button>
                                              <button onClick={(e)=>{e.stopPropagation(); setNowfloorNum(2)}} style={{ backgroundColor: nowfloorNum==2 ? '#fff':'#306677', color: nowfloorNum==2 ? '#306677' : '#fff'}}>12F</button>
                                            </div>
                                            <div className="text">
                                                <p>{`${item.text}`}</p>
                                            </div>
                                            <img src={item.img[nowfloorNum]} />
                                          </div>
                                        </FancyBox>
                                    </div>
                                )
                            })
                          }
                        </div>
                        <div className='distanceBox'>
                           <img src={require("@/img/floorShot/distance/distance.svg").default} />
                        </div>
                        
                        <div className='map_div'>
                           <img className="map" src={require("../../../img/floorShot/floor_dis_map@2x.webp").default} />
                        </div>
                        
                    </ScaleDrag>
                </div>

                <p className='remark'>本圖僅供俱配置示意參考,實際之格局、建材依合約附圖及建材表為準。</p>
            
        </section>
    )
}