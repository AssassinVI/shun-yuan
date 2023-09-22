import React from 'react';
import { connect, useDispatch } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { closeVideo } from '../redux/action/videoToggle';
const requireSvg = require.context("../../../img/index/svg", false, /^\.\/.*\.svg$/);
const svg = requireSvg.keys().map(requireSvg);



function Headers({ reduxState }) {
    const location = useLocation();
    const dispatch = useDispatch()
    return (
        <div className="header" style={{ pointerEvents: location.pathname != "/" && "none" }}>
            <Link to={"/"} onClick={() => {
                dispatch(closeVideo())
            }}>
                <img src={svg[0].default} style={{ opacity: location.pathname !== "/" ? "0" : reduxState == 0 ? "0" : "1", transition: "0.5s" }} />
            </Link>


        </div>
    )
}

export default connect((state) => {
    return {
        reduxState: state.slideReducer.slide
    }

}, null)(Headers)