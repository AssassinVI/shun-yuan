import React from 'react'
import Exterior from './exterior'
import Cafe from './cafe'
import { Route, Routes } from 'react-router-dom'
import Planet from './planet'
import Floor from './floor'
import FloorPlan from './floorPlan'
import MoveBack from '../config/moveBack'
export default function Product() {
    return (
        <section className='product'>

            <Routes>
                {/* <Route path="/exterior" element={<Exterior />} /> */}
                <Route path="/planet" element={<Planet />} />
                <Route path="/cafe" element={<Cafe />} />
                <Route path="/floor/*" element={<Floor />} />
                <Route path="/floorPlan" element={<FloorPlan />} />
                {/* <Route path="*" element={<><h1 style={{ fontSize: "1.4vw", width: "100%", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>目前頁面正在製作中，請點選空白處回首頁</h1><MoveBack /></>} /> */}
            </Routes>

        </section>
    )
}
