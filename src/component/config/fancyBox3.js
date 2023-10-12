import React, { useEffect, useState, useRef } from "react";
import ReactDOM from "react-dom";
import { gsap } from 'gsap';

/**
 * 特殊建材用FancyBox
 * @param {string} thumbUrl-按鈕圖片URL 
 * @param {string} text-按鈕文字 
 * @param {string} width-視窗寬度
 * @param {string} box1Type-banner類別 圖、影片
 * @param {string} children-DOM 
 * @returns 按鈕+視窗DOM
 */
export default function FancyBox({ thumbUrl, text, width = "70%", box1Type='image', children }) {
  const [open, setOpen] = useState(false);
  const thumbBox= useRef(null);

  const imgStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
  };

  return (
    <>
      <div
        className="thumbBox"
        ref={thumbBox}
        style={{ pointerEvents: "auto", cursor: "pointer" }}
        onClick={(e) => {
          e.stopPropagation();
          setOpen(true);
        }}
      >

        {thumbUrl ? (
          <img src={thumbUrl} style={imgStyle} />
        ) : text ? (
          <p>{text}</p>
        ) : null}

      </div>

      {open ? (
        <Modal
          open={open}
          setOpen={setOpen}
          width={width}
          thumbBox={thumbBox}
          box1Type={box1Type}
          children={children}
        />
      ) : null}
    </>
  );
}



/**
 * 彈出視窗
 * @param {boolean} setOpen-開關視窗判斷 
 * @param {string} width-視窗寬度 
 * @param {string} box1Type-banner類別(圖、影片)
 * @param {string} children-DOM 
 * @returns 視窗DOM
 */
function Modal({ setOpen, width, children }) {

  const [trans, setTrans] = useState(true);

  const fancyBoxStyle = {
    position: "fixed",
    left: 0,
    top: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    pointerEvents: trans ? "auto" : "none",
    backgroundColor: "#f7f7f7",
    zIndex: 21,
  };

  const thumbBoxStyle={
    position: 'absolute',
    zIndex: 1,
    pointerEvents:'none'
  }


  useEffect(() => {

    let gg=gsap.timeline();
    //-- 開視窗動態 --
    if(trans){

      gg.from(".fancyBox", { opacity:0, duration: 0.5})
        .from(".fancyBox .content_box", {x:'100%', duration: 0.8}, '<+=0.2')
        .from(".fancyBox .content_box .close_btn", {x:'7vw', duration: 0.3}, '>-=0.1');
    }
    //-- 關視窗動態 --
    else{
      gg.to(".fancyBox .content_box .close_btn", {x:'7vw', duration: 0.3})
        .to(".fancyBox .content_box", {x:'100%', duration: 0.5}, '<')
        .to(".fancyBox", { opacity:0, duration: 0.3});
    }
        
  }, [trans]);


  return ReactDOM.createPortal(
    <div className="fancyBox sp2" style={fancyBoxStyle}>
      <div className="thumbBox_content"  style={thumbBoxStyle}>
        
      </div>
      <div className="content_box" style={{ width: width }}>
        <button
          className="close_btn"
          onClick={() => {
            setTrans(false);
            setTimeout(() => {
              setOpen(false);
            }, 1000);
          }}
        >
          <img src={require("@/img/config/close_icon.svg").default} />
        </button>
        {children}
      </div>
    </div>,
    document.body
  );
}
