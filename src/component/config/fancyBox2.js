import React, { useEffect, useState, useRef } from "react";
import ReactDOM from "react-dom";
import { gsap } from 'gsap';

/**
 * 特殊建材用FancyBox
 * @param {string} thumbUrl-按鈕圖片URL 
 * @param {string} text-按鈕文字 
 * @param {string} width-視窗寬度
 * @param {string} box1Url-banner圖URL，如果null同thumbUrl
 * @param {string} box1Type-banner類別 圖、影片
 * @param {string} children-DOM 
 * @returns 按鈕+視窗DOM
 */
export default function FancyBox({ thumbUrl, text, width = "70%", box1Url=null, box1Type='image', children }) {
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
          box1Url={box1Url==null ? thumbUrl:box1Url}
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
 * @param {string} box1Url-banner圖URL
 * @param {string} box1Type-banner類別(圖、影片)
 * @param {string} children-DOM 
 * @returns 視窗DOM
 */
function Modal({ setOpen, width, thumbBox, box1Url, box1Type, children }) {

  const [trans, setTrans] = useState(true);
  const thumbBox_content=useRef(null);
  const box1_content=useRef(null);

  const fancyBoxStyle = {
    position: "fixed",
    left: 0,
    top: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    pointerEvents: "auto",
    opacity:0,
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
    
    //-- 獲取按鈕寬高+定位 --
    const thumbBoxRect=thumbBox.current.getBoundingClientRect();
    thumbBox_content.current.innerHTML =thumbBox.current.innerHTML;
    
    //-- 獲取box1寬高+定位 --
    const box1Rect=box1_content.current.getBoundingClientRect();


    let gg=gsap.timeline();
    //-- 開視窗動態 --
    if(trans){
      thumbBox_content.current.style.width=`${thumbBoxRect.width}px`;
      thumbBox_content.current.style.height=`${thumbBoxRect.height}px`;
      thumbBox_content.current.style.left=`${thumbBoxRect.left}px`;
      thumbBox_content.current.style.top=`${thumbBoxRect.top}px`;

      gg.to(".fancyBox", { opacity:1, duration: 0.5})
        .to(".fancyBox .thumbBox_content", 
        { width: box1Rect.width, 
          height: box1Rect.height, 
          left: box1Rect.left, 
          top: box1Rect.top, 
          duration: 0.8
        }, '>-=0.2')
        .to(".fancyBox .content_box", {opacity:1, duration: 0.5}, '>-=0.1')
        .from(".fancyBox .content_box .close_btn", {x:'-7vw', duration: 0.3}, '<+=0.1')
        .to(".fancyBox .thumbBox_content", {opacity:0, duration: 0.1});
    }
    //-- 關視窗動態 --
    else{
      gg.to(".fancyBox .thumbBox_content", {opacity:1, duration: 0.1})
        .to(".fancyBox .content_box .close_btn", {x:'-7vw', duration: 0.3})
        .to(".fancyBox .content_box", {opacity:0, duration: 0.3}, '<')
        .to(".fancyBox .thumbBox_content", 
        { width: thumbBoxRect.width, 
          height: thumbBoxRect.height, 
          left: thumbBoxRect.left, 
          top: thumbBoxRect.top, 
          duration: 0.7
        }, '<+=0.2')
        .to(".fancyBox", { opacity:0, duration: 0.3});
    }
        
  }, [trans]);


  return ReactDOM.createPortal(
    <div className="fancyBox sp2" style={fancyBoxStyle}>
      <div className="thumbBox_content" ref={thumbBox_content} style={thumbBoxStyle}>
        
      </div>
      <div className="content_box" style={{ width: width , opacity: 0}}>
        <button
          className="close_btn"
          onClick={() => {
            setTrans(false);
            setTimeout(() => {
              setOpen(false);
            }, 1500);
          }}
        >
          <img src={require("@/img/config/close_icon.svg").default} />
        </button>
        <div className="all_box">
          <div className='box1' ref={box1_content}>
            {
              box1Type=='image' ? <img src={box1Url} /> : <video controls src={box1Url}></video>
            }
          </div>
          <div className='box2'>
           {children}
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}
