import React, { useEffect, useState } from 'react'
import { useLayoutEffect, useRef } from 'react';
// Import animation libary
import { gsap } from "gsap";
import Glow from '../config/glow';
import FancyBox from "../config/fancyBox"
import BasicContent from "../config/basicContent"
const requireLayoutSvg = require.context("../../../img/layout/svg", false, /^\.\/.*\.svg$/);
const layoutSvg = requireLayoutSvg.keys().map(requireLayoutSvg);
const requireSvg = require.context("../../../img/lifefunction/svg", false, /^\.\/.*\.svg$/);
const svg = requireSvg.keys().map(requireSvg);
const requireWebp = require.context("../../../img/lifefunction/webp", false, /^\.\/.*\.webp$/);
const webp = requireWebp.keys().map(requireWebp);
const requirepng = require.context("../../../img/lifefunction/png", false, /^\.\/.*\.png$/);
const png = requirepng.keys().map(requirepng);


function LifeFunction() {

    return (
        <>
            <AerialImage />

        </>

    )
}


export default React.memo(LifeFunction);

function AerialImage() {
    const animateRef = useRef(null)

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            let gg = gsap.timeline()
            gg.from(".logo .glow", {
                scaleY: 0,
                duration: 1.8
            }).from(".logo > img", {
                opacity: 0,
                duration: 1
            }, "<+1.5")
        }, animateRef)
        return () => ctx.revert()
    }, [])
    return (
        <div className="life-function" ref={animateRef}>
            <Cloud />
            <LogoBox />
            <img src={webp[0].default} className="banner-bg" />
            <AnchorSpot />
        </div>
    )
}

// function AerialPara(props) {

//     return (
//         <div className="paraBox" style={{ marginRight: props.mr }}>
//             <p>
//                 {props.children}
//             </p>
//             <div className="line" style={{ height: props.height }}></div>
//         </div>
//     )
// }
function LogoBox() {

    return (
        <div className="logo">
            <img src={layoutSvg[4].default} />
            <Glow number={40} color={"#fff"} />
        </div>
    )
}

function Cloud() {
    return (
        <div className="cloud">
            <img src={png[0].default} style={{ width: "80%", opacity: 0.1, animationDuration: "600s", left: "80%" }} />
            <img src={png[0].default} style={{ width: "40%", opacity: 0.2, animationDuration: "500s", left: "50%" }} />
            <img src={png[0].default} style={{ width: "20%", opacity: 0.4, animationDuration: "300s" }} />
            <img src={png[0].default} style={{ width: "60%", opacity: 0.2, animation: "none", left: "5%", transform: "rotateY(180deg)", top: "8vw" }} />
        </div>
    )
}

function AnchorSpot() {

    const para = [
        [{
            img: webp[2].default,
            title: `MAJOR CONSTRUCTION`,
            para1: `新興AI科技園區`,
            para2: `數位媒體、OTT影音串流虛擬實境、AI新創、尖端醫療…全球趨勢產業匯聚，世界半導體霸主ASML艾司摩爾投資規模達300億為史上最大在台投資案，吸引跨國科技人才，融合工作、生活、休閒、創富，林口一路領先全國。`,

        }],
        [{
            img: webp[3].default,
            title: `MAJOR CONSTRUCTION`,
            para1: `昕境廣場-國賓影城`,
            para2: `「林口昕境國賓影城」擁有8個國際級影廳，配備Dolby® Atmos™ 杜比®全景聲音響系統‧環境音場震撼清晰、無與倫比，感受全新立體音感。 尊爵席配備舒適寬敞的人體工學沙發座椅，可調整為橫躺的舒適設計，貼心尊榮的禮賓服務，讓看電影不僅是單純的娛樂，更昇華為享受。`,
        }],
        [{
            img: webp[4].default,
            title: `MAJOR CONSTRUCTION`,
            para1: `捷運A9站環球購物中心`,
            para2: `位於機場捷運林口站，於2017年第二季進駐成為全台第五間車站型據點，同樣擁有與捷運相連的地利之便，並串聯週邊新興商圈與住商大樓，Global Mall 林口A9將成為顧客每日生活中便利友善的最佳補給站。`,

        }],
        [{
            img: webp[8].default,
            title: `MAJOR CONSTRUCTION`,
            para1: `三井OUTLET`,
            para2: `位在新北市林口區的三井OUTLET PARK，是一座以悠閒渡假風格的「SOUTHERN TREASURE FOREST」概念打造，是北臺灣最大規模的複合式購物休閒設施，遊客旅遊購物休閒的最佳選擇。嚴選人氣美食進駐，款待饕客們的挑剔味蕾，同時設施內設有威秀影城、誠品生活、JASONS超市等等。是多元完整的複合設施規劃，購物、美食、娛樂與生活一次到位，心滿意足。`,

        }, {
            img: webp[5].default,
            title: `MAJOR CONSTRUCTION`,
            para1: `三井OUTLET-威秀影城`,
            para2: `林口MITSUI OUTLET PARK威秀影城，為威秀影城以開創性概念打造的全新據點。為了給影迷最佳觀影體驗，本據點將採取全4K影廳規格，讓影像投影畫質大幅提升，並透過優化程度使影像達到最清晰、栩栩如生效果。`,
        },
        ],
        [{
            img: webp[6].default,
            title: `MAJOR CONSTRUCTION`,
            para1: `三井Outlet二期`,
            para2: `林口三井Outlet是日商三井不動產集團在台商業設施開發首案，一期已有220 間店鋪，二期工程完工後總店鋪將達 310 間，同時強化數位科技導入館內的娛樂、健身等服務，成為北台灣最大規模的購物商城。 `,
            expect: "預計2024年完工開幕"
        }],
        [{
            img: webp[7].default,
            title: `MAJOR CONSTRUCTION`,
            para1: `東森媒體總部`,
            para2: `林口第一新地標！2.16公頃基地規劃地下4層、地上38層樓企業營運總部及6層樓的文創生活與多功能展演中心，並與晶華國際酒店共同成立「Silks X 晶英薈旅」，創造影視娛樂產業生活圈，國際媒體嶄新的示範場域。`,
            expect: "東森集團營運總部預計2025年開幕\n商務旅館預計於2026年開幕"
        }]
    ]
    const [slide, setSlide] = useState(0)


    const wrapperStyle = {
        display: "flex",
        width: "100%",
        height: "100%",
        position: "absolute",
        left: "0",
        top: "0",
        transistion: "0.3s",
        backgroundColor: "#f7f7f7"
    }
    const arrowStyle = {
        position: "absolute",
        top: 0,
        bottom: 0,
        margin: "auto 0",
        cursor: "pointer",
        height: "fit-content"
    }
    return (
        <div className="anchor">
            {
                para.map((item, i) => {
                    return (

                        <div className={`anchor-spot anchor-spot${i + 1}`}>
                            <FancyBox>
                                {item.map((itemInner, i) => {
                                    if (item.length >= 2) {
                                        return (
                                            <div className="wrap" key={i} style={{ ...wrapperStyle, opacity: slide == i ? 1 : 0 }}>
                                                <BasicContent para={itemInner} />
                                            </div>
                                        )
                                    } else {
                                        return (
                                            <div className="wrap" key={i} style={{ ...wrapperStyle }}>
                                                <BasicContent para={itemInner} />
                                            </div>
                                        )
                                    }


                                })}

                                {item.length >= 2 && <>
                                    <div className="prev" onClick={(e) => {
                                        e.stopPropagation()
                                        let newIndex = slide
                                        if (newIndex == 0) {
                                            return
                                        }
                                        setSlide(--newIndex)
                                    }} style={{ ...arrowStyle, left: "3vw", pointerEvents: "auto" }}>
                                        <img src={require("../../../img/team/design/svg/015-arrow-left.svg").default} style={{ width: "1.5vw", height: "1.5vw" }} />
                                    </div>
                                    <div className="next" onClick={(e) => {
                                        e.stopPropagation();
                                        let newIndex = slide
                                        if (newIndex == item.length - 1) {
                                            return
                                        }
                                        setSlide(++newIndex)
                                    }} style={{ ...arrowStyle, right: "3vw", pointerEvents: "auto" }}>
                                        <img src={require("../../../img/team/design/svg/014-arrow-right.svg").default} style={{ width: "1.5vw", height: "1.5vw", pointerEvents: "none" }} />
                                    </div>
                                </>}
                            </FancyBox>
                        </div>
                    )

                })
            }
        </div>
    )
}


