import React from 'react'
import Video from "/video/sunlight.mp4";
export default function FixedBackground() {
    return (
        <div className="fixed-background">
            <video src={Video} autoPlay muted playsInline loop></video>
        </div>
    )
}
