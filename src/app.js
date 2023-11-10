import './scss/all.scss';
import React from 'react';
import { useEffect, useState, useLayoutEffect } from 'react';
import Home from './component/index';
import News from './component/news';
import Vr720 from './component/vr720';
import Life from './component/life';
import Exterior from './component/exterior';
import Floor from './component/floor';
import FloorShot from './component/floorShot';
import Materials from './component/materials';
import Bathroom from './component/materials/bathroom';
import Kitchenware from './component/materials/kitchenware';
import EHome from './component/materials/eHome';
import Habitability from './component/habitability';
import Ems from './component/ems';
import Brand from './component/brand';
import Team from './component/team';
import Work from './component/work';
import AreaCase from './component/areaCase';
import Calculate from './component/calculator';
import Layout from './component/layout';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import gsap from 'gsap';
import MoveBack from './component/config/moveBack';
import { Analytics } from '@vercel/analytics/react';

export default function App() {

    let formData = new FormData();
    formData.append('type', 'admin');
    fetch("https://web-board.tw/sys/login_ajax.php", {
        method: "POST",
        body: formData,
        headers: {
            'Authorization': `Bearer ${localStorage['token']}`,
            'Refresh-Token': localStorage['refresh_token']
        }
    }).then((res) => {

        res.json().then((data) => {
            console.log(data, data.success)
            if (!data.success) {
                alert(data.msg)
                location.href = "https://web-board.tw";
            }
        })

    });

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
                <Route path="/life" element={<Life />} />
                <Route path="/Exterior" element={<Exterior />} />
                <Route path="/floor" element={<Floor />} />
                <Route path="/floorShot" element={<FloorShot />} />
                <Route path="/materials" element={<Materials />} >
                    <Route path="bathroom" element={<Bathroom />} />
                    <Route path="eHome" element={<EHome />} />
                    <Route path="kitchenware" element={<Kitchenware />} />
                </Route>
                <Route path="/habitability" element={<Habitability />} />
                <Route path="/ems" element={<Ems />} />
                <Route path="/brand/*" element={<Brand />} />
                <Route path="/team" element={<Team />} />
                <Route path="/work/*" element={<Work />} />

                <Route path="/areaCase" element={<AreaCase />} />
                <Route path="/calculator" element={<Calculate />} />
                {/* 
                <Route path="/urban" element={<Urban />} />
                <Route path="/calculator" element={<Calculate />} />
                <Route path="/product/*" element={<Product />} />
                <Route path="/news" element={<News />} />
                <Route path="/equipment/*" element={<Equipment />} />
                <Route path="/areaCase" element={<AreaCase />} />
                {/* 
                <Route path="/information" element={<Information />} /> */}
                <Route path="*" element={<><h1 style={{ width: "100%", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>目前頁面正在製作中，請點選右上角X回首頁</h1><MoveBack /></>} />
            </Routes>
        </div>
    )
}