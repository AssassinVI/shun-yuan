import React, { useRef, useEffect, useState, useLayoutEffect } from "react";
import FancyBox from "@/src/component/config/fancyBox";
import ScaleDrag from "../config/scaleDrag";
import { gsap } from 'gsap';

export default function Life() {

  const animateRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
        let gg = gsap.timeline({ delay: 0.2 })
        gg.from(".life_section .logo", {opacity:0, filter: 'blur(15px)', duration: 1.5,})
          .from(".life_section .txt1", {opacity:0, filter: 'blur(15px)', x:-20, duration: 1.5,}, '<+=0.2')
          .from(".life_section .line", { width:0, duration: 1.5,}, '<+=0.5')
          .from(".life_section .list button", {opacity:0, filter: 'blur(15px)', x:-20, stagger:0.2, duration: 1,}, '<')
          .from(".life_section .map_box .imgBox", {opacity:0,  duration: 1,}, '<+=1');
          
    }, [animateRef])
    return () => ctx.revert()
}, []);



  const requireEntertainment = require.context("../../../img/life/entertainment", false, /^\.\/.*\.jpg$/);
  const Entertainment = requireEntertainment.keys().map(requireEntertainment);
  const requireSchool = require.context("../../../img/life/school", false, /^\.\/.*\.jpg$/);
  const School = requireSchool.keys().map(requireSchool);
  const requireHospital = require.context("../../../img/life/hospital", false, /^\.\/.*\.jpg$/);
  const Hospital = requireHospital.keys().map(requireHospital);

  const [type, setType] = useState()

  const list = [
    {
      title: "快適出行",
      en: "CONVENIENT TRANSPORTATION",
      active: false,
    },
    {
      title: "人文風采",
      en: "CULTURE AND HUMANISM",
      active: false,
    },
    {
      title: "民生休閒",
      en: "LIVELIHOOD AND LEISURE",
      active: false,
    },
    {
      title: "文教桃源",
      en: "EDUCATIONAL INSTITUTION",
      active: false,
    },
    {
      title: "醫療保健",
      en: "MEDICAL CARE",
      active: false,
    },
  ];

  const map_list = [
    {
      type: "traffic",
      title: "快適出行",
      en: "CONVENIENT TRANSPORTATION",
      anchor: 5,
      fancy: [
        {
          img: [
            require('@/img/life/traffic/t011.jpg').default, 
            require('@/img/life/traffic/t012.jpg').default
          ],
          text: "台74德芳南路匝道",
        },
        {
          img: [
            require('@/img/life/traffic/t021.jpg').default,
            require('@/img/life/traffic/t022.jpg').default
          ],
          text: "軟體園區",
        },
        {
          img: [require('@/img/life/traffic/t03.jpg').default],
          text: "大里工業區",
        },
        {
          img: [
            require('@/img/life/traffic/t041.jpg').default,
            require('@/img/life/traffic/t042.jpg').default
          ],
          text: "台中車站",
        },
        {
          img: [
            require('@/img/life/traffic/t051.jpg').default,
            require('@/img/life/traffic/t052.jpg').default
          ],
          text: "五權車站",
        },
      ],
    },
    {
      type: "park",
      title: "人文風采",
      en: "CULTURE AND HUMANISM",
      anchor: 1,
      fancy: [
        {
            img: [
              require('@/img/life/park/pk04.jpg').default,
              require('@/img/life/park/pk03.jpg').default,
            ],
            text: "大里國民運動中心",
        },
        {
            img: [
              require('@/img/life/park/pk01.jpg').default,
              require('@/img/life/park/pk02.jpg').default,
              require('@/img/life/park/pk05.jpg').default,
              require('@/img/life/park/pk06.jpg').default,
              require('@/img/life/park/pk07.jpg').default,
            ],
            text: "大里運動公園",
        },
        {
            img: [
              require('@/img/life/park/pk015.jpg').default,
            ],
            text: "大里親子館",
        },
        {
            img: [
              require('@/img/life/park/pk010.jpg').default,
              require('@/img/life/park/pk011.jpg').default,
              require('@/img/life/park/pk012.jpg').default,
            ],
            text: "康橋公園",
        },

      ],
    },
    {
      type: "entertainment",
      title: "民生休閒",
      en: "LIVELIHOOD AND LEISURE",
      anchor: 9,
      fancy: [
        {
            img: [
              require('@/img/life/entertainment/en01.jpg').default,
              require('@/img/life/entertainment/en02.jpg').default,
            ],
            text: "寶雅",
        },
        {
            img: [
              require('@/img/life/entertainment/en04.jpg').default,
            ],
            text: "肯德基",
        },
        {
            img: [
              require('@/img/life/entertainment/en06.jpg').default
            ],
            text: "好樂迪",
        },
        {
            img: [require('@/img/life/entertainment/en09.jpg').default],
            text: "麥當勞",
        },
        {
            img: [require('@/img/life/entertainment/en018.jpg').default],
            text: "大買家",
        },
        {
            img: [
              require('@/img/life/entertainment/en019.jpg').default,
              require('@/img/life/entertainment/en020.jpg').default,
            ],
            text: "內新市場",
        },
      ],
    },
    {
      type: "school",
      title: "文教桃源",
      en: "EDUCATIONAL INSTITUTION",
      anchor: 5,
      fancy: [
        {
            img: [
              require('@/img/life/school/sc01.jpg').default,
              require('@/img/life/school/sc02.jpg').default,
            ],
            text: "內新國小",
        },
        {
            img: [require('@/img/life/school/sc03.jpg').default,],
            text: "益民國小",
        },
        {
            img: [require('@/img/life/school/sc04.jpg').default,],
            text: "光榮國中",
        },
        {
            img: [require('@/img/life/school/sc05.jpg').default,],
            text: "立人高中",
        },
        {
            img: [require('@/img/life/school/sc06.jpg').default,],
            text: "國立興大附中",
        },
        {
            img: [
              require('@/img/life/school/sc07.jpg').default,
              require('@/img/life/school/sc08.jpg').default,
            ],
            text: "中興大學",
        },
      ],
    },
    {
      type: "hospital",
      title: "醫療保健",
      en: "MEDICAL CARE",
      anchor: 3,
      fancy: [
        {
            img: [
              require('@/img/life/hospital/hos01.jpg').default,
              require('@/img/life/hospital/hos02.jpg').default,
            ],
            text: "仁愛醫院",
        },
        {
            img: [
              require('@/img/life/hospital/hos03.jpg').default,
            ],
            text: "新菩提醫院",
        },
      ],
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
    <section className="life_section" ref={animateRef}>
      {/* <div className='vr720_btn'>
                <FancyBox text={`720環景`}>
                  <iframe src="https://www.720yun.com/t/adakn9qwzr7?scene_id=112286084" frameborder="0"></iframe>
                </FancyBox>
            </div> */}

      <div className="life">
        <div className="left">
          <img
            className="logo"
            src={require("../../../img/config/logo@2x.png").default}
          />
          <h2 className="txt1">SURROUNDING<br />MAP</h2>
          <div className="line"></div>
          <div className="list">
            {map_list.map((item, index) => {
              return (
                <button type="button" key={`item${index}`} onClick={() => {setType(item.type)}}  >
                  <img
                    className="icon"
                    src={require("../../../img/config/list_icon.png").default}
                    style={{ transform: type == item.type ? "rotate(180deg)" : "rotate(0deg)" }} 
                  />
                  <span className="title" style={{ transform: type == item.type ? "translateX(15px)" : "translateX(0px)" }} >{item.title}</span>
                  <span className="en" style={{ transform: type == item.type ? "translateX(15px)" : "translateX(0px)" }}>{item.en}</span>
                </button>
              );
            })}
          </div>
        </div>
        <div className="right">
          <div className="map_box">
            <ScaleDrag
              maxRatio={2.5}
              zoomImg1={require("../../../img/urban/svg/001-plus-button.svg").default}
              zoomImg2={require("../../../img/urban/svg/002-minus-button.svg").default}
            >
              <img
                className="map"
                src={require("../../../img/life/map@2x.png").default}
              />

              {map_list.map((item, index) => {
                let is_show=type == item.type ? "show" : "";
                return (
                  <div
                    className={`${item.type} point_box ${is_show}`}
                    key={`point${index}`}
                  >
                    {item.fancy.map((not, i) => {
                      // return <img src={require("@/img/urban/svg/002-spot.svg")} />
                      return (
                        <FancyBox
                          thumbUrl={require("@/img/life/SVG/point_icon_new.svg").default}
                        >
                          <FancyChildren data={item.fancy} i={i} />
                        </FancyBox>
                      );
                    })}
                  </div>
                );
              })}
            </ScaleDrag>
          </div>
        </div>
      </div>
    </section>
  );
}




