import './scss/all.scss';
import React from 'react';
import { useEffect, useState, useLayoutEffect } from 'react';
import Home from './component/index';
import News from './component/news';
import Vr720 from './component/vr720';
import Layout from './component/layout';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import gsap from 'gsap';
import MoveBack from './component/config/moveBack';
import { Analytics } from '@vercel/analytics/react';

export default function App() {

    return (
        <>

            <Router basename="/">
                <Layout />
                <Content />

            </Router>
            <Analytics />
        </>



    )
}

function Content() {
    const location = useLocation();
    const [displayLocation, setDisplayLocation] = useState(location);
    const [transitionStage, setTransistionStage] = useState("fadeIn");
    useEffect(() => {
        if (location !== displayLocation) setTransistionStage("fadeOut");
    }, [location]);
    useLayoutEffect(() => {
        let gg;
        let gg2;

        if (transitionStage == "fadeOut") {
            gg = gsap.timeline({ ease: "none" })
            gg.to(`.${transitionStage}`, {

                duration: 0.8,
                opacity: 0,
                onComplete: () => {
                    setDisplayLocation(location);
                    setTransistionStage("fadeIn")
                }
            })
        } else {
            gg2 = gsap.timeline({ ease: "none" })
            gg2.to(`.${transitionStage}`, {

                duration: 1.2,
                opacity: 1,
            })
        }
        return () => {
            if (transitionStage == "fadeOut") {
                gg.revert();
            } else {
                gg2.revert();
            }


        }
    }, [transitionStage])
    return (
        // style={location.pathname !== "/" ? { width: "100%", height: "100vh", position: "relative", pointerEvents: transitionStage == "fadeOut" ? "auto" : "none", zIndex: 21 } : { width: "100%", height: "100vh", }}
        <div
            className={`${transitionStage}`}
            style={location.pathname !== "/" ? { width: "100%", height: "100vh", position: "relative",  zIndex: 21 } : { width: "100%", height: "100vh", }}
        >
            <Routes location={displayLocation}>
                <Route path="/" element={<Home />} />
                <Route path="/news" element={<News />} />
                <Route path="/vr720" element={<Vr720 />} />
                {/* <Route path="/lifefunction" element={<LifeFunction />} />
                <Route path="/team/*" element={<Team />} />
                <Route path="/urban" element={<Urban />} />
                <Route path="/calculator" element={<Calculate />} />
                <Route path="/product/*" element={<Product />} />
                <Route path="/news" element={<News />} />
                <Route path="/equipment/*" element={<Equipment />} />
                <Route path="/information" element={<Information />} /> */}
                <Route path="*" element={<><h1 style={{ width: "100%", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>目前頁面正在製作中，請點選右上角X回首頁</h1><MoveBack /></>} />
            </Routes>
        </div>
    )
}