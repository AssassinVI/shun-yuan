import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import ChooseBuilding from './chooseBuilding'
import ChooseFloor from './chooseFloor'
export default function Floor() {
    const location = useLocation()

    return (
        <section className='floor-container'>
            <Routes>
                <Route path="/choosefloor" element={<ChooseFloor />} />
            </Routes>
            {location.pathname == "/product/floor" && <ChooseBuilding />}
        </section>
    )
}
