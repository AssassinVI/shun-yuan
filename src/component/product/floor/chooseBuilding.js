import React, { useState, useCallback } from 'react'
import { Link } from 'react-router-dom';


const requireSvg = require.context("../../../../img/product/floor/chooseBuilding/svg", false, /^\.\/.*\.svg$/);
const svg = requireSvg.keys().map(requireSvg);

const requireWebp = require.context("../../../../img/product/floor/chooseBuilding/webp", false, /^\.\/.*\.webp$/);
const webp = requireWebp.keys().map(requireWebp);


export default function ChooseBuilding() {
    return (
        <section className='chooseBuilding'>
            <RotatingBox />

        </section>
    )
}



function RotatingBox() {
    const [type, setType] = useState(1)
    const [disableAnchor, setDisableAnchor] = useState(true)
    const data = [{
        type: 1,
        img: webp[0].default,
        anchor: {
            left: "A",
            right: "B"
        },
        svg: svg[0].default
    }, {
        type: 2,
        img: webp[1].default,
        anchor: {
            left: "B",
            right: "C"
        },
        svg: svg[1].default
    }, {
        type: 3,
        img: webp[2].default,
        anchor: {
            left: "C",
            right: "A"
        },
        svg: svg[2].default
    }, {
        type: 4,
        img: webp[3].default,
        anchor: {
            left: "C",
            right: "A"
        },
        svg: svg[3].default
    }]
    function throttle(func, delay) {
        let inThrottle = false;
        let timeout = null;
        return function (...args) {
            const context = this;
            if (!inThrottle) {
                inThrottle = true;
                func.apply(context, args);
                timeout = setTimeout(function () {
                    inThrottle = false;
                }, delay);
            }
        };
    }

    function handleClickWrapper(direction) {
        return function () {
            let preType = type;
            if (direction === "next") {
                if (preType < data.length) {
                    setType(++preType);
                } else {
                    setType(1);
                }
            } else if (direction === "prev") {
                if (preType > 1) {
                    setType(--preType);
                } else {
                    setType(data.length);
                }
            }
        };
    }

    const nextFunc = useCallback(throttle(handleClickWrapper("next"), 1000));
    const prevFunc = useCallback(throttle(handleClickWrapper("prev"), 1000));
    return (
        <>
            <div className="rotatingBox">

                {data.map((item, i) => {
                    let buildingStyle = {
                        opacity: type == item.type && 1,
                        zIndex: type == item.type && 3,
                        transition: type == item.type + 1 && " opacity 0.6s, transform 1.2s",
                        transform: type == item.type + 1 ? "rotateY(75deg) translateX(-80%)" : type == item.type - 1 && "rotateY(-75deg) translateX(90%)",

                    }
                    if (i == 0) {
                        buildingStyle = {
                            ...buildingStyle,
                            transform: type == item.type + 1 ? "rotateY(75deg) translateX(-80%)" : type == item.type - 1 ? "rotateY(-75deg) translateX(90%)" : type == data.length && "rotateY(-75deg) translateX(90%)"
                        }
                    } else if (i == data.length - 1) {
                        buildingStyle = {
                            ...buildingStyle,
                            transform: type == item.type + 1 ? "rotateY(75deg) translateX(-80%)" : type == item.type - 1 ? "rotateY(-75deg) translateX(90%)" : type == 1 && "rotateY(75deg) translateX(-80%)"
                        }
                    }


                    return (
                        <div key={item.type} className="imgBox" style={{ ...buildingStyle }}>
                            <img src={item.img} />
                            <div className="left">
                                <Link onClick={() => setDisableAnchor(false)} style={{ position: "absolute", width: "100%", height: "100%", left: 0, top: 0, pointerEvents: disableAnchor ? "auto" : "none" }} to={`/product/floor/choosefloor?building=${item.anchor.left}`} />
                            </div>
                            <div className="right">
                                <Link onClick={() => setDisableAnchor(false)} style={{ position: "absolute", width: "100%", height: "100%", left: 0, top: 0, pointerEvents: disableAnchor ? "auto" : "none" }} to={`/product/floor/choosefloor?building=${item.anchor.right}`} />
                            </div>
                        </div>
                    )
                })}


            </div>
            <div className="right">
                <div className="imgBox" >
                    {data.map((item) => {
                        return (
                            <img key={item.type} src={item.svg} style={{ opacity: type == item.type && 1, }} />
                        )

                    })}
                </div>
                <div className="nav-btn">
                    <div className="left" onClick={prevFunc}>
                        <img src={require("../../../../img/product/planet/svg/001-arrow.svg").default} />
                    </div>
                    <div className="right" onClick={nextFunc}>
                        <img src={require("../../../../img/product/planet/svg/001-arrow.svg").default} />
                    </div>
                </div>
            </div>

        </>

    )
}