import React from 'react'

export default function Arrow({ slide, setSlide, length }) {
    const arrowStyle = {
        position: "absolute",
        top: 0,
        bottom: 0,
        margin: "auto 0",
        cursor: "pointer",
        height: "fit-content"
    }
    return (
        <>
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
                if (newIndex == length - 1) {
                    return
                } else {
                    setSlide(++newIndex)
                }

            }} style={{ ...arrowStyle, right: "3vw", pointerEvents: "auto" }}>
                <img src={require("../../../img/team/design/svg/014-arrow-right.svg").default} style={{ width: "1.5vw", height: "1.5vw", pointerEvents: "none" }} />
            </div>
        </>

    )
}
