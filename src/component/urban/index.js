import React, { useLayoutEffect, useRef, useState, useEffect } from 'react'
import gsap from 'gsap';
import FancyBox from '../config/fancyBox';
import BasicContent from '../config/basicContent';
import ScaleDrag from '../config/scaleDrag';
import Glow from '../config/glow';
import Arrow from '../config/arrow';
const requireindexSvg = require.context("../../../img/index/svg", false, /^\.\/.*\.svg$/);
const indexSvg = requireindexSvg.keys().map(requireindexSvg);
const requireSvg = require.context("../../../img/urban/svg", false, /^\.\/.*\.svg$/);
const svg = requireSvg.keys().map(requireSvg);
const requireWebp = require.context("../../../img/urban/webp", false, /^\.\/.*\.webp$/);
const webp = requireWebp.keys().map(requireWebp);


export default function Urban() {
    const [showDot, setShowDot] = useState(false)
    const animateRef = useRef(null);
    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            let gg = gsap.timeline()
            gg.from(".urban-left", {
                opacity: 0,
                y: 30,
                duration: 1.4
            }).from(".urban-right .title-box", {
                opacity: 0,
                x: 35,
                duration: 1
            }, "<+0.3").from(".urban-right .paraBox", {
                opacity: 0,
                x: 35,
                duration: 1
            }, "<+0.5").from(".urban-right .nav li", {
                opacity: 0,
                y: 35,
                duration: 1
            }, "<+0.5").from(".urban-right li > :nth-child(2)", {
                color: "#66666600",
                marginLeft: "40px",
                duration: 0.8,
                stagger: 0.3
            }, "<+0.5")
        }, [animateRef])
        return () => ctx.revert()
    }, [])

    return (
        <section className='urban' ref={animateRef}>
            <div className="urban-left">
                <UrbanBg showDot={showDot} />
            </div>
            <div className="urban-right">
                <UrbanPara showDot={showDot} setShowDot={setShowDot} />
            </div>

        </section>
    )
}

function UrbanBg({ showDot }) {
    return (
        <div className="urban-bg">
            <ScaleDrag zoomImg1={svg[1]} zoomImg2={svg[2]} maxRatio={1.5} init={{ x: "30vw", y: "-8vw" }}>
                <img src={svg[0].default} />
                <AnchorDotTransportation showDot={showDot} />
                <AnchorDotConstruction showDot={showDot} />
                <AnchorDotNationSchool showDot={showDot} />
                <AnchorDotQualitySchool showDot={showDot} />
                <AnchorDotEnvironment showDot={showDot} />
                <Glow number={15} color={"#fff"} />

            </ScaleDrag>

        </div>
    )
}

function UrbanPara({ showDot, setShowDot }) {

    return (
        <div className="urban-para">
            <div className="title-box" >
                <img src={indexSvg[3]} />
                <h3>URBAN<br />PLANNING</h3>
            </div>
            <div className="paraBox">
                <p>【CLASSY HOME】位於林口繁華核心、科技智慧的結合，可望吸引逾千家潛力企業進駐，產業群聚效應將帶來更多廠商進駐與就業機會，衍生大量商辦與住宅需求，且校園比鄰、國際學城聚落。</p>
            </div>
            <SectionNav setShowDot={setShowDot} showDot={showDot} />
        </div>
    )
}


function SectionNav({ showDot, setShowDot }) {
    let team = [{
        id: 1,
        ch: "大眾運輸系統",
        en: "EXPRESS TRANSPORTATION",
        name: "transportation"
    }, {
        id: 2,
        ch: "重大建設",
        en: "MAJOR CONSTRUCTION",
        name: "construction"
    }, {
        id: 3,
        ch: "國際學校",
        en: "INTERNATIONAL SCHOOL",
        name: "nationSchool"
    }, {
        id: 4,
        ch: "優質學校",
        en: "QUALITY SCHOOL",
        name: "qualitySchool"
    }, {
        id: 5,
        ch: "周邊環境",
        en: "SURROUNDING ENVIRONMENT",
        name: "environment"
    },]

    return (
        <div className="section-nav">
            <ul className="nav">
                {team.map((item, i) => {
                    return <li
                        key={item.id}
                        onClick={() => setShowDot(item.name)}
                    >
                        <p style={{ color: showDot == item.name ? "#c2a357" : "#666666" }}>{item.ch}</p>
                        <p style={{ color: showDot == item.name ? "#c2a357" : "#666666" }}>{item.en}</p>
                    </li>
                })}
            </ul>
        </div>
    )
}

function AnchorDotTransportation({ showDot }) {
    const [scale, setScale] = useState(1);
    const zoomIn = () => {
        setScale(1.5);
    }
    const zoomOut = () => {
        setScale(1);
    }
    const para = [{
        img: webp[13].default,
        title: `EXPRESS TRANSPORTATION`,
        para1: `台北雙子星`,
        para2: `2022年11月正式開工，預估可提供1.6萬個就業機會、每年創造千億元以上經濟產值，預計2027年完工。規劃有新型態全客群購物中心、高端奢華星級飯店、智慧科技打造超A級商辦、360天際線觀景台、城市美術展覽館及低層裙樓的市民新生活場域，包含公益客廳與交六、交八廣場，共計6大亮點。`
    }, {
        img: webp[14].default,
        title: `EXPRESS TRANSPORTATION`,
        para1: `CITYLINK商場`,
        para2: `捷運三重站共構百貨商場為新北第一座CITYLINK，預計2024年完工，地上1~2層，面積約1,974坪，潮牌服飾、時尚精品、異國料理美食，就近享受國際好品味。\n複製南港站模式，導入連鎖商店與蔦屋書店。`,
        nav: {
            navText: ["CITYLINK商場", "新北都會公園"],
            img: webp[15].default,
            title: `EXPRESS TRANSPORTATION`,
            para1: `新北都會公園`,
            para2: `全臺灣最大河濱公園424公頃的「大臺北都會公園」（約16個大安森林公園面積）`,
        }
    }, {
        img: webp[16].default,
        title: `EXPRESS TRANSPORTATION`,
        para1: `新莊北側知識產業園區`,
        para2: `新北市政府積極招商，企業總部林立，預計提供超過近10000個工作機會。而此區除了聚集金融、新創外，還包含先鋒科技、貝斯美德、科定企業、台通光電等，而知名時尚精品夏姿時尚營運總部也將座落於此，除為園區產業注入文創元素外，也將創造更多當地就業機會。\n捷運新北產業園區站招商，打造7000坪共構大樓，可興建地上16層、地下3層商辦大樓。開發完成後，預計將可增加約400餘個就業機會。`,
        style: "opposite"
    }, {
        img: webp[17].default,
        title: `EXPRESS TRANSPORTATION`,
        para1: `郵政物流園區`,
        para2: `佔地17.14公頃，規劃興建郵政物流中心、北台灣郵件作業中心、郵政資訊中心、郵政訓練中心及工商服務中心等5棟建物。\n各項重要工程於2018年6月陸續開工將興建大賣場、旅館等設施，創造6000個就業機會，也能帶動週邊產業發展，郵政物流中心預估於110年底完工、郵政資訊中心預估於111年8月完工、北台灣郵件作業中心及訓練中心預估於113年6月完工、工商服務中心於去年12月31日公告招商，順利決標後預定於113年底完工。全區預計114年啟用營運。`,

    }, {
        img: webp[18].default,
        title: `EXPRESS TRANSPORTATION`,
        para1: `桃園航空城`,
        para2: `四十年來最大國家建設計畫，投資總額超過5000億，特定區:4564.32公頃、區段徵收開發面積:3151公頃，預計增加30 萬個就業機會。`,

    },]
    const linKouPara = [{
        img: webp[19].default,
        title: `EXPRESS TRANSPORTATION`,
        para1: `林口轉運站`,
        para2: `新北市交通局為了因應當地居民和未來媒體園區的需求，特別興建了一座占地8,800平方公尺的公車轉運站，站內提供9席公車站區和16席電動公車駐車區，成為林口地區的大眾運輸轉運中心，也是當地居民和未來媒體園區的重要交通樞紐。\n此外，在林口轉運站之外，還有桃園長庚轉運站，這座公車轉運站將引領城市嶄新面貌的到來，打造更便捷、綠色、舒適的城市交通環境。`,
    }, {
        img: webp[49].default,
        title: `EXPRESS TRANSPORTATION`,
        para1: `桃園林口轉運站`,
        para2: `B1&2-5F為停車空間，並設置聯外通道直達長庚醫院。1F為轉運站＆國際會議中心，另外回饋市府605坪空間作為青創基地及長庚圖書分館。`,
        expect: "已於2022年12月開始啟用"
    }]
    const interChangePara = {
        img: webp[20].default,
        title: `EXPRESS TRANSPORTATION`,
        para1: `國道1號林口交流道改善工程`,
        para2: `距離台北市區20公里，經國道1號，約25分鐘抵達台北市區。目前雙交流道，但因應林口區人口急速成長，將針對國道1號林口交流道，進行改善工程，預計2027年完工通車。`,
    }
    const [slide, setSlide] = useState(0);
    const wrapperStyle = {
        width: "100%",
        height: "100%",
        position: "absolute",
        left: "0",
        top: "0",
        transistion: "0.3s",
        backgroundColor: "#f7f7f7"
    }

    return (
        <div className="transportation" style={{ opacity: showDot == "transportation" ? 1 : 0, pointerEvents: showDot == "transportation" ? "auto" : "none" }}>
            {[...Array(3)].map((item, i) => {
                if (i == 0) {
                    return (
                        <div className='dot' key={i}>
                            <FancyBox thumbUrl={svg[3].default} >
                                <div className="mrt">
                                    <div className="mrt-route">
                                        <img src={svg[4].default} />
                                        {para.map((item, i) => {

                                            return (

                                                <div key={i} className={`spot-anchor${i + 1}`}>
                                                    <FancyBox>
                                                        <BasicContent para={para[i]} />
                                                    </FancyBox>
                                                </div>
                                            )


                                        })}

                                    </div>
                                    <div className="mrt-map">
                                        <FancyBox text={"台北捷運圖"} >
                                            <div className="mrt">
                                                <div className="taipei-mrt-route">
                                                    <ScaleDrag maxRatio={2} zoomImg1={svg[1]} zoomImg2={svg[2]} >
                                                        <img src={webp[12].default} />
                                                    </ScaleDrag>

                                                </div>
                                            </div>

                                        </FancyBox>

                                    </div>
                                </div>

                            </FancyBox>
                        </div>
                    )
                } else if (i == 1) {
                    return (
                        <div className='dot' key={i}>
                            <FancyBox thumbUrl={svg[3].default} >
                                {linKouPara.map((item, i) => {
                                    return (
                                        <>
                                            <div className="wrap" key={i} style={{ ...wrapperStyle, opacity: slide == i ? 1 : 0 }}>
                                                <BasicContent para={item} />
                                            </div>
                                            <Arrow slide={slide} setSlide={setSlide} length={linKouPara.length} />
                                        </>
                                    )
                                })}

                            </FancyBox>
                        </div>
                    )
                } else {
                    return (
                        <div className='dot' key={i}>
                            <FancyBox thumbUrl={svg[3].default} >
                                <BasicContent para={interChangePara} />
                            </FancyBox>
                        </div>
                    )
                }

            }
            )}

        </div>
    )
}

function AnchorDotConstruction({ showDot }) {
    const para = [{
        img: null,
    }, {
        img: webp[9].default,
        title: `MAJOR CONSTRUCTION`,
        para1: `國家檔案館`,
        para2: `「建立國家級建設」為主軸，預計在 2024 年完工；規劃規模為地上10層、地下2層，樓地板面積約14,834坪，興建目的在滿足未來20年所需100公里典藏容量空間，並同步建置多元服務、技術研發等空間，提供開放應用及教育推廣等各項服務。`,
        expect: "預計2024年完工開幕，2025年對外開放"
    }, {
        img: webp[8].default,
        title: `MAJOR CONSTRUCTION`,
        para1: `林口新創園區`,
        para2: `為鼓勵臺灣新創接軌國際、促進國際新創交流，經濟部中小企業處將台北世界大學運動會選手村場域活化為林口新創園區。本聚落將提供新創辦公室、住宿空間、共同工作空間及展演空間等設施，並廣邀特色商店及國際級加速器和育成中心進駐，結合鄰近產業供應鏈及場域實證空間，期能成為國際新創來臺發展的最佳場域。`
    }, {
        img: webp[10].default,
        title: `MAJOR CONSTRUCTION`,
        para1: `105市道改善工程`,
        para2: `為滿足目標年交通量需求規劃雙向各2車道，工程起點為八里區長坑國小南側，工程終點為林口高爾夫球場，道路開闢長度為2.46公里，完工後將解決既有蜿蜒路線不符合大型車輛運轉軌跡之規範問題，提供安全舒適之行車環境，確保道路安全及提升整體區域路網。`,
        expect: "第一階段工程 全長2.13公里，預計2025年底完工\n第二階段工程 全長2.46公里，預計2028年底完工"
    }, {
        img: webp[11].default,
        title: `MAJOR CONSTRUCTION`,
        para1: `元智大學`,
        para2: `預計在2024年完工，佔地2.5公頃之文教用地成立「元智大學新北分部醫護學院」，結合產學研人才，搭配集團內的產業資源， 培育全人智慧醫療人才，以協助因應國家未來智慧醫療人力需求與智慧醫療之推廣。`,
        expect: "預計2024年完工"
    }]
    return (
        <div className="construction" style={{
            opacity: showDot == "construction" ? 1 : 0,
            pointerEvents: showDot == "construction" ? "auto" : "none"
        }}>
            {[...Array(5)].map((item, i) => {
                return (
                    <div className='dot' key={i}>
                        <FancyBox thumbUrl={svg[3].default} >
                            <BasicContent para={para[i]} />
                        </FancyBox>
                    </div>
                )
            })}
        </div>
    )
}

function AnchorDotNationSchool({ showDot }) {
    let images = [
        {
            id: 1,
            img: webp[0].default
        },
        {
            id: 2,
            img: webp[1].default
        },
        {
            id: 3,
            img: webp[2].default
        },
        {
            id: 4,
            img: webp[3].default
        },
        {
            id: 5,
            img: webp[4].default
        }, {
            id: 6,
            img: webp[5].default
        }
        , {
            id: 7,
            img: webp[6].default
        }, {
            id: 8,
            img: webp[21].default
        }, {
            id: 9,
            img: webp[22].default
        }, {
            id: 10,
            img: webp[23].default
        }
    ]
    const para = [{
        img: webp[39].default,
        title: `INTERNATIONAL SCHOOL`,
        para1: `小木屋蒙特梭利幼兒園`,
        para2: `本園採用開放式教學，以蒙特梭利教育為基礎，提供安全、溫馨的學習環境，協助幼兒建立自信、自主學習和社交技能。幼兒通過觀察、探索和實踐學習，接觸各種學習材料，提升理解力、好奇心和想像力。\n除了學術方面，園方也注重品德教育和社交技能培養，教導幼兒尊重他人、合作和分享，建立友誼和信任關係。
        `
    }, {
        img: webp[40].default,
        title: `INTERNATIONAL SCHOOL`,
        para1: `夏哲森幼兒園`,
        para2: `「君子務本，本立而道生」，一種相信教育本質與價值的服務。夏哲森幼兒園以「探究、尊重、愛」為理念，注重幼兒的自我發展和學習興趣，提供多元化的學習體驗，培養幼兒的觀察、探究、思考和創意表達能力。此外，強調家長參與和師生互動，建立教育夥伴關係，促進幼兒全人發展。
        `
    }, {
        img: webp[41].default,
        title: `INTERNATIONAL SCHOOL`,
        para1: `Annie’s School 奇異鳥幼兒園`,
        para2: `「奇異鳥美國學校」，創立於1987年，提供零歲至18歲完整嬰幼護理、托育及教育服務。以國際化前瞻為學童引進美國百年卡爾維特小學 (Calvert School) 課程，都是以英文學習。並透過海內外升學輔導機構，協助家長培育具國際觀的下一代。`
    }, {
        img: webp[42].default,
        title: `INTERNATIONAL SCHOOL`,
        para1: `夏恩國際幼兒園`,
        para2: `夏恩國際幼兒園是一所國際化的幼兒園，提供2至6歲的孩童教育。學校以培養孩子的多元智能和英語能力為目標，並結合學科主題與創意表達，讓孩子們在快樂中學習。夏恩國際幼兒園也重視孩子的情緒與品德教育，透過正向心理學的理念，幫助孩子發展自信心和社交能力。此外，學校的教學團隊均具有國際化背景與專業知識，能提供孩子良好的英語環境與全方位的照顧。`
    }, {
        img: webp[43].default,
        title: `INTERNATIONAL SCHOOL`,
        para1: `馬禮遜美國國際學校（伯大尼）`,
        para2: `目前已經獲得ASCI(基督學校機構)、 WASC(美國西部學院認證協會) 兩所國際知名評鑑機構的認證。申請的條件就是必須持有外籍護照，並且有台灣的居留簽證(僑民身份)。`
    }, {
        img: webp[44].default,
        title: `INTERNATIONAL SCHOOL`,
        para1: `康橋國際學校`,
        para2: `從幼稚園到高中的私立學校，目前有7個校區，不需持有外國護照即可申請，入學皆以直升為主。宗旨為培養學⽣的國際競爭力，除了英語能⼒外也強調藝術和體育。`
    }, {
        img: webp[45].default,
        title: `INTERNATIONAL SCHOOL`,
        para1: `楓葉國際實驗學校`,
        para2: `台版的加拿大國際學校，將有國中與高中，實驗課程是與國立臺灣師範大學合作設計，並且融入加拿大英屬哥倫比亞省課程， 期待提供給台灣的孩子全新的學習體驗。`
    }, {
        img: webp[46].default,
        title: `INTERNATIONAL SCHOOL`,
        para1: `LUYA Academy 奇異鳥國小部`,
        para2: `由奇異鳥集團百分之百支持辦學，提供國際觀、品德力、學習力與創新力全方位教育核心課程，創立於1987年，提供零歲至18歲完整嬰幼護理、托育及教育服務。以國際化前瞻為學童引進美國百年卡爾維特小學 (Calvert School) 課程。`
    }, {
        img: webp[47].default,
        title: `INTERNATIONAL SCHOOL`,
        para1: `AAIA 新北美國學校`,
        para2: `在2016年首度招生，課程採美國加州學制。學生必須持有美國護照方可申請和天母美國學校（TAS）一樣，是經美國在台協會（AIT）核准，申請時學生需進行英語測驗。`
    }, {
        img: webp[48].default,
        title: `INTERNATIONAL SCHOOL`,
        para1: `翰科實驗小學`,
        para2: `學校以STEAM教學法為主，結合科技、藝術和人文等領域，提供學生全方位的學習體驗，注重學生的多元發展，提供豐富的課外活動，培養學生的創造力、國際觀和社會責任感。學校致力於培養學生的批判思考、創意表達和實踐力，讓學生成為未來的領袖和世界公民。`
    }]
    return (
        <div className="nationSchool" style={{ opacity: showDot == "nationSchool" ? 1 : 0, pointerEvents: showDot == "nationSchool" ? "auto" : "none" }}>
            {images.map((item, i) => <div className='dot' key={i}>
                <FancyBox thumbUrl={svg[3].default} >
                    <BasicContent para={para[i]} />
                </FancyBox>
                <div className='imgBox'>
                    {item.img ? <img src={item.img} /> : null}
                </div>
            </div>)}
        </div>
    )
}

function AnchorDotQualitySchool({ showDot }) {
    let images = [
        {
            id: 1,
            img: webp[24].default
        },
        {
            id: 2,
            img: webp[25].default
        },
        {
            id: 3,
            img: webp[26].default
        },
        {
            id: 4,
            img: webp[27].default
        },
        {
            id: 5,
            img: webp[28].default
        }, {
            id: 6,
            img: webp[29].default
        }
        , {
            id: 7,
            img: webp[30].default
        }
    ]
    return (
        <div className="qualitySchool" style={{ opacity: showDot == "qualitySchool" ? 1 : 0, pointerEvents: showDot == "qualitySchool" ? "auto" : "none" }}>
            {
                images.map((item, i) => <div className='dot' key={i}>
                    <img src={svg[3].default} />
                    <div className='imgBox'>
                        {item.img ? <img src={item.img} /> : null}
                    </div>
                </div>)
            }
        </div>
    )
}

function AnchorDotEnvironment({ showDot }) {
    let images = [
        {
            id: 1,
            img: webp[31].default
        },
        {
            id: 2,
            img: webp[32].default
        },
        {
            id: 3,
            img: webp[33].default
        },
        {
            id: 4,
            img: webp[34].default
        },
        {
            id: 5,
            img: webp[35].default
        }, {
            id: 6,
            img: webp[36].default
        }
        , {
            id: 7,
            img: webp[37].default
        }
        , {
            id: 8,
            img: webp[38].default
        }
    ]
    return (
        <div className="environment" style={{ opacity: showDot == "environment" ? 1 : 0, pointerEvents: showDot == "environment" ? "auto" : "none" }}>
            {
                images.map((item, i) => <div className='dot' key={i}>
                    <img src={svg[3].default} />
                    <div className='imgBox'>
                        {item.img ? <img src={item.img} /> : null}
                    </div>
                </div>)
            }
        </div>
    )
} 