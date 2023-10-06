import React from 'react'
import { useState, useRef, useCallback, useEffect } from 'react';
export default function ScaleDrag({ children, maxRatio = 1, zoomImg1, zoomImg2, init = { x: 0, y: 0 } }) {
    //托拽縮放
    const [scaleRatio, setScaleRatio] = useState(1);
    const [x, setX] = useState(maxRatio == 1 ? init.x : 0);
    const [y, setY] = useState(maxRatio == 1 ? init.y : 0);
    const [flag, setFlag] = useState(false);
    //-- 點擊開始的定位 --
    const [ startXY, setStartXY ] = useState({x:0, y:0});
    const [ deltaXY, setDeltaXY ] = useState({x:0, y:0});
    const [press, setPress] = useState({ x: 0, y: 0 });

    //-- 放大地圖寬高 --
    const [mapRect, setMapRect] =useState({width: 0,height: 0});

    //-- 地圖可視範圍寬高 --
    const [boxRect, setBoxRect] =useState({width: 0,height: 0});

    const dragTarget = useRef(null);
    const imgBox = useRef(null);

    // const [touchMoveActive, setTouchMoveActive]=useState(false);
    //anchor dot


    //-- 放大 --
    const zoomIn = (e) => {
        e.stopPropagation()
        e.preventDefault()

        requestAnimationFrame(() => {
            setScaleRatio(maxRatio);
            setX(init.x);
            setY(init.y);
        });

    }

    //-- 縮小 --
    const zoomOut = (e) => {
        e.stopPropagation()
        e.preventDefault()
        setScaleRatio(1);
        setX(0);
        setY(0);
    }

    //-- 滑鼠拖曳(放大) --
    const onMouseMove = useCallback((e) => {
        e.preventDefault();

        const maxHorizontal=(mapRect.width-boxRect.width)/2;
        const maxVertical=(mapRect.height-boxRect.height)/2;

        if ((flag && scaleRatio == maxRatio)) {
            requestAnimationFrame(() => {

                if (Math.abs(deltaXY.x) > Math.abs(deltaXY.y)) {
                    // 水平拖曳
                    if (deltaXY.x > 0) {
                      //-- 向右拖曳 --
                      if(x<=maxHorizontal){
                        setX(e.pageX - (press.x));
                        setY(e.pageY - (press.y));
                      }
                    } else {
                      //-- 向左拖曳 --
                      if(x>=(-maxHorizontal)){
                        setX(e.pageX - (press.x));
                        setY(e.pageY - (press.y));
                      }
                    }
                } else {
                    // 垂直拖曳
                    if (deltaXY.y > 0) {
                      //-- 向下拖曳 --
                      if(y<=maxVertical){
                        setX(e.pageX - (press.x));
                        setY(e.pageY - (press.y));
                      }
                    } else {
                      //-- 向上拖曳 --
                      if(y>=(-maxVertical)){
                        setX(e.pageX - (press.x));
                        setY(e.pageY - (press.y));
                      }
                    }
                }

                setDeltaXY({
                    x:e.clientX - startXY.x,
                    y:e.clientY - startXY.y
                });
            });
        }

    }, [flag, scaleRatio, maxRatio, press, deltaXY]);

    //-- 滑鼠點下(放大) --
    const onMouseDown = (e) => {
        setFlag(true);
        setPress({
            x: e.pageX - dragTarget.current.offsetLeft,
            y: e.pageY - dragTarget.current.offsetTop
        });

        setStartXY({
            x:e.clientX,
            y:e.clientY
        });

        setMapRect({
            width: dragTarget.current.getBoundingClientRect().width,
            height: dragTarget.current.getBoundingClientRect().height
        });

        setBoxRect({
            width: imgBox.current.getBoundingClientRect().width,
            height: imgBox.current.getBoundingClientRect().height
        });
    }
    //-- 滑鼠放開(放大) --
    const onMouseUp = (e) => {
        setFlag(false)
    }


    //-- 手機觸控事件 --
    //-- 觸控點下(放大) --
    const onTouchStart = (e) => {
        setFlag(true);
        setPress({
            x: e.touches[0].pageX - dragTarget.current.offsetLeft,
            y: e.touches[0].pageY - dragTarget.current.offsetTop
        });

        setStartXY({
            x:e.touches[0].clientX,
            y:e.touches[0].clientY
        });

        setMapRect({
            width: dragTarget.current.getBoundingClientRect().width,
            height: dragTarget.current.getBoundingClientRect().height
        });

        setBoxRect({
            width: imgBox.current.getBoundingClientRect().width,
            height: imgBox.current.getBoundingClientRect().height
        });

        // console.log(`X:${e.touches[0].pageX} Y:${e.touches[0].pageY}`);
    }
    //-- 觸控拖曳(放大) --
    const onTouchMove = useCallback((e) => {
        //e.preventDefault();
        
        const maxHorizontal=(mapRect.width-boxRect.width)/2;
        const maxVertical=(mapRect.height-boxRect.height)/2;

        if ((flag && scaleRatio == maxRatio)) {
            requestAnimationFrame(() => {

                if (Math.abs(deltaXY.x) > Math.abs(deltaXY.y)) {
                    // 水平拖曳
                    if (deltaXY.x > 0) {
                      //-- 向右拖曳 --
                      if(x<=maxHorizontal){
                        setX(e.touches[0].pageX - (press.x));
                        setY(e.touches[0].pageY - (press.y));
                      }
                    } else {
                      //-- 向左拖曳 --
                      if(x>=(-maxHorizontal)){
                        setX(e.touches[0].pageX - (press.x));
                        setY(e.touches[0].pageY - (press.y));
                      }
                    }
                } else {
                    // 垂直拖曳
                    if (deltaXY.y > 0) {
                      //-- 向下拖曳 --
                      if(y<=maxVertical){
                        setX(e.touches[0].pageX - (press.x));
                        setY(e.touches[0].pageY - (press.y));
                      }
                    } else {
                      //-- 向上拖曳 --
                      if(y>=(-maxVertical)){
                        setX(e.touches[0].pageX - (press.x));
                        setY(e.touches[0].pageY - (press.y));
                      }
                    }
                }

                setDeltaXY({
                    x:e.touches[0].clientX - startXY.x,
                    y:e.touches[0].clientY - startXY.y
                });
            });
        }

    }, [flag, scaleRatio, maxRatio, press, deltaXY]);
    //-- 觸控放開(放大) --
    const onTouchEnd = (e) => {
        setFlag(false)
    }


    const imgBoxStyle = {
        position: "relative",
        overflow: "hidden",
        pointerEvents: scaleRatio == 1 ? "none" : "auto",
    }
    const boxStyle = {
        position: "relative",
        width: "100%",
        height: "100%",
        transform: `scale(${scaleRatio}) `,
        left: `${x}px`,
        top: `${y}px`,
        transition: flag ? "0s" : " 0.6s",
        touchAction: 'none'
    }
    const zoomImgStyle = {
        width: "3vw",
        margin: "0.25vw 0",
        cursor: "pointer",
        pointerEvents: "auto",
    }
    return (
        <>
            <div className="imgBox" ref={imgBox} onClick={(e) => {
                e.stopPropagation()
            }} onMouseDown={onMouseDown} style={imgBoxStyle}
                onMouseMove={onMouseMove}
                onMouseUp={onMouseUp}
                onMouseLeave={onMouseUp}
                onTouchStart={onTouchStart}
                onTouchMove={onTouchMove}
                onTouchEnd={onTouchEnd}
                >
                <div className="box"
                    ref={dragTarget}
                    style={boxStyle}>
                    {children}
                </div>
            </div>
            <div className="zoom" style={{ display: maxRatio == 1 ? "none" : "flex", pointerEvents: "auto", padding: "0.6vw" }}>
                <img src={zoomImg1} onClick={zoomIn} style={{ ...zoomImgStyle, filter: scaleRatio == maxRatio ? "brightness(0.8) grayscale(100%)" : "none" }} />
                <img src={zoomImg2} onClick={zoomOut} style={{ ...zoomImgStyle, filter: scaleRatio == 1 ? "brightness(0.8) grayscale(100%)" : "none" }} />
            </div>
        </>


    )
}
