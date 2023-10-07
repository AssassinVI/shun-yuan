import React, { useRef, useEffect, useState } from "react";
import FancyBox from "@/src/component/config/fancyBox";
import ScaleDrag from "../config/scaleDrag";

export default function Life() {
  // const vr720Ref = useRef(undefined);

  // useEffect(()=>{
  //     vr720Ref.current.scrollLeft=200;
  // }, [vr720Ref]);

  const requireTraffic = require.context("../../../img/life/traffic", false, /^\.\/.*\.jpg$/);
  const Traffic = requireTraffic.keys().map(requireTraffic);
  const requirePark = require.context("../../../img/life/park", false, /^\.\/.*\.jpg$/);
  const Park = requirePark.keys().map(requirePark);
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
          img: [Traffic[0].default, Traffic[1].default],
          text: "台74德芳南路匝道",
        },
        {
          img: [Traffic[2].default, Traffic[3].default],
          text: "軟體園區",
        },
        {
          img: [Traffic[4].default],
          text: "大里工業區",
        },
        {
          img: [Traffic[5].default, Traffic[6].default],
          text: "台中車站",
        },
        {
          img: [Traffic[7].default, Traffic[8].default],
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
            img: [Park[0].default],
            text: "大里國民運動中心",
        },
        {
            img: [Park[1].default],
            text: "大里運動公園",
        },
        {
            img: [Park[2].default],
            text: "大里親子館",
        },
        {
            img: [Park[3].default],
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
            img: [Entertainment[0].default],
            text: "寶雅",
        },
        {
            img: [Entertainment[1].default],
            text: "肯德基",
        },
        {
            img: [Entertainment[2].default],
            text: "好樂迪",
        },
        {
            img: [Entertainment[3].default],
            text: "麥當勞",
        },
        {
            img: [Entertainment[4].default],
            text: "大買家",
        },
        {
            img: [Entertainment[5].default],
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
            img: [School[0].default],
            text: "內新國小",
        },
        {
            img: [School[1].default],
            text: "益民國小",
        },
        {
            img: [School[2].default],
            text: "光榮國中",
        },
        {
            img: [School[3].default],
            text: "立人高中",
        },
        {
            img: [School[4].default],
            text: "國立興大附中",
        },
        {
            img: [School[5].default],
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
            img: [Hospital[0].default],
            text: "仁愛醫院",
        },
        {
            img: [Hospital[1].default],
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
            cursor: "pointer"
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
                        <div className='wrapper' style={{ position: "absolute", left: 0, top: 0, width: "100%", height: "100%", opacity: slide == innerI ? 1 : 0 }}>
                            <img src={itemInner} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                            <p style={{ position: "absolute", right: "1.5vw", bottom: "1vw", color: "#fff", fontSize: "0.8vw", letterSpacing: "0.1em", filter: "drop-shadow(0 0 3px #000)" }}>{data[i].text}</p>
                        </div>
                    )

                })}
                {data && data[i].img.length >= 2 && <>
                    <div className="prev" onClick={prev} style={{ ...navStyle, left: "1.5vw" }}>
                        <img src={require("@/img/config/002-arrow-left.svg")} style={{ width: "100%", height: "100%", pointerEvents: "none" }} />

                    </div>
                    <div className="next" onClick={next} style={{ ...navStyle, right: "5.5vw" }}>
                        <img src={require("@/img/config/001-arrow-right.svg")} style={{ width: "100%", height: "100%", pointerEvents: "none" }} />
                    </div>
                </>}
            </>

        )
    }

  return (
    <section className="life_section">
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
          <img
            className="txt1"
            src={require("../../../img/life/SVG/life_txt.svg").default}
          />
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
              zoomImg1={require("../../../img/urban/svg/001-plus-button.svg")}
              zoomImg2={require("../../../img/urban/svg/002-minus-button.svg")}
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
                          thumbUrl={require("@/img/life/SVG/point_icon_new.svg")}
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




