import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom';
export default function FancyBox({ thumbUrl, text, children, imgStyle=null }) {
    const [open, setOpen] = useState(false);

    const imgStyleNEW = imgStyle==null ? {
        width: "100%",
        height: "100%",
        objectFit: "cover",
        display: "block"
    } : imgStyle;

    return (
        <>
            <div className="thumbBox" style={{ pointerEvents: "auto", cursor: "pointer" }} onClick={(e) => {
                e.stopPropagation()
                setOpen(true)
            }}>
                {thumbUrl ?
                    <img src={thumbUrl} style={imgStyleNEW} /> :
                    text ? <p>{text}</p> : null
                }
            </div>
            {open ? <Modal open={open} setOpen={setOpen} children={children} /> : null}



        </>

    )
}

function Modal({ setOpen, children }) {
    const [trans, setTrans] = useState(false)
    const fancyBoxStyle = {
        position: "fixed",
        left: 0,
        top: 0,
        width: "100%",
        height: "100%",
        objectFit: "cover",
        pointerEvents: "auto",
        opacity: trans ? "1" : "0",
        pointerEvents: trans ? "auto" : "none",
        transition: "0.6s",
        backgroundColor: "#f7f7f7",
        zIndex: 21
    }
    const closeStyle = {

        position: "absolute",
        backgroundColor: "#ffffff",
        width: "80%", height: "2px",
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        margin: "auto"
    }
    useEffect(() => {
        setTrans(true)
    }, [])
    return ReactDOM.createPortal(
        <div className="fancyBox" style={fancyBoxStyle} onClick={(e) => {
            // e.stopPropagation()
            // setTrans(false);
            // setTimeout(() => {
            //     setOpen(false);
            // }, 500)


        }}>
            {children}
            <div className="close" style={{ position: "absolute", right: "4vw", top: "2vw", cursor: "pointer", width: "5vw", height: "5vw", zIndex: 10, backgroundColor: 'rgb(48 99 116 / 50%)' }} onClick={() => {
                setTrans(false);
                setTimeout(() => {
                    setOpen(false);
                }, 500)
            }}>
                <div className="line1" style={{ ...closeStyle, transform: "rotate(45deg)" }}></div>
                <div className="line2" style={{ ...closeStyle, transform: "rotate(-45deg)" }}></div>
            </div>
        </div>,
        document.body
    )
}
