import React, { useRef, useEffect, useLayoutEffect, useState } from "react";
import { useSelector } from "react-redux";
import FancyBox from "@/src/component/config/fancyBox";
import FancyBoxRef from "@/src/component/config/fancyBoxRef";
import ScaleDrag from "../config/scaleDrag";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { gsap } from "gsap";
import CloudEffect from "../config/cloudEffect";
import { sortData } from "./data/floorData";
import { FloorNav } from "./chooseFloor";
import { PatternDiagramStandardNEW } from "../config/svgCollection";

export default function Floor() {
  //獲取樓別
  const selector = useSelector((state) => state.floorReducer.floor);
  const floor = selector ? selector.toUpperCase() : "1F";

  

  const animateRef = useRef(null);

  return (
    <section className="floor" ref={animateRef}>
      <div className="floor_box">
        <img
          className="logo"
          src={require("../../../img/config/logo@2x.png").default}
        />
        <div className="title_box">
          <h1>{floor}</h1>
          <div>
            <p>平面配置圖</p>
            <h2>FLOOR PLAN</h2>
          </div>
        </div>

        <div className="map">
          <div className="left">
            <FloorNav building={"B"} flag={false} />
          </div>
          <div className="right">
            <FloorPlanImg floor={floor} type={"B"} />
          </div>
        </div>

        <p className="remark">平面圖僅供參考，實際依房地預定買賣契約書為準</p>
      </div>
    </section>
  );
}

function FloorPlanImg({ floor, type }) {
  const [carousel, setCarousel] = useState(0);
  //-- 家配內頁切換戶別 --
  const [nowHouse, setNowHouse]=useState(null);
  return (
    <div className="floor-plan-img">
      <ScaleDrag
        maxRatio={2.4}
        zoomImg1={require("../../../img/urban/svg/001-plus-button.svg").default}
        zoomImg2={require("../../../img/urban/svg/002-minus-button.svg").default}
      >
        <TransitionGroup>
          <CSSTransition key={`${floor}2`} timeout={1000} classNames="fade">
            <div className="container">
              {sortData.map((item, i) => {
                if (floor == item.type) {
                  if ( item.img && (item.img[type] || typeof item.img == "string")) {

                    const imgURL = typeof item.img == "string" ? item.img : item.img[type];

                    return (
                      <div className="anchor-area">
                        <img src={imgURL} />
                        {
                         item.configurationGraph == "standard"
                          ? item.anchor.map((itemInner, index) => {
                            return (
                              // 以下為樓層傢配圖分棟
                              <FunitureFancyBox
                                all={item.anchor}
                                item={itemInner}
                                nowHouse={nowHouse}
                                setNowHouse={setNowHouse}
                              />
                            );
                          })
                          : Array.isArray(item.anchor) > 0
                          ? item.anchor.map((item) => {
                            return (
                              <div className={`${item.class}`}>
                                <FancyBox thumbUrl={item.thumb}>
                                  <div className="floorPlan-fancy">
                                    {item.fancyImg.map((item, i) => {
                                      return (
                                        <img
                                          src={item}
                                          key={i}
                                          style={{
                                            opacity: carousel == i ? 1 : 0,
                                          }}
                                        />
                                      );
                                    })}
                                    <div className="title">
                                      <p>{`${item.title}-3D示意圖`}</p>
                                    </div>
                                    {item.fancyImg.length > 1 && (
                                      <NavBox
                                        carousel={carousel}
                                        setCarousel={setCarousel}
                                        limit={{
                                          min: 0,
                                          max: item.fancyImg.length - 1,
                                        }}
                                      />
                                    )}
                                  </div>
                                </FancyBox>
                                <div className="radiation">
                                  <div className="circle"></div>
                                  <div className="circle"></div>
                                  <div className="circle"></div>
                                </div>
                              </div>
                            );
                          })
                          : typeof item.anchor == "object" &&
                            item.anchor[type] &&
                            item.anchor[type].map((item) => {
                              // 以下為頂樓公設分棟
                              return (
                                <div className={`${item.class}`}>
                                  <FancyBox thumbUrl={item.thumb}>
                                    <div className="floorPlan-fancy">
                                      {item.fancyImg.map((item, i) => {
                                        return (
                                          <img
                                            src={item}
                                            key={i}
                                            style={{
                                              opacity: carousel == i ? 1 : 0,
                                            }}
                                          />
                                        );
                                      })}
                                      <div className="title">
                                        <p>{`${item.title}-3D示意圖`}</p>
                                      </div>
                                      {item.fancyImg.length > 1 && (
                                        <NavBox
                                          carousel={carousel}
                                          setCarousel={setCarousel}
                                          limit={{
                                            min: 0,
                                            max: item.fancyImg.length - 1,
                                          }}
                                        />
                                      )}
                                    </div>
                                  </FancyBox>
                                  <div className="radiation">
                                    <div className="circle"></div>
                                    <div className="circle"></div>
                                    <div className="circle"></div>
                                  </div>
                                </div>
                              );
                            })}
                        {item.text && (
                          <FancyBox text={item.text}>
                            <img
                              style={{
                                position: "absolute",
                                right: 0,
                                left: 0,
                                top: 0,
                                bottom: 0,
                                margin: "auto",
                                width: "auto",
                                height: "100%",
                              }}
                              src={
                                require("@/img/product/floor/floorPlan/webp/1f-colored.webp").default
                              }
                            />
                          </FancyBox>
                        )}
                      </div>
                    );
                  } else {
                    return <p>即將公開</p>;
                  }
                }
              })}
            </div>
          </CSSTransition>
        </TransitionGroup>
      </ScaleDrag>
    </div>
  );
}

function NavBox({ carousel, setCarousel, limit }) {
  const handleClick = (e) => {
    e.stopPropagation();
    e.preventDefault();
    let prevValue = carousel;
    if (e.target.className == "prev") {
      if (!(limit.min == prevValue)) {
        prevValue = prevValue - 1;
      }
    } else {
      if (!(limit.max == prevValue)) {
        prevValue = prevValue + 1;
      }
    }
    setCarousel(prevValue);
  };
  return (
    <div className="navBox" onClick={() => setCarousel(0)}>
      <div className="prev" onClick={handleClick}>
        <img src={require("@/img/equipment/svg/003-arrow.svg").default} />
      </div>
      <div className="next" onClick={handleClick}>
        <img src={require("@/img/equipment/svg/003-arrow.svg").default} />
      </div>
    </div>
  );
}

const FunitureFancyBox = ({ all, item, setNowHouse, nowHouse }) => {
  
  const [itemTitle, setItemTitle]=useState(item.title);
  const [itemImg, setItemImg]=useState(item.fancyImg[0]);
  const FBox=useRef(null);

  useEffect(()=>{
    const new_item= nowHouse== null ? item : all.find((item)=>{
      return item.title==nowHouse;
    });

    setItemTitle(new_item.title);
    setItemImg(new_item.fancyImg[0]);

    console.log(FBox.current);

  }, [nowHouse]);



  function change_house (e, houseName) {
     e.stopPropagation(); 
     //setNowHouse(houseName);
  }

  return (
    <div className={`${item.class}`}>
      <FancyBoxRef thumbUrl={item.thumb} ref={FBox}>
        <div className="funiture-fancy" style={{ display: "flex" }}>
          <div className="left">
            <div className="titleBox">
              <h2>
                <span>{itemTitle}</span>
              </h2>
              <h4>傢俱配置圖</h4>
              <div className="s_line"></div>
            </div>

             {/* 左下角平面小圖 */}
             {/* <svg id="floor_Standard" data-name="圖層 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 346 156.32">
                <g data-name="圖層 1">
                    <g>
                    <polygon className="A1_rect" onClick={(e)=>{change_house(e ,'A1');}} style={{fill: itemTitle== 'A1' ? '#306374':'#fff' }} points="57.78 10.99 57.78 .5 14.12 .5 14.12 6.08 11.55 6.08 11.55 10.99 2.66 10.99 2.66 35.36 1.58 35.36 1.58 60.43 0 60.43 0 87.84 1.58 87.84 1.58 87.84 8.41 87.84 8.41 82.93 42.96 82.93 42.96 89.21 72.15 89.21 72.15 82.93 72.15 80.3 72.15 10.99 57.78 10.99"/>
                    <polygon className="A3_rect" onClick={(e)=>{change_house(e ,'A3');}} style={{fill: itemTitle== 'A3' ? '#306374':'#fff' }} points="72.55 86.48 95.12 86.48 95.12 149.22 66.1 149.22 66.1 146.41 34.32 146.41 34.32 149.27 29.02 149.27 29.02 146.95 9.4 146.95 9.4 153.09 1.95 153.09 1.95 134.83 4.99 134.83 4.99 118.13 1.92 118.13 1.92 110.56 4.42 110.56 4.42 102.19 1.92 102.19 1.92 97.71 4.99 97.71 4.99 90.21 8.81 90.21 8.81 85.3 42.37 85.3 42.37 91.6 72.64 91.6 72.55 86.48"/>
                    <polygon className="A2_rect" onClick={(e)=>{change_house(e ,'A2');}} style={{fill: itemTitle== 'A2' ? '#306374':'#fff' }} points="139.46 68.84 139.46 13.39 139.53 13.39 139.53 5.89 87.34 5.89 87.34 10.1 74.65 10.1 74.65 83.5 134.99 83.5 139.46 83.5 140.62 83.5 140.62 68.84 139.46 68.84"/>
                    <polygon className="B1_rect" onClick={(e)=>{change_house(e ,'B1');}} style={{fill: itemTitle== 'B1' ? '#306374':'#fff' }} points="228.03 10.99 228.03 .5 271.69 .5 271.69 6.08 274.26 6.08 274.26 10.99 283.15 10.99 283.15 35.36 284.22 35.36 284.22 60.43 285.81 60.43 285.81 87.84 284.22 87.84 284.22 87.84 277.4 87.84 277.4 82.93 242.84 82.93 242.84 89.21 213.66 89.21 213.66 82.93 213.66 80.3 213.66 10.99 228.03 10.99"/>
                    <polygon className="B3_rect" onClick={(e)=>{change_house(e ,'B3');}} style={{fill: itemTitle== 'B3' ? '#306374':'#fff' }} points="213.26 86.48 190.68 86.48 190.68 149.22 219.71 149.22 219.71 146.41 251.49 146.41 251.49 149.27 256.79 149.27 256.79 146.95 276.4 146.95 276.4 153.09 283.86 153.09 283.86 134.83 280.81 134.83 280.81 118.13 283.88 118.13 283.88 110.56 281.38 110.56 281.38 102.19 283.88 102.19 283.88 97.71 280.81 97.71 280.81 90.21 277 90.21 277 85.3 243.44 85.3 243.44 91.6 213.17 91.6 213.26 86.48"/>
                    <polygon className="B2_rect" onClick={(e)=>{change_house(e ,'B2');}} style={{fill: itemTitle== 'B2' ? '#306374':'#fff' }} points="145.35 68.84 145.35 13.39 145.27 13.39 145.27 5.89 197.46 5.89 197.46 10.1 210.16 10.1 210.16 83.5 149.82 83.5 145.35 83.5 144.18 83.5 144.18 68.84 145.35 68.84"/>
                    <text className="A1" style={{fill: itemTitle== 'A1' ? '#fff':'#306374' }} transform="translate(18.39 56.89)"><tspan x="0" y="0">A1</tspan></text>
                    <text className="A3" style={{fill: itemTitle== 'A3' ? '#fff':'#306374' }} transform="translate(32.39 127.89)"><tspan x="0" y="0">A3</tspan></text>
                    <text className="B3" style={{fill: itemTitle== 'B3' ? '#fff':'#306374' }} transform="translate(206.89 127.89)"><tspan x="0" y="0">B3</tspan></text>
                    <text className="B1" style={{fill: itemTitle== 'B1' ? '#fff':'#306374' }} transform="translate(228.89 56.89)"><tspan x="0" y="0">B1</tspan></text>
                    <text className="A2" style={{fill: itemTitle== 'A2' ? '#fff':'#306374' }} transform="translate(86.39 55.89)"><tspan x="0" y="0">A2</tspan></text>
                    <text className="B2" style={{fill: itemTitle== 'B2' ? '#fff':'#306374' }} transform="translate(152.39 55.89)"><tspan x="0" y="0">B2</tspan></text>
                    </g>
                </g>
            </svg> */}
            <svg id="floor_Standard" data-name="圖層 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2053.47 871">
                <g data-name="圖層 1">
                    <g>
                    <path class="cls-1" d="M82.21,22.56h79.41s0-14.12,8.82-18.35l19.06,18.35h135.18v63.53h349.06v-21.88h292.59v500.12h-24.82v-10.47l-83.29,4.47h-179.06v6h-38.23v302.12h-39.88v-51.88h-67.76v32.12h-163.76v-13.06H196.56v13.41h-34.94v-13.76H59.62v31.76H11.97v-98.47H29.97v-94.24H12.32v-42.71H29.26v-46.24H12.68v-27.18H29.97v-39.53H3.5v-154.94H14.79V81.85H61.03v4.94h5.65v-31.41h15.53V22.56Z"/>
                    <polygon class="cls-1" points="1378.44 64.21 1086.68 64.21 1086.68 248.21 1090.44 248.21 1090.44 471.27 1082.44 471.27 1082.44 565.85 1111.15 565.85 1111.15 551.74 1193.5 558.8 1376.56 558.8 1376.56 565.15 1405.03 565.15 1405.03 572.44 1410.68 572.44 1410.68 634.09 1405.03 634.09 1405.03 696.44 1411.85 696.44 1411.85 759.74 1405.26 759.74 1405.26 866.8 1445.5 866.8 1445.5 863.74 1451.62 863.74 1451.62 814.09 1518.68 814.09 1518.68 846.09 1683.62 846.09 1683.62 832.68 1857.26 832.68 1857.26 845.38 1892.09 845.38 1892.09 832.44 1985.97 832.44 1985.97 864.68 1993.26 864.68 1993.26 867.5 2033.26 867.5 2033.26 765.38 2024.56 765.38 2024.56 671.27 2032.09 671.27 2032.09 629.15 2025.5 629.15 2025.5 581.15 2033.97 581.15 2033.97 555.74 2024.09 555.74 2024.09 515.97 2049.03 515.97 2049.03 477.85 2024.79 477.85 2024.79 411.97 2049.97 411.97 2049.97 204.44 2024.09 204.44 2024.09 131.27 2035.38 131.27 2035.38 81.38 1992.32 81.38 1992.32 49.38 1677.74 49.38 1677.74 84.91 1378.44 84.91 1378.44 64.21"/>
                    <polygon class="cls-3 B1_rect" onClick={(e)=>{change_house(e ,'B1');}} style={{fill: itemTitle== 'B1' ? '#306374':'#fff' }} points="2024.79 411.97 2049.97 411.97 2049.97 204.44 2024.09 204.44 2024.09 131.27 2035.38 131.27 2035.38 81.38 1992.32 81.38 1992.32 49.38 1677.74 49.38 1677.74 84.91 1657.74 84.91 1657.74 391.03 1645.74 391.03 1645.74 482.8 1961.97 482.8 1961.97 411.97 2024.79 411.97"/>
                    <polygon class="cls-3 A2_rect" onClick={(e)=>{change_house(e ,'A2');}} style={{fill: itemTitle== 'A2' ? '#306374':'#fff' }} points="673.74 160.21 673.74 64.21 966.32 64.21 966.32 564.32 941.5 564.32 941.5 553.85 858.21 558.32 679.15 558.32 679.15 564.32 621.74 564.32 621.74 519.03 598.44 519.03 598.44 160.21 673.74 160.21"/>
                    <polygon class="cls-3 A3_rect" onClick={(e)=>{change_house(e ,'A3');}} style={{fill: itemTitle== 'A3' ? '#306374':'#fff' }} points="533.26 846.68 369.5 846.68 369.5 833.62 196.56 833.62 196.56 847.03 161.62 847.03 161.62 833.27 59.62 833.27 59.62 865.03 11.97 865.03 11.97 766.56 29.97 766.56 29.97 672.32 12.32 672.32 12.32 629.62 29.26 629.62 29.26 583.38 12.68 583.38 12.68 556.21 29.97 556.21 142.21 556.21 142.21 483.03 3.5 483.03 533.26 483.03 533.26 846.68"/>
                    <path class="cls-2 A1_rect" onClick={(e)=>{change_house(e ,'A1');}} style={{fill: itemTitle== 'A1' ? '#306374':'#fff' }} d="M324.79,86.09l-.12-63.53H189.5l-19.06-18.35c-8.82,4.24-8.82,18.35-8.82,18.35H82.21V55.38h-15.53v31.41h-5.65v-4.94H14.79V361.74H3.5v121.29H407.62v-91.29h-16.47V160.21h-66.35V86.09Z"/>
                    <polygon class="cls-3 B2_rect" onClick={(e)=>{change_house(e ,'B2');}} style={{fill: itemTitle== 'B2' ? '#306374':'#fff' }} points="1412.79 572.44 1405.03 572.44 1405.03 565.15 1376.56 565.15 1376.56 558.8 1193.5 558.8 1111.15 551.74 1111.15 565.85 1082.44 565.85 1082.44 471.27 1090.44 471.27 1090.44 248.21 1086.68 248.21 1086.68 64.21 1378.44 64.21 1378.44 84.91 1378.44 155.27 1454.44 155.27 1454.44 467.27 1412.79 467.27 1412.79 572.44"/>
                    <polygon class="cls-3 B3_rect" onClick={(e)=>{change_house(e ,'B3');}} style={{fill: itemTitle== 'B3' ? '#306374':'#fff' }} points="1522.21 494.8 1645.74 494.8 1645.74 482.09 1915.38 482.8 1916.79 555.74 2024.09 555.74 2033.97 555.74 2033.97 581.15 2025.5 581.15 2025.5 629.15 2032.09 629.15 2032.09 671.27 2024.56 671.27 2024.56 765.38 2033.26 765.38 2033.26 867.5 1993.26 867.5 1993.26 864.68 1985.97 864.68 1985.97 832.44 1892.09 832.44 1892.09 845.38 1857.26 845.38 1857.26 832.68 1683.62 832.68 1683.62 846.09 1518.68 846.09 1518.68 814.09 1522.21 494.8"/>
                    <text class="cls-4 A1_txt" style={{fill: itemTitle== 'A1' ? '#fff':'#306374' }} transform="translate(112.64 339.17)"><tspan x="0" y="0">A1</tspan></text>
                    <text class="cls-4 A3_txt" style={{fill: itemTitle== 'A3' ? '#fff':'#306374' }} transform="translate(201.58 725.99)"><tspan x="0" y="0">A3</tspan></text>
                    <text class="cls-4 A2_txt" style={{fill: itemTitle== 'A2' ? '#fff':'#306374' }} transform="translate(699.93 339.17)"><tspan x="0" y="0">A2</tspan></text>
                    <text class="cls-4 B2_txt" style={{fill: itemTitle== 'B2' ? '#fff':'#306374' }} transform="translate(1170.05 339.17)"><tspan x="0" y="0">B2</tspan></text>
                    <text class="cls-4 B3_txt" style={{fill: itemTitle== 'B3' ? '#fff':'#306374' }} transform="translate(1665.58 725.99)"><tspan x="0" y="0">B3</tspan></text>
                    <text class="cls-4 B1_txt" style={{fill: itemTitle== 'B1' ? '#fff':'#306374' }} transform="translate(1757.35 339.17)"><tspan x="0" y="0">B1</tspan></text>
                    </g>
                </g>
            </svg>
            
          </div>
          <div className="right">
            <ScaleDrag
              maxRatio={2.2}
              zoomImg1={require("../../../img/urban/svg/001-plus-button.svg").default}
              zoomImg2={require("../../../img/urban/svg/002-minus-button.svg").default}
            >
              <img src={itemImg} />
            </ScaleDrag>
          </div>
          <p>本圖僅為傢俱配置參考，實際依房地預定買賣契約書為準。</p>
        </div>
      </FancyBoxRef>
      <div className="radiation">
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
      </div>
    </div>
  );
};
