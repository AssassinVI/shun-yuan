import React, {useRef, useEffect, useLayoutEffect, useState} from 'react'
import FancyBox3 from "@/src/component/config/fancyBox3"
import { gsap } from 'gsap';
import CloudEffect from '../config/cloudEffect';
//引入swiper
import {Swiper, SwiperSlide} from 'swiper/react'
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

export default function Habitability() {

    
    const animateRef = useRef(null);

    const [room, setRoom]=useState('livingRoom');

    const [slide, setSlide]=useState(0);


    const house_list=[
        {
            'houseName':'A1',
            'houseMap':require('@/img/habitability/A1_map@2x.png').default,
            'roomList':{
                'livingRoom':{
                    imgTxt:'A1客餐廳-3D示意圖',
                    img:[
                        require("@/img/habitability/A1/A1_livingRoom1.jpg").default,
                        require("@/img/habitability/A1/A1_door1.jpg").default
                    ]
                },
                'MasterBedroom':{
                    imgTxt:'A1主臥-3D示意圖',
                    img:[
                        require("@/img/habitability/A1/A1_MBedroom1.jpg").default
                    ]
                },
                'Bedroom1':{
                    imgTxt:'A1次臥一-3D示意圖',
                    img:[
                        require("@/img/habitability/A1/A1_Bedroom11.jpg").default
                    ]
                },
                'Bedroom2':{
                    imgTxt:[
                        'A1次臥二-3D示意圖',
                        'A1次臥二(雙人床)-3D示意圖'
                    ],
                    img:[
                        require("@/img/habitability/A1/A1_Bedroom21.jpg").default,
                        require("@/img/habitability/A1/A1_Bedroom22.jpg").default
                    ]
                },
                // 'door':{
                //     imgTxt:'A1玄關櫃3D示意圖',
                //     img:[
                //         require("@/img/habitability/A1/A1_door1.jpg").default
                //     ]
                // }
            }
        },
        {
            'houseName':'A2',
            'houseMap':require('@/img/habitability/A2_map@2x.png').default,
            'roomList':{
                'livingRoom':{
                    imgTxt:'A2客餐廳-3D示意圖',
                    img:[
                        require("@/img/habitability/A2/livingRoom1.jpg").default
                    ]
                },
                'MasterBedroom':{
                    imgTxt:'A2主臥-3D示意圖',
                    img:[
                        require("@/img/habitability/A2/MBedroom1.jpg").default
                    ]
                },
                'Bedroom1':{
                    imgTxt:'A2次臥一-3D示意圖',
                    img:[
                        require("@/img/habitability/A2/Bedroom11.jpg").default
                    ]
                },
                'Bedroom2':{
                    imgTxt:[
                        'A2次臥二-3D示意圖',
                        'A2次臥二(雙人床)-3D示意圖'
                    ],
                    img:[
                        require("@/img/habitability/A2/Bedroom21.jpg").default,
                        require("@/img/habitability/A2/Bedroom22.jpg").default
                    ]
                },
            }
        },
        {
            'houseName':'A3',
            'houseMap':require('@/img/habitability/A3_map@2x.png').default,
            'roomList':{
                'livingRoom':{
                    imgTxt:'A3客餐廳-3D示意圖',
                    img:[
                        require("@/img/habitability/A3/livingRoom1.jpg").default
                    ]
                },
                'MasterBedroom':{
                    imgTxt:'A3主臥-3D示意圖',
                    img:[
                        require("@/img/habitability/A3/MBedroom1.jpg").default
                    ]
                },
                'Bedroom1':{
                    imgTxt:'A3次臥一-3D示意圖',
                    img:[
                        require("@/img/habitability/A3/Bedroom11.jpg").default
                    ]
                },
                'Bedroom2':{
                    imgTxt:[
                        'A3次臥二-3D示意圖',
                        'A3次臥二(雙人床)-3D示意圖'
                    ],
                    img:[
                        require("@/img/habitability/A3/Bedroom21.jpg").default,
                        require("@/img/habitability/A3/Bedroom22.jpg").default
                    ]
                },
            }
        },
        {
            'houseName':'B1',
            'houseMap':require('@/img/habitability/B1_map@2x.png').default,
            'roomList':{
                'livingRoom':{
                    imgTxt:'B1客餐廳-3D示意圖',
                    img:[
                        require("@/img/habitability/B1/livingRoom1.jpg").default
                    ]
                },
                'MasterBedroom':{
                    imgTxt:'B1主臥-3D示意圖',
                    img:[
                        require("@/img/habitability/B1/MBedroom1.jpg").default
                    ]
                },
                'Bedroom1':{
                    imgTxt:'B1次臥一-3D示意圖',
                    img:[
                        require("@/img/habitability/B1/Bedroom11.jpg").default
                    ]
                },
                'Bedroom2':{
                    imgTxt:[
                        'B1次臥二-3D示意圖',
                        'B1次臥二(雙人床)-3D示意圖'
                    ],
                    img:[
                        require("@/img/habitability/B1/Bedroom21.jpg").default,
                        require("@/img/habitability/B1/Bedroom22.jpg").default
                    ]
                },
            }
        }
    ];


    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            let gg = gsap.timeline({ delay: 0.6 })
            gg.from(".left .cloudEffect", {maskSize: 20, opacity:0, duration: 1.5,})
              .from(".right .enTitle, .right h1, .right ul li, .right .svg_box", {opacity:0, x:40, filter:'blur(15px)', stagger:0.2,  duration: 1,}, '<+=0.5')
              
        }, [animateRef])
        return () => ctx.revert()
    }, []);


    useEffect(()=>{
        let gg = gsap.timeline()
        gg.fromTo(`.slide_box`, {opacity:0, }, {opacity:1,  duration: 1,})
        setSlide(0)
    }, [room])


    //-- 輪播 --
    useEffect(()=>{
        let gg = gsap.timeline()
        gg.fromTo(`.slideOne`, {opacity:0, }, {opacity:1,  duration: 1,})
    }, [slide])


    return (
        <section className="habitability" ref={animateRef}>
            <img className="logo" src={require("../../../img/config/logo@2x.png").default} />
            <div className='flex_box'>
               <div className='left' style={{position:'relative'}}>
                 <CloudEffect start={true} style={{ height: "100%" }} maskSize={'122%'}>
                     <img src={require("@/img/habitability/banner.jpg").default} />
                 </CloudEffect>
                 <span style={{position: 'absolute', bottom: '1vw', left: '2vw', letterSpacing: '0.1em', fontSize: '1vw', zIndex: 1, color: '#333'}}>情境示意圖</span>
               </div>
               <div className='right'>
                 <h2 className='enTitle'>COMFORT LIVING SOLUTION</h2>
                 <h1>適居方案</h1>
                 <ul>
                    <li>全室空調</li>
                    <li>全室天花板+崁燈</li>
                    <li>系統櫃</li>
                    <li>主浴鏡櫃</li>
                    <li>客浴浴櫃</li>
                 </ul>

                   <div className='svg_box'>
                    <h3>系統櫃配置</h3>
                    {/* 右下角平面小圖 */}
                    <svg id="floor_Standard" data-name="圖層 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2053.47 871">
                        <g data-name="圖層 1">
                            <g>
                            <path className="cls-1" d="M82.21,22.56h79.41s0-14.12,8.82-18.35l19.06,18.35h135.18v63.53h349.06v-21.88h292.59v500.12h-24.82v-10.47l-83.29,4.47h-179.06v6h-38.23v302.12h-39.88v-51.88h-67.76v32.12h-163.76v-13.06H196.56v13.41h-34.94v-13.76H59.62v31.76H11.97v-98.47H29.97v-94.24H12.32v-42.71H29.26v-46.24H12.68v-27.18H29.97v-39.53H3.5v-154.94H14.79V81.85H61.03v4.94h5.65v-31.41h15.53V22.56Z"/>
                            <polygon className="cls-1" points="1378.44 64.21 1086.68 64.21 1086.68 248.21 1090.44 248.21 1090.44 471.27 1082.44 471.27 1082.44 565.85 1111.15 565.85 1111.15 551.74 1193.5 558.8 1376.56 558.8 1376.56 565.15 1405.03 565.15 1405.03 572.44 1410.68 572.44 1410.68 634.09 1405.03 634.09 1405.03 696.44 1411.85 696.44 1411.85 759.74 1405.26 759.74 1405.26 866.8 1445.5 866.8 1445.5 863.74 1451.62 863.74 1451.62 814.09 1518.68 814.09 1518.68 846.09 1683.62 846.09 1683.62 832.68 1857.26 832.68 1857.26 845.38 1892.09 845.38 1892.09 832.44 1985.97 832.44 1985.97 864.68 1993.26 864.68 1993.26 867.5 2033.26 867.5 2033.26 765.38 2024.56 765.38 2024.56 671.27 2032.09 671.27 2032.09 629.15 2025.5 629.15 2025.5 581.15 2033.97 581.15 2033.97 555.74 2024.09 555.74 2024.09 515.97 2049.03 515.97 2049.03 477.85 2024.79 477.85 2024.79 411.97 2049.97 411.97 2049.97 204.44 2024.09 204.44 2024.09 131.27 2035.38 131.27 2035.38 81.38 1992.32 81.38 1992.32 49.38 1677.74 49.38 1677.74 84.91 1378.44 84.91 1378.44 64.21"/>
                            <polygon className="cls-3 B1_rect" points="2024.79 411.97 2049.97 411.97 2049.97 204.44 2024.09 204.44 2024.09 131.27 2035.38 131.27 2035.38 81.38 1992.32 81.38 1992.32 49.38 1677.74 49.38 1677.74 84.91 1657.74 84.91 1657.74 391.03 1645.74 391.03 1645.74 482.8 1961.97 482.8 1961.97 411.97 2024.79 411.97"/>
                            <polygon className="cls-3 A2_rect" points="673.74 160.21 673.74 64.21 966.32 64.21 966.32 564.32 941.5 564.32 941.5 553.85 858.21 558.32 679.15 558.32 679.15 564.32 621.74 564.32 621.74 519.03 598.44 519.03 598.44 160.21 673.74 160.21"/>
                            <polygon className="cls-3 A3_rect" points="533.26 846.68 369.5 846.68 369.5 833.62 196.56 833.62 196.56 847.03 161.62 847.03 161.62 833.27 59.62 833.27 59.62 865.03 11.97 865.03 11.97 766.56 29.97 766.56 29.97 672.32 12.32 672.32 12.32 629.62 29.26 629.62 29.26 583.38 12.68 583.38 12.68 556.21 29.97 556.21 142.21 556.21 142.21 483.03 3.5 483.03 533.26 483.03 533.26 846.68"/>
                            <path className="cls-2 A1_rect" d="M324.79,86.09l-.12-63.53H189.5l-19.06-18.35c-8.82,4.24-8.82,18.35-8.82,18.35H82.21V55.38h-15.53v31.41h-5.65v-4.94H14.79V361.74H3.5v121.29H407.62v-91.29h-16.47V160.21h-66.35V86.09Z"/>
                            <polygon className="cls-3 B2_rect" points="1412.79 572.44 1405.03 572.44 1405.03 565.15 1376.56 565.15 1376.56 558.8 1193.5 558.8 1111.15 551.74 1111.15 565.85 1082.44 565.85 1082.44 471.27 1090.44 471.27 1090.44 248.21 1086.68 248.21 1086.68 64.21 1378.44 64.21 1378.44 84.91 1378.44 155.27 1454.44 155.27 1454.44 467.27 1412.79 467.27 1412.79 572.44"/>
                            <polygon className="cls-3 B3_rect" points="1522.21 494.8 1645.74 494.8 1645.74 482.09 1915.38 482.8 1916.79 555.74 2024.09 555.74 2033.97 555.74 2033.97 581.15 2025.5 581.15 2025.5 629.15 2032.09 629.15 2032.09 671.27 2024.56 671.27 2024.56 765.38 2033.26 765.38 2033.26 867.5 1993.26 867.5 1993.26 864.68 1985.97 864.68 1985.97 832.44 1892.09 832.44 1892.09 845.38 1857.26 845.38 1857.26 832.68 1683.62 832.68 1683.62 846.09 1518.68 846.09 1518.68 814.09 1522.21 494.8"/>
                            <text className="cls-4 A1_txt" transform="translate(112.64 339.17)"><tspan x="0" y="0">A1</tspan></text>
                            <text className="cls-4 A3_txt" transform="translate(201.58 725.99)"><tspan x="0" y="0">A3</tspan></text>
                            <text className="cls-4 A2_txt" transform="translate(699.93 339.17)"><tspan x="0" y="0">A2</tspan></text>
                            <text className="cls-4 B2_txt" transform="translate(1170.05 339.17)"><tspan x="0" y="0">B2</tspan></text>
                            <text className="cls-4 B3_txt" transform="translate(1665.58 725.99)"><tspan x="0" y="0">B3</tspan></text>
                            <text className="cls-4 B1_txt" transform="translate(1757.35 339.17)"><tspan x="0" y="0">B1</tspan></text>
                            </g>
                        </g>
                    </svg>

                    {
                        house_list.map((house, index)=>{
                            return (
                                <FancyBox3 text={''} width={'90%'} onClose={()=>{setRoom('livingRoom')}} key={`house${index}`}>
                                    <div className={`flex_box caseHabitability ${house.houseName}`}>
                                    <div className='left'>
                                        <div className="titleBox">
                                            <h2>
                                                <span>{house.houseName}</span>
                                            </h2>
                                            <h4>傢俱配置圖</h4>
                                            <div className="s_line"></div>
                                        </div>
                                        <div className={`mapBox ${house.houseName}`}>
                                            <i className='livingRoom' style={{opacity:room=='livingRoom' ? 1:0}}></i>
                                            <i className='MasterBedroom' style={{opacity:room=='MasterBedroom' ? 1:0}}></i>
                                            <i className='Bedroom1' style={{opacity:room=='Bedroom1' ? 1:0}}></i>
                                            <i className='Bedroom2' style={{opacity:room=='Bedroom2' ? 1:0}}></i>
                                            <img src={house.houseMap} />
                                        </div>
                                        <div className='toolBox'>
                                            <button type='button' className={room=='livingRoom' ? 'active':''} onClick={()=>{setRoom('livingRoom')}}>客餐廳</button>
                                            <button type='button' className={room=='MasterBedroom' ? 'active':''} onClick={()=>{setRoom('MasterBedroom')}}>主臥</button>
                                            <button type='button' className={room=='Bedroom1' ? 'active':''} onClick={()=>{setRoom('Bedroom1')}}>臥室一</button>
                                            <button type='button' className={room=='Bedroom2' ? 'active':''} onClick={()=>{setRoom('Bedroom2')}}>臥室二</button>
                                            <button type='button' className={room=='door' ? 'active':''} onClick={()=>{setRoom('door')}} style={{display: house.roomList.door==undefined ? 'none':'block'}}>玄關櫃</button>
                                        </div>
                                    </div>
                                    <div className='right'>
                                        <div className='slide_box'>
                                            {/* <Swiper 
                                                speed={1000}  
                                                modules={[Navigation]}
                                                navigation={{
                                                    nextEl: '.nextBtn',
                                                    prevEl: '.prevBtn'
                                                }}
                                            >

                                                {
                                                   house.roomList[room]!=undefined ? 
                                                   house.roomList[room].img.map((roomImg)=>{
                                                     return (
                                                        <SwiperSlide>
                                                            <img src={roomImg} />
                                                            <span className='imgTxt'>{house.roomList[room].imgTxt}</span>
                                                        </SwiperSlide>
                                                     )
                                                   }) 
                                                   :
                                                   ''
                                                }
                                                
                                            </Swiper> */}
                                            <div className='slideOne'>
                                                <img src={house.roomList[room].img[slide]} />
                                                <span className='imgTxt'>{Array.isArray(house.roomList[room].imgTxt) ? house.roomList[room].imgTxt[slide] : house.roomList[room].imgTxt}</span>
                                            </div>
                                           
                                            <div className='nav'>
                                                <div className='prevBtn' style={{display: house.roomList[room].img.length==1 ? 'none':'block'}} onClick={()=>{
                                                    if(slide!=0){
                                                        setSlide(slide-1)
                                                    }
                                                }}>
                                                    <img src={require('@/img/habitability/slideNav.svg').default} />
                                                </div>
                                                <div className='nextBtn' style={{display: house.roomList[room].img.length==1 ? 'none':'block'}} onClick={()=>{
                                                    if(slide!=house.roomList[room].img.length-1){
                                                        setSlide(slide+1)
                                                    }
                                                }}>
                                                    <img src={require('@/img/habitability/slideNav.svg').default} />
                                                </div>
                                            </div>
                                        </div>
                                        
                                    </div>
                                    </div>
                                </FancyBox3>
                            )
                        })
                    }
                    
                    </div>

                    
                    
               </div>
               
            </div>
        </section>
    )
}