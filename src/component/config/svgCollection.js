import React from 'react';
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
export function BrandLogo(props) {
    return (
        <svg
            width={5}
            height={9}
            viewBox="0 0 5 9"
            strokeWidth={"1px"}
            xmlns="http://www.w3.org/2000/svg"
        >
            <defs>
                <clipPath id="brand-logo" clipPathUnits="objectBoundingBox" >
                    <path d="M1 0.0625H0.834398L0.64402 0.332198L0.453641 0.0625H0V0.285585C0.0461524 0.23302 0.113657 0.19967 0.189092 0.19967H0.384596L0.475591 0.32898H0.189092C0.121334 0.32898 0.0663786 0.383912 0.0663786 0.451693C0.0663786 0.519473 0.121311 0.574406 0.189092 0.574406H0.287878C0.426933 0.574406 0.539648 0.687121 0.539648 0.826176C0.539648 0.870673 0.528018 0.91239 0.507769 0.948659H0.712191L1 0.539723V0.0625ZM0.998414 0.539194L0.7138 0.943625V0.471942L0.998414 0.0675336V0.539194Z" fill='#000' stroke="#808080" strokeWidth="0.5" strokeMiterlimit="10" />
                    <path d="M0.287878 0.703103H0.189092C0.113657 0.703103 0.0461524 0.669753 0 0.617188V0.948506H0.287878C0.355636 0.948506 0.410591 0.893573 0.410591 0.825793C0.410591 0.758012 0.355659 0.70308 0.287878 0.70308V0.703103Z" fill='#000' stroke="#808080" strokeWidth="0.5" strokeMiterlimit="10" />
                </clipPath>
            </defs>
        </svg>
    )
}

export function HomeSecondPageSunlandLogo(props) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 562.23 658.88"
            style={{ display: `${props.type != "team1" ? "none" : "block"}`, transform: "scale(0.6)" }}
        >
            <defs>
                <style
                    dangerouslySetInnerHTML={{
                        __html:
                            "\n      .sunland-logo {\n        fill: transparent;\n        stroke: gray;\n        stroke-miterlimit: 10;      }\n    "
                    }}
                />
                <clipPath id="sunLand" clipPathUnits="objectBoundingBox" >
                    <path d="M0.891428 0.339487V0.197565L0.499933 0.000427246L0.13864 0.204167L0.140418 0.318209L0.000457764 0.407907V0.800679L0.349372 0.991382H0.39727L0.496483 0.926271L0.636354 0.999547L0.999568 0.79086V0.401396L0.891428 0.339487ZM0.276822 0.802364L0.145719 0.738801V0.360584L0.161584 0.349262L0.276804 0.412763L0.276822 0.802364ZM0.407818 0.72411V0.813443H0.393713V0.365395L0.294519 0.314779L0.290997 0.297006L0.72324 0.51864L0.797872 0.474656L0.80648 0.484446L0.407818 0.72411ZM0.859537 0.720877L0.54166 0.914812L0.507706 0.894885V0.780251L0.683621 0.673069L0.859537 0.565887V0.720877ZM0.781686 0.388328C0.781686 0.388328 0.750809 0.41847 0.689482 0.388328C0.625771 0.357048 0.36353 0.220482 0.36353 0.220482L0.429321 0.170397C0.429321 0.170397 0.481844 0.126611 0.561972 0.168258C0.63374 0.205654 0.726798 0.274256 0.769218 0.297021C0.811816 0.31997 0.859555 0.326435 0.859555 0.326435L0.781686 0.388328Z" fill='#000' stroke="#808080" strokeWidth="0.5" strokeMiterlimit="10" />
                </clipPath>
            </defs>
            <g >
                <path
                    className="sunland-logo"
                    d="M501.18,223.69v-93.51L281.07,.29,77.94,134.53l1,75.14L.25,268.77v258.79l196.17,125.65h26.93l55.78-42.9,78.64,48.28,204.21-137.5V264.48l-60.8-40.79ZM155.63,528.67l-73.71-41.88V237.59l8.92-7.46,64.78,41.84v256.7Zm73.65-51.56v58.86h-7.93V240.76l-55.77-33.35-1.98-11.71,243.02,146.03,41.96-28.98,4.84,6.45-224.13,157.9Zm253.97-2.13l-178.72,127.78-19.09-13.13v-75.53l197.81-141.24v102.12Zm-43.77-219.11s-17.36,19.86-51.84,0c-35.82-20.61-183.26-110.59-183.26-110.59l36.99-33s29.53-28.85,74.58-1.41c40.35,24.64,92.67,69.84,116.52,84.84,23.95,15.12,50.79,19.38,50.79,19.38l-43.77,40.79Z"
                />
            </g>
        </svg>
    )
}

export function MenuToggleButton({ open, setSvgHeight }) {
    const menuButton = useRef(null)
    useEffect(() => {

        setSvgHeight(menuButton.current.clientHeight)
    }, [])
    return (
        <svg id="_圖層_2" data-name="圖層 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44.99 431.79" ref={menuButton}>

            <g id="menu" >
                <path d="M44.99,0s-.05,431.79-.05,431.79c-8.49-26.71-15.97-53.79-22.85-80.96C9.65,301.7-4.87,249.16,1.59,198.01c2.29-18.13,6.12-36.1,9.87-53.96C20.6,100.42,30.99,57.06,41.6,13.78c1.13-4.59,2.26-9.18,3.39-13.78Z" fill={open == false ? '#c3a457' : "#fff"} />
            </g>
        </svg>
    )
}

export function HomeThirdPageCover() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 1234 1823.82"
        >
            <defs>
                <style
                    dangerouslySetInnerHTML={{
                        __html:
                            "\n      .third-page-1 {\n        clip-path: url(#third-clippath);\n      }\n\n     "
                    }}
                />
                <clipPath id="third-clippath">
                    <polygon
                        fill='#f7f7f7'
                        className="third-page-2"
                        points="1161.5 546.6 821.99 362.78 72.61 724.06 72.61 1272.39 659.13 1411.73 1161.5 1152.76 1161.5 546.6"
                    />
                </clipPath>
            </defs>
            <g >
                <g>
                    <g className="third-page-1">
                        <g className='home-third-clip'>

                            <polygon
                                fill="#f7f7f7"
                                stroke="#f7f7f7"
                                className="third-page-3"
                                points="1057.65 790 1057.65 949.31 1222.29 869.65 1057.65 790"
                            />
                            <polygon
                                fill="#f7f7f7"
                                stroke="#f7f7f7"
                                className="third-page-3"
                                points="1057.65 949 1057.65 1108.31 1222.29 1028.66 1057.65 949"
                            />
                            <polygon
                                fill="#f7f7f7"
                                stroke="#f7f7f7"
                                className="third-page-3"
                                points="1057.65 1108 1057.65 1267.31 1222.29 1187.66 1057.65 1108"
                            />
                            <polygon
                                fill="#f7f7f7"
                                stroke="#f7f7f7"
                                className="third-page-3"
                                points="1057.65 949.15 1222.29 1028.81 1222.29 869.5 1057.65 949.15"
                            />
                            <polygon
                                fill="#f7f7f7"
                                stroke="#f7f7f7"
                                className="third-page-3"
                                points="1222.29 1187.81 1222.29 1028.5 1057.65 1108.16 1222.29 1187.81"
                            />
                            <polygon
                                fill="#f7f7f7"
                                stroke="#f7f7f7"
                                className="third-page-3"
                                points="1222.29 1346.82 1222.29 1187.51 1057.65 1267.16 1222.29 1346.82"
                            />
                            <polygon
                                fill="#f7f7f7"
                                stroke="#f7f7f7"
                                className="third-page-3"
                                points="893.25 1186.81 893.25 1346.12 1057.89 1266.47 893.25 1186.81"
                            />
                            <polygon
                                fill="#f7f7f7"
                                stroke="#f7f7f7"
                                className="third-page-3"
                                points="893.25 1345.82 893.25 1505.13 1057.89 1425.47 893.25 1345.82"
                            />

                            <polygon
                                fill="#f7f7f7"
                                stroke="#f7f7f7"
                                className="third-page-3"
                                points="1057.89 1425.62 1057.89 1266.32 893.25 1345.97 1057.89 1425.62"
                            />

                            <polygon
                                fill="#f7f7f7"
                                stroke="#f7f7f7"
                                className="third-page-3"
                                points="893.25 709.8 893.25 869.11 1057.89 789.46 893.25 709.8"
                            />
                            <polygon
                                fill="#f7f7f7"
                                stroke="#f7f7f7"
                                className="third-page-3"
                                points="893.25 868.81 893.25 1028.12 1057.89 948.46 893.25 868.81"
                            />
                            <polygon
                                fill="#f7f7f7"
                                stroke="#f7f7f7"
                                className="third-page-3"
                                points="893.25 1027.81 893.25 1187.12 1057.89 1107.47 893.25 1027.81"
                            />
                            <polygon
                                fill="#f7f7f7"
                                stroke="#f7f7f7"
                                className="third-page-3"
                                points="893.25 868.96 1057.89 948.62 1057.89 789.31 893.25 868.96"
                            />
                            <polygon
                                fill="#f7f7f7"
                                stroke="#f7f7f7"
                                className="third-page-3"
                                points="1057.89 1107.62 1057.89 948.31 893.25 1027.96 1057.89 1107.62"
                            />
                            <polygon
                                fill="#f7f7f7"
                                stroke="#f7f7f7"
                                className="third-page-3"
                                points="1057.89 1266.62 1057.89 1107.31 893.25 1186.97 1057.89 1266.62"
                            />
                            <polygon
                                fill="#f7f7f7"
                                stroke="#f7f7f7"
                                className="third-page-3"
                                points="728.85 1107.62 728.85 1266.93 893.49 1187.28 728.85 1107.62"
                            />
                            <polygon
                                fill="#f7f7f7"
                                stroke="#f7f7f7"
                                className="third-page-3"
                                points="728.85 1266.63 728.85 1425.94 893.49 1346.28 728.85 1266.63"
                            />

                            <polygon
                                fill="#f7f7f7"
                                stroke="#f7f7f7"
                                className="third-page-3"
                                points="893.49 1346.43 893.49 1187.12 728.85 1266.78 893.49 1346.43"
                            />
                            <polygon
                                fill="#f7f7f7"
                                stroke="#f7f7f7"
                                className="third-page-3"
                                points="893.49 1505.44 893.49 1346.13 728.85 1425.78 893.49 1505.44"
                            />
                            <polygon
                                fill="#f7f7f7"
                                stroke="#f7f7f7"
                                className="third-page-3"
                                points="893.49 1664.44 893.49 1505.13 728.85 1584.79 893.49 1664.44"
                            />
                            <polygon
                                fill="#f7f7f7"
                                stroke="#f7f7f7"
                                className="third-page-3"
                                points="728.85 630.61 728.85 789.92 893.49 710.27 728.85 630.61"
                            />
                            <polygon
                                fill="#f7f7f7"
                                stroke="#f7f7f7"
                                className="third-page-3"
                                points="728.85 789.62 728.85 948.93 893.49 869.27 728.85 789.62"
                            />
                            <polygon
                                fill="#f7f7f7"
                                stroke="#f7f7f7"
                                className="third-page-3"
                                points="728.85 948.62 728.85 1107.93 893.49 1028.27 728.85 948.62"
                            />
                            <polygon
                                fill="#f7f7f7"
                                stroke="#f7f7f7"
                                className="third-page-3"
                                points="728.85 789.77 893.49 869.42 893.49 710.12 728.85 789.77"
                            />
                            <polygon
                                fill="#f7f7f7"
                                stroke="#f7f7f7"
                                className="third-page-3"
                                points="893.49 1028.43 893.49 869.12 728.85 948.77 893.49 1028.43"
                            />
                            <polygon
                                fill="#f7f7f7"
                                stroke="#f7f7f7"
                                className="third-page-3"
                                points="893.49 1187.43 893.49 1028.12 728.85 1107.78 893.49 1187.43"
                            />
                            <polygon
                                fill="#f7f7f7"
                                stroke="#f7f7f7"
                                className="third-page-3"
                                points="564.46 396.75 729.1 476.4 729.1 317.09 564.46 396.75"
                            />
                            <polygon
                                fill="#f7f7f7"
                                stroke="#f7f7f7"
                                className="third-page-3"
                                points="1057.65 632.59 1057.65 791.9 1222.29 712.24 1057.65 632.59"
                            />
                            <polygon
                                fill="#f7f7f7"
                                stroke="#f7f7f7"
                                className="third-page-3"
                                points="1057.65 791.74 1222.29 871.4 1222.29 712.09 1057.65 791.74"
                            />
                            <polygon
                                fill="#f7f7f7"
                                stroke="#f7f7f7"
                                className="third-page-3"
                                points="893.25 552.39 893.25 711.7 1057.89 632.05 893.25 552.39"
                            />
                            <polygon
                                fill="#f7f7f7"
                                stroke="#f7f7f7"
                                className="third-page-3"
                                points="893.25 711.55 1057.89 791.2 1057.89 631.9 893.25 711.55"
                            />
                            <polygon
                                fill="#f7f7f7"
                                stroke="#f7f7f7"
                                className="third-page-3"
                                points="728.85 473.2 728.85 632.51 893.49 552.86 728.85 473.2"
                            />
                            <polygon
                                fill="#f7f7f7"
                                stroke="#f7f7f7"
                                className="third-page-3"
                                points="728.85 632.36 893.49 712.01 893.49 552.7 728.85 632.36"
                            />
                            <polygon
                                fill="#f7f7f7"
                                stroke="#f7f7f7"
                                className="third-page-3"
                                points="564.46 393.01 564.46 552.32 729.1 472.66 564.46 393.01"
                            />
                            <polygon
                                fill="#f7f7f7"
                                stroke="#f7f7f7"
                                className="third-page-3"
                                points="564.46 552.17 729.1 631.82 729.1 472.51 564.46 552.17"
                            />

                            <polygon
                                fill="#f7f7f7"
                                stroke="#f7f7f7"
                                className="third-page-3"
                                points="400.06 473.98 564.7 553.63 564.7 394.32 400.06 473.98"
                            />


                            <polygon
                                fill="#f7f7f7"
                                stroke="#f7f7f7"
                                className="third-page-3"
                                points="1057.65 477.17 1057.65 636.48 1222.29 556.82 1057.65 477.17"
                            />
                            <polygon
                                fill="#f7f7f7"
                                stroke="#f7f7f7"
                                className="third-page-3"
                                points="1057.65 636.33 1222.29 715.98 1222.29 556.67 1057.65 636.33"
                            />
                            <polygon
                                fill="#f7f7f7"
                                stroke="#f7f7f7"
                                className="third-page-3"
                                points="893.25 396.98 893.25 556.29 1057.89 476.63 893.25 396.98"
                            />
                            <polygon
                                fill="#f7f7f7"
                                stroke="#f7f7f7"
                                className="third-page-3"
                                points="893.25 556.13 1057.89 635.79 1057.89 476.48 893.25 556.13"
                            />
                            <polygon
                                fill="#f7f7f7"
                                stroke="#f7f7f7"
                                className="third-page-3"
                                points="728.85 317.79 728.85 477.09 893.49 397.44 728.85 317.79"
                            />
                            <polygon
                                fill="#f7f7f7"
                                stroke="#f7f7f7"
                                className="third-page-3"
                                points="728.85 476.94 893.49 556.6 893.49 397.29 728.85 476.94"
                            />
                            <polygon
                                fill="#f7f7f7"
                                stroke="#f7f7f7"
                                className="third-page-3"
                                points="564.46 1027.43 564.46 1186.74 729.1 1107.08 564.46 1027.43"
                            />
                            <polygon
                                fill="#f7f7f7"
                                stroke="#f7f7f7"
                                className="third-page-3"
                                points="564.46 1186.43 564.46 1345.74 729.1 1266.09 564.46 1186.43"
                            />
                            <polygon
                                fill="#f7f7f7"
                                stroke="#f7f7f7"
                                className="third-page-3"
                                points="564.46 1345.44 564.46 1504.75 729.1 1425.09 564.46 1345.44"
                            />
                            <polygon
                                fill="#f7f7f7"
                                stroke="#f7f7f7"
                                className="third-page-3"
                                points="729.1 1266.24 729.1 1106.93 564.46 1186.59 729.1 1266.24"
                            />
                            <polygon
                                fill="#f7f7f7"
                                stroke="#f7f7f7"
                                className="third-page-3"
                                points="729.1 1425.24 729.1 1265.93 564.46 1345.59 729.1 1425.24"
                            />
                            <polygon
                                fill="#f7f7f7"
                                stroke="#f7f7f7"
                                className="third-page-3"
                                points="729.1 1584.25 729.1 1424.94 564.46 1504.59 729.1 1584.25"
                            />
                            <polygon
                                fill="#f7f7f7"
                                stroke="#f7f7f7"
                                className="third-page-3"
                                points="564.46 550.42 564.46 709.73 729.1 630.07 564.46 550.42"
                            />
                            <polygon
                                fill="#f7f7f7"
                                stroke="#f7f7f7"
                                className="third-page-3"
                                points="564.46 709.42 564.46 868.73 729.1 789.08 564.46 709.42"
                            />
                            <polygon
                                fill="#f7f7f7"
                                stroke="#f7f7f7"
                                className="third-page-3"
                                points="564.46 868.43 564.46 1027.74 729.1 948.08 564.46 868.43"
                            />
                            <polygon
                                fill="#f7f7f7"
                                stroke="#f7f7f7"
                                className="third-page-3"
                                points="564.46 709.58 729.1 789.23 729.1 629.92 564.46 709.58"
                            />
                            <polygon
                                fill="#f7f7f7"
                                stroke="#f7f7f7"
                                className="third-page-3"
                                points="729.1 948.23 729.1 788.93 564.46 868.58 729.1 948.23"
                            />


                            <polygon
                                fill="#f7f7f7"
                                stroke="#f7f7f7"
                                className="third-page-3"
                                points="729.1 1107.24 729.1 947.93 564.46 1027.58 729.1 1107.24"
                            />
                            <polygon
                                fill="#f7f7f7"
                                stroke="#f7f7f7"
                                className="third-page-3"
                                points="400.06 949.24 400.06 1108.55 564.7 1028.9 400.06 949.24"
                            />
                            <polygon
                                fill="#f7f7f7"
                                stroke="#f7f7f7"
                                className="third-page-3"
                                points="400.06 1108.24 400.06 1267.55 564.7 1187.9 400.06 1108.24"
                            />
                            <polygon
                                fill="#f7f7f7"
                                stroke="#f7f7f7"
                                className="third-page-3"
                                points="400.06 1267.25 400.06 1426.56 564.7 1346.9 400.06 1267.25"
                            />
                            <polygon
                                fill="#f7f7f7"
                                stroke="#f7f7f7"
                                className="third-page-3"
                                points="564.7 1188.05 564.7 1028.74 400.06 1108.4 564.7 1188.05"
                            />
                            <polygon
                                fill="#f7f7f7"
                                stroke="#f7f7f7"
                                className="third-page-3"
                                points="564.7 1347.05 564.7 1187.75 400.06 1267.4 564.7 1347.05"
                            />
                            <polygon
                                fill="#f7f7f7"
                                stroke="#f7f7f7"
                                className="third-page-3"
                                points="564.7 1506.06 564.7 1346.75 400.06 1426.4 564.7 1506.06"
                            />
                            <polygon
                                fill="#f7f7f7"
                                stroke="#f7f7f7"
                                className="third-page-3"
                                points="400.06 472.23 400.06 631.54 564.7 551.89 400.06 472.23"
                            />
                            <polygon
                                fill="#f7f7f7"
                                stroke="#f7f7f7"
                                className="third-page-3"
                                points="400.06 631.23 400.06 790.54 564.7 710.89 400.06 631.23"
                            />
                            <polygon
                                fill="#f7f7f7"
                                stroke="#f7f7f7"
                                className="third-page-3"
                                points="400.06 790.24 400.06 949.55 564.7 869.89 400.06 790.24"
                            />
                            <polygon
                                fill="#f7f7f7"
                                stroke="#f7f7f7"
                                className="third-page-3"
                                points="400.06 631.39 564.7 711.04 564.7 551.73 400.06 631.39"
                            />
                            <polygon
                                fill="#f7f7f7"
                                stroke="#f7f7f7"
                                className="third-page-3"
                                points="564.7 870.05 564.7 710.74 400.06 790.39 564.7 870.05"
                            />
                            <polygon
                                fill="#f7f7f7"
                                stroke="#f7f7f7"
                                className="third-page-3"
                                points="564.7 1029.05 564.7 869.74 400.06 949.39 564.7 1029.05"
                            />
                            <polygon
                                fill="#f7f7f7"
                                stroke="#f7f7f7"
                                className="third-page-3"
                                points="235.66 869.03 235.66 1028.34 400.3 948.68 235.66 869.03"
                            />
                            <polygon
                                fill="#f7f7f7"
                                stroke="#f7f7f7"
                                className="third-page-3"
                                points="235.66 1028.03 235.66 1187.34 400.3 1107.69 235.66 1028.03"
                            />
                            <polygon
                                fill="#f7f7f7"
                                stroke="#f7f7f7"
                                className="third-page-3"
                                points="235.66 1187.04 235.66 1346.34 400.3 1266.69 235.66 1187.04"
                            />
                            <polygon
                                fill="#f7f7f7"
                                stroke="#f7f7f7"
                                className="third-page-3"
                                points="400.3 1107.84 400.3 948.53 235.66 1028.19 400.3 1107.84"
                            />
                            <polygon
                                fill="#f7f7f7"
                                stroke="#f7f7f7"
                                className="third-page-3"
                                points="400.3 1266.84 400.3 1107.53 235.66 1187.19 400.3 1266.84"
                            />
                            <polygon
                                fill="#f7f7f7"
                                stroke="#f7f7f7"
                                className="third-page-3"
                                points="400.3 1425.85 400.3 1266.54 235.66 1346.19 400.3 1425.85"
                            />

                            <polygon
                                fill="#f7f7f7"
                                stroke="#f7f7f7"
                                className="third-page-3"
                                points="235.66 551.02 235.66 710.33 400.3 630.68 235.66 551.02"
                            />
                            <polygon
                                fill="#f7f7f7"
                                stroke="#f7f7f7"
                                className="third-page-3"
                                points="235.66 710.03 235.66 869.33 400.3 789.68 235.66 710.03"
                            />
                            <polygon
                                fill="#f7f7f7"
                                stroke="#f7f7f7"
                                className="third-page-3"
                                points="235.66 551.18 400.3 630.83 400.3 471.52 235.66 551.18"
                            />
                            <polygon
                                fill="#f7f7f7"
                                stroke="#f7f7f7"
                                className="third-page-3"
                                points="400.3 789.83 400.3 630.52 235.66 710.18 400.3 789.83"
                            />
                            <polygon
                                fill="#f7f7f7"
                                stroke="#f7f7f7"
                                className="third-page-3"
                                points="400.3 948.84 400.3 789.53 235.66 869.18 400.3 948.84"
                            />
                            <polygon
                                fill="#f7f7f7"
                                stroke="#f7f7f7"
                                className="third-page-3"
                                points="71.27 789.84 71.27 949.15 235.9 869.49 71.27 789.84"
                            />
                            <polygon
                                fill="#f7f7f7"
                                stroke="#f7f7f7"
                                className="third-page-3"
                                points="71.27 948.84 71.27 1108.15 235.9 1028.5 71.27 948.84"
                            />
                            <polygon
                                fill="#f7f7f7"
                                stroke="#f7f7f7"
                                className="third-page-3"
                                points="71.27 1107.84 71.27 1267.15 235.9 1187.5 71.27 1107.84"
                            />
                            <polygon
                                fill="#f7f7f7"
                                stroke="#f7f7f7"
                                className="third-page-3"
                                points="235.9 1028.65 235.9 869.34 71.27 948.99 235.9 1028.65"
                            />
                            <polygon
                                fill="#f7f7f7"
                                stroke="#f7f7f7"
                                className="third-page-3"
                                points="235.9 1187.65 235.9 1028.34 71.27 1108 235.9 1187.65"
                            />
                            <polygon
                                fill="#f7f7f7"
                                stroke="#f7f7f7"
                                className="third-page-3"
                                points="235.9 1346.65 235.9 1187.35 71.27 1267 235.9 1346.65"
                            />

                            <polygon
                                fill="#f7f7f7"
                                stroke="#f7f7f7"
                                className="third-page-3"
                                points="71.27 630.83 71.27 790.14 235.9 710.49 71.27 630.83"
                            />


                            <polygon
                                fill="#f7f7f7"
                                stroke="#f7f7f7"
                                className="third-page-3"
                                points="564.46 237.59 564.46 396.9 729.1 317.25 564.46 237.59"
                            />


                            <polygon
                                fill="#f7f7f7"
                                stroke="#f7f7f7"
                                className="third-page-3"
                                points="235.9 710.64 235.9 551.33 71.27 630.99 235.9 710.64"
                            />
                            <polygon
                                fill="#f7f7f7"
                                stroke="#f7f7f7"
                                className="third-page-3"
                                points="235.9 869.65 235.9 710.34 71.27 789.99 235.9 869.65"
                            />
                        </g>
                    </g>
                    <path
                        fill='#f7f7f7'
                        className="third-page-3"
                        d="M0,351.29V1425.29H1234V351.29H0Zm1154,798.88l-495.5,255.43L80,1268.16V727.32L819.13,370.98l334.87,181.31v597.88Z"
                    />
                </g>
            </g>
        </svg>
    )
}

export function PopulationChart() {
    return (
        <svg
            width={1057}
            height={771}
            viewBox="0 0 1057 771"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g filter="url(#filter0_d_355_769)">
                <g clipPath="url(#clip0_355_769)">
                    <rect x={10} y={9} width={1033} height={747} rx={10} fill="white" />
                    <path
                        d="M169.908 581.376H987.377"
                        stroke="#F0F0F0"
                        strokeDasharray="4 2"
                    />
                    <path
                        d="M169.908 505.882H987.377"
                        stroke="#F0F0F0"
                        strokeDasharray="4 2"
                    />
                    <path
                        d="M169.908 428.4H987.377"
                        stroke="#F0F0F0"
                        strokeDasharray="4 2"
                    />
                    <path
                        d="M169.908 350.919H987.377"
                        stroke="#F0F0F0"
                        strokeDasharray="4 2"
                    />
                    <path
                        d="M169.908 273.438H987.377"
                        stroke="#F0F0F0"
                        strokeDasharray="4 2"
                    />
                    <path
                        d="M169.908 197.943H987.377"
                        stroke="#F0F0F0"
                        strokeDasharray="4 2"
                    />
                    <path
                        d="M169.908 120.461H987.377"
                        stroke="#F0F0F0"
                        strokeDasharray="4 2"
                    />
                    <path
                        d="M169.908 581.376H987.377"
                        stroke="#F0F0F0"
                        strokeLinecap="round"
                    />
                    <path d="M211.633 581.429V591.363" stroke="#D9D9D9" />
                    <path d="M293.082 581.429V591.363" stroke="#D9D9D9" />
                    <path d="M374.529 581.429V591.363" stroke="#D9D9D9" />
                    <path d="M455.979 581.429V591.363" stroke="#D9D9D9" />
                    <path d="M537.426 581.429V591.363" stroke="#D9D9D9" />
                    <path d="M620.861 581.429V591.363" stroke="#D9D9D9" />
                    <path d="M702.309 581.429V591.363" stroke="#D9D9D9" />
                    <path d="M783.756 581.429V591.363" stroke="#D9D9D9" />
                    <path d="M865.205 581.429V591.363" stroke="#D9D9D9" />
                    <path d="M946.652 581.429V591.363" stroke="#D9D9D9" />
                    <path
                        d="M147.701 567.125C147.701 563.969 148.469 563.141 149.309 563.141C150.113 563.141 150.869 563.969 150.869 567.125C150.869 570.389 150.113 571.253 149.309 571.253C148.469 571.253 147.701 570.401 147.701 567.125ZM149.309 562.613C147.893 562.613 146.537 563.837 146.537 567.125C146.537 570.521 147.893 571.757 149.309 571.757C150.689 571.757 152.045 570.521 152.045 567.125C152.045 563.837 150.689 562.613 149.309 562.613Z"
                        fill="#8C8C8C"
                    />
                    <path
                        d="M116.368 486.831H120.16V485.799H115.864L115.588 489.903L115.924 489.999C116.344 489.879 116.776 489.831 117.184 489.831C118.444 489.831 119.248 490.599 119.248 491.991C119.248 493.371 118.54 494.259 117.256 494.259C116.968 494.259 116.704 494.223 116.428 494.139L116.212 493.347C116.056 492.711 115.888 492.519 115.504 492.519C115.216 492.519 114.988 492.663 114.88 492.939C115.144 494.151 115.996 494.763 117.328 494.763C119.188 494.763 120.4 493.599 120.4 491.883C120.4 490.119 119.236 489.123 117.532 489.123C117.052 489.123 116.632 489.183 116.2 489.315L116.368 486.831ZM123.146 490.131C123.146 486.975 123.914 486.147 124.754 486.147C125.558 486.147 126.314 486.975 126.314 490.131C126.314 493.395 125.558 494.259 124.754 494.259C123.914 494.259 123.146 493.407 123.146 490.131ZM124.754 485.619C123.338 485.619 121.982 486.843 121.982 490.131C121.982 493.527 123.338 494.763 124.754 494.763C126.134 494.763 127.49 493.527 127.49 490.131C127.49 486.843 126.134 485.619 124.754 485.619ZM130.572 495.039C130.284 496.035 129.612 496.635 128.688 497.103L128.868 497.487C130.068 497.007 131.28 495.783 131.28 494.259C131.28 493.923 131.244 493.647 131.136 493.335C130.848 493.059 130.596 492.975 130.356 492.975C129.864 492.975 129.588 493.335 129.588 493.779C129.588 494.079 129.732 494.415 130.068 494.655L130.572 495.039ZM134.641 490.131C134.641 486.975 135.409 486.147 136.249 486.147C137.053 486.147 137.809 486.975 137.809 490.131C137.809 493.395 137.053 494.259 136.249 494.259C135.409 494.259 134.641 493.407 134.641 490.131ZM136.249 485.619C134.833 485.619 133.477 486.843 133.477 490.131C133.477 493.527 134.833 494.763 136.249 494.763C137.629 494.763 138.985 493.527 138.985 490.131C138.985 486.843 137.629 485.619 136.249 485.619ZM141.707 490.131C141.707 486.975 142.475 486.147 143.315 486.147C144.119 486.147 144.875 486.975 144.875 490.131C144.875 493.395 144.119 494.259 143.315 494.259C142.475 494.259 141.707 493.407 141.707 490.131ZM143.315 485.619C141.899 485.619 140.543 486.843 140.543 490.131C140.543 493.527 141.899 494.763 143.315 494.763C144.695 494.763 146.051 493.527 146.051 490.131C146.051 486.843 144.695 485.619 143.315 485.619ZM148.773 490.131C148.773 486.975 149.541 486.147 150.381 486.147C151.185 486.147 151.941 486.975 151.941 490.131C151.941 493.395 151.185 494.259 150.381 494.259C149.541 494.259 148.773 493.407 148.773 490.131ZM150.381 485.619C148.965 485.619 147.609 486.843 147.609 490.131C147.609 493.527 148.965 494.763 150.381 494.763C151.761 494.763 153.117 493.527 153.117 490.131C153.117 486.843 151.761 485.619 150.381 485.619Z"
                        fill="#8C8C8C"
                    />
                    <path
                        d="M110.241 416.93C110.229 416.234 110.217 415.526 110.217 414.83V410.702L110.265 408.806L110.085 408.674L107.385 409.382V409.838L109.137 409.67V414.83C109.137 415.526 109.125 416.234 109.113 416.93L107.241 417.194V417.602H112.089V417.194L110.241 416.93ZM115.027 413.138C115.027 409.982 115.795 409.154 116.635 409.154C117.439 409.154 118.195 409.982 118.195 413.138C118.195 416.402 117.439 417.266 116.635 417.266C115.795 417.266 115.027 416.414 115.027 413.138ZM116.635 408.626C115.219 408.626 113.863 409.85 113.863 413.138C113.863 416.534 115.219 417.77 116.635 417.77C118.015 417.77 119.371 416.534 119.371 413.138C119.371 409.85 118.015 408.626 116.635 408.626ZM122.093 413.138C122.093 409.982 122.861 409.154 123.701 409.154C124.505 409.154 125.261 409.982 125.261 413.138C125.261 416.402 124.505 417.266 123.701 417.266C122.861 417.266 122.093 416.414 122.093 413.138ZM123.701 408.626C122.285 408.626 120.929 409.85 120.929 413.138C120.929 416.534 122.285 417.77 123.701 417.77C125.081 417.77 126.437 416.534 126.437 413.138C126.437 409.85 125.081 408.626 123.701 408.626ZM129.519 418.046C129.231 419.042 128.559 419.642 127.635 420.11L127.815 420.494C129.015 420.014 130.227 418.79 130.227 417.266C130.227 416.93 130.191 416.654 130.083 416.342C129.795 416.066 129.543 415.982 129.303 415.982C128.811 415.982 128.535 416.342 128.535 416.786C128.535 417.086 128.679 417.422 129.015 417.662L129.519 418.046ZM133.588 413.138C133.588 409.982 134.356 409.154 135.196 409.154C136 409.154 136.756 409.982 136.756 413.138C136.756 416.402 136 417.266 135.196 417.266C134.356 417.266 133.588 416.414 133.588 413.138ZM135.196 408.626C133.78 408.626 132.424 409.85 132.424 413.138C132.424 416.534 133.78 417.77 135.196 417.77C136.576 417.77 137.932 416.534 137.932 413.138C137.932 409.85 136.576 408.626 135.196 408.626ZM140.654 413.138C140.654 409.982 141.422 409.154 142.262 409.154C143.066 409.154 143.822 409.982 143.822 413.138C143.822 416.402 143.066 417.266 142.262 417.266C141.422 417.266 140.654 416.414 140.654 413.138ZM142.262 408.626C140.846 408.626 139.49 409.85 139.49 413.138C139.49 416.534 140.846 417.77 142.262 417.77C143.642 417.77 144.998 416.534 144.998 413.138C144.998 409.85 143.642 408.626 142.262 408.626ZM147.72 413.138C147.72 409.982 148.488 409.154 149.328 409.154C150.132 409.154 150.888 409.982 150.888 413.138C150.888 416.402 150.132 417.266 149.328 417.266C148.488 417.266 147.72 416.414 147.72 413.138ZM149.328 408.626C147.912 408.626 146.556 409.85 146.556 413.138C146.556 416.534 147.912 417.77 149.328 417.77C150.708 417.77 152.064 416.534 152.064 413.138C152.064 409.85 150.708 408.626 149.328 408.626Z"
                        fill="#8C8C8C"
                    />
                    <path
                        d="M110.241 339.936C110.229 339.24 110.217 338.532 110.217 337.836V333.708L110.265 331.812L110.085 331.68L107.385 332.388V332.844L109.137 332.676V337.836C109.137 338.532 109.125 339.24 109.113 339.936L107.241 340.2V340.608H112.089V340.2L110.241 339.936ZM115.315 332.844H119.107V331.812H114.811L114.535 335.916L114.871 336.012C115.291 335.892 115.723 335.844 116.131 335.844C117.391 335.844 118.195 336.612 118.195 338.004C118.195 339.384 117.487 340.272 116.203 340.272C115.915 340.272 115.651 340.236 115.375 340.152L115.159 339.36C115.003 338.724 114.835 338.532 114.451 338.532C114.163 338.532 113.935 338.676 113.827 338.952C114.091 340.164 114.943 340.776 116.275 340.776C118.135 340.776 119.347 339.612 119.347 337.896C119.347 336.132 118.183 335.136 116.479 335.136C115.999 335.136 115.579 335.196 115.147 335.328L115.315 332.844ZM122.093 336.144C122.093 332.988 122.861 332.16 123.701 332.16C124.505 332.16 125.261 332.988 125.261 336.144C125.261 339.408 124.505 340.272 123.701 340.272C122.861 340.272 122.093 339.42 122.093 336.144ZM123.701 331.632C122.285 331.632 120.929 332.856 120.929 336.144C120.929 339.54 122.285 340.776 123.701 340.776C125.081 340.776 126.437 339.54 126.437 336.144C126.437 332.856 125.081 331.632 123.701 331.632ZM129.519 341.052C129.231 342.048 128.559 342.648 127.635 343.116L127.815 343.5C129.015 343.02 130.227 341.796 130.227 340.272C130.227 339.936 130.191 339.66 130.083 339.348C129.795 339.072 129.543 338.988 129.303 338.988C128.811 338.988 128.535 339.348 128.535 339.792C128.535 340.092 128.679 340.428 129.015 340.668L129.519 341.052ZM133.588 336.144C133.588 332.988 134.356 332.16 135.196 332.16C136 332.16 136.756 332.988 136.756 336.144C136.756 339.408 136 340.272 135.196 340.272C134.356 340.272 133.588 339.42 133.588 336.144ZM135.196 331.632C133.78 331.632 132.424 332.856 132.424 336.144C132.424 339.54 133.78 340.776 135.196 340.776C136.576 340.776 137.932 339.54 137.932 336.144C137.932 332.856 136.576 331.632 135.196 331.632ZM140.654 336.144C140.654 332.988 141.422 332.16 142.262 332.16C143.066 332.16 143.822 332.988 143.822 336.144C143.822 339.408 143.066 340.272 142.262 340.272C141.422 340.272 140.654 339.42 140.654 336.144ZM142.262 331.632C140.846 331.632 139.49 332.856 139.49 336.144C139.49 339.54 140.846 340.776 142.262 340.776C143.642 340.776 144.998 339.54 144.998 336.144C144.998 332.856 143.642 331.632 142.262 331.632ZM147.72 336.144C147.72 332.988 148.488 332.16 149.328 332.16C150.132 332.16 150.888 332.988 150.888 336.144C150.888 339.408 150.132 340.272 149.328 340.272C148.488 340.272 147.72 339.42 147.72 336.144ZM149.328 331.632C147.912 331.632 146.556 332.856 146.556 336.144C146.556 339.54 147.912 340.776 149.328 340.776C150.708 340.776 152.064 339.54 152.064 336.144C152.064 332.856 150.708 331.632 149.328 331.632Z"
                        fill="#8C8C8C"
                    />
                    <path
                        d="M107.745 262.595C108.357 261.971 108.945 261.359 109.293 260.999C111.261 258.947 111.933 258.107 111.933 256.967C111.933 255.599 111.177 254.639 109.485 254.639C108.177 254.639 107.025 255.299 106.845 256.619C106.977 256.871 107.205 257.027 107.481 257.027C107.817 257.027 108.045 256.811 108.201 256.199L108.465 255.239C108.741 255.179 108.981 255.155 109.173 255.155C110.157 255.155 110.781 255.899 110.781 257.027C110.781 258.083 110.181 259.079 108.897 260.543C108.321 261.203 107.625 261.995 106.905 262.799V263.615H112.305V262.595H107.745ZM115.027 259.151C115.027 255.995 115.795 255.167 116.635 255.167C117.439 255.167 118.195 255.995 118.195 259.151C118.195 262.415 117.439 263.279 116.635 263.279C115.795 263.279 115.027 262.427 115.027 259.151ZM116.635 254.639C115.219 254.639 113.863 255.863 113.863 259.151C113.863 262.547 115.219 263.783 116.635 263.783C118.015 263.783 119.371 262.547 119.371 259.151C119.371 255.863 118.015 254.639 116.635 254.639ZM122.093 259.151C122.093 255.995 122.861 255.167 123.701 255.167C124.505 255.167 125.261 255.995 125.261 259.151C125.261 262.415 124.505 263.279 123.701 263.279C122.861 263.279 122.093 262.427 122.093 259.151ZM123.701 254.639C122.285 254.639 120.929 255.863 120.929 259.151C120.929 262.547 122.285 263.783 123.701 263.783C125.081 263.783 126.437 262.547 126.437 259.151C126.437 255.863 125.081 254.639 123.701 254.639ZM129.519 264.059C129.231 265.055 128.559 265.655 127.635 266.123L127.815 266.507C129.015 266.027 130.227 264.803 130.227 263.279C130.227 262.943 130.191 262.667 130.083 262.355C129.795 262.079 129.543 261.995 129.303 261.995C128.811 261.995 128.535 262.355 128.535 262.799C128.535 263.099 128.679 263.435 129.015 263.675L129.519 264.059ZM133.588 259.151C133.588 255.995 134.356 255.167 135.196 255.167C136 255.167 136.756 255.995 136.756 259.151C136.756 262.415 136 263.279 135.196 263.279C134.356 263.279 133.588 262.427 133.588 259.151ZM135.196 254.639C133.78 254.639 132.424 255.863 132.424 259.151C132.424 262.547 133.78 263.783 135.196 263.783C136.576 263.783 137.932 262.547 137.932 259.151C137.932 255.863 136.576 254.639 135.196 254.639ZM140.654 259.151C140.654 255.995 141.422 255.167 142.262 255.167C143.066 255.167 143.822 255.995 143.822 259.151C143.822 262.415 143.066 263.279 142.262 263.279C141.422 263.279 140.654 262.427 140.654 259.151ZM142.262 254.639C140.846 254.639 139.49 255.863 139.49 259.151C139.49 262.547 140.846 263.783 142.262 263.783C143.642 263.783 144.998 262.547 144.998 259.151C144.998 255.863 143.642 254.639 142.262 254.639ZM147.72 259.151C147.72 255.995 148.488 255.167 149.328 255.167C150.132 255.167 150.888 255.995 150.888 259.151C150.888 262.415 150.132 263.279 149.328 263.279C148.488 263.279 147.72 262.427 147.72 259.151ZM149.328 254.639C147.912 254.639 146.556 255.863 146.556 259.151C146.556 262.547 147.912 263.783 149.328 263.783C150.708 263.783 152.064 262.547 152.064 259.151C152.064 255.863 150.708 254.639 149.328 254.639Z"
                        fill="#8C8C8C"
                    />
                    <path
                        d="M107.745 185.601C108.357 184.977 108.945 184.365 109.293 184.005C111.261 181.953 111.933 181.113 111.933 179.973C111.933 178.605 111.177 177.645 109.485 177.645C108.177 177.645 107.025 178.305 106.845 179.625C106.977 179.877 107.205 180.033 107.481 180.033C107.817 180.033 108.045 179.817 108.201 179.205L108.465 178.245C108.741 178.185 108.981 178.161 109.173 178.161C110.157 178.161 110.781 178.905 110.781 180.033C110.781 181.089 110.181 182.085 108.897 183.549C108.321 184.209 107.625 185.001 106.905 185.805V186.621H112.305V185.601H107.745ZM115.315 178.857H119.107V177.825H114.811L114.535 181.929L114.871 182.025C115.291 181.905 115.723 181.857 116.131 181.857C117.391 181.857 118.195 182.625 118.195 184.017C118.195 185.397 117.487 186.285 116.203 186.285C115.915 186.285 115.651 186.249 115.375 186.165L115.159 185.373C115.003 184.737 114.835 184.545 114.451 184.545C114.163 184.545 113.935 184.689 113.827 184.965C114.091 186.177 114.943 186.789 116.275 186.789C118.135 186.789 119.347 185.625 119.347 183.909C119.347 182.145 118.183 181.149 116.479 181.149C115.999 181.149 115.579 181.209 115.147 181.341L115.315 178.857ZM122.093 182.157C122.093 179.001 122.861 178.173 123.701 178.173C124.505 178.173 125.261 179.001 125.261 182.157C125.261 185.421 124.505 186.285 123.701 186.285C122.861 186.285 122.093 185.433 122.093 182.157ZM123.701 177.645C122.285 177.645 120.929 178.869 120.929 182.157C120.929 185.553 122.285 186.789 123.701 186.789C125.081 186.789 126.437 185.553 126.437 182.157C126.437 178.869 125.081 177.645 123.701 177.645ZM129.519 187.065C129.231 188.061 128.559 188.661 127.635 189.129L127.815 189.513C129.015 189.033 130.227 187.809 130.227 186.285C130.227 185.949 130.191 185.673 130.083 185.361C129.795 185.085 129.543 185.001 129.303 185.001C128.811 185.001 128.535 185.361 128.535 185.805C128.535 186.105 128.679 186.441 129.015 186.681L129.519 187.065ZM133.588 182.157C133.588 179.001 134.356 178.173 135.196 178.173C136 178.173 136.756 179.001 136.756 182.157C136.756 185.421 136 186.285 135.196 186.285C134.356 186.285 133.588 185.433 133.588 182.157ZM135.196 177.645C133.78 177.645 132.424 178.869 132.424 182.157C132.424 185.553 133.78 186.789 135.196 186.789C136.576 186.789 137.932 185.553 137.932 182.157C137.932 178.869 136.576 177.645 135.196 177.645ZM140.654 182.157C140.654 179.001 141.422 178.173 142.262 178.173C143.066 178.173 143.822 179.001 143.822 182.157C143.822 185.421 143.066 186.285 142.262 186.285C141.422 186.285 140.654 185.433 140.654 182.157ZM142.262 177.645C140.846 177.645 139.49 178.869 139.49 182.157C139.49 185.553 140.846 186.789 142.262 186.789C143.642 186.789 144.998 185.553 144.998 182.157C144.998 178.869 143.642 177.645 142.262 177.645ZM147.72 182.157C147.72 179.001 148.488 178.173 149.328 178.173C150.132 178.173 150.888 179.001 150.888 182.157C150.888 185.421 150.132 186.285 149.328 186.285C148.488 186.285 147.72 185.433 147.72 182.157ZM149.328 177.645C147.912 177.645 146.556 178.869 146.556 182.157C146.556 185.553 147.912 186.789 149.328 186.789C150.708 186.789 152.064 185.553 152.064 182.157C152.064 178.869 150.708 177.645 149.328 177.645Z"
                        fill="#8C8C8C"
                    />
                    <path
                        d="M108.645 101.24C108.885 101.18 109.101 101.168 109.281 101.168C110.313 101.168 110.913 101.768 110.913 102.86C110.913 104.036 110.169 104.696 108.993 104.696H108.477V105.284H109.101C110.457 105.284 111.141 106.052 111.141 107.276C111.141 108.464 110.421 109.292 109.161 109.292C108.921 109.292 108.669 109.268 108.405 109.196L108.189 108.416C108.033 107.816 107.877 107.552 107.469 107.552C107.193 107.552 106.977 107.684 106.833 107.972C107.073 109.244 108.045 109.796 109.353 109.796C111.105 109.796 112.293 108.74 112.293 107.3C112.293 106.124 111.621 105.248 110.157 104.984C111.357 104.612 112.017 103.808 112.017 102.8C112.017 101.516 111.057 100.652 109.533 100.652C108.321 100.652 107.313 101.204 107.073 102.344C107.193 102.68 107.409 102.8 107.685 102.8C108.105 102.8 108.285 102.548 108.429 102.008L108.645 101.24ZM115.027 105.164C115.027 102.008 115.795 101.18 116.635 101.18C117.439 101.18 118.195 102.008 118.195 105.164C118.195 108.428 117.439 109.292 116.635 109.292C115.795 109.292 115.027 108.44 115.027 105.164ZM116.635 100.652C115.219 100.652 113.863 101.876 113.863 105.164C113.863 108.56 115.219 109.796 116.635 109.796C118.015 109.796 119.371 108.56 119.371 105.164C119.371 101.876 118.015 100.652 116.635 100.652ZM122.093 105.164C122.093 102.008 122.861 101.18 123.701 101.18C124.505 101.18 125.261 102.008 125.261 105.164C125.261 108.428 124.505 109.292 123.701 109.292C122.861 109.292 122.093 108.44 122.093 105.164ZM123.701 100.652C122.285 100.652 120.929 101.876 120.929 105.164C120.929 108.56 122.285 109.796 123.701 109.796C125.081 109.796 126.437 108.56 126.437 105.164C126.437 101.876 125.081 100.652 123.701 100.652ZM129.519 110.072C129.231 111.068 128.559 111.668 127.635 112.136L127.815 112.52C129.015 112.04 130.227 110.816 130.227 109.292C130.227 108.956 130.191 108.68 130.083 108.368C129.795 108.092 129.543 108.008 129.303 108.008C128.811 108.008 128.535 108.368 128.535 108.812C128.535 109.112 128.679 109.448 129.015 109.688L129.519 110.072ZM133.588 105.164C133.588 102.008 134.356 101.18 135.196 101.18C136 101.18 136.756 102.008 136.756 105.164C136.756 108.428 136 109.292 135.196 109.292C134.356 109.292 133.588 108.44 133.588 105.164ZM135.196 100.652C133.78 100.652 132.424 101.876 132.424 105.164C132.424 108.56 133.78 109.796 135.196 109.796C136.576 109.796 137.932 108.56 137.932 105.164C137.932 101.876 136.576 100.652 135.196 100.652ZM140.654 105.164C140.654 102.008 141.422 101.18 142.262 101.18C143.066 101.18 143.822 102.008 143.822 105.164C143.822 108.428 143.066 109.292 142.262 109.292C141.422 109.292 140.654 108.44 140.654 105.164ZM142.262 100.652C140.846 100.652 139.49 101.876 139.49 105.164C139.49 108.56 140.846 109.796 142.262 109.796C143.642 109.796 144.998 108.56 144.998 105.164C144.998 101.876 143.642 100.652 142.262 100.652ZM147.72 105.164C147.72 102.008 148.488 101.18 149.328 101.18C150.132 101.18 150.888 102.008 150.888 105.164C150.888 108.428 150.132 109.292 149.328 109.292C148.488 109.292 147.72 108.44 147.72 105.164ZM149.328 100.652C147.912 100.652 146.556 101.876 146.556 105.164C146.556 108.56 147.912 109.796 149.328 109.796C150.708 109.796 152.064 108.56 152.064 105.164C152.064 101.876 150.708 100.652 149.328 100.652Z"
                        fill="#8C8C8C"
                    />
                    <path
                        d="M130.252 650.904C130.73 651.672 131.342 652.725 131.732 653.588L130.727 654.432C131.24 653.625 130.43 652.112 127.813 652.951L130.252 650.904ZM137.615 648.378L136.316 649.469L134.3 647.067C135.227 646.08 136.093 644.997 136.594 644.2C137.114 643.973 137.34 643.72 137.374 643.462L134.414 643.544C134.38 644.325 134.172 645.545 133.85 646.63L131.763 647.504L134.747 651.058C133.888 651.006 132.753 650.997 132.753 650.997L132.884 652.621L132.112 653.27C132.268 652.261 132.342 651.155 132.331 650.37C132.621 650.168 132.674 649.957 132.599 649.769L130.582 650.626L132.212 649.258C132.384 649.114 132.455 648.95 132.379 648.784C131.532 648.722 130.18 648.728 130.18 648.728L130.294 650.283L129.657 650.818C130.051 649.819 129.012 648.456 126.435 650.264L126.401 650.397C127.032 650.577 127.835 651.011 128.349 651.624C128.496 651.625 128.623 651.602 128.75 651.579L126.422 653.534L126.808 653.795L127.568 653.157C128.237 653.556 129.081 654.163 129.62 654.881C129.879 654.915 130.098 654.877 130.286 654.802L128.448 656.346L128.834 656.606L130.942 654.837L132.145 656.271L130.197 657.906L130.583 658.167L132.433 656.614L133.143 657.46L131.594 657.904C132.327 659.001 133.29 660.845 133.603 662.338L133.828 662.358C134.172 661.025 134.105 659.576 133.904 658.366L136.579 661.553L136.885 661.296C137.755 660.565 138.011 659.849 137.939 659.763L134.729 655.94C135.515 656.304 136.392 656.925 136.952 657.667C139.005 657.824 138.497 654.281 134.56 655.664L134.534 655.707L134.112 655.205L135.987 653.631C136.158 653.487 136.23 653.322 136.153 653.157C135.319 653.084 133.992 653.07 133.992 653.07L134.118 654.615L133.824 654.861L132.62 653.428L134.863 651.545C134.924 651.494 134.975 651.43 135.014 651.376L135.261 651.671C137.143 653.913 138.92 656.328 138.888 659.426L139.101 659.456C140.827 655.291 138.867 652.508 137.005 650.29L136.604 649.812L137.425 649.122L143.206 656.01L143.525 655.742C144.419 654.991 144.625 654.192 144.555 654.083L139.165 647.662L140.023 646.941C140.195 646.797 140.29 646.613 140.202 646.457C139.163 646.389 137.459 646.4 137.459 646.4L137.615 648.378ZM149.273 645.966L142.628 638.049C142.93 637.712 142.902 637.505 142.783 637.313L140.425 638.958L143.614 642.757L140.893 645.041L141.291 645.292L143.902 643.101L147.759 647.696C146.59 648.991 145.586 650.085 145.061 650.629L147.738 652.101C147.866 651.931 147.9 651.672 147.84 651.451C149.155 648.488 149.879 646.439 150.224 645.084L150.119 644.984L149.273 645.966ZM154.302 639.738L154.192 639.831C154.585 640.796 154.946 641.725 154.991 642.127C154.994 642.354 154.892 642.481 154.767 642.607C154.618 642.753 154.398 642.938 154.153 643.144L153.368 643.802C153.037 644.08 152.855 644.087 152.619 643.805L148.689 639.123L151.667 636.623C151.838 636.479 151.91 636.315 151.833 636.15C150.968 635.915 149.388 635.675 149.388 635.675L149.798 637.607L148.401 638.78L145.685 635.545C145.951 635.239 145.948 635.011 145.826 634.842L143.437 636.45L151.307 645.825C152.356 647.075 153.04 647.044 154.388 645.913L155.429 645.038C157.39 643.392 157.729 642.502 157.102 641.754C156.844 641.448 156.524 641.34 155.896 641.513L154.302 639.738ZM153.425 627.668C154.163 627.801 155.168 628.127 155.891 628.69C158.493 628.281 157.263 623.904 153.447 627.545L153.425 627.668ZM159.906 625.758L150.936 633.289L151.322 633.55L156.089 629.548L157.447 631.165L155.927 632.441L153.433 633.302L158.957 639.883L159.214 639.667C159.962 639.04 160.405 637.999 160.25 637.816L156.105 632.877L157.735 631.509L163.835 638.776L164.19 638.478C165.146 637.675 165.389 636.845 165.308 636.724L159.61 629.935L161.203 628.597L164.206 632.176C164.32 632.311 164.332 632.425 164.161 632.569C163.879 632.806 162.931 633.518 162.931 633.518L163.054 633.665C163.688 633.3 164.047 633.354 164.412 633.466C164.787 633.589 165.165 633.94 165.663 634.483C167.367 632.781 167.088 631.95 166.162 630.847L163.241 627.367C163.457 627.102 163.511 626.868 163.515 626.698L160.834 626.839L160.792 628.357L159.322 629.591L157.964 627.974L162.559 624.116C162.743 623.962 162.826 623.787 162.75 623.622C161.615 623.613 159.835 623.708 159.835 623.708L159.906 625.758ZM175.618 614.887C175.802 614.733 175.873 614.568 175.797 614.403C174.86 614.332 173.361 614.338 173.361 614.338L173.492 616.087L172.855 616.622L170.736 614.097C171.038 613.76 171.011 613.553 170.891 613.361L168.547 614.974L171.139 618.062L169.546 619.399C168.677 619.335 167.522 619.302 167.522 619.302L167.659 620.859L165.581 618.383C165.883 618.046 165.866 617.852 165.736 617.647L163.392 619.26L166.005 622.372L164.154 623.926L164.54 624.187L166.195 622.798C167.45 624.94 168.461 627.414 168.597 629.618L168.835 629.627C169.14 628.472 169.263 627.325 169.224 626.208L173.144 630.878L173.487 630.59C174.136 630.044 174.571 629.094 174.458 628.959L168.852 622.28C169.556 622.671 170.312 623.248 170.818 623.951C173.14 624.154 172.7 620.22 168.554 621.925L168.008 621.275L169.65 619.897C169.712 619.845 169.763 619.782 169.801 619.728L169.834 619.743L171.109 618.673C172.564 621.253 173.591 624.318 173.452 627.088L173.689 627.098C174.267 625.297 174.465 623.543 174.308 621.837L178.268 626.555L178.599 626.277C179.236 625.742 179.623 624.686 179.479 624.514L173.143 616.965L173.18 616.934C175.388 619.092 177.865 621.148 180.053 621.589C179.361 620.54 179.089 619.494 179.367 618.258L179.243 618.111C177.553 618.486 175.378 618.035 173.413 616.739L175.618 614.887ZM184.496 617.127L178.736 610.264L184.03 605.82L189.79 612.683L184.496 617.127ZM183.607 603.773L183.583 605.611L178.595 609.798L175.868 610.729L184.323 620.803L184.63 620.546C185.438 619.867 185.854 618.745 185.659 618.512L184.784 617.47L190.078 613.026L191.272 614.448L191.553 614.211C192.264 613.614 192.844 612.438 192.765 612.295L186.336 604.636C186.63 604.264 186.692 603.94 186.691 603.69L183.607 603.773ZM204.374 601.338L204.252 601.441C204.026 601.819 203.781 602.149 203.593 602.349C203.393 602.559 203.079 602.906 202.844 603.124C202.485 603.467 201.672 604.191 200.827 604.901L197.971 607.298C196.991 608.121 196.5 608.283 196.037 607.731L189.567 600.023L189.268 599.667L197.65 592.631C197.822 592.487 197.905 592.312 197.829 592.147C196.856 592.107 195.309 592.131 195.309 592.131L195.414 593.923L186.848 601.114L187.234 601.375L187.639 601.036L194.603 609.332C195.899 610.876 197.08 610.219 199.225 608.418L201.774 606.279C205.965 602.76 206.699 601.893 206.041 601.109C205.814 600.839 205.402 600.746 204.468 601.301L204.374 601.338ZM201.373 601.894L199.645 599.835L200.319 599.269L202.047 601.328L201.373 601.894ZM203.065 602.019C203.531 601.628 204.04 600.741 203.98 600.645L201.933 598.206C202.099 598.005 202.161 597.806 202.161 597.681L200.004 597.799L199.921 599.019L199.406 599.451L197.44 600.119L200.844 604.176L201.053 604.001C201.641 603.507 202.021 602.666 201.908 602.531L201.661 602.237L202.335 601.671L202.808 602.235L203.065 602.019ZM197.329 605.289L195.601 603.23L196.226 602.705L197.954 604.764L197.329 605.289ZM199.001 605.514C199.467 605.123 199.962 604.269 199.902 604.173L197.804 601.673C197.969 601.472 198.021 601.261 198.021 601.136L195.909 601.258L195.828 602.455L195.35 602.856L193.42 603.494L196.99 607.746L197.186 607.582C197.774 607.088 198.142 606.257 198.039 606.134L197.617 605.632L198.242 605.107L198.756 605.72L199.001 605.514ZM195.108 600.029L193.617 598.252L195.651 596.545L197.142 598.322L195.108 600.029ZM197.924 599.253L198.218 599.006C198.745 598.564 199.354 597.572 199.294 597.476L197.525 595.368C197.717 595.124 197.769 594.913 197.771 594.765L195.317 594.903L195.24 596.304L193.39 597.858L191.129 598.649L194.431 602.583L194.664 602.387C195.338 601.821 195.787 600.838 195.664 600.691L195.396 600.373L197.43 598.665L197.924 599.253Z"
                        fill="#C4A657"
                    />
                    <path
                        d="M232.894 637.751C233.023 637.643 233.067 637.528 233.01 637.403C232.469 637.356 231.633 637.368 231.633 637.368L231.687 638.31L231.062 638.835L230.136 637.732L231.947 636.212C232.075 636.104 232.129 635.98 232.062 635.864C231.495 635.823 230.599 635.838 230.599 635.838L230.666 636.832L229.986 637.403C230.023 636.683 229.999 635.888 229.92 635.328C230.128 635.184 230.177 635.018 230.121 634.877L228.84 635.404L229.961 634.462C230.09 634.354 230.143 634.231 230.086 634.107C229.519 634.066 228.674 634.086 228.674 634.086L228.717 635.052L227.982 635.67C228.437 635.147 227.802 634.018 225.933 635.039L225.887 635.171C226.383 635.257 227.049 635.528 227.443 635.887C227.614 635.884 227.746 635.836 227.844 635.785L225.73 637.56L226.027 637.765L226.689 637.209L226.637 637.316C227.188 637.543 227.936 637.949 228.355 638.428C229.487 638.527 229.196 636.593 226.726 637.178L228.748 635.481C229.079 636.08 229.474 636.924 229.747 637.604L227.274 639.68L227.571 639.885L229.3 638.434L230.225 639.537L228.571 640.926L228.868 641.131L230.449 639.804L231.028 640.493L229.803 640.863C230.285 641.68 230.866 643.026 231.018 644.121L231.196 644.128C231.422 642.998 231.234 641.746 230.997 640.848C231.087 640.788 231.152 640.734 231.19 640.686L233.427 643.352L233.574 643.228C233.997 642.873 234.125 642.484 234.079 642.429L231.286 639.101L232.894 637.751ZM231.799 639.47C232.454 639.672 233.294 640.094 233.765 640.655C234.951 640.725 234.511 638.65 231.853 639.33L231.799 639.47ZM234.353 633.534L232.726 634.9L231.121 632.988C231.885 632.143 232.617 631.167 233.052 630.473C233.37 630.347 233.52 630.19 233.535 630.021L231.939 630.06C231.789 630.703 231.407 631.76 230.971 632.659L229.789 633.118L232.358 636.179C233.747 637.834 235.006 639.614 234.989 641.853L235.201 641.863C235.995 639.112 234.562 637.087 233.219 635.488L232.949 635.166L234.043 634.248L238.279 639.294L238.426 639.171C238.858 638.808 238.964 638.375 238.918 638.319L234.898 633.53L235.799 632.774C235.928 632.666 235.99 632.535 235.924 632.419C235.287 632.389 234.29 632.395 234.29 632.395L234.353 633.534ZM239.881 627.576C240.001 627.476 240.054 627.353 239.997 627.228C239.405 627.177 238.474 627.206 238.474 627.206L238.527 628.259L237.249 629.331C237.082 628.61 236.849 627.865 236.541 627.106C236.751 626.945 236.791 626.77 236.728 626.619L235.192 627.329C236.296 629.223 237.037 631.374 237.244 633.002L237.442 632.977C237.598 631.968 237.558 630.875 237.326 629.721L237.648 629.451L242.74 635.518L242.896 635.387C243.356 635.001 243.486 634.578 243.44 634.523L238.548 628.695L239.881 627.576ZM242.709 624.748L240.871 626.291C240.739 625.555 240.523 624.812 240.241 624.047C240.46 623.878 240.5 623.703 240.445 623.562L238.808 624.262C239.884 626.179 240.54 628.324 240.67 629.954L240.859 629.936C241.083 628.933 241.11 627.845 240.938 626.689L241.876 625.902L245.965 630.774C246.073 630.902 246.074 630.996 245.917 631.127C245.706 631.305 244.687 632.051 244.687 632.051L244.795 632.179C245.318 631.85 245.631 631.775 245.884 631.797C246.146 631.829 246.386 632.003 246.627 632.271C247.634 631.269 247.42 630.696 246.888 630.062L242.767 625.153L244.109 624.027C244.238 623.919 244.301 623.788 244.234 623.671C243.607 623.634 242.668 623.654 242.668 623.654L242.709 624.748ZM248.432 619.395C249.321 618.195 250.091 616.686 250.407 615.7C250.703 615.53 250.827 615.379 250.823 615.225L249.391 615.441C249.34 616.407 248.879 618.079 248.269 619.313L248.432 619.395ZM247.644 623.739L249.243 622.396L250.015 623.315L248.416 624.658L247.644 623.739ZM246.589 619.234L247.245 620.015L245.646 621.358L244.99 620.577L246.589 619.234ZM248.372 621.357L249.02 622.13L247.42 623.472L246.772 622.7L248.372 621.357ZM248.148 621.091L246.548 622.434L245.869 621.625L247.469 620.282L248.148 621.091ZM251.636 622.409C251.755 622.309 251.809 622.186 251.742 622.069C251.269 622.028 250.559 622.06 250.559 622.06L250.573 622.487L247.425 618.736C247.569 618.553 247.636 618.371 247.646 618.253L246.286 618.313L246.274 619.045L244.886 620.21L243.73 620.569L247.68 625.275L247.064 625.792L247.362 625.997L249.071 624.562L249.581 625.169L248.269 625.753C248.821 626.747 249.266 627.893 249.44 628.734L249.638 628.709C249.81 627.812 249.718 626.714 249.412 625.64C249.586 625.493 249.635 625.327 249.604 625.196L251.864 627.89L252.002 627.774C252.407 627.434 252.531 627.079 252.501 627.042L249.862 623.898L251.636 622.409ZM250.384 624.165C250.982 624.337 251.782 624.731 252.207 625.236C253.324 625.317 252.944 623.333 250.439 624.025L250.384 624.165ZM253.136 618.596C253.491 618.721 253.911 618.885 254.31 619.099C253.457 619.893 252.65 620.649 252.059 621.177C252.591 619.758 253.054 617.975 253.162 616.835C253.393 616.719 253.46 616.537 253.437 616.416L251.973 616.688C252.03 617.111 252.038 617.699 252.007 618.353C251.434 618.865 250.897 619.363 250.463 619.743C250.807 618.827 251.091 617.727 251.183 616.96C251.399 616.826 251.457 616.652 251.432 616.547L249.998 616.874C250.147 617.611 250.185 619.224 249.873 620.066C249.838 620.174 249.686 620.348 249.686 620.348L250.899 620.897C250.942 620.798 250.946 620.654 250.901 620.488C251.306 619.944 251.668 619.405 251.954 618.961C251.882 619.884 251.704 620.848 251.45 621.515C251.396 621.639 251.234 621.837 251.234 621.837L252.447 622.386L252.468 622.337C252.868 623.224 253.316 624.634 253.387 625.765L253.59 625.783C253.83 624.594 253.735 623.248 253.559 622.33C253.811 622.182 253.838 622.065 253.816 621.926L252.499 622.28C252.505 622.212 252.512 622.128 252.495 622.033C252.755 621.689 253.013 621.362 253.255 621.034L255.199 623.351C255.292 623.461 255.294 623.538 255.147 623.661C254.963 623.816 254.143 624.425 254.143 624.425L254.251 624.554C254.693 624.278 254.954 624.215 255.158 624.216C255.361 624.234 255.552 624.387 255.748 624.583C256.625 623.705 256.477 623.249 256.014 622.698L253.9 620.179C254.162 619.818 254.376 619.513 254.578 619.25C254.861 619.419 255.108 619.62 255.294 619.824C256.489 619.902 255.999 617.807 253.2 618.448L253.136 618.596ZM254.632 620.584C255.464 620.903 256.549 621.45 257.162 622.142C258.482 622.24 257.893 619.914 254.703 620.445L254.632 620.584ZM258.265 612.143C258.384 612.043 258.437 611.92 258.38 611.796C257.788 611.744 256.857 611.774 256.857 611.774L256.91 612.826L255.633 613.899C255.466 613.177 255.233 612.432 254.924 611.673C255.134 611.512 255.175 611.337 255.111 611.187L253.576 611.896C254.68 613.79 255.42 615.942 255.627 617.57L255.826 617.544C255.982 616.536 255.941 615.442 255.709 614.289L256.031 614.018L261.123 620.085L261.28 619.954C261.739 619.568 261.87 619.145 261.824 619.09L256.932 613.262L258.265 612.143ZM261.093 609.315L259.254 610.858C259.123 610.123 258.906 609.38 258.624 608.614C258.843 608.446 258.884 608.27 258.828 608.129L257.191 608.83C258.267 610.747 258.923 612.891 259.054 614.521L259.243 614.503C259.466 613.501 259.493 612.413 259.322 611.256L260.259 610.469L264.349 615.341C264.457 615.47 264.457 615.563 264.301 615.694C264.089 615.872 263.07 616.618 263.07 616.618L263.178 616.747C263.701 616.417 264.014 616.342 264.268 616.365C264.529 616.396 264.769 616.57 265.01 616.838C266.017 615.836 265.803 615.263 265.271 614.629L261.151 609.72L262.493 608.594C262.622 608.486 262.684 608.355 262.618 608.238C261.991 608.201 261.052 608.221 261.052 608.221L261.093 609.315ZM270.475 609.274L265.259 603.06C265.476 602.815 265.472 602.661 265.383 602.517L264.088 603.4L266.387 606.14L264.098 608.061L264.405 608.258L266.611 606.406L269.743 610.138C268.802 611.257 267.996 612.201 267.556 612.648L268.971 613.419C269.057 613.316 269.072 613.146 269.025 612.998C270.118 611.014 270.815 609.567 271.288 608.544L271.177 608.449L270.475 609.274ZM274.426 604.499L274.334 604.576C274.673 605.279 275.013 605.981 275.052 606.215C275.074 606.353 275.025 606.425 274.931 606.519C274.837 606.63 274.588 606.839 274.276 607.101L273.541 607.718C273.219 607.988 273.076 607.967 272.891 607.747L269.635 603.868L271.997 601.884C272.126 601.776 272.17 601.661 272.113 601.537C271.568 601.43 270.646 601.358 270.646 601.358L270.817 602.42L269.411 603.601L267.443 601.257C267.642 601.027 267.64 600.857 267.558 600.722L266.248 601.587L272.227 608.711C272.798 609.391 273.224 609.394 274.051 608.7L274.906 607.982C276.34 606.779 276.595 606.298 276.271 605.912C276.14 605.756 275.973 605.707 275.622 605.83L274.426 604.499ZM273.726 595.058C274.328 595.086 275.171 595.287 275.692 595.665C277.072 595.461 276.288 593.127 273.745 594.932L273.726 595.058ZM278.681 593.421L271.742 599.247L272.048 599.444L275.762 596.327L276.803 597.568L275.121 598.98L273.852 599.371L277.74 604.004L277.878 603.889C278.237 603.588 278.452 603.078 278.375 602.986L275.281 599.3L277.027 597.834L281.425 603.074L281.59 602.935C282.05 602.549 282.181 602.126 282.119 602.052L277.937 597.07L279.683 595.604L282.098 598.481C282.199 598.601 282.199 598.695 282.043 598.826C281.831 599.003 280.967 599.635 280.967 599.635L281.083 599.773C281.543 599.481 281.837 599.421 282.074 599.442C282.292 599.478 282.508 599.642 282.759 599.885C283.73 598.913 283.567 598.439 283.058 597.832L280.697 595.02C280.85 594.829 280.918 594.63 280.929 594.512L279.38 594.589L279.368 595.415L277.713 596.804L276.672 595.563L280.256 592.553C280.394 592.438 280.448 592.314 280.39 592.19C279.702 592.173 278.659 592.218 278.659 592.218L278.681 593.421Z"
                        fill="#656565"
                    />
                    <path
                        d="M315.359 640.25L314.449 639.165L316.186 637.707L317.096 638.792L315.359 640.25ZM317.112 637.149C317.246 636.973 317.304 636.799 317.298 636.68L315.935 636.774L315.879 637.51L314.262 638.868L313.123 639.229L315.26 641.775L315.379 641.675C315.701 641.404 315.922 640.921 315.861 640.848L315.583 640.517L317.32 639.058L317.698 639.509L317.836 639.393C318.103 639.169 318.36 638.655 318.316 638.583L317.112 637.149ZM317.021 634.875L311.598 639.428L310.344 639.838L314.063 644.269L314.201 644.153C314.55 643.86 314.757 643.341 314.695 643.267L311.748 639.756L317.336 635.064L319.589 637.749C319.69 637.868 319.707 637.963 319.551 638.094C319.339 638.272 318.466 638.911 318.466 638.911L318.574 639.04C319.034 638.748 319.321 638.679 319.548 638.708C319.785 638.728 319.976 638.881 320.227 639.125C321.189 638.161 321.034 637.696 320.54 637.107L318.341 634.488C318.503 634.289 318.571 634.09 318.573 633.98L317.041 634.059L317.021 634.875ZM312.037 637.319L311.135 636.244L313.929 633.898L314.832 634.974L312.037 637.319ZM315.534 635.512C315.81 635.28 316.12 634.754 316.083 634.691L314.933 633.321C315.086 633.13 315.155 632.932 315.157 632.804L313.65 632.894L313.613 633.709L310.966 635.931L309.747 636.327L311.807 638.782L311.927 638.681C312.276 638.388 312.5 637.871 312.439 637.797L312.261 637.586L315.055 635.24L315.387 635.635L315.534 635.512ZM314.056 631.66L311.887 633.481C311.983 632.868 311.108 632.161 309.476 633.484L309.456 633.61C310.022 633.574 310.795 633.693 311.253 634.014L307.282 637.347L307.579 637.552L315.64 630.785C315.778 630.669 315.831 630.546 315.774 630.422C315.093 630.413 314.056 630.485 314.056 630.485L314.056 631.66ZM321.278 623.67C321.886 623.833 322.636 624.223 323.049 624.753C324.319 624.847 323.944 622.607 321.333 623.53L321.278 623.67ZM321.215 627.327C321.334 627.227 321.388 627.104 321.33 626.979C320.746 626.937 319.858 626.962 319.858 626.962L319.916 627.963L319.125 628.627C318.751 628.032 318.373 627.488 318.024 626.997C318.269 626.729 318.265 626.576 318.184 626.424L316.828 627.421C317.297 627.999 317.796 628.63 318.298 629.321L316.974 630.433L317.271 630.637L318.494 629.611C319.973 631.691 321.401 634.175 321.933 636.471L322.125 636.419C322.024 633.761 320.69 631.089 319.312 628.924L321.215 627.327ZM322.521 631.59C323.036 631.831 323.637 632.173 324.191 632.553C323.703 633.167 323.209 633.754 322.831 634.181C322.578 632.685 321.99 630.641 321.444 629.281C321.63 629.11 321.663 628.925 321.598 628.792L320.244 629.474C321.013 630.709 322.179 633.162 322.465 634.379C322.463 634.49 322.289 634.73 322.289 634.73L323.587 635.38C323.666 635.251 323.675 635.055 323.602 634.819C323.949 634.057 324.237 633.299 324.439 632.737C324.775 632.988 325.076 633.253 325.315 633.537C326.624 633.66 325.914 631.358 322.611 631.436L322.521 631.59ZM325.516 630.062L326.389 629.329L327.832 631.048L326.959 631.781L325.516 630.062ZM323.288 625.634L324.607 627.206L323.734 627.939L322.414 626.367L323.288 625.634ZM326.166 629.063L325.292 629.796L323.957 628.206L324.831 627.472L326.166 629.063ZM329.073 630.007L328.613 630.392L327.171 628.673L328.494 627.562C328.623 627.454 328.667 627.339 328.61 627.215C328.076 627.177 327.259 627.173 327.259 627.173L327.314 628.098L326.947 628.407L325.612 626.817L326.89 625.744C327.018 625.636 327.072 625.513 327.005 625.396C326.473 625.341 325.647 625.346 325.647 625.346L325.719 626.272L325.388 626.55L324.069 624.978L325.494 623.782C325.622 623.674 325.676 623.551 325.618 623.427C325.042 623.393 324.162 623.427 324.162 623.427L324.213 624.403L322.31 626L322.117 626.068C321.933 625.439 321.728 624.859 321.516 624.363C321.755 624.163 321.767 624.027 321.711 623.886L320.202 624.589C321.053 625.959 322.16 628.21 322.518 630.056L322.706 630.056C322.739 629.479 322.706 628.88 322.622 628.276L326.959 633.442L327.106 633.319C327.51 632.979 327.615 632.563 327.568 632.508L327.183 632.048L330.381 629.363C330.51 629.255 330.563 629.131 330.506 629.007C329.922 628.965 329.008 628.996 329.008 628.996L329.073 630.007ZM327.897 618.208C328.499 618.235 329.342 618.436 329.863 618.814C331.243 618.61 330.459 616.276 327.916 618.082L327.897 618.208ZM332.852 616.57L325.913 622.396L326.219 622.593L329.933 619.476L330.974 620.717L329.292 622.129L328.023 622.521L331.912 627.154L332.049 627.038C332.408 626.737 332.623 626.227 332.546 626.135L329.452 622.449L331.198 620.983L335.596 626.223L335.761 626.084C336.221 625.698 336.352 625.275 336.29 625.202L332.108 620.219L333.854 618.753L336.269 621.63C336.37 621.75 336.37 621.844 336.214 621.975C336.002 622.152 335.138 622.784 335.138 622.784L335.254 622.922C335.714 622.63 336.008 622.57 336.245 622.591C336.463 622.627 336.679 622.791 336.931 623.034C337.901 622.063 337.738 621.588 337.229 620.982L334.868 618.169C335.021 617.978 335.089 617.779 335.1 617.661L333.551 617.739L333.539 618.564L331.884 619.953L330.843 618.712L334.427 615.702C334.565 615.587 334.619 615.464 334.561 615.339C333.873 615.322 332.83 615.367 332.83 615.367L332.852 616.57ZM338.613 612.831L343.513 608.718C343.66 608.594 343.713 608.471 343.656 608.347C342.969 608.313 341.912 608.323 341.912 608.323L341.97 609.512L338.293 612.598L338.613 612.831ZM335.781 611.51C336.845 613.673 337.536 616.195 337.676 618.005L337.865 617.987C337.993 617.3 338.057 616.573 338.046 615.814L342.151 620.704L342.317 620.565C342.657 620.28 342.853 619.786 342.81 619.697L338.281 614.301C338.415 614.125 338.452 614.001 338.419 613.887L337.9 614.072C337.757 613.173 337.548 612.252 337.23 611.313C337.44 611.152 337.497 610.978 337.442 610.837L335.781 611.51ZM346.916 614.62L342.412 618.401L342.741 618.626L348.486 613.803C348.633 613.68 348.687 613.557 348.629 613.432C347.935 613.389 346.867 613.423 346.867 613.423L346.916 614.62ZM349.641 600.674C350.215 600.631 351.05 600.729 351.552 601.029C352.747 600.809 351.976 598.808 349.653 600.539L349.641 600.674ZM348.495 603.062C348.633 602.946 348.687 602.823 348.629 602.699C348.01 602.67 347.071 602.691 347.071 602.691L347.104 603.775L344.788 605.72L345.085 605.925L348.495 603.062ZM350.611 607.617L352.164 606.313C352.293 606.205 352.337 606.089 352.279 605.965C351.697 605.906 350.795 605.895 350.795 605.895L350.892 606.926L350.387 607.35L349.129 605.852C349.31 605.638 349.322 605.502 349.23 605.375L348.007 606.214L351.541 610.424L350.784 611.295L348.183 608.197C348.353 608.007 348.357 607.863 348.283 607.737L347.132 608.531L350.095 612.061C349.764 612.433 349.49 612.741 349.284 612.961L350.658 613.516C350.727 613.411 350.757 613.26 350.71 613.112C352.338 610.664 353.39 608.95 354.103 607.709L353.962 607.577C353.382 608.268 352.811 608.95 352.262 609.584L350.611 607.617ZM356.541 604.378L356.415 604.452C356.592 604.961 356.791 605.609 356.855 605.947C356.902 606.19 356.855 606.245 356.601 606.223C354.71 606.228 352.871 604.952 351.149 603.2L353.53 601.201C353.659 601.093 353.721 600.963 353.664 600.838C352.992 600.822 351.982 600.887 351.982 600.887L352.001 602.031L350.907 602.949C350.323 602.327 349.75 601.664 349.196 600.985C349.395 600.755 349.385 600.575 349.294 600.448L347.945 601.361C348.64 602.189 349.339 602.965 350.034 603.682L345.08 607.841L345.377 608.046L350.276 603.933C352.353 605.997 354.46 607.425 356.803 607.527C357.514 607.572 358.461 607.356 358.525 606.723C358.546 606.486 358.308 606.278 357.605 606.038L356.541 604.378ZM366.114 598.628L366.004 598.721C365.893 598.924 365.766 599.109 365.663 599.211C365.55 599.337 365.408 599.504 365.232 599.667C364.962 599.925 364.205 600.591 363.305 601.348L361.007 603.277C360.133 604.01 359.806 604.049 359.467 603.645L354.498 597.725L354.297 597.486L360.787 592.038C360.915 591.93 360.969 591.807 360.911 591.683C360.3 591.664 359.378 591.685 359.378 591.685L359.405 592.744L352.851 598.246L353.148 598.451L353.498 598.157L358.752 604.417C359.547 605.364 360.246 605.059 361.662 603.871L363.794 602.08C366.855 599.511 367.373 598.951 367.002 598.51C366.871 598.354 366.66 598.327 366.176 598.608L366.114 598.628ZM363.317 599.253L361.998 597.681L363.036 596.809L364.356 598.381L363.317 599.253ZM365.038 598.952C365.287 598.744 365.532 598.271 365.495 598.208L363.875 596.278C363.999 596.127 364.066 595.945 364.066 595.851L362.766 595.908L362.73 596.612L361.82 597.376L360.769 597.71L363.214 600.624L363.325 600.532C363.619 600.285 363.826 599.86 363.765 599.786L363.541 599.52L364.58 598.648L364.919 599.052L365.038 598.952ZM360.238 601.838L358.919 600.266L359.93 599.417L361.249 600.989L360.238 601.838ZM361.963 601.597C362.211 601.388 362.446 600.94 362.401 600.868L360.734 598.883C360.866 598.741 360.915 598.575 360.914 598.481L359.674 598.535L359.623 599.22L358.732 599.969L357.689 600.295L360.251 603.347L360.361 603.254C360.665 603 360.847 602.564 360.793 602.5L360.462 602.105L361.473 601.256L361.843 601.697L361.963 601.597ZM358.675 597.885L357.541 596.534L359.655 594.759L360.789 596.11L358.675 597.885ZM361.345 596.772L361.482 596.657C361.749 596.433 362.033 595.912 361.988 595.84L360.592 594.176C360.726 594.001 360.784 593.827 360.785 593.716L359.382 593.781L359.339 594.57L357.363 596.229L356.189 596.603L358.511 599.37L358.631 599.27C358.971 598.984 359.192 598.501 359.13 598.428L358.899 598.152L361.013 596.377L361.345 596.772Z"
                        fill="#656565"
                    />
                    <path
                        d="M396.386 637.751C396.515 637.643 396.559 637.528 396.502 637.403C395.961 637.356 395.125 637.368 395.125 637.368L395.179 638.31L394.554 638.835L393.628 637.732L395.439 636.212C395.568 636.104 395.621 635.98 395.554 635.864C394.987 635.823 394.092 635.838 394.092 635.838L394.158 636.832L393.478 637.403C393.515 636.683 393.491 635.888 393.412 635.328C393.621 635.184 393.669 635.018 393.613 634.877L392.332 635.404L393.454 634.462C393.582 634.354 393.636 634.231 393.578 634.107C393.011 634.066 392.166 634.086 392.166 634.086L392.21 635.052L391.474 635.67C391.929 635.147 391.295 634.018 389.425 635.039L389.38 635.171C389.875 635.257 390.541 635.528 390.936 635.887C391.106 635.884 391.238 635.836 391.336 635.785L389.222 637.56L389.52 637.765L390.181 637.209L390.129 637.316C390.68 637.543 391.429 637.949 391.847 638.428C392.979 638.527 392.688 636.593 390.218 637.178L392.24 635.481C392.571 636.08 392.966 636.924 393.239 637.604L390.766 639.68L391.064 639.885L392.792 638.434L393.718 639.537L392.063 640.926L392.36 641.131L393.941 639.804L394.52 640.493L393.295 640.863C393.777 641.68 394.358 643.026 394.51 644.121L394.688 644.128C394.915 642.998 394.726 641.746 394.489 640.848C394.579 640.788 394.644 640.734 394.682 640.686L396.92 643.352L397.067 643.228C397.489 642.873 397.617 642.484 397.571 642.429L394.778 639.101L396.386 637.751ZM395.291 639.47C395.946 639.672 396.787 640.094 397.257 640.655C398.444 640.725 398.003 638.65 395.346 639.33L395.291 639.47ZM397.845 633.534L396.218 634.9L394.613 632.988C395.377 632.143 396.109 631.167 396.545 630.473C396.862 630.347 397.012 630.19 397.027 630.021L395.431 630.06C395.281 630.703 394.899 631.76 394.463 632.659L393.281 633.118L395.851 636.179C397.239 637.834 398.498 639.614 398.481 641.853L398.694 641.863C399.487 639.112 398.054 637.087 396.712 635.488L396.442 635.166L397.535 634.248L401.771 639.294L401.918 639.171C402.35 638.808 402.456 638.375 402.41 638.319L398.39 633.53L399.291 632.774C399.42 632.666 399.482 632.535 399.416 632.419C398.78 632.389 397.782 632.395 397.782 632.395L397.845 633.534ZM406.392 632.423L401.176 626.209C401.393 625.964 401.39 625.81 401.3 625.666L400.005 626.549L402.304 629.289L400.015 631.21L400.322 631.407L402.528 629.555L405.66 633.287C404.719 634.406 403.913 635.35 403.474 635.797L404.888 636.568C404.974 636.465 404.989 636.296 404.942 636.147C406.035 634.164 406.732 632.717 407.205 631.693L407.094 631.598L406.392 632.423ZM410.344 627.648L410.252 627.725C410.591 628.428 410.93 629.13 410.969 629.364C410.991 629.502 410.942 629.574 410.849 629.668C410.754 629.779 410.506 629.988 410.193 630.25L409.458 630.867C409.136 631.137 408.993 631.116 408.808 630.896L405.552 627.017L407.914 625.034C408.043 624.926 408.087 624.81 408.03 624.686C407.485 624.579 406.563 624.507 406.563 624.507L406.734 625.569L405.328 626.75L403.361 624.406C403.56 624.176 403.557 624.006 403.475 623.871L402.165 624.736L408.144 631.86C408.715 632.54 409.141 632.543 409.968 631.849L410.823 631.131C412.257 629.928 412.512 629.447 412.188 629.061C412.057 628.905 411.891 628.856 411.539 628.979L410.344 627.648ZM409.643 618.208C410.245 618.235 411.088 618.436 411.609 618.814C412.989 618.61 412.205 616.276 409.662 618.082L409.643 618.208ZM414.599 616.57L407.659 622.396L407.965 622.593L411.679 619.476L412.72 620.717L411.038 622.129L409.769 622.521L413.658 627.154L413.795 627.038C414.154 626.737 414.369 626.227 414.292 626.135L411.198 622.449L412.944 620.983L417.342 626.223L417.507 626.084C417.967 625.698 418.098 625.275 418.036 625.202L413.854 620.219L415.6 618.753L418.015 621.63C418.116 621.75 418.116 621.844 417.96 621.975C417.748 622.152 416.884 622.784 416.884 622.784L417 622.922C417.46 622.63 417.755 622.57 417.991 622.591C418.21 622.627 418.425 622.791 418.677 623.034C419.647 622.063 419.484 621.588 418.975 620.982L416.614 618.169C416.767 617.978 416.835 617.779 416.846 617.661L415.297 617.739L415.285 618.564L413.63 619.953L412.589 618.712L416.173 615.702C416.311 615.587 416.365 615.464 416.307 615.339C415.619 615.322 414.576 615.367 414.576 615.367L414.599 616.57ZM421.83 615.31C423.143 613.44 423.415 612.177 423.141 611.123C424.243 610.98 425.76 610.977 426.641 611.224C427.757 610.836 426.892 609.227 424.054 610.419C424.358 609.568 424.607 608.576 424.697 608.03C424.929 607.914 425.003 607.741 424.98 607.62L423.386 607.924C423.539 608.517 423.729 609.658 423.798 610.524C423.568 610.623 423.327 610.747 423.075 610.896C422.811 610.114 422.291 609.438 421.694 608.671C421.864 608.481 421.878 608.312 421.804 608.186L420.515 609.096C422.071 610.987 423.238 612.247 421.622 615.25L421.83 615.31ZM422.101 615.709C422.906 615.864 423.673 616.442 424.118 616.805C425.246 617.065 425.045 614.773 422.141 615.55L422.101 615.709ZM419.086 611.612C419.881 611.775 420.631 612.352 421.094 612.716C422.207 612.941 421.928 610.668 419.108 611.452L419.086 611.612ZM416.395 612.774C417.008 612.777 417.88 612.938 418.411 613.291C419.697 613.105 418.95 610.927 416.407 612.639L416.395 612.774ZM417.44 615.438C418.019 615.438 418.808 615.575 419.29 615.906C420.533 615.725 419.805 613.626 417.469 615.304L417.44 615.438ZM419.887 612.977C421.064 617.646 421.064 617.646 421.141 618.129C421.194 618.398 421.148 618.437 421.019 618.545L420.606 618.892L420.76 619.076C420.968 618.932 421.146 618.845 421.352 618.829C421.688 618.782 422.398 619.534 423.052 620.63C423.368 620.914 423.666 620.914 423.85 620.76C424.227 620.443 424.26 619.961 423.908 619.504C423.28 618.7 422.643 618.576 422.247 618.141C422.053 617.928 421.871 617.563 421.714 617.225C421.472 616.676 420.563 614.211 420.066 612.873L419.887 612.977ZM426.615 611.716C426.713 612.261 426.825 613.31 426.842 614.095C426.219 613.913 425.646 613.548 425.074 613.072C424.922 612.871 424.769 612.67 424.608 612.46C424.787 612.263 424.801 612.111 424.711 611.967L423.414 612.867C425.14 614.96 426.468 616.431 424.673 619.818L424.879 619.895C426.816 617.032 426.581 615.427 425.657 613.915C427.085 615.113 428.58 615.755 430.54 615.159C430.211 614.636 430.28 614.233 430.615 613.811L430.531 613.693C429.151 614.288 428.049 614.414 427.074 614.167C427.45 613.381 427.79 612.406 427.914 611.863C428.152 611.773 428.236 611.593 428.213 611.472L426.615 611.716ZM429.375 605.278L429.297 606.174L427.082 608.034L427.388 608.231L429.576 606.394C430.712 608.402 431.429 610.824 431 613.112L431.184 613.145C432.238 610.443 431.651 607.896 430.586 605.75C430.781 605.571 430.842 605.457 430.836 605.32L429.375 605.278ZM433.37 600.984C433.53 601.884 433.646 603.385 433.623 604.626C432.601 604.231 431.556 603.62 430.475 602.725L429.781 601.897C429.989 601.66 429.984 601.523 429.903 601.371L428.573 602.269L434.707 609.577C434.823 609.715 434.814 609.816 434.648 609.955C434.419 610.148 433.237 610.999 433.237 610.999L433.353 611.137C433.929 610.778 434.251 610.696 434.533 610.695C434.812 610.71 435.054 610.868 435.33 611.122C436.385 610.064 436.208 609.554 435.653 608.893L431.023 603.377C434.076 605.969 436.456 606.62 438.958 606.54C438.749 606.011 438.778 605.485 439.101 605.105L439.06 604.982C437.524 605.316 435.788 605.395 433.895 604.727C434.318 603.494 434.619 602.098 434.754 601.139C434.987 601.006 435.048 600.892 435.026 600.754L433.37 600.984ZM447.861 598.628L447.75 598.721C447.639 598.924 447.512 599.109 447.409 599.211C447.296 599.337 447.154 599.504 446.978 599.667C446.708 599.925 445.951 600.591 445.051 601.348L442.753 603.277C441.88 604.01 441.552 604.049 441.213 603.645L436.244 597.725L436.043 597.486L442.533 592.038C442.661 591.93 442.715 591.807 442.658 591.683C442.046 591.664 441.124 591.685 441.124 591.685L441.151 592.744L434.597 598.246L434.895 598.451L435.244 598.157L440.498 604.417C441.293 605.364 441.992 605.059 443.408 603.871L445.54 602.08C448.601 599.511 449.119 598.951 448.748 598.51C448.617 598.354 448.406 598.327 447.922 598.608L447.861 598.628ZM445.063 599.253L443.744 597.681L444.782 596.809L446.102 598.381L445.063 599.253ZM446.785 598.952C447.033 598.744 447.278 598.271 447.241 598.208L445.621 596.278C445.745 596.127 445.812 595.945 445.812 595.851L444.512 595.908L444.476 596.612L443.566 597.376L442.515 597.71L444.961 600.624L445.071 600.532C445.365 600.285 445.572 599.86 445.511 599.786L445.287 599.52L446.326 598.648L446.665 599.052L446.785 598.952ZM441.984 601.838L440.665 600.266L441.676 599.417L442.995 600.989L441.984 601.838ZM443.709 601.597C443.957 601.388 444.192 600.94 444.147 600.868L442.48 598.883C442.612 598.741 442.661 598.575 442.66 598.481L441.421 598.535L441.369 599.22L440.478 599.969L439.435 600.295L441.997 603.347L442.107 603.254C442.411 603 442.594 602.564 442.539 602.5L442.208 602.105L443.219 601.256L443.589 601.697L443.709 601.597ZM440.421 597.885L439.287 596.534L441.401 594.759L442.535 596.11L440.421 597.885ZM443.091 596.772L443.228 596.657C443.495 596.433 443.779 595.912 443.734 595.84L442.338 594.176C442.472 594.001 442.53 593.827 442.531 593.716L441.128 593.781L441.085 594.57L439.109 596.229L437.935 596.603L440.257 599.37L440.377 599.27C440.717 598.984 440.938 598.501 440.876 598.428L440.645 598.152L442.759 596.377L443.091 596.772Z"
                        fill="#656565"
                    />
                    <path
                        d="M478.853 640.25L477.943 639.165L479.68 637.707L480.59 638.792L478.853 640.25ZM480.606 637.149C480.741 636.973 480.798 636.799 480.792 636.68L479.429 636.774L479.373 637.51L477.756 638.868L476.617 639.229L478.754 641.775L478.874 641.675C479.195 641.404 479.416 640.921 479.355 640.848L479.077 640.517L480.814 639.058L481.192 639.509L481.33 639.393C481.597 639.169 481.854 638.655 481.81 638.583L480.606 637.149ZM480.515 634.875L475.092 639.428L473.838 639.838L477.557 644.269L477.695 644.153C478.044 643.86 478.251 643.341 478.189 643.267L475.242 639.756L480.831 635.064L483.084 637.749C483.184 637.868 483.201 637.963 483.045 638.094C482.833 638.272 481.96 638.911 481.96 638.911L482.068 639.04C482.528 638.748 482.815 638.679 483.042 638.708C483.279 638.728 483.47 638.881 483.722 639.125C484.683 638.161 484.528 637.696 484.034 637.107L481.835 634.488C481.997 634.289 482.066 634.09 482.067 633.98L480.535 634.059L480.515 634.875ZM475.531 637.319L474.629 636.244L477.423 633.898L478.326 634.974L475.531 637.319ZM479.028 635.512C479.304 635.28 479.614 634.754 479.577 634.691L478.427 633.321C478.58 633.13 478.649 632.932 478.651 632.804L477.144 632.894L477.107 633.709L474.46 635.931L473.241 636.327L475.302 638.782L475.421 638.681C475.77 638.388 475.994 637.871 475.933 637.797L475.755 637.586L478.549 635.24L478.881 635.635L479.028 635.512ZM477.55 631.66L475.381 633.481C475.477 632.868 474.602 632.161 472.97 633.484L472.951 633.61C473.516 633.574 474.289 633.693 474.747 634.014L470.776 637.347L471.073 637.552L479.134 630.785C479.272 630.669 479.326 630.546 479.268 630.422C478.588 630.413 477.551 630.485 477.551 630.485L477.55 631.66ZM484.773 623.67C485.38 623.833 486.13 624.223 486.543 624.753C487.813 624.847 487.438 622.607 484.827 623.53L484.773 623.67ZM484.709 627.327C484.828 627.227 484.882 627.104 484.824 626.979C484.24 626.937 483.352 626.962 483.352 626.962L483.41 627.963L482.619 628.627C482.245 628.032 481.867 627.488 481.518 626.997C481.763 626.729 481.759 626.576 481.679 626.424L480.322 627.421C480.791 627.999 481.29 628.63 481.792 629.321L480.468 630.433L480.766 630.637L481.988 629.611C483.468 631.691 484.895 634.175 485.427 636.471L485.619 636.419C485.519 633.761 484.184 631.089 482.806 628.924L484.709 627.327ZM486.015 631.59C486.53 631.831 487.131 632.173 487.685 632.553C487.197 633.167 486.703 633.754 486.325 634.181C486.072 632.685 485.484 630.641 484.939 629.281C485.124 629.11 485.157 628.925 485.092 628.792L483.738 629.474C484.507 630.709 485.673 633.162 485.959 634.379C485.958 634.49 485.783 634.73 485.783 634.73L487.081 635.38C487.16 635.251 487.169 635.055 487.096 634.819C487.443 634.057 487.731 633.299 487.933 632.737C488.269 632.988 488.57 633.253 488.809 633.537C490.119 633.66 489.408 631.358 486.105 631.436L486.015 631.59ZM489.01 630.062L489.883 629.329L491.326 631.048L490.453 631.781L489.01 630.062ZM486.782 625.634L488.101 627.206L487.228 627.939L485.909 626.367L486.782 625.634ZM489.66 629.063L488.786 629.796L487.452 628.206L488.325 627.472L489.66 629.063ZM492.567 630.007L492.108 630.392L490.665 628.673L491.988 627.562C492.117 627.454 492.161 627.339 492.104 627.215C491.571 627.177 490.753 627.173 490.753 627.173L490.809 628.098L490.441 628.407L489.106 626.817L490.384 625.744C490.512 625.636 490.566 625.513 490.499 625.396C489.967 625.341 489.141 625.346 489.141 625.346L489.213 626.272L488.882 626.55L487.563 624.978L488.988 623.782C489.116 623.674 489.17 623.551 489.112 623.427C488.536 623.393 487.656 623.427 487.656 623.427L487.707 624.403L485.804 626L485.611 626.068C485.427 625.439 485.222 624.859 485.01 624.363C485.249 624.163 485.261 624.027 485.205 623.886L483.696 624.589C484.547 625.959 485.654 628.21 486.012 630.056L486.2 630.056C486.233 629.479 486.2 628.88 486.117 628.276L490.453 633.442L490.6 633.319C491.004 632.979 491.109 632.563 491.063 632.508L490.677 632.048L493.875 629.363C494.004 629.255 494.057 629.131 494 629.007C493.416 628.965 492.502 628.996 492.502 628.996L492.567 630.007ZM491.391 618.208C491.993 618.235 492.836 618.436 493.357 618.814C494.737 618.61 493.953 616.276 491.41 618.082L491.391 618.208ZM496.347 616.57L489.407 622.396L489.713 622.593L493.427 619.476L494.468 620.717L492.786 622.129L491.517 622.521L495.406 627.154L495.544 627.038C495.902 626.737 496.117 626.227 496.04 626.135L492.946 622.449L494.692 620.983L499.09 626.223L499.255 626.084C499.715 625.698 499.846 625.275 499.784 625.202L495.602 620.219L497.349 618.753L499.764 621.63C499.864 621.75 499.864 621.844 499.708 621.975C499.496 622.152 498.632 622.784 498.632 622.784L498.748 622.922C499.208 622.63 499.503 622.57 499.739 622.591C499.958 622.627 500.173 622.791 500.425 623.034C501.395 622.063 501.232 621.588 500.723 620.982L498.362 618.169C498.515 617.978 498.584 617.779 498.594 617.661L497.045 617.739L497.033 618.564L495.378 619.953L494.337 618.712L497.922 615.702C498.059 615.587 498.113 615.464 498.055 615.339C497.367 615.322 496.324 615.367 496.324 615.367L496.347 616.57ZM508.112 615.672L507.309 614.716L508.293 613.89L509.095 614.846L508.112 615.672ZM509.01 613.382C509.114 613.263 509.171 613.107 509.178 613.022L508.049 613.077L508.003 613.695L507.13 614.428L506.194 614.712L508.115 617.001L508.207 616.924C508.473 616.7 508.644 616.306 508.598 616.251L508.336 615.939L509.319 615.113L509.605 615.453L509.715 615.36C509.945 615.168 510.12 614.723 510.075 614.651L509.01 613.382ZM508.61 611.822L505.227 614.662L504.098 615.015C503.993 614.554 503.287 614.05 501.82 614.467L501.411 613.98L502.496 613.069C502.624 612.961 502.678 612.838 502.611 612.721C502.072 612.657 501.231 612.626 501.231 612.626L501.316 613.605L501.187 613.713L499.652 611.884C499.869 611.639 499.856 611.493 499.768 611.332L498.501 612.192L500.36 614.407L499.183 615.395L499.481 615.6L500.483 614.759C501.424 616.272 502.224 617.935 502.497 619.492L502.718 619.495C502.76 618.629 502.681 617.771 502.482 616.935L505.645 620.704L505.82 620.558C506.123 620.303 506.341 619.853 506.264 619.762L502.013 614.697C502.531 614.904 503.133 615.229 503.5 615.61C503.925 615.63 504.145 615.351 504.095 615.049L507.513 619.121L507.641 619.013C507.972 618.735 508.158 618.266 508.096 618.192L505.396 614.975L508.925 612.012L511.001 614.484C511.093 614.595 511.095 614.672 510.957 614.787C510.792 614.926 510.11 615.42 510.11 615.42L510.226 615.558C510.612 615.328 510.838 615.28 511.041 615.297C511.234 615.323 511.416 615.483 511.62 615.689C512.471 614.817 512.327 614.421 511.871 613.879L509.85 611.471C510.011 611.289 510.088 611.083 510.082 610.963L508.618 611.048L508.61 611.822ZM505.381 612.903L504.648 612.03L506.118 610.796L506.851 611.669L505.381 612.903ZM505.216 609.908C505.429 610.011 505.644 610.081 505.869 610.143L505.83 610.583L504.47 611.725L504.059 611.851C504.105 611.514 504.118 611.175 504.104 610.841L505.216 609.908ZM507.22 608.225C507.358 608.11 507.402 607.994 507.353 607.879C506.775 607.863 505.885 607.904 505.885 607.904L505.901 608.894L504.072 610.43C504.035 610.069 503.956 609.712 503.833 609.361C504.375 608.812 504.854 608.3 505.241 607.865C505.565 607.766 505.749 607.611 505.788 607.453L504.317 607.325C503.72 608.405 502.378 610.222 501.173 611.531L501.331 611.681C501.845 611.249 502.372 610.775 502.882 610.3C503.003 610.575 503.096 610.873 503.171 611.186L501.728 612.397L502.018 612.593L503.249 611.559C503.394 612.44 503.354 613.383 503.096 614.289L503.27 614.346C503.546 613.817 503.765 613.257 503.908 612.698L505.173 614.206L505.284 614.113C505.587 613.859 505.797 613.4 505.743 613.336L505.604 613.17L507.075 611.935L507.307 612.211L507.435 612.103C507.702 611.879 507.949 611.39 507.896 611.309L507.055 610.307C507.507 610.303 507.948 610.231 508.402 610.1C508.145 609.627 508.138 609.226 508.372 608.888L508.304 608.789C507.45 609.302 506.377 609.685 505.501 609.668L507.22 608.225ZM515.983 608.547C515.513 609.145 515.045 609.726 514.606 610.267C514.571 609.497 514.463 608.679 514.352 608.098C514.562 607.938 514.595 607.753 514.538 607.629L513.17 608.276C513.549 608.914 514.013 609.841 514.349 610.577C513.576 611.523 512.912 612.3 512.543 612.719L513.905 613.315C513.974 613.211 513.997 613.051 513.942 612.893C514.985 610.999 515.665 609.644 516.109 608.661L515.983 608.547ZM511.204 608.641L509.8 606.968L511.363 605.657L512.767 607.33L511.204 608.641ZM513.428 607.856C513.685 607.64 513.917 607.132 513.872 607.06L512.252 605.129C512.387 604.954 512.446 604.763 512.455 604.661L511.086 604.729L511.056 605.459L509.622 606.663L508.554 606.996L511.038 609.956L511.149 609.863C511.461 609.601 511.652 609.174 511.59 609.101L511.428 608.908L512.991 607.596L513.299 607.964L513.428 607.856ZM511.406 609.945C511.937 610.205 512.602 610.68 512.99 611.217C514.17 611.354 513.975 609.292 511.477 609.807L511.406 609.945ZM516.453 611.647C517.428 610.531 518.336 608.906 518.558 607.827C518.753 607.741 518.848 607.63 518.832 607.518L517.358 607.722C517.376 608.788 516.902 610.408 516.281 611.572L516.453 611.647ZM518.597 606.995C519.439 606.915 520.708 607.009 521.447 607.329C522.703 606.996 521.581 604.913 518.601 606.851L518.597 606.995ZM515.62 601.769L516.515 602.835L514.521 604.51L513.626 603.443L515.62 601.769ZM516.789 607.212L515.879 606.127L517.873 604.453L518.784 605.538L516.789 607.212ZM514.745 604.776L516.739 603.102L517.65 604.186L515.655 605.861L514.745 604.776ZM514.221 600.139L511.004 602.84L511.196 602.976C510.619 602.959 509.884 602.98 509.884 602.98L509.928 604.041L507.226 606.309L507.523 606.514L511.301 603.343C511.429 603.235 511.483 603.111 511.425 602.987L511.375 602.983L512.956 601.655C513.237 602.046 513.553 602.517 513.779 602.86L513.448 603.138L512.231 603.517L516.606 608.73L516.743 608.614C517.111 608.305 517.291 607.81 517.214 607.718L517.013 607.479L519.007 605.804L519.332 606.19L519.469 606.075C519.764 605.828 520.015 605.287 519.97 605.215L516.568 601.162C516.693 600.994 516.759 600.829 516.751 600.726L515.357 600.783L515.314 601.572L514.101 602.59C514.103 602.071 514.033 601.409 513.948 600.822L515.667 599.379C515.805 599.263 515.858 599.14 515.801 599.016C515.163 599.003 514.182 599.028 514.182 599.028L514.221 600.139ZM529.609 598.628L529.498 598.721C529.387 598.924 529.26 599.109 529.157 599.211C529.044 599.337 528.902 599.504 528.726 599.667C528.456 599.925 527.7 600.591 526.799 601.348L524.501 603.277C523.628 604.01 523.3 604.049 522.961 603.645L517.992 597.725L517.792 597.486L524.281 592.038C524.41 591.93 524.463 591.807 524.406 591.683C523.794 591.664 522.872 591.685 522.872 591.685L522.899 592.744L516.345 598.246L516.643 598.451L516.992 598.157L522.246 604.417C523.041 605.364 523.74 605.059 525.156 603.871L527.288 602.08C530.349 599.511 530.867 598.951 530.496 598.51C530.365 598.354 530.155 598.327 529.67 598.608L529.609 598.628ZM526.811 599.253L525.492 597.681L526.531 596.809L527.85 598.381L526.811 599.253ZM528.533 598.952C528.781 598.744 529.026 598.271 528.989 598.208L527.369 596.278C527.493 596.127 527.56 595.945 527.56 595.851L526.26 595.908L526.224 596.612L525.314 597.376L524.263 597.71L526.709 600.624L526.819 600.532C527.113 600.285 527.32 599.86 527.259 599.786L527.035 599.52L528.074 598.648L528.413 599.052L528.533 598.952ZM523.732 601.838L522.413 600.266L523.424 599.417L524.743 600.989L523.732 601.838ZM525.457 601.597C525.705 601.388 525.94 600.94 525.895 600.868L524.229 598.883C524.36 598.741 524.409 598.575 524.408 598.481L523.169 598.535L523.117 599.22L522.226 599.969L521.184 600.295L523.745 603.347L523.855 603.254C524.159 603 524.342 602.564 524.288 602.5L523.956 602.105L524.967 601.256L525.337 601.697L525.457 601.597ZM522.169 597.885L521.035 596.534L523.149 594.759L524.283 596.11L522.169 597.885ZM524.839 596.772L524.977 596.657C525.243 596.433 525.527 595.912 525.482 595.84L524.086 594.176C524.22 594.001 524.278 593.827 524.279 593.716L522.877 593.781L522.833 594.57L520.857 596.229L519.683 596.603L522.005 599.37L522.125 599.27C522.465 598.984 522.686 598.501 522.624 598.428L522.393 598.152L524.507 596.377L524.839 596.772Z"
                        fill="#656565"
                    />
                    <path
                        d="M555.866 635.339C556.526 635.584 557.448 636.048 557.963 636.587C559.114 636.67 558.659 634.671 555.93 635.191L555.866 635.339ZM555.605 637.063L556.561 636.26C556.68 636.16 556.734 636.037 556.676 635.912C556.154 635.85 555.345 635.839 555.345 635.839L555.418 636.765L555.381 636.796L553.815 634.93C554.023 634.693 554.027 634.548 553.939 634.387L552.699 635.224L554.581 637.467L553.331 638.517L553.629 638.722L554.676 637.842C555.616 639.372 556.43 641.07 556.693 642.652L556.914 642.654C556.954 641.712 556.846 640.8 556.626 639.903L559.905 643.81L560.071 643.671C560.365 643.424 560.543 642.946 560.458 642.845L556.4 638.009C556.946 638.193 557.575 638.495 557.944 638.86C559.049 638.888 558.685 636.999 556.191 637.761L555.605 637.063ZM559.426 636.911C559.105 637.947 558.766 638.906 558.611 639.318L559.9 639.678C559.945 639.546 559.9 639.38 559.798 639.277C559.789 638.501 559.764 637.817 559.727 637.269C561.166 639.022 561.658 640.615 561 642.687L561.184 642.72C562.429 640.265 561.966 638.444 560.395 636.535L556.939 632.417C557.138 632.187 557.134 632.034 557.045 631.89L555.877 632.682L559.426 636.911ZM565.101 635.813L564.991 635.906C565.24 636.37 565.528 636.975 565.539 637.137C565.547 637.24 565.516 637.297 565.46 637.361C565.385 637.439 565.229 637.57 565.054 637.717L564.64 638.064C564.429 638.242 564.33 638.199 564.184 638.024L561.699 635.064C562.41 635.22 563.196 635.485 563.697 635.895C564.946 635.833 564.315 633.793 561.406 634.715L560.843 634.044C561.052 633.211 561.195 632.26 561.242 631.719C561.472 631.62 561.547 631.448 561.523 631.326L560.018 631.493C560.164 631.966 560.353 632.826 560.48 633.612L558.451 631.195C558.65 630.965 558.648 630.794 558.557 630.667L557.355 631.457L563.612 638.912C564.06 639.445 564.393 639.525 565.055 638.969L565.634 638.483C566.655 637.627 566.851 637.227 566.581 636.905C566.458 636.758 566.315 636.737 566.002 636.812L565.101 635.813ZM568.805 626.561L567.665 627.518L567.109 626.856L568.828 625.413C568.957 625.305 569.01 625.182 568.944 625.065C568.426 625.046 567.665 625.073 567.665 625.073L567.676 625.926L566.886 626.59L566.469 626.093C566.63 625.911 566.632 625.784 566.549 625.666L565.416 626.444L566.095 627.253L564.275 628.781L564.572 628.986L566.319 627.52L566.874 628.182L564.604 630.088L564.901 630.292L569.994 626.018C570.122 625.909 570.176 625.786 570.118 625.662C569.583 625.641 568.786 625.699 568.786 625.699L568.805 626.561ZM570.174 628.734L567.646 630.856L566.929 630.001L569.456 627.879L570.174 628.734ZM569.982 633.658C570.005 633.592 570.013 633.507 569.995 633.412C570.371 632.423 570.706 631.421 570.876 630.933L570.731 630.835C570.406 631.344 570.091 631.827 569.79 632.253L568.949 631.251C569.115 630.814 569.221 630.38 569.249 629.965L570.398 629L570.56 629.193L570.688 629.085C570.799 628.993 570.906 628.84 570.994 628.703C570.998 629.044 570.978 629.468 570.937 629.848C570.499 629.98 569.987 630.191 569.399 630.481L569.451 630.672C570.899 630.381 572.3 630.427 572.959 630.595C573.757 630.427 573.452 629.241 571.339 629.73C571.524 629.371 571.72 628.971 571.845 628.709C572.057 628.626 572.125 628.538 572.133 628.436L571.131 628.4C571.133 628.383 571.134 628.366 571.127 628.357L570.255 627.318C570.377 627.184 570.424 627.035 570.424 626.941L569.217 627.015L569.159 627.674L566.751 629.696L565.699 630.03L567.405 632.061L567.515 631.969C567.8 631.73 568.009 631.288 567.955 631.223L567.87 631.122L568.348 630.721C568.267 631.651 567.929 632.686 567.409 633.672L567.623 633.759C567.982 633.253 568.283 632.734 568.541 632.22L569.011 632.781C569.119 632.91 569.135 633.022 569.023 633.429L569.964 633.673L568.392 634.993L562.775 628.301L568.52 623.478L574.137 630.17L569.982 633.658ZM568.23 622.405L568.204 623.289L562.634 627.965L561.35 628.338L568.355 636.685L568.502 636.561C568.879 636.245 569.025 635.747 568.932 635.636L568.616 635.259L574.361 630.437L574.893 631.071L575.022 630.963C575.344 630.693 575.572 630.125 575.52 630.044L569.524 622.901C569.67 622.701 569.754 622.521 569.749 622.384L568.23 622.405ZM573.137 618.208C573.739 618.235 574.582 618.436 575.103 618.814C576.484 618.61 575.699 616.276 573.157 618.082L573.137 618.208ZM578.093 616.57L571.153 622.396L571.459 622.593L575.173 619.476L576.214 620.717L574.532 622.129L573.263 622.521L577.152 627.154L577.29 627.038C577.648 626.737 577.863 626.227 577.786 626.135L574.692 622.449L576.438 620.983L580.836 626.223L581.002 626.084C581.461 625.698 581.592 625.275 581.53 625.202L577.348 620.219L579.095 618.753L581.51 621.63C581.61 621.75 581.61 621.844 581.454 621.975C581.243 622.152 580.378 622.784 580.378 622.784L580.494 622.922C580.954 622.63 581.249 622.57 581.485 622.591C581.704 622.627 581.919 622.791 582.171 623.034C583.141 622.063 582.978 621.588 582.469 620.982L580.108 618.169C580.261 617.978 580.33 617.779 580.34 617.661L578.791 617.739L578.779 618.564L577.124 619.953L576.083 618.712L579.668 615.702C579.805 615.587 579.859 615.464 579.802 615.339C579.113 615.322 578.07 615.367 578.07 615.367L578.093 616.57ZM586.719 614.359L587.417 613.772L589.254 615.96L588.555 616.546L586.719 614.359ZM586.495 614.092L584.558 611.785L585.257 611.198L587.193 613.506L586.495 614.092ZM583.17 614.517L582.398 613.598L583.805 612.418L584.576 613.337L583.17 614.517ZM584.558 610.03C584.602 610.4 584.639 610.855 584.638 611.264L582.294 613.231L581.978 613.34C582.169 612.803 582.334 612.289 582.444 611.805L584.558 610.03ZM587.435 609.37L588.207 610.289L586.764 611.5L585.992 610.581L587.435 609.37ZM590 611.604L590.409 612.091L589.402 612.31C589.506 612.583 589.593 612.855 589.654 613.133C589.334 613.181 588.977 613.278 588.547 613.419L588.507 613.578C588.865 613.575 589.331 613.607 589.777 613.672C589.859 614.198 589.884 614.695 589.83 615.116L590.042 615.126C590.197 614.713 590.297 614.254 590.323 613.762C590.615 613.83 590.872 613.912 591.069 613.997C591.699 613.907 591.536 613.135 590.313 613.096C590.297 612.891 590.264 612.683 590.231 612.476C590.382 612.395 590.46 612.283 590.478 612.174L591.836 613.792L589.989 615.343L588.153 613.155L590 611.604ZM592.517 612.437L592.397 612.537C592.764 613.31 592.995 613.884 593.035 614.118C593.038 614.271 592.995 614.37 592.845 614.527C592.657 614.732 592.17 615.141 591.545 615.666L590.056 616.916C589.477 617.402 589.288 617.42 589.056 617.144L588.779 616.813L592.06 614.058L592.253 614.288L592.373 614.188C592.602 613.995 592.805 613.527 592.76 613.455L590.785 611.102C590.91 610.934 590.984 610.778 590.985 610.668L589.736 610.729L589.694 611.407L587.929 612.888L586.987 611.767L588.431 610.555L588.716 610.895L588.854 610.78C589.102 610.571 589.374 610.093 589.329 610.02L588.326 608.825C588.461 608.65 588.528 608.468 588.529 608.358L587.175 608.444L587.129 609.172L585.024 610.939C585.242 610.396 585.412 609.815 585.544 609.375C585.712 609.202 585.815 609.1 585.817 608.973L584.46 608.905L584.399 609.709L582.57 611.245C582.603 611.06 582.634 610.893 582.657 610.733C582.914 610.517 582.987 610.361 582.932 610.22L581.513 610.957C581.617 612.014 581.423 613.837 580.98 615.212L581.139 615.235C581.311 614.934 581.468 614.599 581.615 614.271L582.796 615.677L582.925 615.569C583.329 615.23 583.463 614.867 583.424 614.821L583.394 614.784L584.8 613.603L585.741 614.725L585.226 615.157L584.848 614.706C584.945 614.579 584.99 614.446 584.989 614.369L583.885 614.418L583.841 615.019L582.27 616.338L582.576 616.536L584.13 615.232L584.546 615.728L582.625 617.341L582.932 617.538L584.77 615.995L585.233 616.546L583.597 617.92L583.903 618.117L585.457 616.813L585.634 617.024L585.744 616.931C585.965 616.746 586.189 616.323 586.137 616.242L585.45 615.423L585.965 614.991L587.801 617.179L587.259 617.634L586.842 617.138C586.929 617.018 586.975 616.886 586.973 616.809L585.836 616.854L585.773 617.488L584.192 618.815L584.498 619.012L586.061 617.7L586.524 618.252L584.63 619.841L584.927 620.046L586.747 618.518L587.226 619.088L585.525 620.516L585.832 620.713L587.449 619.355L587.727 619.686L587.856 619.578C588.095 619.377 588.322 618.92 588.277 618.848L587.483 617.901L588.025 617.446L588.442 617.942C589.059 618.677 589.547 618.55 590.604 617.662L592.093 616.412C594.281 614.576 594.611 614.111 594.287 613.724C594.156 613.568 593.988 613.537 593.617 613.692L592.517 612.437ZM596.974 601.675L601.418 606.97L599.139 608.883L593.422 602.072C593.63 601.835 593.626 601.681 593.529 601.528L592.169 602.465L598.211 609.663L595.959 611.553L591.854 606.663C592.053 606.433 592.075 606.273 591.978 606.12L590.612 607.032L594.964 612.216C594.897 612.398 594.844 612.615 594.838 612.776L596.295 612.477L596.247 611.766L601.642 607.236L602.391 608.128L602.565 607.981C602.905 607.696 603.14 607.154 603.071 607.071L598.217 601.289C598.426 601.052 598.422 600.898 598.342 600.747L596.974 601.675ZM611.355 598.628L611.244 598.721C611.133 598.924 611.006 599.109 610.903 599.211C610.79 599.337 610.648 599.504 610.472 599.667C610.202 599.925 609.446 600.591 608.545 601.348L606.247 603.277C605.374 604.01 605.047 604.049 604.707 603.645L599.738 597.725L599.538 597.486L606.027 592.038C606.156 591.93 606.209 591.807 606.152 591.683C605.54 591.664 604.618 591.685 604.618 591.685L604.645 592.744L598.091 598.246L598.389 598.451L598.738 598.157L603.992 604.417C604.787 605.364 605.487 605.059 606.902 603.871L609.035 602.08C612.095 599.511 612.613 598.951 612.242 598.51C612.111 598.354 611.901 598.327 611.416 598.608L611.355 598.628ZM608.557 599.253L607.238 597.681L608.277 596.809L609.596 598.381L608.557 599.253ZM610.279 598.952C610.527 598.744 610.773 598.271 610.735 598.208L609.115 596.278C609.239 596.127 609.306 595.945 609.306 595.851L608.006 595.908L607.97 596.612L607.06 597.376L606.009 597.71L608.455 600.624L608.565 600.532C608.859 600.285 609.067 599.86 609.005 599.786L608.781 599.52L609.82 598.648L610.159 599.052L610.279 598.952ZM605.478 601.838L604.159 600.266L605.17 599.417L606.489 600.989L605.478 601.838ZM607.203 601.597C607.451 601.388 607.686 600.94 607.641 600.868L605.975 598.883C606.106 598.741 606.155 598.575 606.154 598.481L604.915 598.535L604.863 599.22L603.972 599.969L602.93 600.295L605.491 603.347L605.601 603.254C605.905 603 606.088 602.564 606.034 602.5L605.702 602.105L606.713 601.256L607.083 601.697L607.203 601.597ZM603.915 597.885L602.781 596.534L604.895 594.759L606.029 596.11L603.915 597.885ZM606.585 596.772L606.723 596.657C606.989 596.433 607.273 595.912 607.228 595.84L605.832 594.176C605.966 594.001 606.024 593.827 606.025 593.716L604.623 593.781L604.579 594.57L602.603 596.229L601.429 596.603L603.751 599.37L603.871 599.27C604.211 598.984 604.432 598.501 604.37 598.428L604.139 598.152L606.253 596.377L606.585 596.772Z"
                        fill="#656565"
                    />
                    <path
                        d="M641.841 641.756L639.812 639.339L643.645 636.121L645.674 638.539L641.841 641.756ZM643.32 635.939L639.643 639.026L638.339 639.432L641.826 643.587L641.964 643.471C642.332 643.162 642.566 642.62 642.489 642.528L642.065 642.023L645.898 638.805L646.507 639.531L646.654 639.408C646.958 639.153 647.269 638.61 647.232 638.547L644.709 635.541C644.882 635.317 644.95 635.119 644.945 634.982L643.347 635.039L643.32 635.939ZM639.807 633.247C640.583 633.238 641.539 633.313 642.406 633.525C640.377 635.401 638.415 637.189 637.199 638.242C637.803 636.591 638.286 634.478 638.344 633.128C638.586 632.987 638.636 632.804 638.605 632.674L636.916 633.182C637.162 634.465 637.071 637.174 636.555 638.594C636.509 638.727 636.327 638.958 636.327 638.958L637.541 639.694C637.6 639.597 637.627 639.48 637.624 639.327C639.793 637.02 641.551 635.027 642.74 633.606C643.238 633.751 643.692 633.919 644.056 634.146C645.565 633.929 644.218 631.315 639.829 633.087L639.807 633.247ZM654.162 629.611C654.291 629.503 654.344 629.38 654.287 629.255C653.726 629.24 652.87 629.285 652.87 629.285L652.881 630.232L652.22 630.787L651.278 629.666L652.896 628.308C653.016 628.207 653.069 628.084 653.002 627.968C652.494 627.94 651.723 627.992 651.723 627.992L651.716 628.844L651.156 629.314C651.221 628.664 651.224 627.94 651.21 627.419C651.411 627.266 651.469 627.093 651.413 626.951L650.075 627.542C650.342 628.102 650.696 628.916 650.907 629.523L648.619 631.444L648.916 631.649L650.433 630.376L651.374 631.497L649.563 633.017L649.86 633.222L651.598 631.764L653.203 633.676L653.35 633.552C653.782 633.19 653.925 632.819 653.886 632.773L652.443 631.054L654.162 629.611ZM647.743 629.672C648.235 629.792 648.923 630.107 649.296 630.515C650.47 630.532 650.109 628.516 647.788 629.54L647.743 629.672ZM650.383 624.118L648.213 625.94L647.403 624.974C647.611 624.737 647.608 624.583 647.518 624.439L646.212 625.347L647.331 626.68L643.608 629.805L643.906 630.01L647.555 626.947L648.565 628.151L646.562 629.833L645.266 630.231L650.451 636.409L650.589 636.293C650.957 635.984 651.148 635.447 651.064 635.346L646.712 630.162L651.868 625.833L655.502 630.162C655.611 630.291 655.626 630.403 655.461 630.542C655.222 630.743 654.186 631.487 654.186 631.487L654.302 631.625C654.824 631.296 655.138 631.221 655.41 631.227C655.648 631.231 655.871 631.404 656.13 631.657C657.157 630.622 656.988 630.122 656.471 629.506L652.891 625.24C653.044 625.049 653.113 624.851 653.123 624.732L651.576 624.793L651.553 625.643L649.448 627.41L648.437 626.206L651.958 623.251C652.086 623.143 652.14 623.02 652.082 622.895C651.394 622.878 650.357 622.949 650.357 622.949L650.383 624.118ZM654.885 618.208C655.487 618.235 656.33 618.436 656.851 618.814C658.232 618.61 657.447 616.276 654.905 618.082L654.885 618.208ZM659.841 616.57L652.901 622.396L653.207 622.593L656.921 619.476L657.963 620.717L656.28 622.129L655.011 622.521L658.9 627.154L659.038 627.038C659.396 626.737 659.611 626.227 659.534 626.135L656.44 622.449L658.186 620.983L662.584 626.223L662.75 626.084C663.209 625.698 663.34 625.275 663.278 625.202L659.096 620.219L660.843 618.753L663.258 621.63C663.358 621.75 663.358 621.844 663.202 621.975C662.991 622.152 662.126 622.784 662.126 622.784L662.242 622.922C662.702 622.63 662.997 622.57 663.233 622.591C663.452 622.627 663.667 622.791 663.919 623.034C664.889 622.063 664.726 621.588 664.217 620.982L661.856 618.169C662.009 617.978 662.078 617.779 662.088 617.661L660.539 617.739L660.527 618.564L658.873 619.953L657.831 618.712L661.416 615.702C661.554 615.587 661.607 615.464 661.55 615.339C660.861 615.322 659.818 615.367 659.818 615.367L659.841 616.57ZM669.559 618.926L668.37 617.511L672.332 614.185L673.52 615.601L669.559 618.926ZM672.016 613.996L668.202 617.198L667.037 617.565L669.436 620.423L669.556 620.323C669.878 620.053 670.099 619.57 670.045 619.505L669.782 619.193L673.744 615.867L674.168 616.373L674.315 616.249C674.582 616.025 674.875 615.497 674.838 615.434L673.303 613.605C673.446 613.422 673.513 613.24 673.507 613.12L672.06 613.207L672.016 613.996ZM669.88 612.029C670.07 612.48 670.306 613.097 670.461 613.562L667.658 615.915C667.95 615.404 667.452 614.568 666.019 615.269L669.88 612.029ZM672.134 612.157L670.737 613.33C670.875 612.823 670.977 612.235 671.03 611.831C671.223 611.669 671.271 611.503 671.216 611.361L670.027 611.905L672.067 610.192C672.196 610.084 672.249 609.961 672.192 609.837C671.588 609.827 670.699 609.868 670.699 609.868L670.711 610.892L668.469 612.774L667.728 611.892L670.384 609.662C670.504 609.562 670.566 609.431 670.5 609.314C669.914 609.289 669.04 609.349 669.04 609.349L669.067 610.313L667.504 611.625L666.771 610.752L669.805 608.206C669.924 608.105 669.977 607.982 669.92 607.858C669.335 607.832 668.451 607.9 668.451 607.9L668.469 608.873L667.071 610.046C667.238 609.498 667.399 608.83 667.456 608.375C667.658 608.206 667.707 608.039 667.651 607.898L666.22 608.583C666.424 609.069 666.68 609.747 666.805 610.269L665.04 611.751C665.269 611.183 664.594 610.323 662.97 611.357L662.934 611.482C663.404 611.557 664.032 611.782 664.408 612.156C664.468 612.153 664.537 612.141 664.59 612.129L662.512 613.873L662.81 614.078L665.916 611.47L666.649 612.343L663.919 614.635L664.217 614.84L666.873 612.609L667.614 613.492L664.084 616.455L664.383 616.643L665.734 615.509L665.724 615.533C666.143 615.604 666.699 615.874 666.989 616.257C667.117 616.26 667.221 616.235 667.309 616.208L665.001 618.145L665.299 618.35L673.498 611.467C673.626 611.359 673.68 611.236 673.622 611.112C673.011 611.092 672.104 611.132 672.104 611.132L672.134 612.157ZM674.245 610.416C674.418 609.614 674.49 608.785 674.467 607.88L678.579 612.779L678.745 612.641C679.085 612.355 679.283 611.844 679.23 611.763L674.701 606.367C674.845 606.184 674.881 606.059 674.839 605.953L674.312 606.146C674.185 605.249 673.967 604.335 673.649 603.396C673.875 603.237 673.926 603.054 673.87 602.913L672.21 603.585C673.296 605.87 673.959 608.526 674.056 610.434L674.245 610.416ZM683.286 604.629L683.175 604.722C683.528 605.459 683.781 606.078 683.811 606.319C683.824 606.465 683.764 606.562 683.643 606.679C683.501 606.846 683.133 607.154 682.665 607.548L681.543 608.489C681.065 608.89 680.878 608.891 680.646 608.615L677.653 605.049L681.044 602.201C681.173 602.093 681.226 601.97 681.169 601.846C680.576 601.811 679.646 601.824 679.646 601.824L679.718 602.861L677.429 604.782L675.153 602.07C675.352 601.841 675.35 601.67 675.268 601.535L673.992 602.387L679.995 609.538C680.628 610.292 681.13 610.199 682.104 609.382L683.281 608.394C685.11 606.858 685.435 606.35 685.096 605.946C684.957 605.78 684.78 605.756 684.403 605.885L683.286 604.629ZM693.103 598.628L692.992 598.721C692.881 598.924 692.754 599.109 692.652 599.211C692.538 599.337 692.396 599.504 692.22 599.667C691.95 599.925 691.194 600.591 690.293 601.348L687.995 603.277C687.122 604.01 686.795 604.049 686.455 603.645L681.486 597.725L681.286 597.486L687.775 592.038C687.904 591.93 687.957 591.807 687.9 591.683C687.288 591.664 686.366 591.685 686.366 591.685L686.393 592.744L679.839 598.246L680.137 598.451L680.486 598.157L685.74 604.417C686.535 605.364 687.235 605.059 688.65 603.871L690.783 602.08C693.843 599.511 694.361 598.951 693.99 598.51C693.859 598.354 693.649 598.327 693.164 598.608L693.103 598.628ZM690.305 599.253L688.986 597.681L690.025 596.809L691.344 598.381L690.305 599.253ZM692.027 598.952C692.275 598.744 692.521 598.271 692.484 598.208L690.863 596.278C690.987 596.127 691.054 595.945 691.054 595.851L689.754 595.908L689.718 596.612L688.808 597.376L687.757 597.71L690.203 600.624L690.313 600.532C690.607 600.285 690.815 599.86 690.753 599.786L690.529 599.52L691.568 598.648L691.907 599.052L692.027 598.952ZM687.226 601.838L685.907 600.266L686.918 599.417L688.237 600.989L687.226 601.838ZM688.951 601.597C689.199 601.388 689.434 600.94 689.389 600.868L687.723 598.883C687.854 598.741 687.903 598.575 687.903 598.481L686.663 598.535L686.611 599.22L685.72 599.969L684.678 600.295L687.239 603.347L687.35 603.254C687.653 603 687.836 602.564 687.782 602.5L687.45 602.105L688.461 601.256L688.831 601.697L688.951 601.597ZM685.663 597.885L684.529 596.534L686.643 594.759L687.777 596.11L685.663 597.885ZM688.333 596.772L688.471 596.657C688.737 596.433 689.021 595.912 688.976 595.84L687.58 594.176C687.714 594.001 687.772 593.827 687.773 593.716L686.371 593.781L686.327 594.57L684.351 596.229L683.177 596.603L685.499 599.37L685.619 599.27C685.959 598.984 686.18 598.501 686.118 598.428L685.887 598.152L688.001 596.377L688.333 596.772Z"
                        fill="#656565"
                    />
                    <path
                        d="M723.375 637.751C723.503 637.643 723.547 637.528 723.49 637.403C722.949 637.356 722.113 637.368 722.113 637.368L722.167 638.31L721.542 638.835L720.616 637.732L722.427 636.212C722.556 636.104 722.609 635.98 722.543 635.864C721.976 635.823 721.08 635.838 721.08 635.838L721.146 636.832L720.466 637.403C720.504 636.683 720.479 635.888 720.4 635.328C720.609 635.184 720.657 635.018 720.602 634.877L719.32 635.404L720.442 634.462C720.571 634.354 720.624 634.231 720.567 634.107C719.999 634.066 719.154 634.086 719.154 634.086L719.198 635.052L718.462 635.67C718.917 635.147 718.283 634.018 716.414 635.039L716.368 635.171C716.863 635.257 717.529 635.528 717.924 635.887C718.094 635.884 718.226 635.836 718.325 635.785L716.211 637.56L716.508 637.765L717.17 637.209L717.118 637.316C717.669 637.543 718.417 637.949 718.835 638.428C719.968 638.527 719.677 636.593 717.206 637.178L719.229 635.481C719.56 636.08 719.954 636.924 720.227 637.604L717.755 639.68L718.052 639.885L719.78 638.434L720.706 639.537L719.051 640.926L719.349 641.131L720.93 639.804L721.508 640.493L720.283 640.863C720.766 641.68 721.347 643.026 721.498 644.121L721.676 644.128C721.903 642.998 721.714 641.746 721.477 640.848C721.568 640.788 721.632 640.734 721.67 640.686L723.908 643.352L724.055 643.228C724.478 642.873 724.605 642.484 724.559 642.429L721.766 639.101L723.375 637.751ZM722.279 639.47C722.934 639.672 723.775 640.094 724.245 640.655C725.432 640.725 724.991 638.65 722.334 639.33L722.279 639.47ZM724.833 633.534L723.206 634.9L721.601 632.988C722.365 632.143 723.098 631.167 723.533 630.473C723.851 630.347 724.001 630.19 724.015 630.021L722.419 630.06C722.269 630.703 721.887 631.76 721.451 632.659L720.27 633.118L722.839 636.179C724.228 637.834 725.486 639.614 725.47 641.853L725.682 641.863C726.476 639.112 725.042 637.087 723.7 635.488L723.43 635.166L724.524 634.248L728.76 639.294L728.907 639.171C729.339 638.808 729.445 638.375 729.398 638.319L725.379 633.53L726.279 632.774C726.408 632.666 726.471 632.535 726.404 632.419C725.768 632.389 724.771 632.395 724.771 632.395L724.833 633.534ZM733.38 632.423L728.164 626.209C728.382 625.964 728.378 625.81 728.288 625.666L726.993 626.549L729.292 629.289L727.004 631.21L727.31 631.407L729.516 629.555L732.649 633.287C731.708 634.406 730.901 635.35 730.462 635.797L731.877 636.568C731.962 636.465 731.977 636.296 731.93 636.147C733.024 634.164 733.721 632.717 734.193 631.693L734.082 631.598L733.38 632.423ZM737.332 627.648L737.24 627.725C737.579 628.428 737.918 629.13 737.957 629.364C737.979 629.502 737.93 629.574 737.837 629.668C737.742 629.779 737.494 629.988 737.181 630.25L736.446 630.867C736.124 631.137 735.981 631.116 735.796 630.896L732.54 627.017L734.902 625.034C735.031 624.926 735.075 624.81 735.018 624.686C734.474 624.579 733.551 624.507 733.551 624.507L733.723 625.569L732.316 626.75L730.349 624.406C730.548 624.176 730.546 624.006 730.464 623.871L729.153 624.736L735.133 631.86C735.704 632.54 736.129 632.543 736.957 631.849L737.811 631.131C739.245 629.928 739.5 629.447 739.176 629.061C739.045 628.905 738.879 628.856 738.527 628.979L737.332 627.648ZM736.631 618.208C737.234 618.235 738.076 618.436 738.597 618.814C739.978 618.61 739.193 616.276 736.651 618.082L736.631 618.208ZM741.587 616.57L734.647 622.396L734.954 622.593L738.667 619.476L739.709 620.717L738.027 622.129L736.757 622.521L740.646 627.154L740.784 627.038C741.142 626.737 741.357 626.227 741.28 626.135L738.186 622.449L739.932 620.983L744.33 626.223L744.496 626.084C744.955 625.698 745.086 625.275 745.024 625.202L740.842 620.219L742.589 618.753L745.004 621.63C745.104 621.75 745.104 621.844 744.948 621.975C744.737 622.152 743.872 622.784 743.872 622.784L743.988 622.922C744.448 622.63 744.743 622.57 744.98 622.591C745.198 622.627 745.414 622.791 745.665 623.034C746.636 622.063 746.473 621.588 745.963 620.982L743.602 618.169C743.755 617.978 743.824 617.779 743.834 617.661L742.286 617.739L742.273 618.564L740.619 619.953L739.577 618.712L743.162 615.702C743.3 615.587 743.353 615.464 743.296 615.339C742.607 615.322 741.564 615.367 741.564 615.367L741.587 616.57ZM751.727 612.523L754.713 616.08L751.937 618.411C751.391 617.256 750.582 615.694 749.77 614.167L751.727 612.523ZM756.055 614.954L755.605 615.332L752.742 611.922C752.897 611.714 752.955 611.54 752.957 611.412L751.462 611.461L751.412 612.334L749.601 613.854C749.046 612.8 748.486 611.797 748.022 610.964L751.515 608.032C751.643 607.924 751.706 607.793 751.649 607.669C750.962 607.635 749.911 607.671 749.911 607.671L749.967 608.877L744.039 613.854L744.336 614.059L747.112 611.728C747.577 612.544 748.136 613.564 748.691 614.618L746.761 616.238L747.067 616.435L748.86 614.931C749.664 616.449 750.473 618.01 751.018 619.182L748.978 620.895L749.284 621.093L757.566 614.14C757.704 614.024 757.757 613.901 757.7 613.777C757.04 613.719 755.968 613.711 755.968 613.711L756.055 614.954ZM758.704 606.573C759.574 604.604 758.729 603.261 758.065 602.47L757.664 601.992L758.905 600.951L760.594 602.964C760.996 603.442 761.216 603.555 761.786 603.076L762.19 602.737C762.99 602.065 763.127 601.669 762.88 601.374C762.749 601.218 762.604 601.214 762.332 601.301L762.288 601.323L762.205 601.392C762.156 601.465 762.091 601.535 762.052 601.583C762.016 601.614 761.95 601.685 761.904 601.724L761.674 601.917L761.426 602.125C761.306 602.225 761.257 602.204 761.172 602.103L759.745 600.402C759.886 600.253 759.959 600.097 759.96 599.986L758.648 599.991L758.589 600.761L757.569 601.618L756.358 602.023L757.291 603.135C757.986 603.963 758.71 605.031 758.519 606.539L758.704 606.573ZM755.155 606.919C755.636 606.782 756.198 606.686 756.57 606.719C756.696 606.644 756.772 606.549 756.822 606.459L757.609 607.397C757.338 608.063 757.064 608.67 756.896 609.03C756.544 608.573 756.189 608.151 755.857 607.755L755.155 606.919ZM754.917 604.189L756.275 605.807C755.933 605.811 755.455 606.025 754.908 606.625L753.713 605.2L754.917 604.189ZM755.78 603.668C755.914 603.492 755.981 603.311 755.983 603.2L754.615 603.251L754.61 603.992L753.627 604.817L752.434 605.207L755.104 608.388C756.547 610.107 758.128 611.991 758.736 614.004L758.927 613.969C758.936 612.207 758.076 610.641 757.094 609.303L757.968 609.635C758.021 609.512 757.984 609.355 757.9 609.237C757.915 608.676 757.924 608.183 757.926 607.774L760.449 610.78C760.557 610.909 760.574 611.004 760.418 611.135C760.252 611.274 759.426 611.858 759.426 611.858L759.55 612.005C759.964 611.751 760.234 611.681 760.444 611.708C760.64 611.717 760.855 611.88 761.091 612.105C761.933 611.242 761.767 610.801 761.289 610.231L755.78 603.668ZM762.271 604.252C762.627 605.143 762.827 606.072 762.837 607.036C761.849 607.035 760.885 606.763 759.936 606.212L762.271 604.252ZM762.132 603.115L762.029 604.001L758.793 606.717L759.1 606.914L759.752 606.366C760.792 607.138 761.808 607.602 762.812 607.809C762.721 608.951 762.37 610.138 761.731 611.318L761.912 611.385C762.75 610.18 763.285 609.026 763.528 607.897C764.552 607.978 765.582 607.786 766.672 607.404C766.46 606.909 766.507 606.462 766.803 606.104L766.736 605.987C765.711 606.503 764.683 606.865 763.685 606.982C763.785 605.832 763.635 604.72 763.28 603.624C763.476 603.428 763.544 603.324 763.548 603.179L762.132 603.115ZM774.849 598.628L774.739 598.721C774.627 598.924 774.5 599.109 774.398 599.211C774.284 599.337 774.142 599.504 773.966 599.667C773.696 599.925 772.94 600.591 772.039 601.348L769.741 603.277C768.868 604.01 768.541 604.049 768.201 603.645L763.232 597.725L763.032 597.486L769.521 592.038C769.65 591.93 769.703 591.807 769.646 591.683C769.034 591.664 768.112 591.685 768.112 591.685L768.139 592.744L761.586 598.246L761.883 598.451L762.232 598.157L767.486 604.417C768.281 605.364 768.981 605.059 770.396 603.871L772.529 602.08C775.59 599.511 776.107 598.951 775.737 598.51C775.605 598.354 775.395 598.327 774.91 598.608L774.849 598.628ZM772.051 599.253L770.732 597.681L771.771 596.809L773.09 598.381L772.051 599.253ZM773.773 598.952C774.021 598.744 774.267 598.271 774.23 598.208L772.609 596.278C772.733 596.127 772.8 595.945 772.8 595.851L771.5 595.908L771.464 596.612L770.554 597.376L769.503 597.71L771.949 600.624L772.059 600.532C772.353 600.285 772.561 599.86 772.499 599.786L772.275 599.52L773.314 598.648L773.653 599.052L773.773 598.952ZM768.972 601.838L767.653 600.266L768.664 599.417L769.983 600.989L768.972 601.838ZM770.697 601.597C770.945 601.388 771.18 600.94 771.135 600.868L769.469 598.883C769.6 598.741 769.649 598.575 769.649 598.481L768.409 598.535L768.357 599.22L767.466 599.969L766.424 600.295L768.985 603.347L769.096 603.254C769.399 603 769.582 602.564 769.528 602.5L769.196 602.105L770.207 601.256L770.577 601.697L770.697 601.597ZM767.409 597.885L766.275 596.534L768.389 594.759L769.523 596.11L767.409 597.885ZM770.079 596.772L770.217 596.657C770.483 596.433 770.767 595.912 770.722 595.84L769.326 594.176C769.46 594.001 769.518 593.827 769.519 593.716L768.117 593.781L768.073 594.57L766.097 596.229L764.923 596.603L767.246 599.37L767.365 599.27C767.705 598.984 767.926 598.501 767.864 598.428L767.633 598.152L769.747 596.377L770.079 596.772Z"
                        fill="#656565"
                    />
                    <path
                        d="M805.333 641.756L803.304 639.339L807.137 636.121L809.166 638.539L805.333 641.756ZM806.812 635.939L803.135 639.026L801.831 639.432L805.318 643.587L805.456 643.471C805.824 643.162 806.058 642.62 805.981 642.528L805.557 642.023L809.39 638.805L809.999 639.531L810.147 639.408C810.45 639.153 810.761 638.61 810.724 638.547L808.201 635.541C808.374 635.317 808.442 635.119 808.437 634.982L806.84 635.039L806.812 635.939ZM803.299 633.247C804.075 633.238 805.031 633.313 805.898 633.525C803.869 635.401 801.907 637.189 800.691 638.242C801.295 636.591 801.778 634.478 801.836 633.128C802.078 632.987 802.128 632.804 802.097 632.674L800.409 633.182C800.654 634.465 800.563 637.174 800.047 638.594C800.001 638.727 799.819 638.958 799.819 638.958L801.033 639.694C801.092 639.597 801.12 639.48 801.116 639.327C803.285 637.02 805.043 635.027 806.232 633.606C806.731 633.751 807.184 633.919 807.548 634.146C809.057 633.929 807.71 631.315 803.322 633.087L803.299 633.247ZM814.56 629.341L812.508 626.896L814.833 624.943L816.886 627.388L814.56 629.341ZM811.316 632.065L809.263 629.619L811.589 627.667L813.641 630.112L811.316 632.065ZM814.552 623.879L814.518 624.754L812.284 626.629L810.942 625.029C811.159 624.784 811.138 624.629 811.058 624.477L809.691 625.406L811.365 627.401L809.122 629.283L807.792 629.695L811.387 633.979L811.525 633.863C811.893 633.555 812.11 633.011 812.041 632.929L811.539 632.331L813.865 630.379L816.866 633.955L817.041 633.808C817.39 633.515 817.593 632.953 817.508 632.852L814.784 629.607L817.11 627.655L817.75 628.418L817.906 628.287C818.21 628.032 818.521 627.489 818.476 627.417L815.884 624.328C816.046 624.129 816.105 623.938 816.108 623.811L814.552 623.879ZM818.377 618.208C818.98 618.235 819.822 618.436 820.343 618.814C821.724 618.61 820.939 616.276 818.397 618.082L818.377 618.208ZM823.333 616.57L816.393 622.396L816.7 622.593L820.413 619.476L821.455 620.717L819.773 622.129L818.503 622.521L822.392 627.154L822.53 627.038C822.888 626.737 823.103 626.227 823.026 626.135L819.932 622.449L821.678 620.983L826.076 626.223L826.242 626.084C826.701 625.698 826.832 625.275 826.77 625.202L822.588 620.219L824.335 618.753L826.75 621.63C826.85 621.75 826.85 621.844 826.694 621.975C826.483 622.152 825.618 622.784 825.618 622.784L825.734 622.922C826.194 622.63 826.489 622.57 826.726 622.591C826.944 622.627 827.16 622.791 827.411 623.034C828.382 622.063 828.219 621.588 827.709 620.982L825.348 618.169C825.501 617.978 825.57 617.779 825.58 617.661L824.032 617.739L824.019 618.564L822.365 619.953L821.323 618.712L824.908 615.702C825.046 615.587 825.099 615.464 825.042 615.339C824.353 615.322 823.31 615.367 823.31 615.367L823.333 616.57ZM833.509 616.99L828.294 610.776C828.511 610.531 828.507 610.377 828.418 610.233L827.123 611.117L829.422 613.856L827.133 615.777L827.44 615.975L829.646 614.123L832.778 617.855C831.837 618.974 831.031 619.917 830.591 620.364L832.006 621.135C832.092 621.032 832.107 620.863 832.06 620.714C833.153 618.731 833.85 617.284 834.323 616.26L834.212 616.165L833.509 616.99ZM837.461 612.215L837.369 612.292C837.708 612.995 838.047 613.698 838.087 613.931C838.109 614.069 838.06 614.142 837.966 614.236C837.871 614.347 837.623 614.555 837.311 614.817L836.575 615.435C836.254 615.705 836.111 615.684 835.926 615.463L832.67 611.584L835.032 609.601C835.161 609.493 835.205 609.377 835.147 609.253C834.603 609.146 833.681 609.074 833.681 609.074L833.852 610.137L832.446 611.317L830.478 608.973C830.677 608.744 830.675 608.573 830.593 608.438L829.283 609.303L835.262 616.427C835.833 617.108 836.259 617.111 837.086 616.416L837.941 615.699C839.375 614.495 839.63 614.015 839.306 613.628C839.174 613.472 839.008 613.424 838.657 613.546L837.461 612.215ZM846.55 604.601L846.44 604.693C846.839 605.486 847.152 606.195 847.189 606.462C847.209 606.617 847.131 606.73 847.018 606.856C846.859 607.021 846.545 607.301 846.085 607.686L844.991 608.605C844.541 608.983 844.336 608.982 844.097 608.697L842.878 607.245L844.735 605.686L845.26 606.311L845.416 606.18C845.747 605.902 845.995 605.396 845.918 605.304L843.38 602.279C843.597 602.034 843.594 601.881 843.504 601.736L842.189 602.652L844.519 605.428L842.662 606.987L839.823 603.604L843.398 600.603C843.536 600.487 843.59 600.364 843.532 600.24C842.871 600.199 841.821 600.235 841.821 600.235L841.879 601.424L839.599 603.338L838.442 601.959C838.65 601.722 838.648 601.551 838.558 601.407L837.228 602.304L838.717 604.079L835.04 607.165L835.347 607.362L838.94 604.345L841.78 607.728L839.96 609.256L837.907 606.811C838.106 606.581 838.12 606.429 838.022 606.275L836.727 607.159L839.019 609.889C838.972 610.038 838.948 610.215 838.945 610.343L840.276 610.025L840.24 609.459L841.996 607.985L843.385 609.64C844.04 610.421 844.56 610.33 845.552 609.497L846.692 608.54C848.53 606.997 848.88 606.499 848.518 606.067C848.387 605.911 848.21 605.887 847.806 606.022L846.55 604.601ZM856.595 598.628L856.485 598.721C856.373 598.924 856.246 599.109 856.144 599.211C856.03 599.337 855.888 599.504 855.712 599.667C855.443 599.925 854.686 600.591 853.785 601.348L851.487 603.277C850.614 604.01 850.287 604.049 849.947 603.645L844.978 597.725L844.778 597.486L851.267 592.038C851.396 591.93 851.449 591.807 851.392 591.683C850.78 591.664 849.858 591.685 849.858 591.685L849.885 592.744L843.332 598.246L843.629 598.451L843.978 598.157L849.233 604.417C850.027 605.364 850.727 605.059 852.142 603.871L854.275 602.08C857.336 599.511 857.853 598.951 857.483 598.51C857.351 598.354 857.141 598.327 856.656 598.608L856.595 598.628ZM853.798 599.253L852.478 597.681L853.517 596.809L854.836 598.381L853.798 599.253ZM855.519 598.952C855.767 598.744 856.013 598.271 855.976 598.208L854.355 596.278C854.479 596.127 854.546 595.945 854.546 595.851L853.246 595.908L853.21 596.612L852.3 597.376L851.249 597.71L853.695 600.624L853.805 600.532C854.099 600.285 854.307 599.86 854.245 599.786L854.021 599.52L855.06 598.648L855.399 599.052L855.519 598.952ZM850.718 601.838L849.399 600.266L850.41 599.417L851.729 600.989L850.718 601.838ZM852.443 601.597C852.691 601.388 852.926 600.94 852.881 600.868L851.215 598.883C851.346 598.741 851.395 598.575 851.395 598.481L850.155 598.535L850.104 599.22L849.212 599.969L848.17 600.295L850.731 603.347L850.842 603.254C851.145 603 851.328 602.564 851.274 602.5L850.942 602.105L851.953 601.256L852.324 601.697L852.443 601.597ZM849.155 597.885L848.021 596.534L850.135 594.759L851.269 596.11L849.155 597.885ZM851.825 596.772L851.963 596.657C852.229 596.433 852.513 595.912 852.469 595.84L851.072 594.176C851.207 594.001 851.264 593.827 851.266 593.716L849.863 593.781L849.82 594.57L847.843 596.229L846.669 596.603L848.992 599.37L849.111 599.27C849.451 598.984 849.672 598.501 849.611 598.428L849.379 598.152L851.493 596.377L851.825 596.772Z"
                        fill="#656565"
                    />
                    <path
                        d="M882.854 635.339C883.514 635.584 884.436 636.048 884.952 636.587C886.103 636.67 885.647 634.671 882.918 635.191L882.854 635.339ZM882.593 637.063L883.549 636.26C883.669 636.16 883.722 636.037 883.665 635.912C883.142 635.85 882.334 635.839 882.334 635.839L882.406 636.765L882.369 636.796L880.803 634.93C881.011 634.693 881.015 634.548 880.927 634.387L879.687 635.224L881.57 637.467L880.32 638.517L880.617 638.722L881.665 637.842C882.604 639.372 883.419 641.07 883.681 642.652L883.902 642.654C883.942 641.712 883.834 640.8 883.614 639.903L886.893 643.81L887.059 643.671C887.353 643.424 887.531 642.946 887.446 642.845L883.388 638.009C883.934 638.193 884.563 638.495 884.932 638.86C886.037 638.888 885.674 636.999 883.18 637.761L882.593 637.063ZM886.414 636.911C886.093 637.947 885.754 638.906 885.599 639.318L886.888 639.678C886.934 639.546 886.888 639.38 886.787 639.277C886.778 638.501 886.752 637.817 886.715 637.269C888.155 639.022 888.646 640.615 887.988 642.687L888.173 642.72C889.418 640.265 888.955 638.444 887.384 636.535L883.927 632.417C884.126 632.187 884.122 632.034 884.033 631.89L882.865 632.682L886.414 636.911ZM892.089 635.813L891.979 635.906C892.228 636.37 892.516 636.975 892.527 637.137C892.535 637.24 892.505 637.297 892.448 637.361C892.373 637.439 892.217 637.57 892.042 637.717L891.629 638.064C891.417 638.242 891.319 638.199 891.172 638.024L888.688 635.064C889.398 635.22 890.184 635.485 890.685 635.895C891.934 635.833 891.303 633.793 888.394 634.715L887.831 634.044C888.04 633.211 888.183 632.26 888.23 631.719C888.46 631.62 888.535 631.448 888.511 631.326L887.006 631.493C887.152 631.966 887.341 632.826 887.469 633.612L885.439 631.195C885.638 630.965 885.636 630.794 885.545 630.667L884.343 631.457L890.601 638.912C891.048 639.445 891.382 639.525 892.044 638.969L892.623 638.483C893.643 637.627 893.84 637.227 893.57 636.905C893.446 636.758 893.303 636.737 892.99 636.812L892.089 635.813ZM895.793 626.561L894.653 627.518L894.098 626.856L895.816 625.413C895.945 625.305 895.998 625.182 895.932 625.065C895.414 625.046 894.654 625.073 894.654 625.073L894.664 625.926L893.874 626.59L893.457 626.093C893.618 625.911 893.621 625.784 893.537 625.666L892.404 626.444L893.083 627.253L891.263 628.781L891.561 628.986L893.307 627.52L893.863 628.182L891.592 630.088L891.89 630.292L896.982 626.018C897.11 625.909 897.164 625.786 897.107 625.662C896.572 625.641 895.774 625.699 895.774 625.699L895.793 626.561ZM897.162 628.734L894.634 630.856L893.917 630.001L896.445 627.879L897.162 628.734ZM896.971 633.658C896.994 633.592 897.001 633.507 896.984 633.412C897.36 632.423 897.694 631.421 897.864 630.933L897.72 630.835C897.394 631.344 897.079 631.827 896.778 632.253L895.937 631.251C896.103 630.814 896.209 630.38 896.237 629.965L897.386 629L897.548 629.193L897.677 629.085C897.787 628.993 897.894 628.84 897.982 628.703C897.987 629.044 897.967 629.468 897.925 629.848C897.488 629.98 896.975 630.191 896.388 630.481L896.439 630.672C897.887 630.381 899.289 630.427 899.947 630.595C900.745 630.427 900.44 629.241 898.327 629.73C898.512 629.371 898.709 628.971 898.834 628.709C899.045 628.626 899.113 628.538 899.122 628.436L898.12 628.4C898.121 628.383 898.123 628.366 898.115 628.357L897.243 627.318C897.365 627.184 897.413 627.035 897.412 626.941L896.205 627.015L896.147 627.674L893.739 629.696L892.688 630.03L894.393 632.061L894.503 631.969C894.788 631.73 894.997 631.288 894.943 631.223L894.858 631.122L895.336 630.721C895.255 631.651 894.917 632.686 894.397 633.672L894.611 633.759C894.97 633.253 895.271 632.734 895.529 632.22L896 632.781C896.108 632.91 896.123 633.022 896.011 633.429L896.952 633.673L895.381 634.993L889.764 628.301L895.508 623.478L901.125 630.17L896.971 633.658ZM895.219 622.405L895.193 623.289L889.623 627.965L888.338 628.338L895.344 636.685L895.491 636.561C895.868 636.245 896.013 635.747 895.921 635.636L895.604 635.259L901.349 630.437L901.881 631.071L902.01 630.963C902.332 630.693 902.56 630.125 902.508 630.044L896.513 622.901C896.658 622.701 896.742 622.521 896.737 622.384L895.219 622.405ZM900.125 618.208C900.728 618.235 901.57 618.436 902.091 618.814C903.472 618.61 902.687 616.276 900.145 618.082L900.125 618.208ZM905.081 616.57L898.141 622.396L898.448 622.593L902.161 619.476L903.203 620.717L901.521 622.129L900.251 622.521L904.14 627.154L904.278 627.038C904.636 626.737 904.851 626.227 904.774 626.135L901.68 622.449L903.427 620.983L907.824 626.223L907.99 626.084C908.449 625.698 908.58 625.275 908.518 625.202L904.336 620.219L906.083 618.753L908.498 621.63C908.598 621.75 908.599 621.844 908.442 621.975C908.231 622.152 907.367 622.784 907.367 622.784L907.482 622.922C907.942 622.63 908.237 622.57 908.474 622.591C908.692 622.627 908.908 622.791 909.159 623.034C910.13 622.063 909.967 621.588 909.457 620.982L907.096 618.169C907.249 617.978 907.318 617.779 907.328 617.661L905.78 617.739L905.767 618.564L904.113 619.953L903.071 618.712L906.656 615.702C906.794 615.587 906.847 615.464 906.79 615.339C906.101 615.322 905.058 615.367 905.058 615.367L905.081 616.57ZM913.306 621.59C914.135 618.434 913.144 615.442 911.302 612.539C911.568 612.315 911.596 612.198 911.531 612.065L909.999 612.927C912.06 615.663 913.439 618.799 913.118 621.591L913.306 621.59ZM911.552 608.991L911.646 609.868L910.671 610.686L910.97 610.874L912.128 609.902C915.268 613.157 917.862 615.164 920.95 615.204C920.786 614.747 920.823 614.119 921.118 613.668L921.072 613.519C917.985 614.042 915.148 612.287 912.54 609.87C912.912 609.51 913.12 609.179 913.127 608.907L911.552 608.991ZM916.953 604.002C917.255 605.034 917.467 606.799 917.385 608.137L917.561 608.161C918.054 606.807 918.255 605.198 918.257 604.099C918.516 603.96 918.552 603.835 918.53 603.697L916.953 604.002ZM920.105 607.421C920.077 606.864 920.003 606.347 919.923 605.897C920.168 605.722 920.212 605.607 920.173 605.467L918.534 605.903C919.095 607.188 919.66 609.299 919.71 610.964L919.879 610.979C920.046 610.337 920.114 609.653 920.147 608.983L923.542 613.028L923.698 612.897C924.048 612.603 924.193 612.105 924.141 612.024L920.468 607.648C920.611 607.482 920.647 607.357 920.614 607.244L920.105 607.421ZM923.206 608.688C923.608 609.149 923.728 609.926 923.666 610.338C923.568 610.687 923.647 611.044 923.984 611.184C924.355 611.327 924.762 610.954 924.778 610.58C924.791 610.036 924.375 609.242 923.353 608.565L923.206 608.688ZM927.809 606.108L927.708 606.193C927.936 606.707 928.126 607.158 928.154 607.323C928.161 607.442 928.131 607.499 928.037 607.593C927.935 607.695 927.64 607.942 927.31 608.22L926.482 608.914C926.188 609.161 926.128 609.165 926.028 609.045L924.824 607.611C924.976 607.437 924.981 607.276 924.907 607.15L923.793 607.913L925.421 609.853C925.861 610.376 926.13 610.417 926.902 609.769L927.848 608.974C929.227 607.817 929.435 607.392 929.157 607.061C929.041 606.923 928.909 606.877 928.61 606.987L927.809 606.108ZM924.704 606.74C925.318 606.836 926.121 607.196 926.529 607.7C927.741 607.764 927.3 605.595 924.75 606.608L924.704 606.74ZM927.014 605.46C927.806 605.563 928.838 605.934 929.411 606.487C930.691 606.462 929.978 604.193 927.061 605.31L927.014 605.46ZM925.11 604.05L923.79 602.478L924.489 601.891L925.808 603.463L925.11 604.05ZM921.051 604.777L921.786 604.16L923.106 605.732L922.371 606.349L921.051 604.777ZM923.138 603.026L924.457 604.597L923.749 605.192L922.43 603.62L923.138 603.026ZM925.281 601.305C925.442 601.123 925.487 600.99 925.481 600.87L924.241 600.924L924.237 601.648L922.73 602.913C922.569 602.61 922.377 602.269 922.169 601.927L924.706 599.798C924.834 599.69 924.879 599.574 924.821 599.45C924.202 599.421 923.252 599.466 923.252 599.466L923.287 600.534L921.991 601.622L921.6 600.932C921.793 600.77 921.851 600.596 921.779 600.437L920.33 601.136C920.569 601.515 920.838 601.947 921.099 602.371L918.645 604.431L918.942 604.636L921.286 602.668C921.501 603.036 921.694 603.36 921.857 603.646L920.928 604.426L919.807 604.788L922.191 607.628L922.319 607.52C922.687 607.212 922.81 606.873 922.764 606.818L922.594 606.616L926.032 603.73L926.256 603.996L926.384 603.888C926.467 603.819 926.533 603.748 926.59 603.685L926.582 604.459L921.921 608.371L922.219 608.576L927.982 603.738C928.12 603.622 928.164 603.507 928.107 603.383C927.664 603.378 927.063 603.428 926.764 603.444C926.852 603.307 926.878 603.207 926.855 603.18L925.281 601.305ZM938.343 598.628L938.233 598.721C938.121 598.924 937.994 599.109 937.892 599.211C937.779 599.337 937.636 599.504 937.46 599.667C937.191 599.925 936.434 600.591 935.533 601.348L933.235 603.277C932.362 604.01 932.035 604.049 931.695 603.645L926.727 597.725L926.526 597.486L933.015 592.038C933.144 591.93 933.197 591.807 933.14 591.683C932.528 591.664 931.606 591.685 931.606 591.685L931.633 592.744L925.08 598.246L925.377 598.451L925.726 598.157L930.981 604.417C931.775 605.364 932.475 605.059 933.89 603.871L936.023 602.08C939.084 599.511 939.601 598.951 939.231 598.51C939.1 598.354 938.889 598.327 938.404 598.608L938.343 598.628ZM935.546 599.253L934.226 597.681L935.265 596.809L936.584 598.381L935.546 599.253ZM937.267 598.952C937.515 598.744 937.761 598.271 937.724 598.208L936.103 596.278C936.227 596.127 936.294 595.945 936.294 595.851L934.994 595.908L934.958 596.612L934.048 597.376L932.997 597.71L935.443 600.624L935.553 600.532C935.847 600.285 936.055 599.86 935.993 599.786L935.769 599.52L936.808 598.648L937.148 599.052L937.267 598.952ZM932.466 601.838L931.147 600.266L932.158 599.417L933.477 600.989L932.466 601.838ZM934.191 601.597C934.439 601.388 934.674 600.94 934.629 600.868L932.963 598.883C933.095 598.741 933.143 598.575 933.143 598.481L931.903 598.535L931.852 599.22L930.96 599.969L929.918 600.295L932.479 603.347L932.59 603.254C932.893 603 933.076 602.564 933.022 602.5L932.69 602.105L933.701 601.256L934.072 601.697L934.191 601.597ZM930.903 597.885L929.769 596.534L931.883 594.759L933.018 596.11L930.903 597.885ZM933.573 596.772L933.711 596.657C933.977 596.433 934.261 595.912 934.217 595.84L932.82 594.176C932.955 594.001 933.012 593.827 933.014 593.716L931.611 593.781L931.568 594.57L929.591 596.229L928.417 596.603L930.74 599.37L930.859 599.27C931.199 598.984 931.42 598.501 931.359 598.428L931.127 598.152L933.241 596.377L933.573 596.772Z"
                        fill="#656565"
                    />
                    <path
                        d="M180.945 577.43C180.945 579.639 182.736 581.43 184.945 581.43H204.07C206.279 581.43 208.07 579.639 208.07 577.43V415.919C208.07 413.71 206.279 411.919 204.07 411.919H184.945C182.736 411.919 180.945 413.71 180.945 415.919V577.43Z"
                        fill="#BEBEBE"
                        className='chart'

                    />
                    <path
                        d="M262.691 577.43C262.691 579.639 264.482 581.43 266.691 581.43H285.816C288.026 581.43 289.816 579.639 289.816 577.43V296.956C289.816 294.747 288.026 292.956 285.816 292.956H266.691C264.482 292.956 262.691 294.747 262.691 296.956V577.43Z"
                        fill="#BEBEBE"
                        className='chart'
                    />
                    <path
                        d="M344.438 577.43C344.438 579.639 346.228 581.43 348.438 581.43H367.562C369.772 581.43 371.562 579.639 371.562 577.43V450.392C371.562 448.183 369.772 446.392 367.562 446.392H348.437C346.228 446.392 344.438 448.183 344.438 450.392V577.43Z"
                        fill="#BEBEBE"
                        className='chart'
                    />
                    <path
                        d="M426.186 577.429C426.186 579.639 427.976 581.429 430.186 581.429H449.311C451.52 581.429 453.311 579.639 453.311 577.429V318.259C453.311 316.05 451.52 314.259 449.311 314.259H430.186C427.976 314.259 426.186 316.05 426.186 318.259V577.429Z"
                        fill="#BEBEBE"
                        className='chart'
                    />
                    <path
                        d="M507.932 577.429C507.932 579.639 509.723 581.429 511.932 581.429H531.057C533.266 581.429 535.057 579.639 535.057 577.429V527.453C535.057 525.244 533.266 523.453 531.057 523.453H511.932C509.722 523.453 507.932 525.244 507.932 527.453V577.429Z"
                        fill="#BEBEBE"
                        className='chart'
                    />
                    <path
                        d="M589.678 577.429C589.678 579.639 591.469 581.429 593.678 581.429H612.803C615.012 581.429 616.803 579.639 616.803 577.429V338.14C616.803 335.931 615.012 334.14 612.803 334.14H593.678C591.469 334.14 589.678 335.931 589.678 338.14V577.429Z"
                        fill="#BEBEBE"
                        className='chart'
                    />
                    <path
                        d="M671.426 577.43C671.426 579.639 673.217 581.43 675.426 581.43H694.551C696.76 581.43 698.551 579.639 698.551 577.43V510.025C698.551 507.816 696.76 506.025 694.551 506.025H675.426C673.217 506.025 671.426 507.816 671.426 510.025V577.43Z"
                        fill="#BEBEBE"
                        className='chart'
                    />
                    <path
                        d="M753.172 577.429C753.172 579.639 754.963 581.429 757.172 581.429H776.297C778.506 581.429 780.297 579.639 780.297 577.429V452.494C780.297 450.285 778.506 448.494 776.297 448.494H757.172C754.963 448.494 753.172 450.285 753.172 452.494V577.429Z"
                        fill="#BEBEBE"
                        className='chart'
                    />
                    <path
                        d="M834.92 577.43C834.92 579.639 836.711 581.43 838.92 581.43H858.045C860.254 581.43 862.045 579.639 862.045 577.43V155.348C862.045 153.139 860.254 151.348 858.045 151.348H838.92C836.711 151.348 834.92 153.139 834.92 155.348V577.43Z"
                        fill="#BEBEBE"
                        className='chart'
                    />
                    <path
                        d="M916.666 577.43C916.666 579.639 918.457 581.43 920.666 581.43H939.791C942 581.43 943.791 579.639 943.791 577.43V274.071C943.791 271.862 942 270.071 939.791 270.071H920.666C918.457 270.071 916.666 271.862 916.666 274.071V577.43Z"
                        fill="#BEBEBE"
                        className='chart'
                    />
                    <path
                        d="M213.494 577.43C213.494 579.639 215.285 581.43 217.494 581.43H236.619C238.828 581.43 240.619 579.639 240.619 577.43V390.374C240.619 388.165 238.828 386.374 236.619 386.374H217.494C215.285 386.374 213.494 388.165 213.494 390.374V577.43Z"
                        fill="#00303C"
                        className='chart'
                    />
                    <path
                        d="M295.242 577.43C295.242 579.639 297.033 581.43 299.242 581.43H318.367C320.576 581.43 322.367 579.639 322.367 577.43V264.833C322.367 262.624 320.576 260.833 318.367 260.833H299.242C297.033 260.833 295.242 262.624 295.242 264.833V577.43Z"
                        fill="#00303C"
                        className='chart'
                    />
                    <path
                        d="M376.988 577.43C376.988 579.639 378.779 581.43 380.988 581.43H400.113C402.322 581.43 404.113 579.639 404.113 577.43V439.428C404.113 437.219 402.322 435.428 400.113 435.428H380.988C378.779 435.428 376.988 437.219 376.988 439.428V577.43Z"
                        fill="#00303C"
                        className='chart'
                    />
                    <path
                        d="M458.734 577.43C458.734 579.639 460.525 581.43 462.734 581.43H481.859C484.069 581.43 485.859 579.639 485.859 577.43V298.442C485.859 296.233 484.069 294.442 481.859 294.442H462.734C460.525 294.442 458.734 296.233 458.734 298.442V577.43Z"
                        fill="#00303C"
                        className='chart'
                    />
                    <path
                        d="M540.482 577.43C540.482 579.639 542.273 581.43 544.482 581.43H563.607C565.817 581.43 567.607 579.639 567.607 577.43V523.364C567.607 521.155 565.817 519.364 563.607 519.364H544.482C542.273 519.364 540.482 521.155 540.482 523.364V577.43Z"
                        fill="#00303C"
                        className='chart'
                    />
                    <path
                        d="M622.229 577.43C622.229 579.639 624.019 581.43 626.229 581.43H645.354C647.563 581.43 649.354 579.639 649.354 577.43V321.668C649.354 319.459 647.563 317.668 645.354 317.668H626.229C624.019 317.668 622.229 319.459 622.229 321.668V577.43Z"
                        fill="#00303C"
                        className='chart'
                    />
                    <path
                        d="M703.977 577.43C703.977 579.639 705.767 581.43 707.977 581.43H727.102C729.311 581.43 731.102 579.639 731.102 577.43V505.757C731.102 503.548 729.311 501.757 727.102 501.757H707.977C705.767 501.757 703.977 503.548 703.977 505.757V577.43Z"
                        fill="#00303C"
                        className='chart'
                    />
                    <path
                        d="M785.723 577.43C785.723 579.639 787.514 581.43 789.723 581.43H808.848C811.057 581.43 812.848 579.639 812.848 577.43V445.147C812.848 442.938 811.057 441.147 808.848 441.147H789.723C787.514 441.147 785.723 442.938 785.723 445.147V577.43Z"
                        fill="#00303C"
                        className='chart'
                    />
                    <path
                        d="M867.469 577.43C867.469 579.639 869.26 581.43 871.469 581.43H890.594C892.803 581.43 894.594 579.639 894.594 577.43V132.909C894.594 130.7 892.803 128.909 890.594 128.909H871.469C869.26 128.909 867.469 130.7 867.469 132.909V577.43Z"
                        fill="#00303C"
                        className='chart'
                    />
                    <path
                        d="M949.215 577.43C949.215 579.639 951.006 581.43 953.215 581.43H972.34C974.549 581.43 976.34 579.639 976.34 577.43V262.985C976.34 260.776 974.549 258.985 972.34 258.985H953.215C951.006 258.985 949.215 260.776 949.215 262.985V577.43Z"
                        fill="#00303C"
                        className='chart'
                    />
                    <path
                        d="M45.7578 721.199H61.6501V737.093H45.7578V721.199Z"
                        fill="#BEBEBE"
                    />
                    <path
                        d="M79.488 731.98C80.1 731.356 80.688 730.744 81.036 730.384C83.004 728.332 83.676 727.492 83.676 726.352C83.676 724.984 82.92 724.024 81.228 724.024C79.92 724.024 78.768 724.684 78.588 726.004C78.72 726.256 78.948 726.412 79.224 726.412C79.56 726.412 79.788 726.196 79.944 725.584L80.208 724.624C80.484 724.564 80.724 724.54 80.916 724.54C81.9 724.54 82.524 725.284 82.524 726.412C82.524 727.468 81.924 728.464 80.64 729.928C80.064 730.588 79.368 731.38 78.648 732.184V733H84.048V731.98H79.488ZM86.2899 728.536C86.2899 725.38 87.0579 724.552 87.8979 724.552C88.7019 724.552 89.4579 725.38 89.4579 728.536C89.4579 731.8 88.7019 732.664 87.8979 732.664C87.0579 732.664 86.2899 731.812 86.2899 728.536ZM87.8979 724.024C86.4819 724.024 85.1259 725.248 85.1259 728.536C85.1259 731.932 86.4819 733.168 87.8979 733.168C89.2779 733.168 90.6339 731.932 90.6339 728.536C90.6339 725.248 89.2779 724.024 87.8979 724.024ZM95.1559 732.328C95.1439 731.632 95.1319 730.924 95.1319 730.228V726.1L95.1799 724.204L94.9999 724.072L92.2999 724.78V725.236L94.0519 725.068V730.228C94.0519 730.924 94.0399 731.632 94.0279 732.328L92.1559 732.592V733H97.0039V732.592L95.1559 732.328ZM101.082 732.676C100.074 732.676 99.3898 731.956 99.3898 730.888C99.3898 729.964 99.7978 729.424 100.662 728.884C102.21 729.604 102.678 730.204 102.678 731.02C102.678 732.004 102.042 732.676 101.082 732.676ZM99.6178 725.968C99.6178 725.092 100.29 724.54 101.058 724.54C101.91 724.54 102.402 725.26 102.402 726.052C102.402 726.928 102.126 727.492 101.346 728.092C99.9658 727.42 99.6178 726.712 99.6178 725.968ZM101.754 728.284C102.978 727.588 103.338 726.772 103.338 726.076C103.338 724.888 102.474 724.024 101.082 724.024C99.7138 724.024 98.6218 724.864 98.6218 726.208C98.6218 727.228 99.1018 728.044 100.254 728.68C98.9938 729.28 98.3458 730 98.3458 731.008C98.3458 732.4 99.4378 733.168 101.046 733.168C102.594 733.168 103.734 732.22 103.734 730.84C103.734 729.664 103.11 728.944 101.754 728.284ZM104.392 735.1H105.112L108.616 723.676H107.92L104.392 735.1ZM112.652 732.328C112.64 731.632 112.628 730.924 112.628 730.228V726.1L112.676 724.204L112.496 724.072L109.796 724.78V725.236L111.548 725.068V730.228C111.548 730.924 111.536 731.632 111.524 732.328L109.652 732.592V733H114.5V732.592L112.652 732.328ZM116.742 731.98C117.354 731.356 117.942 730.744 118.29 730.384C120.258 728.332 120.93 727.492 120.93 726.352C120.93 724.984 120.174 724.024 118.482 724.024C117.174 724.024 116.022 724.684 115.842 726.004C115.974 726.256 116.202 726.412 116.478 726.412C116.814 726.412 117.042 726.196 117.198 725.584L117.462 724.624C117.738 724.564 117.978 724.54 118.17 724.54C119.154 724.54 119.778 725.284 119.778 726.412C119.778 727.468 119.178 728.464 117.894 729.928C117.318 730.588 116.622 731.38 115.902 732.184V733H121.302V731.98H116.742ZM130.01 723.136C129.998 726.844 130.046 730.732 125.39 733.768L125.546 733.96C129.866 731.752 130.73 728.716 130.958 725.764C131.306 729.412 132.338 732.208 135.506 733.936C135.65 733.408 135.998 733.132 136.502 733.06L136.526 732.928C132.386 731.128 131.306 728.104 131.042 723.628C131.354 723.592 131.45 723.472 131.474 723.292L130.01 723.136ZM139.754 731.656V725.092H146.102V731.656H139.754ZM146.522 724.072L145.946 724.732H139.838L138.746 724.252V733.528H138.926C139.346 733.528 139.754 733.276 139.754 733.156V732.016H146.102V733.336H146.246C146.606 733.336 147.086 733.108 147.11 733.024V725.356C147.422 725.308 147.65 725.176 147.758 725.044L146.522 724.072ZM151.01 724.408H152.126V725.248H151.01V724.408ZM154.094 724.408V725.248H152.978V724.408H154.094ZM154.094 726.424H152.978V725.596H154.094V726.424ZM151.01 726.424V725.596H152.126V726.424H151.01ZM154.262 727.912V728.932H152.978V727.912H154.262ZM150.83 727.912H152.126V728.932H150.83V727.912ZM150.194 727.108H150.338C150.746 727.108 151.01 726.904 151.01 726.844V726.784H152.126V727.564H150.962L150.014 727.168V729.712H150.146C150.554 729.712 150.83 729.508 150.83 729.448V729.292H154.262V729.628H154.406C154.67 729.628 155.078 729.448 155.09 729.364V727.996C155.27 727.96 155.414 727.876 155.474 727.804L154.586 727.144L154.166 727.564H152.978V726.784H154.094V727.048H154.226C154.49 727.048 154.91 726.868 154.922 726.784V725.596H156.05C156.206 725.596 156.326 725.536 156.35 725.404C156.038 725.08 155.522 724.66 155.522 724.66L155.078 725.248H154.922V724.516C155.114 724.48 155.27 724.384 155.342 724.312L154.418 723.604L153.986 724.06H152.978V723.376C153.278 723.328 153.386 723.208 153.422 723.04L152.126 722.908V724.06H151.166L150.194 723.652V725.248H149.342L149.438 725.596H150.194V727.108ZM153.494 730.804C153.374 731.212 153.17 731.584 152.882 731.932C152.438 731.848 151.886 731.776 151.25 731.74C151.37 731.5 151.502 731.248 151.622 730.996C152.306 730.936 152.93 730.864 153.494 730.804ZM155.81 730.3L154.454 730.324L154.49 730.144C154.742 730.144 154.898 730.06 154.946 729.892L153.71 729.592C153.698 729.856 153.662 730.096 153.614 730.348L151.922 730.372C152.018 730.192 152.102 730.012 152.174 729.856C152.534 729.844 152.63 729.736 152.666 729.58L151.406 729.34C151.334 729.592 151.178 729.976 150.986 730.396C150.362 730.408 149.822 730.408 149.45 730.396L149.774 731.392C149.882 731.368 150.014 731.296 150.098 731.152L150.662 731.092C150.506 731.428 150.362 731.716 150.23 731.92C150.806 732.052 151.55 732.28 152.258 732.544C151.622 733.012 150.734 733.42 149.486 733.732L149.57 733.912C151.058 733.636 152.09 733.24 152.822 732.76C153.398 732.988 153.914 733.252 154.25 733.492C154.97 733.696 155.426 732.712 153.59 732.112C153.986 731.692 154.214 731.212 154.358 730.708C154.91 730.648 155.39 730.588 155.822 730.528L155.81 730.3ZM158.678 725.896C158.558 727.36 158.294 728.704 157.778 729.928C157.31 728.932 156.974 727.804 156.758 726.592C156.866 726.376 156.962 726.136 157.058 725.896H158.678ZM160.214 725.896C160.37 725.896 160.49 725.836 160.526 725.704C160.118 725.308 159.422 724.768 159.422 724.768L158.834 725.548H157.202C157.43 724.912 157.634 724.228 157.802 723.532C158.054 723.52 158.186 723.412 158.222 723.244L156.806 722.932C156.59 724.948 156.026 727.036 155.354 728.44L155.522 728.548C155.906 728.104 156.254 727.576 156.554 727.012C156.722 728.332 156.998 729.58 157.43 730.684C156.782 731.884 155.882 732.94 154.598 733.828L154.706 733.984C156.05 733.312 157.034 732.472 157.778 731.5C158.246 732.46 158.882 733.3 159.71 733.96C159.842 733.54 160.142 733.336 160.562 733.264L160.598 733.156C159.602 732.556 158.846 731.752 158.246 730.804C159.074 729.4 159.506 727.756 159.722 725.896H160.214Z"
                        fill="#2C3542"
                        fillOpacity="0.65"
                    />
                    <path
                        d="M274.904 721.199H290.797V737.093H274.904V721.199Z"
                        fill="#00303C"
                    />
                    <path
                        d="M308.488 731.98C309.1 731.356 309.688 730.744 310.036 730.384C312.004 728.332 312.676 727.492 312.676 726.352C312.676 724.984 311.92 724.024 310.228 724.024C308.92 724.024 307.768 724.684 307.588 726.004C307.72 726.256 307.948 726.412 308.224 726.412C308.56 726.412 308.788 726.196 308.944 725.584L309.208 724.624C309.484 724.564 309.724 724.54 309.916 724.54C310.9 724.54 311.524 725.284 311.524 726.412C311.524 727.468 310.924 728.464 309.64 729.928C309.064 730.588 308.368 731.38 307.648 732.184V733H313.048V731.98H308.488ZM315.29 728.536C315.29 725.38 316.058 724.552 316.898 724.552C317.702 724.552 318.458 725.38 318.458 728.536C318.458 731.8 317.702 732.664 316.898 732.664C316.058 732.664 315.29 731.812 315.29 728.536ZM316.898 724.024C315.482 724.024 314.126 725.248 314.126 728.536C314.126 731.932 315.482 733.168 316.898 733.168C318.278 733.168 319.634 731.932 319.634 728.536C319.634 725.248 318.278 724.024 316.898 724.024ZM321.66 731.98C322.272 731.356 322.86 730.744 323.208 730.384C325.176 728.332 325.848 727.492 325.848 726.352C325.848 724.984 325.092 724.024 323.4 724.024C322.092 724.024 320.94 724.684 320.76 726.004C320.892 726.256 321.12 726.412 321.396 726.412C321.732 726.412 321.96 726.196 322.116 725.584L322.38 724.624C322.656 724.564 322.896 724.54 323.088 724.54C324.072 724.54 324.696 725.284 324.696 726.412C324.696 727.468 324.096 728.464 322.812 729.928C322.236 730.588 321.54 731.38 320.82 732.184V733H326.22V731.98H321.66ZM328.246 731.98C328.858 731.356 329.446 730.744 329.794 730.384C331.762 728.332 332.434 727.492 332.434 726.352C332.434 724.984 331.678 724.024 329.986 724.024C328.678 724.024 327.526 724.684 327.346 726.004C327.478 726.256 327.706 726.412 327.982 726.412C328.318 726.412 328.546 726.196 328.702 725.584L328.966 724.624C329.242 724.564 329.482 724.54 329.674 724.54C330.658 724.54 331.282 725.284 331.282 726.412C331.282 727.468 330.682 728.464 329.398 729.928C328.822 730.588 328.126 731.38 327.406 732.184V733H332.806V731.98H328.246ZM333.392 735.1H334.112L337.616 723.676H336.92L333.392 735.1ZM341.652 732.328C341.64 731.632 341.628 730.924 341.628 730.228V726.1L341.676 724.204L341.496 724.072L338.796 724.78V725.236L340.548 725.068V730.228C340.548 730.924 340.536 731.632 340.524 732.328L338.652 732.592V733H343.5V732.592L341.652 732.328ZM345.958 728.536C345.958 725.38 346.726 724.552 347.566 724.552C348.37 724.552 349.126 725.38 349.126 728.536C349.126 731.8 348.37 732.664 347.566 732.664C346.726 732.664 345.958 731.812 345.958 728.536ZM347.566 724.024C346.15 724.024 344.794 725.248 344.794 728.536C344.794 731.932 346.15 733.168 347.566 733.168C348.946 733.168 350.302 731.932 350.302 728.536C350.302 725.248 348.946 724.024 347.566 724.024ZM359.01 723.136C358.998 726.844 359.046 730.732 354.39 733.768L354.546 733.96C358.866 731.752 359.73 728.716 359.958 725.764C360.306 729.412 361.338 732.208 364.506 733.936C364.65 733.408 364.998 733.132 365.502 733.06L365.526 732.928C361.386 731.128 360.306 728.104 360.042 723.628C360.354 723.592 360.45 723.472 360.474 723.292L359.01 723.136ZM368.754 731.656V725.092H375.102V731.656H368.754ZM375.522 724.072L374.946 724.732H368.838L367.746 724.252V733.528H367.926C368.346 733.528 368.754 733.276 368.754 733.156V732.016H375.102V733.336H375.246C375.606 733.336 376.086 733.108 376.11 733.024V725.356C376.422 725.308 376.65 725.176 376.758 725.044L375.522 724.072ZM380.01 724.408H381.126V725.248H380.01V724.408ZM383.094 724.408V725.248H381.978V724.408H383.094ZM383.094 726.424H381.978V725.596H383.094V726.424ZM380.01 726.424V725.596H381.126V726.424H380.01ZM383.262 727.912V728.932H381.978V727.912H383.262ZM379.83 727.912H381.126V728.932H379.83V727.912ZM379.194 727.108H379.338C379.746 727.108 380.01 726.904 380.01 726.844V726.784H381.126V727.564H379.962L379.014 727.168V729.712H379.146C379.554 729.712 379.83 729.508 379.83 729.448V729.292H383.262V729.628H383.406C383.67 729.628 384.078 729.448 384.09 729.364V727.996C384.27 727.96 384.414 727.876 384.474 727.804L383.586 727.144L383.166 727.564H381.978V726.784H383.094V727.048H383.226C383.49 727.048 383.91 726.868 383.922 726.784V725.596H385.05C385.206 725.596 385.326 725.536 385.35 725.404C385.038 725.08 384.522 724.66 384.522 724.66L384.078 725.248H383.922V724.516C384.114 724.48 384.27 724.384 384.342 724.312L383.418 723.604L382.986 724.06H381.978V723.376C382.278 723.328 382.386 723.208 382.422 723.04L381.126 722.908V724.06H380.166L379.194 723.652V725.248H378.342L378.438 725.596H379.194V727.108ZM382.494 730.804C382.374 731.212 382.17 731.584 381.882 731.932C381.438 731.848 380.886 731.776 380.25 731.74C380.37 731.5 380.502 731.248 380.622 730.996C381.306 730.936 381.93 730.864 382.494 730.804ZM384.81 730.3L383.454 730.324L383.49 730.144C383.742 730.144 383.898 730.06 383.946 729.892L382.71 729.592C382.698 729.856 382.662 730.096 382.614 730.348L380.922 730.372C381.018 730.192 381.102 730.012 381.174 729.856C381.534 729.844 381.63 729.736 381.666 729.58L380.406 729.34C380.334 729.592 380.178 729.976 379.986 730.396C379.362 730.408 378.822 730.408 378.45 730.396L378.774 731.392C378.882 731.368 379.014 731.296 379.098 731.152L379.662 731.092C379.506 731.428 379.362 731.716 379.23 731.92C379.806 732.052 380.55 732.28 381.258 732.544C380.622 733.012 379.734 733.42 378.486 733.732L378.57 733.912C380.058 733.636 381.09 733.24 381.822 732.76C382.398 732.988 382.914 733.252 383.25 733.492C383.97 733.696 384.426 732.712 382.59 732.112C382.986 731.692 383.214 731.212 383.358 730.708C383.91 730.648 384.39 730.588 384.822 730.528L384.81 730.3ZM387.678 725.896C387.558 727.36 387.294 728.704 386.778 729.928C386.31 728.932 385.974 727.804 385.758 726.592C385.866 726.376 385.962 726.136 386.058 725.896H387.678ZM389.214 725.896C389.37 725.896 389.49 725.836 389.526 725.704C389.118 725.308 388.422 724.768 388.422 724.768L387.834 725.548H386.202C386.43 724.912 386.634 724.228 386.802 723.532C387.054 723.52 387.186 723.412 387.222 723.244L385.806 722.932C385.59 724.948 385.026 727.036 384.354 728.44L384.522 728.548C384.906 728.104 385.254 727.576 385.554 727.012C385.722 728.332 385.998 729.58 386.43 730.684C385.782 731.884 384.882 732.94 383.598 733.828L383.706 733.984C385.05 733.312 386.034 732.472 386.778 731.5C387.246 732.46 387.882 733.3 388.71 733.96C388.842 733.54 389.142 733.336 389.562 733.264L389.598 733.156C388.602 732.556 387.846 731.752 387.246 730.804C388.074 729.4 388.506 727.756 388.722 725.896H389.214Z"
                        fill="#2C3542"
                        fillOpacity="0.65"
                    />
                    <path
                        d="M314.006 92.064C315.478 90.752 316.95 89.536 317.974 88.704C323.894 84.032 326.87 81.536 326.87 78.112C326.87 74.304 324.534 71.552 319.478 71.552C315.19 71.552 311.574 73.6 311.286 77.28C311.67 78.08 312.438 78.592 313.366 78.592C314.358 78.592 315.414 78.08 315.766 75.936L316.47 72.768C316.886 72.672 317.302 72.64 317.686 72.64C320.15 72.64 321.654 74.624 321.654 77.792C321.654 81.248 320.086 83.36 316.598 87.296C315.03 89.088 313.238 91.104 311.382 93.12V96H327.414V92.064H314.006ZM336.834 84C336.834 75.04 338.402 72.672 340.29 72.672C342.178 72.672 343.81 75.072 343.81 84C343.81 92.992 342.178 95.424 340.29 95.424C338.402 95.424 336.834 93.024 336.834 84ZM340.29 71.552C335.842 71.552 331.97 75.328 331.97 84C331.97 92.736 335.842 96.544 340.29 96.544C344.706 96.544 348.642 92.736 348.642 84C348.642 75.328 344.706 71.552 340.29 71.552ZM364.303 94.432C364.271 92.416 364.239 90.368 364.239 88.416V77.248L364.367 72.032L363.887 71.712L355.215 73.664V74.848L358.991 74.496V88.416C358.991 90.368 358.959 92.416 358.927 94.432L354.351 95.008V96H368.591V95.008L364.303 94.432ZM380.38 85.408C384.7 87.296 385.98 89.216 385.98 91.616C385.98 94.016 384.7 95.424 382.396 95.424C379.964 95.424 378.524 93.824 378.524 90.368C378.524 88.32 379.068 86.848 380.348 85.376L380.38 85.408ZM382.492 72.672C384.54 72.672 385.756 74.4 385.756 76.928C385.756 79.04 385.308 80.672 384.284 82.24C379.996 80.32 379.068 78.304 379.068 76.32C379.068 74.08 380.7 72.672 382.492 72.672ZM384.988 82.56C388.444 81.088 389.788 79.2 389.788 77.088C389.788 74.112 387.484 71.552 382.588 71.552C378.14 71.552 374.812 74.112 374.812 78.08C374.812 81.024 376.38 83.456 379.612 85.056C376.188 86.272 374.332 88.224 374.332 90.976C374.332 94.176 376.796 96.544 381.948 96.544C387.58 96.544 390.588 93.824 390.588 89.696C390.588 86.656 388.796 84.384 384.988 82.56ZM395.209 88H404.521V85.664H395.209V88ZM412.099 92.064C413.571 90.752 415.043 89.536 416.067 88.704C421.987 84.032 424.963 81.536 424.963 78.112C424.963 74.304 422.627 71.552 417.571 71.552C413.283 71.552 409.667 73.6 409.379 77.28C409.763 78.08 410.531 78.592 411.459 78.592C412.451 78.592 413.507 78.08 413.859 75.936L414.563 72.768C414.979 72.672 415.395 72.64 415.779 72.64C418.243 72.64 419.747 74.624 419.747 77.792C419.747 81.248 418.179 83.36 414.691 87.296C413.123 89.088 411.331 91.104 409.475 93.12V96H425.507V92.064H412.099ZM434.928 84C434.928 75.04 436.496 72.672 438.384 72.672C440.272 72.672 441.904 75.072 441.904 84C441.904 92.992 440.272 95.424 438.384 95.424C436.496 95.424 434.928 93.024 434.928 84ZM438.384 71.552C433.936 71.552 430.064 75.328 430.064 84C430.064 92.736 433.936 96.544 438.384 96.544C442.8 96.544 446.736 92.736 446.736 84C446.736 75.328 442.8 71.552 438.384 71.552ZM454.237 92.064C455.709 90.752 457.181 89.536 458.205 88.704C464.125 84.032 467.101 81.536 467.101 78.112C467.101 74.304 464.765 71.552 459.709 71.552C455.421 71.552 451.805 73.6 451.517 77.28C451.901 78.08 452.669 78.592 453.597 78.592C454.589 78.592 455.645 78.08 455.997 75.936L456.701 72.768C457.117 72.672 457.533 72.64 457.917 72.64C460.381 72.64 461.885 74.624 461.885 77.792C461.885 81.248 460.317 83.36 456.829 87.296C455.261 89.088 453.469 91.104 451.613 93.12V96H467.645V92.064H454.237ZM475.306 92.064C476.778 90.752 478.25 89.536 479.274 88.704C485.194 84.032 488.17 81.536 488.17 78.112C488.17 74.304 485.834 71.552 480.778 71.552C476.49 71.552 472.874 73.6 472.586 77.28C472.97 78.08 473.738 78.592 474.666 78.592C475.658 78.592 476.714 78.08 477.066 75.936L477.77 72.768C478.186 72.672 478.602 72.64 478.986 72.64C481.45 72.64 482.954 74.624 482.954 77.792C482.954 81.248 481.386 83.36 477.898 87.296C476.33 89.088 474.538 91.104 472.682 93.12V96H488.714V92.064H475.306ZM513.081 69.088C513.049 79.456 513.465 89.728 502.265 98.592L502.585 99.008C514.841 93.376 517.241 85.184 517.849 76.736C518.553 87.296 520.697 94.784 528.409 98.752C528.921 96.224 530.361 94.464 532.697 93.984L532.729 93.6C521.881 90.112 518.777 83.136 518.105 70.56C518.937 70.432 519.225 70.144 519.289 69.664L513.081 69.088ZM544.025 92.544V74.624H557.849V92.544H544.025ZM559.833 70.944L557.433 73.728H544.409L539.033 71.648V97.952H539.833C541.945 97.952 544.025 96.768 544.025 96.16V93.44H557.849V97.152H558.585C560.441 97.152 562.841 96.096 562.905 95.776V75.776C563.833 75.584 564.345 75.168 564.665 74.784L559.833 70.944ZM580.089 82.08C579.961 87.072 579.737 89.248 579.225 89.728C579.033 89.888 578.809 89.952 578.393 89.952C577.881 89.952 576.761 89.92 576.121 89.856C576.825 87.168 576.921 84.448 576.921 82.144V82.08H580.089ZM599.481 88.128L599.193 88.032C598.489 89.472 597.433 91.296 596.857 92.128C596.473 92.672 596.217 92.672 595.769 92.192C594.745 91.296 593.881 90.304 593.145 89.184C595.033 86.624 596.441 83.904 597.497 81.216C598.329 81.248 598.617 80.992 598.745 80.608L592.889 78.624C592.441 80.576 591.833 82.624 591.001 84.608C590.137 82.016 589.721 79.136 589.529 76.192H598.745C599.225 76.192 599.577 76.032 599.673 75.68C598.713 74.848 597.369 73.824 596.441 73.088C597.529 71.616 596.569 68.832 590.873 69.504L590.649 69.696C591.737 70.592 592.985 72.192 593.433 73.664C593.657 73.792 593.881 73.856 594.105 73.92L593.017 75.296H589.497C589.401 73.568 589.401 71.84 589.433 70.144C590.265 70.016 590.553 69.632 590.585 69.216L584.857 68.672C584.857 70.912 584.921 73.12 585.049 75.296H577.593L572.281 73.504V82.144C572.281 87.584 572.057 93.984 569.049 98.976L569.273 99.2C573.209 96.768 575.129 93.44 576.057 90.08V90.24C577.049 90.528 577.593 90.912 577.977 91.488C578.361 92.064 578.425 93.056 578.425 94.304C580.121 94.304 581.305 93.952 582.265 93.248C583.801 92.096 584.185 89.888 584.377 82.784C585.017 82.688 585.401 82.464 585.625 82.208L581.945 79.136L579.801 81.184H576.921V76.192H585.113C585.497 81.12 586.361 85.728 588.281 89.824C586.169 93.088 583.321 96.096 579.641 98.336L579.865 98.688C584.025 97.28 587.321 95.2 589.913 92.768C590.777 94.112 591.769 95.36 592.953 96.512C594.425 97.952 597.529 99.584 599.385 97.952C600.057 97.376 599.865 96.128 598.617 93.856L599.481 88.128ZM627.321 84.384H613.945V81.024H627.353C627.801 81.024 628.153 80.864 628.217 80.512C626.937 79.36 624.825 77.76 624.825 77.76L622.969 80.128H613.945V76.544H627.289C627.737 76.544 628.089 76.384 628.153 76.032C626.873 74.88 624.761 73.28 624.761 73.28L622.905 75.648H613.945V72.16H629.049C629.497 72.16 629.849 72 629.945 71.648C628.473 70.4 626.073 68.64 626.073 68.64L623.929 71.264H614.457L609.497 69.44V84.384H603.321L603.577 85.28H609.081V92.896C609.081 93.6 608.857 93.952 607.385 94.752L610.009 99.264C610.169 99.168 610.361 99.04 610.521 98.848C614.297 96.704 617.209 94.656 618.681 93.504L618.617 93.184C616.825 93.504 615.033 93.824 613.433 94.08V85.28H617.337C619.033 92.8 622.393 96.672 629.081 98.752C629.497 96.48 630.841 94.88 632.537 94.368L632.569 93.984C629.145 93.632 625.945 92.704 623.321 91.136C625.433 90.208 627.673 89.152 629.017 88.384C629.561 88.512 629.881 88.48 630.041 88.224L625.465 85.28C624.697 86.528 623.321 88.544 621.977 90.272C620.217 88.96 618.809 87.296 617.881 85.28H632.281C632.729 85.28 633.081 85.12 633.177 84.768C631.769 83.52 629.401 81.696 629.401 81.696L627.321 84.384ZM637.753 73.824H649.273C648.569 75.2 647.161 77.248 646.009 77.856C645.721 77.984 645.209 78.112 645.209 78.112L646.777 81.728C647.033 81.6 647.257 81.44 647.449 81.152C648.665 80.8 649.817 80.448 650.873 80.096C649.305 81.664 647.481 83.072 646.009 83.744C645.593 83.936 644.825 84.064 644.825 84.064L646.553 88.16C646.745 88.096 646.905 87.968 647.065 87.808C650.265 86.88 653.113 85.92 655.161 85.184C655.257 85.792 655.289 86.4 655.257 86.976C658.713 90.208 663.225 83.488 654.233 81.536L653.977 81.696C654.361 82.4 654.713 83.232 654.969 84.16C652.569 84.16 650.265 84.192 648.441 84.16C651.865 82.752 655.641 80.576 657.721 78.88C658.041 78.944 658.297 78.912 658.521 78.848C658.329 79.264 658.137 79.648 657.945 80L658.265 80.256C660.121 79.584 662.361 78.528 664.281 77.472C665.017 77.6 665.465 77.376 665.657 77.024L660.505 74.24C659.929 75.648 659.321 77.12 658.745 78.368L654.393 75.872C653.977 76.544 653.337 77.408 652.569 78.304C651.033 78.304 649.593 78.336 648.345 78.304C650.041 77.664 651.833 76.704 653.081 75.84C653.721 75.936 654.073 75.712 654.201 75.424L650.873 73.824H665.081C665.561 73.824 665.913 73.664 666.009 73.312C664.313 71.936 661.561 69.92 661.561 69.92L659.097 72.928H652.985C655.001 71.872 655.193 68.416 648.665 68.48L648.473 68.64C649.241 69.536 649.817 71.072 649.785 72.512C650.009 72.672 650.233 72.832 650.457 72.928H637.497L637.753 73.824ZM657.305 80.896C659.225 82.4 661.785 84.928 663.033 87.072C667.289 88.704 668.825 80.8 657.529 80.672L657.305 80.896ZM638.841 74.976C639.737 76.416 640.601 78.464 640.761 80.384C644.377 83.328 648.345 76.384 639.097 74.816L638.841 74.976ZM646.073 81.088C642.137 82.496 638.137 83.808 636.473 84.288L639.257 88.544C639.609 88.384 639.897 88.032 639.961 87.584C642.937 84.864 644.921 82.784 646.169 81.376L646.073 81.088ZM660.057 90.624H654.041V88.704C654.841 88.608 655.033 88.288 655.097 87.904L649.241 87.424V90.624H636.633L636.889 91.52H649.241V98.976H650.073C651.897 98.976 654.041 98.24 654.041 97.984V91.52H666.073C666.553 91.52 666.937 91.36 667.033 91.008C665.305 89.6 662.521 87.552 662.521 87.552L660.057 90.624ZM676.793 69.024C677.913 70.336 679.033 72.32 679.353 74.24C683.609 77.12 687.353 69.056 677.017 68.864L676.793 69.024ZM676.889 89.344C676.953 88.64 676.953 87.968 676.953 87.296V85.024H680.249V89.344H676.889ZM680.249 80.256V84.128H676.953V80.256H680.249ZM679.929 79.36H677.625L672.601 77.664V87.296C672.601 91.392 672.569 95.552 670.521 98.72L670.777 98.944C675.161 96.64 676.441 93.44 676.825 90.24H680.249V93.92C680.249 94.24 680.153 94.464 679.737 94.464C679.161 94.464 677.497 94.336 677.497 94.336V94.752C678.617 94.976 679.033 95.456 679.321 96.032C679.641 96.672 679.737 97.632 679.769 98.944C683.993 98.592 684.569 97.088 684.569 94.336V80.96C685.241 80.832 685.657 80.544 685.849 80.288L681.849 77.184L679.929 79.36ZM690.905 79.872C691.801 79.744 692.025 79.392 692.089 78.976L686.745 78.496V92.672H687.481C689.081 92.672 690.905 92 690.905 91.712V79.872ZM693.209 93.952C693.209 94.336 693.049 94.464 692.569 94.464C691.865 94.464 688.281 94.272 688.281 94.272V94.656C690.041 94.976 690.713 95.456 691.257 96.064C691.801 96.736 691.993 97.696 692.089 99.04C696.921 98.656 697.593 97.088 697.593 94.176V78.752C698.329 78.656 698.649 78.368 698.713 77.888L693.209 77.408V93.952ZM693.721 75.104H688.409C690.553 73.76 692.921 72.064 694.329 70.848C695.097 70.848 695.449 70.592 695.545 70.176L689.273 68.672C688.857 70.496 688.121 73.152 687.385 75.104H670.169L670.425 76H699.737C700.217 76 700.569 75.84 700.665 75.488C699.001 74.048 696.185 71.904 696.185 71.904L693.721 75.104ZM715.641 94.432C715.609 92.416 715.577 90.368 715.577 88.416V77.248L715.705 72.032L715.225 71.712L706.553 73.664V74.848L710.329 74.496V88.416C710.329 90.368 710.297 92.416 710.265 94.432L705.689 95.008V96H719.929V95.008L715.641 94.432ZM730.31 84C730.31 75.04 731.878 72.672 733.766 72.672C735.654 72.672 737.286 75.072 737.286 84C737.286 92.992 735.654 95.424 733.766 95.424C731.878 95.424 730.31 93.024 730.31 84ZM733.766 71.552C729.318 71.552 725.446 75.328 725.446 84C725.446 92.736 729.318 96.544 733.766 96.544C738.182 96.544 742.118 92.736 742.118 84C742.118 75.328 738.182 71.552 733.766 71.552Z"
                        fill="#00303C"
                    />
                </g>
            </g>
            <defs>
                <filter
                    id="filter0_d_355_769"
                    x={0}
                    y={0}
                    width={1057}
                    height={771}
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                >
                    <feFlood floodOpacity={0} result="BackgroundImageFix" />
                    <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                    />
                    <feOffset dx={2} dy={3} />
                    <feGaussianBlur stdDeviation={6} />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
                    />
                    <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_355_769"
                    />
                    <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_355_769"
                        result="shape"
                    />
                </filter>
                <clipPath id="clip0_355_769">
                    <rect x={10} y={9} width={1033} height={747} rx={10} fill="white" />
                </clipPath>
            </defs>
        </svg>
    )
}

export function BuildingA({ nav, dispatch, buildingType }) {
    const navigate = useNavigate(null)
    const handleClick = () => {
        navigate(`/product/floorPlan?building=${buildingType}`)
    }
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 271.16 927.44"
            className='building-svg'
        >

            <g id="_圖層_6" data-name="圖層 6">
                <g>
                    <rect className="building-cls" x={0} y="895.25" width="269.55" height="32.2" style={{ fill: nav == "1f" ? "#c2a45773" : "transparent" }} onClick={handleClick} onMouseEnter={() => dispatch("1f")} onMouseLeave={() => dispatch(null)} />
                    <rect
                        className="building-cls"
                        x="1.07"
                        y="826.7"
                        width="269.55"
                        height="32.2"
                        style={{ fill: nav == "2f" ? "#c2a45773" : "transparent" }}
                        onClick={handleClick}
                        onMouseEnter={() => dispatch("2f")}
                        onMouseLeave={() => dispatch(null)}
                    />
                    <rect
                        className="building-cls"
                        x="1.61"
                        y="790.17"
                        width="269.55"
                        height="36.53"
                        style={{ fill: nav == "3f" ? "#c2a45773" : "transparent" }}
                        onClick={handleClick}
                        onMouseEnter={() => dispatch("3f")}
                        onMouseLeave={() => dispatch(null)}
                    />
                    <rect
                        className="building-cls"
                        x="1.61"
                        y="754.35"
                        width="269.55"
                        height="35.82"
                        style={{ fill: nav == "4f" ? "#c2a45773" : "transparent" }}
                        onClick={handleClick}
                        onMouseEnter={() => dispatch("4f")}
                        onMouseLeave={() => dispatch(null)}
                    />
                    <rect
                        className="building-cls"
                        x=".54"
                        y="858.9"
                        width="269.55"
                        height="36.35"
                        style={{ fill: nav == "1.5f" ? "#c2a45773" : "transparent" }}
                        onClick={handleClick}
                        onMouseEnter={() => dispatch("1.5f")}
                        onMouseLeave={() => dispatch(null)}
                    />
                    <rect
                        className="building-cls"
                        x="1.61"
                        y="314.69"
                        width="269.55"
                        height="291.84"
                        style={{ fill: nav == "9~16f" ? "#c2a45773" : "transparent" }}
                        onClick={handleClick}
                        onMouseEnter={() => dispatch("9~16f")}
                        onMouseLeave={() => dispatch(null)}
                    />
                    <rect
                        className="building-cls"
                        x={1}
                        y="278.34"
                        width="270.16"
                        height="36.35"
                        style={{ fill: nav == "17f" ? "#c2a45773" : "transparent" }}
                        onClick={handleClick}
                        onMouseEnter={() => dispatch("17f")}
                        onMouseLeave={() => dispatch(null)}
                    />
                    <rect
                        className="building-cls"
                        x="1.61"
                        y="606.52"
                        width="269.55"
                        height="147.65"
                        style={{ fill: nav == "5~8f" ? "#c2a45773" : "transparent" }}
                        onClick={handleClick}
                        onMouseEnter={() => dispatch("5~8f")}
                        onMouseLeave={() => dispatch(null)}
                    />
                    <rect
                        className="building-cls"
                        x="2.68"
                        y="132.94"
                        width="268.48"
                        height="145.4"
                        style={{ fill: nav == "18~21f" ? "#c2a45773" : "transparent" }}
                        onClick={handleClick}
                        onMouseEnter={() => dispatch("18~21f")}
                        onMouseLeave={() => dispatch(null)}
                    />
                    <rect
                        className="building-cls"
                        x="1.61"
                        y="95.55"
                        width="268.48"
                        height="37.39"
                        style={{ fill: nav == "22f" ? "#c2a45773" : "transparent" }}
                        onClick={handleClick}
                        onMouseEnter={() => dispatch("22f")}
                        onMouseLeave={() => dispatch(null)}
                    />
                    <rect
                        className="building-cls"
                        x="43.49"
                        y="29.08"
                        width="185.79"
                        height="36.35"
                        style={{ fill: nav == "r2" ? "#c2a45773" : "transparent" }}
                        onClick={handleClick}
                        onMouseEnter={() => dispatch("r2")}
                        onMouseLeave={() => dispatch(null)}
                    />
                    <rect
                        className="building-cls"
                        x="2.68"
                        y="66.47"
                        width="268.48"
                        height="29.08"
                        style={{ fill: nav == "r1" ? "#c2a45773" : "transparent" }}
                        onClick={handleClick}
                        onMouseEnter={() => dispatch("r1")}
                        onMouseLeave={() => dispatch(null)}
                    />
                    <rect className="building-cls" x="44.57" width="184.71" height="29.08" style={{ fill: nav == "r3" ? "#c2a45773" : "transparent" }} onMouseEnter={() => dispatch("r3")} onMouseLeave={() => dispatch(null)} />
                </g>
            </g>
        </svg>
    )
}

export function BuildingC({ nav, dispatch, buildingType }) {
    const navigate = useNavigate(null)
    const handleClick = () => {
        navigate(`/product/floorPlan?building=${buildingType}`)
    }
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 356 931.27"
            className='building-svg'
        >

            <g id="_圖層_8" data-name="圖層 8">
                <g>
                    <rect
                        style={{ opacity: 0.5, fill: nav == "1f" ? "#c2a45773" : "transparent" }}
                        y="899.08"
                        width="355.29"
                        height="32.2"
                        onClick={handleClick}
                        onMouseEnter={() => dispatch("1f")}
                        onMouseLeave={() => dispatch(null)}
                    />
                    <rect
                        style={{ opacity: 0.5, fill: nav == "2f" ? "#c2a45773" : "transparent" }}
                        x="1.25"
                        y="830.53"
                        width="313.13"
                        height="32.2"
                        onClick={handleClick}
                        onMouseEnter={() => dispatch("2f")}
                        onMouseLeave={() => dispatch(null)}
                    />
                    <rect
                        style={{ opacity: 0.5, fill: nav == "3f" ? "#c2a45773" : "transparent" }}
                        x="1.87"
                        y="794.18"
                        width="313.13"
                        height="36.35"
                        onClick={handleClick}
                        onMouseEnter={() => dispatch("3f")}
                        onMouseLeave={() => dispatch(null)}
                    />
                    <rect
                        style={{ opacity: 0.5, fill: nav == "4f" ? "#c2a45773" : "transparent" }}
                        x="2.87"
                        y="764.18"
                        width="313.13"
                        height="29.82"
                        onClick={handleClick}
                        onMouseEnter={() => dispatch("4f")}
                        onMouseLeave={() => dispatch(null)}
                    />
                    <rect
                        style={{ opacity: 0.5, fill: nav == "1.5f" ? "#c2a45773" : "transparent" }}
                        x=".71"
                        y="862.73"
                        width="355.29"
                        height="36.35"
                        onClick={handleClick}
                        onMouseEnter={() => dispatch("1.5f")}
                        onMouseLeave={() => dispatch(null)}
                    />
                    <rect
                        style={{ opacity: 0.5, fill: nav == "9~16f" ? "#c2a45773" : "transparent" }}
                        x="2.33"
                        y={364}
                        width="313.13"
                        height={264}
                        onClick={handleClick}
                        onMouseEnter={() => dispatch("9~16f")}
                        onMouseLeave={() => dispatch(null)}
                    />
                    <rect style={{ opacity: 0.5, fill: nav == "17f" ? "#c2a45773" : "transparent" }}
                        x="1.87"
                        y={325}
                        width="313.13"
                        height={39}
                        onClick={handleClick}
                        onMouseEnter={() => dispatch("17f")}
                        onMouseLeave={() => dispatch(null)}
                    />
                    <rect
                        style={{ opacity: 0.5, fill: nav == "5~8f" ? "#c2a45773" : "transparent" }}
                        x="1.87"
                        y={629}
                        width="313.13"
                        height={135}
                        onClick={handleClick}
                        onMouseEnter={() => dispatch("5~8f")}
                        onMouseLeave={() => dispatch(null)}
                    />
                    <rect
                        style={{ opacity: 0.5, fill: nav == "18~21f" ? "#c2a45773" : "transparent" }}
                        x="3.12"
                        y={190}
                        width="311.88"
                        height={135}
                        onClick={handleClick}
                        onMouseEnter={() => dispatch("18~21f")}
                        onMouseLeave={() => dispatch(null)}
                    />
                    <rect
                        style={{ opacity: 0.5, fill: nav == "23f" ? "#c2a45773" : "transparent" }}
                        x="2.87"
                        y={123}
                        width="311.88"
                        height="32.77"
                        onClick={handleClick}
                        onMouseEnter={() => dispatch("23f")}
                        onMouseLeave={() => dispatch(null)}
                    />
                    <rect
                        style={{ opacity: 0.5, fill: nav == "24f" ? "#c2a45773" : "transparent" }}
                        x="2.87"
                        y={98}
                        width="311.88"
                        height="25.77"
                        onClick={handleClick}
                        onMouseEnter={() => dispatch("24f")}
                        onMouseLeave={() => dispatch(null)}
                    />
                    <rect
                        style={{ opacity: 0.5, fill: nav == "22f" ? "#c2a45773" : "transparent" }}
                        x="2.87"
                        y={155}
                        width="311.88"
                        height="34.77"
                        onClick={handleClick}
                        onMouseEnter={() => dispatch("22f")}
                        onMouseLeave={() => dispatch(null)}
                    />
                    <rect
                        style={{ opacity: 0.5, fill: nav == "r2" ? "#c2a45773" : "transparent" }}
                        x={86}
                        y="32.91"
                        width={162}
                        height="36.35"
                        onClick={handleClick}
                        onMouseEnter={() => dispatch("r2")}
                        onMouseLeave={() => dispatch(null)}
                    />
                    <rect
                        style={{ opacity: 0.5, fill: nav == "r1" ? "#c2a45773" : "transparent" }}
                        x="2.12"
                        y="69.3"
                        width="311.88"
                        height="29.08"
                        onClick={handleClick}
                        onMouseEnter={() => dispatch("r1")}
                        onMouseLeave={() => dispatch(null)}
                    />
                    <rect
                        style={{ opacity: 0.5, fill: nav == "r3" ? "#c2a45773" : "transparent" }}
                        x="86.94"
                        width="161.06"
                        height="32.91"
                        onClick={handleClick}
                        onMouseEnter={() => dispatch("r3")}
                        onMouseLeave={() => dispatch(null)}
                    />
                </g>
            </g>
        </svg>
    )
}



export function PatternDiagramThumbnail({ data, configurationGraph }) {
    const [element, setElement] = useState(null)
    console.log(configurationGraph)
    useEffect(() => {
        switch (configurationGraph) {
            case "standard":
                setElement(<PatternDiagramStandard data={data} />)
                break;
            case "18~21":
                setElement(<PatternDiagram18To21 data={data} />)
                break;
        }
    }, [])
    return (
        element
    )
}

const PatternDiagramStandard = ({ data }) => {
    const pattern = data.title.split(",")[0]
    return (
        <svg
            id="_圖層_2"
            data-name="圖層 2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 343.53 282.56"
        >
            <defs>
                <style
                    dangerouslySetInnerHTML={{
                        __html:
                            "\n      #patternDiagramThumbnail .cls-1,\n      #patternDiagramThumbnail .cls-2,\n      #patternDiagramThumbnail .cls-3,\n      #patternDiagramThumbnail .cls-4,\n      #patternDiagramThumbnail .cls-5,\n      #patternDiagramThumbnail .cls-6 {\n        stroke: #8a6e4b;\n      }\n\n      #patternDiagramThumbnail .cls-1,\n      #patternDiagramThumbnail .cls-2,\n      #patternDiagramThumbnail .cls-4 {\n        stroke-miterlimit: 10;\n      }\n\n      #patternDiagramThumbnail .cls-1,\n      #patternDiagramThumbnail .cls-7,\n      #patternDiagramThumbnail .cls-5,\n      #patternDiagramThumbnail .cls-6 {\n        fill: none;\n      }\n\n      #patternDiagramThumbnail .cls-1,\n      #patternDiagramThumbnail .cls-4 {\n        stroke-width: .35px;\n      }\n\n      #patternDiagramThumbnail .cls-8,\n      #patternDiagramThumbnail .cls-2,\n      #patternDiagramThumbnail .cls-4 {\n        fill: #fff;\n      }\n\n      #patternDiagramThumbnail .cls-2 {\n        stroke-width: .35px;\n      }\n\n      #patternDiagramThumbnail .cls-3 {\n        fill: #dbd0c4;\n        stroke-width: .35px;\n      }\n\n      #patternDiagramThumbnail .cls-3,\n      #patternDiagramThumbnail .cls-5,\n      #patternDiagramThumbnail .cls-6 {\n        stroke-linecap: round;\n        stroke-linejoin: round;\n      }\n\n      #patternDiagramThumbnail .cls-9 {\n        fill: #8a6e4b;\n      }\n\n      #patternDiagramThumbnail .cls-5 {\n        stroke-width: .45px;\n      }\n\n      #patternDiagramThumbnail .cls-6 {\n        stroke-width: .27px;\n      }\n    "
                    }}
                />
            </defs>
            <g id="patternDiagramThumbnail">
                <g>
                    {/* 以下為指北針區域 */}
                    <g>
                        <path
                            className="cls-5"
                            d="m71.42,247.16c0-17.94-14.54-32.48-32.48-32.48s-32.48,14.54-32.48,32.48,14.54,32.48,32.48,32.48,32.48-14.54,32.48-32.48"
                        />
                        <line
                            className="cls-6"
                            x1="36.14"
                            y1="243.88"
                            x2="60.66"
                            y2="222.95"
                        />
                        <path
                            className="cls-9"
                            d="m60.66,222.95l-21.75,24.23-2.77-3.31,24.53-20.92Zm3.02,3.11l-3.02-3.11-21.75,24.23,24.77-21.12Z"
                        />
                        <path
                            className="cls-7"
                            d="m60.66,222.95l-21.75,24.23-2.77-3.31,24.53-20.92Zm3.02,3.11l-3.02-3.11-21.75,24.23,24.77-21.12Z"
                        />
                        <path
                            className="cls-9"
                            d="m66.26,229.57l-27.35,17.62,2.82,3.26,24.53-20.88Zm-2.58-3.5l2.58,3.5-27.35,17.62,24.77-21.12Z"
                        />
                        <path
                            className="cls-7"
                            d="m66.26,229.57l-27.35,17.62,2.82,3.26,24.53-20.88Zm-2.58-3.5l2.58,3.5-27.35,17.62,24.77-21.12Z"
                        />
                        <line
                            className="cls-6"
                            x1="41.73"
                            y1="250.45"
                            x2="66.26"
                            y2="229.57"
                        />
                        <line
                            className="cls-5"
                            x1="14.19"
                            y1="268.26"
                            x2="38.91"
                            y2="247.19"
                        />
                        <line
                            className="cls-5"
                            x1="17.84"
                            y1="222.42"
                            x2="59.98"
                            y2="271.91"
                        />
                        <polyline
                            className="cls-5"
                            points="65.43 217.65 76.77 207.96 70.59 223.68 81.93 214"
                        />
                    </g>
                    {/* 以下為方塊區域 */}
                    <rect
                        className="cls-4"
                        x="37.27"
                        y="79.73"
                        width="31.4"
                        height="32.84"

                        style={{ fill: pattern == "C8" ? "#8a6e4b" : "#fff" }}
                    />
                    <polygon
                        style={{ fill: pattern == "B3" ? "#8a6e4b" : "#fff" }}
                        className="cls-4"
                        points="343.35 70.94 338.49 70.94 338.49 46.78 338.48 46.78 338.48 42.9 325.99 42.9 325.99 46.78 302.31 46.78 302.31 85.02 300.24 85.02 300.24 93 310.44 93 310.44 92.88 338.49 92.88 338.49 80.6 343.35 80.6 343.35 70.94"
                    />
                    <polygon
                        style={{ fill: pattern == "A9" ? "#8a6e4b" : "#fff" }}
                        className="cls-4"
                        points="249.52 189.78 249.52 176.94 240.61 176.94 240.61 174.98 217.99 174.98 217.99 192.18 218 192.18 218 212.13 248.28 212.13 248.28 215.43 259.09 215.43 259.09 189.78 249.52 189.78"
                    />
                    <polygon
                        style={{ fill: pattern == "A8" ? "#8a6e4b" : "#fff" }}
                        className="cls-4"
                        points="248.28 212.02 225.54 212.02 225.54 219.39 213.91 219.39 213.91 232.29 217.26 232.29 217.26 241.34 226.88 241.34 226.88 241.33 248.28 241.33 248.28 212.02"
                    />
                    <polygon
                        style={{ fill: pattern == "C2" ? "#8a6e4b" : "#fff" }}
                        className="cls-4"
                        points="44.33 6.31 44.33 3.85 37.58 3.85 37.58 6.31 37.55 6.31 37.55 36.35 68.61 36.35 68.61 6.31 44.33 6.31"
                    />
                    <polygon
                        style={{ fill: pattern == "C9" ? "#8a6e4b" : "#fff" }}
                        className="cls-4"
                        points="38.54 73.75 32.51 73.75 32.51 71.68 11.51 71.68 11.51 68 3.16 68 3.16 88.12 .2 88.12 .2 95.96 3.37 95.96 3.37 110.34 23.73 110.34 23.73 115.13 32.5 115.13 32.5 110.35 37.22 110.35 37.22 79.72 38.54 79.72 38.54 73.75"
                    />
                    <polygon
                        style={{ fill: pattern == "B6" ? "#8a6e4b" : "#fff" }}
                        className="cls-4"
                        points="268.49 49.92 268.49 46.78 255.99 46.78 255.99 53.78 255.99 53.78 255.99 86.48 279.11 86.48 279.11 49.92 268.49 49.92"
                    />
                    <polygon
                        style={{ fill: pattern == "B5" ? "#8a6e4b" : "#fff" }}
                        className="cls-2"
                        points="302.36 46.78 289.77 46.78 289.77 49.93 279.07 49.93 279.07 86.54 302.36 86.54 302.36 53.79 302.36 53.79 302.36 46.78"
                    />
                    <polygon
                        style={{ fill: pattern == "B9" ? "#8a6e4b" : "#fff" }}
                        className="cls-4"
                        points="259.05 109.77 217.94 109.77 217.94 135.44 217.94 135.44 217.94 150.27 240.56 150.27 240.56 148.32 249.55 148.32 249.55 135.44 259.05 135.44 259.05 109.77"
                    />
                    <polygon
                        className="cls-3"
                        points="87.24 45.6 87.24 36.49 46.77 36.49 46.77 44.13 42.84 44.13 42.84 44.2 41.11 42.47 32.75 42.47 32.75 63.94 36.02 66.68 34.72 67.99 31.81 67.99 31.85 74.12 38.19 74.13 38.19 79.9 88.83 79.9 88.83 70.38 98.19 70.38 98.19 45.6 87.24 45.6"
                    />
                    <polygon
                        style={{ fill: pattern == "C1" ? "#8a6e4b" : "#fff" }}
                        className="cls-4"
                        points="47.06 41.32 47.06 36.37 37.54 36.37 37.54 5.03 32.48 5.03 32.48 .18 23.71 .18 23.71 5.03 5.27 5.03 5.27 4.99 3.37 4.99 3.37 19.28 .17 19.28 .17 27.11 3.81 27.11 3.81 35.28 2.4 35.28 2.4 44.65 11.44 44.65 11.44 42.86 37.54 42.86 41.34 42.86 42.81 44.37 47.08 44.37 47.08 42.02 47.06 41.32"
                    />
                    <rect
                        style={{ fill: pattern == "C7" ? "#8a6e4b" : "#fff" }}
                        className="cls-4"
                        x="68.67"
                        y="79.73"
                        width="31.54"
                        height="32.83"
                    />
                    <polygon
                        style={{ fill: pattern == "C6" ? "#8a6e4b" : "#fff" }}
                        className="cls-4"
                        points="137.69 88.18 134.13 88.18 134.13 68 125.6 68 125.6 71.63 98.29 71.63 98.29 70.27 88.66 70.27 88.66 79.69 97.25 79.69 97.25 110.77 104.83 110.77 104.83 115.58 113.57 115.58 113.57 110.77 125.6 110.77 125.6 110.77 134.13 110.77 134.13 95.93 137.69 95.93 137.69 88.18"
                    />
                    <polygon
                        style={{ fill: pattern == "C5" ? "#8a6e4b" : "#fff" }}
                        className="cls-4"
                        points="137.77 19.27 134.18 19.27 134.18 5.02 113.59 5.02 113.59 .17 104.79 .17 104.79 5.02 100.14 5.02 100.14 36.3 90.49 36.3 86.79 36.3 86.77 46 98.18 46 98.18 43.57 104.96 43.57 104.96 43.54 125.98 43.54 125.98 45.27 134.16 45.27 134.16 43.54 134.18 43.54 134.18 27.03 137.77 27.03 137.77 19.27"
                    />
                    <polygon
                        className="cls-3"
                        points="300.55 86.39 256.26 86.39 256.26 76.51 248.12 76.51 248.12 90.66 248.19 90.66 248.19 111.3 258.82 111.3 259.07 147.16 270.3 147.16 270.3 136.75 281.68 136.75 281.68 132.26 292.29 132.26 292.29 111.3 300.55 111.3 300.55 86.39"
                    />
                    <polygon
                        style={{ fill: pattern == "B7" ? "#8a6e4b" : "#fff" }}
                        className="cls-4"
                        points="255.98 49.91 247.23 49.91 247.23 47.99 217.92 47.99 217.92 49.79 210.9 49.79 210.9 62.42 217.92 62.42 217.92 75.02 213.98 75.02 213.98 83.91 248.37 83.91 248.37 76.75 255.98 76.75 255.98 49.91"
                    />
                    <polygon
                        style={{ fill: pattern == "B2" ? "#8a6e4b" : "#fff" }}
                        className="cls-4"
                        points="342.45 85.02 310.29 85.02 310.29 92.82 300.24 92.82 300.24 113.09 329.89 113.09 329.89 105.35 342.45 105.35 342.45 85.02"
                    />
                    <polygon
                        style={{ fill: pattern == "B1" ? "#8a6e4b" : "#fff" }}
                        className="cls-4"
                        points="338.52 145.41 338.52 145.41 338.52 113.07 304.37 113.07 304.37 113.07 300.05 113.07 300.05 110.99 291.94 110.99 291.94 134.33 297.6 134.33 297.6 134.34 301.77 134.34 301.77 147.2 315.66 147.2 315.66 152.09 323.7 152.09 323.7 150.29 338.52 150.29 338.52 145.41"
                    />
                    <polygon
                        className="cls-3"
                        points="300.39 214.2 291.86 214.2 291.86 192.96 281.82 192.96 281.82 188.49 270.61 188.49 270.61 178.12 258.9 178.12 258.9 214.2 255.94 214.2 255.94 215.3 248.17 215.3 248.17 247.54 256.04 247.54 256.04 238.8 300.39 238.8 300.39 214.2"
                    />
                    <polygon
                        style={{ fill: pattern == "A6" ? "#8a6e4b" : "#fff" }}
                        className="cls-4"
                        points="279.06 238.7 255.93 238.7 255.93 275.34 255.96 275.34 255.96 278.48 268.46 278.48 268.46 275.34 279.06 275.34 279.06 238.7"
                    />
                    <polygon
                        style={{ fill: pattern == "A5" ? "#8a6e4b" : "#fff" }}
                        className="cls-4"
                        points="302.18 238.7 279.05 238.7 279.05 275.34 289.76 275.34 289.76 278.48 302.16 278.48 302.16 275.34 302.18 275.34 302.18 238.7"
                    />
                    <polygon
                        style={{ fill: pattern == "A3" ? "#8a6e4b" : "#fff" }}
                        className="cls-4"
                        points="343.32 244.69 338.47 244.69 338.47 240.14 310.35 240.14 310.35 232.36 300.22 232.36 300.22 242.22 302.16 242.22 302.16 278.48 326.04 278.48 326.04 282.38 338.45 282.38 338.45 278.48 338.47 278.48 338.47 254.31 343.32 254.31 343.32 244.69"
                    />
                    <polygon
                        style={{ fill: pattern == "A1" ? "#8a6e4b" : "#fff" }}
                        className="cls-1"
                        points="338.5 178.06 338.49 178.06 338.49 174.94 323.75 174.94 323.75 173.05 315.61 173.05 315.61 178.06 301.83 178.06 301.83 190.85 291.86 190.85 291.86 210.47 291.86 212.2 291.86 214.32 300.07 214.32 300.07 212.2 333.61 212.2 333.61 198.64 338.5 198.64 338.5 178.06"
                    />
                    <polygon
                        style={{ fill: pattern == "A7" ? "#8a6e4b" : "#fff" }}
                        className="cls-4"
                        points="255.95 273.27 255.95 247.67 248.28 247.67 248.28 241.26 245.27 241.26 245.27 241.28 216.21 241.28 216.21 276.38 231.67 276.38 231.67 278.48 255.96 278.48 255.96 273.27 255.95 273.27"
                    />
                    <polygon
                        style={{ fill: pattern == "C3" ? "#8a6e4b" : "#fff" }}
                        className="cls-4"
                        points="75.47 6.31 75.47 3.82 68.63 3.82 68.63 6.31 68.61 6.31 68.61 36.34 100.16 36.34 100.16 6.31 75.47 6.31"
                    />
                    <polygon
                        style={{ fill: pattern == "B8" ? "#8a6e4b" : "#fff" }}
                        className="cls-4"
                        points="217.22 83.91 217.22 92.93 213.91 92.93 213.91 105.85 215.93 105.85 215.93 113.14 217.22 113.14 217.22 113.15 248.36 113.15 248.36 83.91 217.22 83.91"
                    />
                    <polygon
                        style={{ fill: pattern == "A2" ? "#8a6e4b" : "#fff" }}
                        className="cls-9"
                        points="329.94 219.89 329.94 212.17 300.18 212.17 300.18 232.38 310.39 232.38 310.39 240.23 342.56 240.23 342.56 219.89 329.94 219.89"
                    />
                    {/* 以下為文字區域 */}
                    <g>
                        <path
                            style={{ fill: pattern == "C1" ? "#fff" : "#8a6e4b" }}
                            d="m21.8,18.88c-.53-1.36-1.53-2.05-2.99-2.05-1,0-1.87.47-2.58,1.38-.8.98-1.19,2.25-1.19,3.78s.35,2.67,1.1,3.54c.66.78,1.46,1.16,2.4,1.16.78,0,1.44-.2,1.96-.62.45-.36.83-.94,1.16-1.74l1.14.45c-.85,2.07-2.26,3.09-4.25,3.09-1.35,0-2.46-.53-3.35-1.58-.93-1.09-1.39-2.52-1.39-4.3s.48-3.3,1.46-4.52c.96-1.2,2.13-1.81,3.54-1.81,2.03,0,3.41.94,4.15,2.79l-1.16.43Z"
                        />
                        <path
                            style={{ fill: pattern == "C1" ? "#fff" : "#8a6e4b" }}
                            d="m27.35,27.72v-9.53h-2.49v-.73h.12c.54,0,1.03-.13,1.53-.38.57-.29.96-.73,1.16-1.27h.91v11.91h-1.23Z"
                        />
                        <path
                            style={{ fill: pattern == "C2" ? "#fff" : "#8a6e4b" }}
                            d="m52.94,18.88c-.53-1.36-1.53-2.05-2.99-2.05-1,0-1.87.47-2.58,1.38-.8.98-1.19,2.25-1.19,3.78s.35,2.67,1.1,3.54c.66.78,1.46,1.16,2.4,1.16.78,0,1.44-.2,1.96-.62.45-.36.84-.94,1.16-1.74l1.14.45c-.85,2.07-2.26,3.09-4.25,3.09-1.35,0-2.46-.53-3.35-1.58-.93-1.09-1.39-2.52-1.39-4.3s.48-3.3,1.46-4.52c.96-1.2,2.13-1.81,3.54-1.81,2.03,0,3.42.94,4.15,2.79l-1.16.43Z"
                        />
                        <path
                            style={{ fill: pattern == "C2" ? "#fff" : "#8a6e4b" }}
                            d="m61.84,20.95c-.39.53-1.02,1.22-1.91,2.05-1.49,1.42-2.38,2.59-2.67,3.54h5.38v1.18h-7.1c.25-1.09.69-2.11,1.32-3.03.52-.76,1.26-1.61,2.26-2.54.85-.8,1.44-1.42,1.76-1.89.35-.53.55-1.05.55-1.6,0-.51-.2-.94-.57-1.27-.43-.36-1.03-.56-1.82-.56-1.46,0-2.24.96-2.37,2.87l-1.17-.47c.11-1.09.48-1.96,1.1-2.61.61-.64,1.41-.96,2.44-.96,1.1,0,1.98.27,2.63.78.64.54.98,1.29.98,2.23,0,.76-.28,1.53-.82,2.29Z"
                        />
                        <path
                            style={{ fill: pattern == "C3" ? "#fff" : "#8a6e4b" }}
                            d="m82.3,18.88c-.53-1.36-1.53-2.05-2.99-2.05-1,0-1.87.47-2.58,1.38-.8.98-1.19,2.25-1.19,3.78s.36,2.67,1.11,3.54c.66.78,1.46,1.16,2.4,1.16.78,0,1.44-.2,1.96-.62.44-.36.83-.94,1.16-1.74l1.14.45c-.85,2.07-2.26,3.09-4.25,3.09-1.35,0-2.46-.53-3.35-1.58-.93-1.09-1.39-2.52-1.39-4.3s.48-3.3,1.46-4.52c.96-1.2,2.14-1.81,3.54-1.81,2.03,0,3.42.94,4.15,2.79l-1.16.43Z"
                        />
                        <path
                            style={{ fill: pattern == "C3" ? "#fff" : "#8a6e4b" }}
                            d="m90.99,26.92c-.71.64-1.58.94-2.62.94-1.96,0-3.13-.91-3.52-2.76l1.17-.42c.25,1.34,1.03,2,2.35,2,.71,0,1.3-.2,1.76-.64.44-.42.68-.93.68-1.53,0-.65-.21-1.2-.64-1.67-.44-.43-.98-.67-1.62-.67h-1.37v-1.18h1.19c.46,0,.93-.24,1.39-.73.44-.47.67-.98.67-1.51,0-1.29-.66-1.94-1.98-1.94-1.14,0-1.83.63-2.05,1.91l-1.16-.38c.14-.76.48-1.4.98-1.89.57-.54,1.32-.82,2.22-.82.98,0,1.76.29,2.35.85.57.56.85,1.32.85,2.27,0,1.18-.55,2.07-1.62,2.65.61.22,1.11.62,1.48,1.18.36.56.53,1.2.53,1.92,0,.96-.35,1.76-1.07,2.4Z"
                        />
                        <path
                            style={{ fill: pattern == "C5" ? "#fff" : "#8a6e4b" }}
                            d="m115.22,18.88c-.53-1.36-1.53-2.05-2.99-2.05-1,0-1.87.47-2.58,1.38-.8.98-1.19,2.25-1.19,3.78s.35,2.67,1.1,3.54c.66.78,1.46,1.16,2.4,1.16.78,0,1.44-.2,1.96-.62.45-.36.83-.94,1.16-1.74l1.14.45c-.85,2.07-2.26,3.09-4.25,3.09-1.35,0-2.46-.53-3.35-1.58-.93-1.09-1.39-2.52-1.39-4.3s.48-3.3,1.46-4.52c.96-1.2,2.13-1.81,3.54-1.81,2.03,0,3.41.94,4.15,2.79l-1.16.43Z"
                        />
                        <path
                            style={{ fill: pattern == "C5" ? "#fff" : "#8a6e4b" }}
                            d="m123.82,26.76c-.71.74-1.58,1.11-2.62,1.11-1.67,0-2.79-.82-3.4-2.49l1.14-.51c.44,1.22,1.19,1.82,2.26,1.82.68,0,1.26-.26,1.73-.78.52-.56.78-1.34.78-2.36,0-1.92-.71-2.9-2.13-2.9-.98,0-1.69.49-2.15,1.47h-1.12v-6.3h6.16v1.2h-4.93v3.29c.46-.55,1.14-.84,2.05-.84,1.03,0,1.85.38,2.46,1.11.6.73.91,1.72.91,2.98,0,1.34-.37,2.41-1.12,3.21Z"
                        />
                    </g>
                    <g>
                        <path
                            style={{ fill: pattern == "C9" ? "#fff" : "#8a6e4b" }}
                            d="m21.84,88.16c-.53-1.36-1.53-2.05-2.99-2.05-1,0-1.87.47-2.58,1.38-.8.98-1.19,2.25-1.19,3.78s.36,2.67,1.11,3.54c.66.78,1.46,1.16,2.4,1.16.78,0,1.44-.2,1.96-.62.44-.36.83-.94,1.16-1.74l1.14.45c-.85,2.07-2.26,3.09-4.25,3.09-1.35,0-2.46-.53-3.35-1.58-.93-1.09-1.39-2.52-1.39-4.3s.48-3.3,1.46-4.52c.96-1.2,2.14-1.81,3.54-1.81,2.03,0,3.42.94,4.15,2.79l-1.16.43Z"
                        />
                        <path
                            style={{ fill: pattern == "C9" ? "#fff" : "#8a6e4b" }}
                            d="m28.12,97.14c-.73,0-1.35-.24-1.89-.71-.43-.36-.76-.83-.98-1.42l1.11-.51c.39.98.98,1.45,1.76,1.45,1.57,0,2.42-1.43,2.58-4.3-.71.78-1.53,1.16-2.47,1.16-1.01,0-1.82-.31-2.42-.96-.6-.64-.91-1.54-.91-2.71s.28-2.12.85-2.92c.62-.87,1.48-1.31,2.58-1.31,1.41,0,2.4.65,2.97,1.92.43.96.64,2.4.64,4.3,0,3.99-1.28,5.99-3.83,5.99Zm.21-11.04c-.66,0-1.19.29-1.6.83-.41.56-.6,1.31-.6,2.21,0,1.67.73,2.51,2.22,2.51.87,0,1.65-.49,2.35-1.49-.07-2.7-.85-4.07-2.37-4.07Z"
                        />
                        <path
                            style={{ fill: pattern == "C6" ? "#fff" : "#8a6e4b" }}
                            d="m115.25,88.16c-.53-1.36-1.53-2.05-2.99-2.05-1,0-1.87.47-2.58,1.38-.8.98-1.19,2.25-1.19,3.78s.35,2.67,1.1,3.54c.66.78,1.46,1.16,2.4,1.16.78,0,1.44-.2,1.96-.62.45-.36.83-.94,1.16-1.74l1.14.45c-.85,2.07-2.26,3.09-4.25,3.09-1.35,0-2.46-.53-3.35-1.58-.93-1.09-1.39-2.52-1.39-4.3s.48-3.3,1.46-4.52c.96-1.2,2.13-1.81,3.54-1.81,2.03,0,3.41.94,4.15,2.79l-1.16.43Z"
                        />
                        <path
                            style={{ fill: pattern == "C6" ? "#fff" : "#8a6e4b" }}
                            d="m124.77,95.84c-.73.87-1.69,1.31-2.86,1.31-2.66,0-3.97-1.96-3.97-5.88,0-4.21,1.31-6.32,3.97-6.32,1.63,0,2.76.8,3.38,2.36l-1.19.42c-.23-.53-.48-.91-.73-1.14-.36-.29-.86-.45-1.46-.45-1.66,0-2.56,1.51-2.73,4.5.82-.76,1.74-1.16,2.81-1.16,1.19,0,2.12.36,2.8,1.07.62.67.94,1.54.94,2.63,0,1.02-.32,1.91-.96,2.67Zm-.91-4.56c-.46-.51-1.09-.76-1.87-.76-.51,0-1.05.15-1.6.44-.57.29-.96.63-1.21,1,.11,2.69,1.02,4.01,2.73,4.01.78,0,1.42-.29,1.92-.89.43-.54.66-1.18.66-1.91,0-.78-.22-1.42-.62-1.89Z"
                        />
                    </g>
                    <g>
                        <path
                            style={{ fill: pattern == "C8" ? "#fff" : "#8a6e4b" }}
                            d="m52.01,94.98c-.53-1.36-1.53-2.05-2.99-2.05-1,0-1.87.47-2.58,1.38-.8.98-1.19,2.25-1.19,3.78s.35,2.67,1.1,3.54c.66.78,1.46,1.16,2.4,1.16.78,0,1.44-.2,1.96-.62.44-.36.83-.94,1.16-1.74l1.14.45c-.85,2.07-2.26,3.09-4.25,3.09-1.35,0-2.46-.53-3.35-1.58-.93-1.09-1.39-2.52-1.39-4.3s.48-3.3,1.46-4.52c.96-1.2,2.13-1.81,3.54-1.81,2.03,0,3.41.94,4.15,2.79l-1.16.43Z"
                        />
                        <path
                            style={{ fill: pattern == "C8" ? "#fff" : "#8a6e4b" }}
                            d="m60.95,103.06c-.66.62-1.58.91-2.76.91s-2.13-.29-2.79-.91c-.68-.62-1-1.45-1-2.5,0-1.45.68-2.54,2.05-3.29-1.1-.58-1.63-1.43-1.63-2.54,0-.94.3-1.67.91-2.2.59-.51,1.41-.78,2.44-.78s1.83.27,2.44.78c.6.53.91,1.25.91,2.2,0,1.11-.55,1.96-1.63,2.54,1.35.74,2.05,1.83,2.05,3.29,0,1.07-.32,1.91-.96,2.5Zm-.98-4.5c-.46-.44-1.09-.67-1.83-.67s-1.37.24-1.82.67c-.46.45-.68,1.09-.68,1.92,0,.67.2,1.22.59,1.62.43.47,1.09.69,1.96.69,1.64,0,2.47-.76,2.47-2.31,0-.83-.23-1.47-.69-1.92Zm-1.82-5.63c-1.41,0-2.1.63-2.1,1.89,0,.54.19,1,.62,1.34.39.36.89.54,1.5.54s1.09-.18,1.5-.54c.39-.34.59-.8.59-1.34,0-1.25-.71-1.89-2.1-1.89Z"
                        />
                        <path
                            style={{ fill: pattern == "C7" ? "#fff" : "#8a6e4b" }}
                            d="m81.38,94.98c-.53-1.36-1.53-2.05-2.99-2.05-1,0-1.87.47-2.58,1.38-.8.98-1.19,2.25-1.19,3.78s.36,2.67,1.1,3.54c.66.78,1.46,1.16,2.4,1.16.78,0,1.44-.2,1.96-.62.45-.36.84-.94,1.16-1.74l1.14.45c-.85,2.07-2.26,3.09-4.25,3.09-1.35,0-2.45-.53-3.34-1.58-.93-1.09-1.39-2.52-1.39-4.3s.48-3.3,1.46-4.52c.96-1.2,2.14-1.81,3.54-1.81,2.03,0,3.42.94,4.15,2.79l-1.16.43Z"
                        />
                        <path
                            style={{ fill: pattern == "C7" ? "#fff" : "#8a6e4b" }}
                            d="m88.24,98.07c-.37,1.22-.55,3.14-.55,5.75h-1.26c0-2.39.2-4.26.59-5.61.5-1.74,1.48-3.45,2.97-5.12h-6.48v-1.2h8.01v1.18c-1.69,1.69-2.78,3.36-3.28,4.99Z"
                        />
                    </g>
                    <g>
                        <path
                            style={{ fill: pattern == "B6" ? "#fff" : "#8a6e4b" }}
                            d="m266.11,71.98c-.82.49-1.76.73-2.83.73h-4.04v-11.89h4.15c2.58,0,3.88,1.02,3.88,3.01,0,1.18-.54,2.05-1.6,2.63,1.28.56,1.94,1.56,1.94,2.99,0,1.09-.5,1.94-1.5,2.52Zm-2.72-9.98h-2.92v3.94h2.58c.87,0,1.58-.18,2.15-.58.55-.38.83-.89.83-1.53,0-1.22-.89-1.83-2.65-1.83Zm1.99,5.63c-.55-.33-1.24-.51-2.1-.51h-2.81v4.39h2.81c.89,0,1.62-.18,2.22-.58.57-.38.87-.87.87-1.47,0-.8-.34-1.42-1-1.83Z"
                        />
                        <path
                            style={{ fill: pattern == "B6" ? "#fff" : "#8a6e4b" }}
                            d="m275.71,71.56c-.73.87-1.69,1.31-2.87,1.31-2.65,0-3.97-1.96-3.97-5.88,0-4.21,1.31-6.32,3.97-6.32,1.64,0,2.76.8,3.38,2.36l-1.19.42c-.23-.53-.48-.91-.73-1.14-.36-.29-.86-.45-1.46-.45-1.65,0-2.56,1.51-2.72,4.5.82-.76,1.74-1.16,2.81-1.16,1.19,0,2.12.36,2.79,1.07.62.67.95,1.54.95,2.63,0,1.02-.32,1.91-.96,2.67Zm-.91-4.56c-.46-.51-1.09-.76-1.87-.76-.52,0-1.05.15-1.6.44-.57.29-.96.63-1.21,1,.11,2.69,1.01,4.01,2.72,4.01.78,0,1.42-.29,1.92-.89.43-.54.66-1.18.66-1.91,0-.78-.21-1.42-.62-1.89Z"
                        />
                        <path
                            style={{ fill: pattern == "B5" ? "#fff" : "#8a6e4b" }}
                            d="m288.71,71.98c-.82.49-1.76.73-2.83.73h-4.04v-11.89h4.15c2.58,0,3.88,1.02,3.88,3.01,0,1.18-.54,2.05-1.6,2.63,1.28.56,1.94,1.56,1.94,2.99,0,1.09-.5,1.94-1.5,2.52Zm-2.72-9.98h-2.92v3.94h2.58c.87,0,1.58-.18,2.15-.58.55-.38.83-.89.83-1.53,0-1.22-.89-1.83-2.65-1.83Zm1.99,5.63c-.55-.33-1.24-.51-2.1-.51h-2.81v4.39h2.81c.89,0,1.62-.18,2.22-.58.57-.38.87-.87.87-1.47,0-.8-.34-1.42-1-1.83Z"
                        />
                        <path
                            style={{ fill: pattern == "B5" ? "#fff" : "#8a6e4b" }}
                            d="m297.82,71.76c-.71.74-1.58,1.11-2.61,1.11-1.67,0-2.8-.82-3.4-2.49l1.14-.51c.45,1.22,1.19,1.82,2.26,1.82.68,0,1.26-.26,1.72-.78.52-.56.78-1.34.78-2.36,0-1.92-.71-2.9-2.14-2.9-.98,0-1.69.49-2.15,1.47h-1.12v-6.3h6.16v1.2h-4.93v3.29c.46-.55,1.14-.84,2.05-.84,1.03,0,1.85.38,2.46,1.11.61.73.91,1.72.91,2.98,0,1.34-.37,2.41-1.12,3.21Z"
                        />
                    </g>
                    <g>
                        <path
                            style={{ fill: pattern == "B3" ? "#fff" : "#8a6e4b" }}
                            d="m318.87,71.78c-.82.49-1.76.73-2.83.73h-4.04v-11.89h4.15c2.58,0,3.88,1.02,3.88,3.01,0,1.18-.53,2.05-1.6,2.63,1.28.56,1.94,1.56,1.94,2.99,0,1.09-.5,1.94-1.5,2.52Zm-2.72-9.98h-2.92v3.94h2.58c.87,0,1.58-.18,2.16-.58.55-.38.83-.89.83-1.52,0-1.22-.89-1.83-2.65-1.83Zm1.99,5.63c-.55-.33-1.25-.51-2.1-.51h-2.81v4.39h2.81c.89,0,1.62-.18,2.23-.58.57-.38.87-.87.87-1.47,0-.8-.34-1.42-1-1.83Z"
                        />
                        <path
                            style={{ fill: pattern == "B3" ? "#fff" : "#8a6e4b" }}
                            d="m328.07,71.72c-.71.64-1.58.94-2.62.94-1.96,0-3.13-.91-3.52-2.76l1.17-.42c.25,1.34,1.03,2,2.35,2,.71,0,1.3-.2,1.76-.64.44-.42.67-.93.67-1.52,0-.65-.21-1.2-.64-1.67-.45-.43-.98-.67-1.62-.67h-1.37v-1.18h1.19c.46,0,.93-.24,1.39-.73.45-.47.68-.98.68-1.51,0-1.29-.66-1.94-1.98-1.94-1.14,0-1.83.63-2.05,1.91l-1.16-.38c.14-.76.48-1.4.98-1.89.57-.54,1.32-.82,2.22-.82.98,0,1.76.29,2.35.85.57.56.86,1.33.86,2.27,0,1.18-.55,2.07-1.62,2.65.6.22,1.1.62,1.48,1.18.35.56.53,1.2.53,1.92,0,.96-.36,1.76-1.07,2.39Z"
                        />
                        <path
                            style={{ fill: pattern == "B2" ? "#fff" : "#8a6e4b" }}
                            d="m318.87,101.29c-.82.49-1.76.73-2.83.73h-4.04v-11.89h4.15c2.58,0,3.88,1.02,3.88,3.01,0,1.18-.53,2.05-1.6,2.63,1.28.56,1.94,1.56,1.94,2.99,0,1.09-.5,1.94-1.5,2.52Zm-2.72-9.98h-2.92v3.94h2.58c.87,0,1.58-.18,2.16-.58.55-.38.83-.89.83-1.53,0-1.22-.89-1.83-2.65-1.83Zm1.99,5.63c-.55-.33-1.25-.51-2.1-.51h-2.81v4.39h2.81c.89,0,1.62-.18,2.23-.58.57-.38.87-.87.87-1.47,0-.8-.34-1.42-1-1.83Z"
                        />
                        <path
                            style={{ fill: pattern == "B2" ? "#fff" : "#8a6e4b" }}
                            d="m328.28,95.26c-.39.53-1.02,1.22-1.91,2.05-1.49,1.42-2.38,2.59-2.67,3.54h5.37v1.18h-7.1c.25-1.09.69-2.1,1.32-3.03.52-.76,1.26-1.62,2.26-2.54.85-.8,1.44-1.42,1.76-1.89.36-.53.55-1.05.55-1.6,0-.51-.2-.94-.57-1.27-.43-.36-1.03-.56-1.82-.56-1.46,0-2.24.96-2.37,2.87l-1.18-.47c.11-1.09.48-1.96,1.1-2.61.61-.64,1.41-.96,2.44-.96,1.1,0,1.97.27,2.63.78.64.55.98,1.29.98,2.23,0,.76-.29,1.53-.82,2.29Z"
                        />
                    </g>
                    <g>
                        <path
                            style={{ fill: pattern == "B9" ? "#fff" : "#8a6e4b" }}
                            d="m235.14,136.87c-.82.49-1.76.73-2.83.73h-4.04v-11.89h4.15c2.58,0,3.88,1.02,3.88,3.01,0,1.18-.54,2.05-1.6,2.63,1.28.56,1.94,1.56,1.94,2.99,0,1.09-.5,1.94-1.49,2.52Zm-2.73-9.98h-2.92v3.94h2.58c.87,0,1.58-.18,2.15-.58.55-.38.84-.89.84-1.52,0-1.22-.89-1.83-2.65-1.83Zm1.99,5.63c-.55-.33-1.24-.51-2.1-.51h-2.81v4.39h2.81c.89,0,1.62-.18,2.22-.58.57-.38.88-.87.88-1.47,0-.8-.34-1.42-1-1.83Z"
                        />
                        <path
                            style={{ fill: pattern == "B9" ? "#fff" : "#8a6e4b" }}
                            d="m241.5,137.76c-.73,0-1.35-.24-1.89-.71-.43-.36-.77-.83-.98-1.42l1.1-.51c.39.98.98,1.45,1.76,1.45,1.56,0,2.42-1.43,2.58-4.3-.71.78-1.53,1.16-2.47,1.16-1.02,0-1.82-.31-2.42-.96-.61-.64-.91-1.54-.91-2.7s.29-2.12.85-2.92c.62-.87,1.48-1.31,2.58-1.31,1.41,0,2.4.65,2.97,1.92.43.96.64,2.4.64,4.3,0,3.99-1.28,5.99-3.83,5.99Zm.21-11.04c-.66,0-1.19.29-1.6.83-.41.56-.61,1.31-.61,2.22,0,1.67.73,2.5,2.23,2.5.87,0,1.65-.49,2.35-1.49-.07-2.7-.85-4.07-2.37-4.07Z"
                        />
                        <path
                            style={{ fill: pattern == "B1" ? "#fff" : "#8a6e4b" }}
                            d="m318.88,136.87c-.82.49-1.76.73-2.83.73h-4.04v-11.89h4.15c2.58,0,3.88,1.02,3.88,3.01,0,1.18-.53,2.05-1.6,2.63,1.28.56,1.94,1.56,1.94,2.99,0,1.09-.5,1.94-1.5,2.52Zm-2.72-9.98h-2.92v3.94h2.58c.87,0,1.58-.18,2.15-.58.55-.38.83-.89.83-1.52,0-1.22-.89-1.83-2.65-1.83Zm1.99,5.63c-.55-.33-1.25-.51-2.1-.51h-2.81v4.39h2.81c.89,0,1.62-.18,2.23-.58.57-.38.87-.87.87-1.47,0-.8-.34-1.42-1-1.83Z"
                        />
                        <path
                            style={{ fill: pattern == "B1" ? "#fff" : "#8a6e4b" }}
                            d="m324.95,137.61v-9.53h-2.49v-.73h.13c.53,0,1.03-.13,1.53-.38.57-.29.96-.73,1.16-1.27h.91v11.91h-1.23Z"
                        />
                    </g>
                    <g>
                        <path
                            style={{ fill: pattern == "A1" ? "#fff" : "#8a6e4b" }}
                            d="m318.56,201.2l-1.37-3.39h-5.73l-1.37,3.39h-1.3l4.86-11.89h1.35l4.86,11.89h-1.3Zm-4.24-10.42l-2.38,5.84h4.77l-2.39-5.84Z"
                        />
                        <path
                            style={{ fill: pattern == "A1" ? "#fff" : "#8a6e4b" }}
                            d="m323.99,201.24v-9.53h-2.49v-.73h.13c.53,0,1.03-.13,1.53-.38.57-.29.96-.73,1.16-1.27h.91v11.91h-1.23Z"
                        />
                    </g>
                    <g>
                        <path
                            style={{ fill: pattern == "A9" ? "#fff" : "#8a6e4b" }}
                            d="m235.99,200.61l-1.37-3.39h-5.73l-1.37,3.39h-1.3l4.86-11.89h1.35l4.86,11.89h-1.3Zm-4.23-10.42l-2.39,5.84h4.77l-2.38-5.84Z"
                        />
                        <path
                            style={{ fill: pattern == "A9" ? "#fff" : "#8a6e4b" }}
                            d="m241.7,200.79c-.73,0-1.35-.24-1.89-.71-.43-.36-.77-.83-.98-1.42l1.1-.51c.39.98.98,1.45,1.76,1.45,1.57,0,2.42-1.43,2.58-4.3-.71.78-1.53,1.16-2.47,1.16-1.02,0-1.82-.31-2.42-.96-.61-.64-.91-1.54-.91-2.7s.29-2.12.85-2.92c.62-.87,1.48-1.31,2.58-1.31,1.41,0,2.4.65,2.97,1.92.43.96.64,2.4.64,4.3,0,3.99-1.28,5.99-3.83,5.99Zm.21-11.04c-.66,0-1.19.29-1.6.83-.41.56-.61,1.31-.61,2.22,0,1.67.73,2.5,2.23,2.5.87,0,1.66-.49,2.35-1.49-.07-2.7-.85-4.07-2.37-4.07Z"
                        />
                    </g>
                    <g>
                        <path
                            style={{ fill: pattern == "A8" ? "#fff" : "#8a6e4b" }}
                            d="m231.57,234.9l-1.37-3.39h-5.73l-1.37,3.39h-1.3l4.86-11.89h1.35l4.86,11.89h-1.3Zm-4.24-10.42l-2.38,5.84h4.77l-2.39-5.84Z"
                        />
                        <path
                            style={{ fill: pattern == "A8" ? "#fff" : "#8a6e4b" }}
                            d="m240.37,234.18c-.66.62-1.58.91-2.76.91s-2.13-.29-2.79-.91c-.68-.62-1-1.45-1-2.5,0-1.45.68-2.54,2.05-3.29-1.1-.58-1.64-1.43-1.64-2.54,0-.94.3-1.67.91-2.2.59-.51,1.41-.78,2.44-.78s1.84.27,2.44.78c.61.53.91,1.25.91,2.2,0,1.11-.55,1.96-1.64,2.54,1.35.74,2.05,1.83,2.05,3.29,0,1.07-.32,1.91-.96,2.5Zm-.98-4.5c-.46-.44-1.09-.67-1.83-.67s-1.37.24-1.82.67c-.46.45-.68,1.09-.68,1.92,0,.67.2,1.22.59,1.62.43.47,1.09.69,1.96.69,1.64,0,2.47-.76,2.47-2.31,0-.83-.23-1.47-.69-1.92Zm-1.82-5.63c-1.4,0-2.1.63-2.1,1.89,0,.55.19,1,.62,1.34.39.36.89.54,1.5.54s1.09-.18,1.49-.54c.39-.34.59-.8.59-1.34,0-1.25-.71-1.89-2.1-1.89Z"
                        />
                    </g>
                    <g>
                        <path
                            style={{ fill: pattern == "A2" ? "#fff" : "#8a6e4b" }}
                            d="m322.44,234.25l-1.37-3.39h-5.73l-1.37,3.39h-1.3l4.86-11.89h1.35l4.86,11.89h-1.3Zm-4.24-10.42l-2.38,5.84h4.77l-2.39-5.84Z"
                        />
                        <path
                            style={{ fill: pattern == "A2" ? "#fff" : "#8a6e4b" }}
                            d="m331.21,227.52c-.39.53-1.02,1.22-1.91,2.05-1.49,1.42-2.38,2.59-2.67,3.54h5.38v1.18h-7.1c.25-1.09.69-2.1,1.32-3.03.52-.76,1.26-1.62,2.26-2.54.85-.8,1.44-1.42,1.76-1.89.35-.53.55-1.05.55-1.6,0-.51-.2-.94-.57-1.27-.43-.36-1.03-.56-1.82-.56-1.46,0-2.24.96-2.37,2.87l-1.17-.47c.11-1.09.48-1.96,1.1-2.61.61-.64,1.41-.96,2.44-.96,1.1,0,1.98.27,2.63.78.64.55.98,1.29.98,2.23,0,.76-.28,1.53-.82,2.29Z"
                        />
                    </g>
                    <g>
                        <path
                            style={{ fill: pattern == "A7" ? "#fff" : "#8a6e4b" }}
                            d="m236.25,265.19l-1.37-3.39h-5.73l-1.37,3.39h-1.3l4.86-11.89h1.35l4.86,11.89h-1.3Zm-4.23-10.42l-2.38,5.84h4.77l-2.38-5.84Z"
                        />
                        <path
                            style={{ fill: pattern == "A7" ? "#fff" : "#8a6e4b" }}
                            d="m242.99,259.47c-.37,1.22-.55,3.14-.55,5.75h-1.26c0-2.4.2-4.27.59-5.61.5-1.74,1.48-3.45,2.97-5.12h-6.48v-1.2h8.01v1.18c-1.69,1.69-2.78,3.36-3.27,4.99Z"
                        />
                        <path
                            style={{ fill: pattern == "A6" ? "#fff" : "#8a6e4b" }}
                            d="m267.71,265.19l-1.37-3.39h-5.73l-1.37,3.39h-1.3l4.86-11.89h1.35l4.86,11.89h-1.3Zm-4.23-10.42l-2.38,5.84h4.77l-2.38-5.84Z"
                        />
                        <path
                            style={{ fill: pattern == "A6" ? "#fff" : "#8a6e4b" }}
                            d="m276.66,264.06c-.73.87-1.69,1.31-2.87,1.31-2.65,0-3.97-1.96-3.97-5.88,0-4.21,1.32-6.32,3.97-6.32,1.64,0,2.76.8,3.38,2.36l-1.19.42c-.23-.53-.48-.91-.73-1.14-.35-.29-.85-.45-1.46-.45-1.65,0-2.56,1.51-2.72,4.5.82-.76,1.74-1.16,2.81-1.16,1.19,0,2.12.36,2.79,1.07.62.67.94,1.54.94,2.63,0,1.02-.32,1.91-.96,2.67Zm-.91-4.56c-.46-.51-1.09-.76-1.87-.76-.52,0-1.05.15-1.6.44-.57.29-.96.63-1.21,1,.11,2.69,1.01,4.01,2.72,4.01.78,0,1.42-.29,1.92-.89.43-.54.66-1.18.66-1.91,0-.78-.21-1.42-.62-1.89Z"
                        />
                        <path
                            style={{ fill: pattern == "A5" ? "#fff" : "#8a6e4b" }}
                            d="m289.99,265.19l-1.37-3.39h-5.73l-1.37,3.39h-1.3l4.86-11.89h1.35l4.86,11.89h-1.3Zm-4.23-10.42l-2.38,5.84h4.77l-2.38-5.84Z"
                        />
                        <path
                            style={{ fill: pattern == "A5" ? "#fff" : "#8a6e4b" }}
                            d="m298.46,264.26c-.71.74-1.58,1.11-2.62,1.11-1.67,0-2.79-.82-3.4-2.49l1.14-.51c.44,1.22,1.19,1.82,2.26,1.82.68,0,1.26-.26,1.73-.78.52-.56.78-1.34.78-2.36,0-1.92-.71-2.9-2.13-2.9-.98,0-1.69.49-2.15,1.47h-1.12v-6.3h6.16v1.2h-4.93v3.29c.46-.55,1.14-.84,2.05-.84,1.03,0,1.85.38,2.46,1.11.6.73.91,1.72.91,2.98,0,1.34-.37,2.41-1.12,3.21Z"
                        />
                        <path
                            style={{ fill: pattern == "A3" ? "#fff" : "#8a6e4b" }}
                            d="m319.97,265.19l-1.37-3.39h-5.73l-1.37,3.39h-1.3l4.86-11.89h1.35l4.86,11.89h-1.3Zm-4.24-10.42l-2.38,5.84h4.77l-2.39-5.84Z"
                        />
                        <path
                            style={{ fill: pattern == "A3" ? "#fff" : "#8a6e4b" }}
                            d="m328.53,264.42c-.71.64-1.58.94-2.62.94-1.96,0-3.13-.91-3.52-2.76l1.17-.42c.25,1.34,1.03,2,2.35,2,.71,0,1.3-.2,1.77-.64.44-.42.67-.93.67-1.53,0-.65-.21-1.2-.64-1.67-.45-.44-.98-.67-1.62-.67h-1.37v-1.18h1.19c.46,0,.93-.24,1.39-.73.44-.47.68-.98.68-1.51,0-1.29-.66-1.94-1.98-1.94-1.14,0-1.83.63-2.05,1.91l-1.16-.38c.14-.76.48-1.4.98-1.89.57-.54,1.32-.82,2.22-.82.98,0,1.76.29,2.35.85.57.56.85,1.33.85,2.27,0,1.18-.55,2.07-1.62,2.65.6.22,1.1.62,1.48,1.18.35.56.53,1.2.53,1.92,0,.96-.36,1.76-1.07,2.4Z"
                        />
                    </g>
                    <g>
                        <path
                            style={{ fill: pattern == "B7" ? "#fff" : "#8a6e4b" }}
                            d="m234.67,71.48c-.82.49-1.77.73-2.83.73h-4.04v-11.89h4.15c2.58,0,3.88,1.02,3.88,3.01,0,1.18-.54,2.05-1.6,2.63,1.28.56,1.94,1.56,1.94,2.99,0,1.09-.5,1.94-1.49,2.52Zm-2.73-9.98h-2.92v3.94h2.58c.87,0,1.58-.18,2.15-.58.55-.38.84-.89.84-1.53,0-1.22-.89-1.83-2.65-1.83Zm1.99,5.63c-.55-.33-1.24-.51-2.1-.51h-2.81v4.39h2.81c.89,0,1.62-.18,2.22-.58.57-.38.87-.87.87-1.47,0-.8-.34-1.42-1-1.83Z"
                        />
                        <path
                            style={{ fill: pattern == "B7" ? "#fff" : "#8a6e4b" }}
                            d="m242.05,66.47c-.37,1.22-.55,3.14-.55,5.75h-1.26c0-2.4.2-4.27.59-5.61.5-1.74,1.48-3.45,2.97-5.12h-6.48v-1.2h8.01v1.18c-1.69,1.69-2.78,3.36-3.27,4.99Z"
                        />
                    </g>
                    <g>
                        <path
                            style={{ fill: pattern == "B8" ? "#fff" : "#8a6e4b" }}
                            d="m230.69,102.92c-.82.49-1.76.73-2.83.73h-4.04v-11.89h4.15c2.58,0,3.88,1.02,3.88,3.01,0,1.18-.54,2.05-1.6,2.63,1.28.56,1.94,1.56,1.94,2.99,0,1.09-.5,1.94-1.5,2.52Zm-2.72-9.98h-2.92v3.94h2.58c.87,0,1.58-.18,2.15-.58.55-.38.83-.89.83-1.53,0-1.22-.89-1.83-2.65-1.83Zm1.99,5.63c-.55-.33-1.24-.51-2.1-.51h-2.81v4.39h2.81c.89,0,1.62-.18,2.22-.58.57-.38.87-.87.87-1.47,0-.8-.34-1.42-1-1.83Z"
                        />
                        <path
                            style={{ fill: pattern == "B8" ? "#fff" : "#8a6e4b" }}
                            d="m240.14,102.9c-.66.62-1.58.91-2.76.91s-2.14-.29-2.8-.91c-.67-.62-1-1.45-1-2.5,0-1.45.68-2.54,2.05-3.29-1.1-.58-1.64-1.43-1.64-2.54,0-.94.3-1.67.91-2.2.59-.51,1.41-.78,2.44-.78s1.83.27,2.44.78c.61.53.91,1.25.91,2.2,0,1.11-.55,1.96-1.64,2.54,1.35.74,2.05,1.83,2.05,3.29,0,1.07-.32,1.91-.96,2.5Zm-.98-4.5c-.46-.44-1.09-.67-1.84-.67s-1.37.24-1.82.67c-.46.45-.67,1.09-.67,1.92,0,.67.2,1.22.59,1.62.43.47,1.09.69,1.96.69,1.64,0,2.47-.76,2.47-2.31,0-.83-.23-1.47-.69-1.92Zm-1.82-5.63c-1.41,0-2.1.63-2.1,1.89,0,.54.2,1,.62,1.34.39.36.89.54,1.49.54s1.09-.18,1.5-.54c.39-.34.59-.8.59-1.34,0-1.25-.71-1.89-2.1-1.89Z"
                        />
                    </g>
                </g>
            </g>
        </svg>
    )
}
const PatternDiagram18To21 = ({ data }) => {
    const pattern = data.title.split(",")[0]
    return (
        <svg id="_圖層_2" data-name="圖層 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 344.3 283.54">
            <defs>
                <style dangerouslySetInnerHTML={{
                    __html: "\n      #patternDiagramC18To21 .cls-1, #patternDiagramC18To21 .cls-2, #patternDiagramC18To21 .cls-3, #patternDiagramC18To21 .cls-4, #patternDiagramC18To21 .cls-5, #patternDiagramC18To21 .cls-6 {\n        stroke: #8a6e4b;\n      }\n\n      #patternDiagramC18To21 .cls-1, #patternDiagramC18To21 .cls-2, #patternDiagramC18To21 .cls-4 {\n        stroke-miterlimit: 10;\n      }\n\n      #patternDiagramC18To21 .cls-1, #patternDiagramC18To21 .cls-7, #patternDiagramC18To21 .cls-5, #patternDiagramC18To21 .cls-6 {\n        fill: none;\n      }\n\n      #patternDiagramC18To21 .cls-1, #patternDiagramC18To21 .cls-4 {\n        stroke-width: .35px;\n      }\n\n      #patternDiagramC18To21 .cls-8, #patternDiagramC18To21 .cls-2, #patternDiagramC18To21 .cls-4 {\n        fill: #fff;\n      }\n\n      #patternDiagramC18To21 .cls-2 {\n        stroke-width: .35px;\n      }\n\n      #patternDiagramC18To21 .cls-3 {\n        fill: #dbd0c4;\n        stroke-width: .35px;\n      }\n\n      #patternDiagramC18To21 .cls-3, #patternDiagramC18To21 .cls-5, #patternDiagramC18To21 .cls-6 {\n        stroke-linecap: round;\n        stroke-linejoin: round;\n      }\n\n      #patternDiagramC18To21 .cls-9 {\n        fill: #8a6e4b;\n      }\n\n      #patternDiagramC18To21 .cls-5 {\n        stroke-width: .45px;\n      }\n\n      #patternDiagramC18To21 .cls-6 {\n        stroke-width: .27px;\n      }\n    "
                }} />
            </defs>
            <g id="patternDiagramC18To21">
                <g>
                    {/* 指北針 */}
                    <g>
                        <path className="cls-5"

                            d="m71.96,248.11c0-17.95-14.56-32.51-32.51-32.51s-32.51,14.56-32.51,32.51,14.56,32.51,32.51,32.51,32.51-14.56,32.51-32.51" />
                        <line className="cls-6" x1="36.65" y1="244.83" x2="61.19" y2="223.88" />
                        <path className="cls-9"
                            d="m61.19,223.88l-21.77,24.25-2.78-3.31,24.55-20.94Zm3.02,3.12l-3.02-3.12-21.77,24.25,24.79-21.14Z" />
                        <path className="cls-7"
                            d="m61.19,223.88l-21.77,24.25-2.78-3.31,24.55-20.94Zm3.02,3.12l-3.02-3.12-21.77,24.25,24.79-21.14Z" />
                        <path className="cls-9"
                            d="m66.79,230.51l-27.37,17.63,2.82,3.26,24.55-20.89Zm-2.58-3.51l2.58,3.51-27.37,17.63,24.79-21.14Z" />
                        <path className="cls-7"
                            d="m66.79,230.51l-27.37,17.63,2.82,3.26,24.55-20.89Zm-2.58-3.51l2.58,3.51-27.37,17.63,24.79-21.14Z" />
                        <line className="cls-6" x1="42.25" y1="251.4" x2="66.79" y2="230.51" />
                        <line className="cls-5" x1="14.68" y1="269.23" x2="39.42" y2="248.14" />
                        <line className="cls-5" x1="18.33" y1="223.35" x2="60.51" y2="272.88" />
                        <polyline className="cls-5" points="65.97 218.57 77.31 208.88 71.13 224.61 82.48 214.92" />
                    </g>
                    {/* ab棟底色 */}
                    <polygon
                        style={{ fill: pattern == "B3" ? "#8a6e4b" : "#fff" }}
                        className="cls-4"
                        points="343.35 70.94 338.49 70.94 338.49 46.78 338.48 46.78 338.48 42.9 325.99 42.9 325.99 46.78 302.31 46.78 302.31 85.02 300.24 85.02 300.24 93 310.44 93 310.44 92.88 338.49 92.88 338.49 80.6 343.35 80.6 343.35 70.94"
                    />
                    <polygon
                        style={{ fill: pattern == "A9" ? "#8a6e4b" : "#fff" }}
                        className="cls-4"
                        points="249.52 189.78 249.52 176.94 240.61 176.94 240.61 174.98 217.99 174.98 217.99 192.18 218 192.18 218 212.13 248.28 212.13 248.28 215.43 259.09 215.43 259.09 189.78 249.52 189.78"
                    />
                    <polygon
                        style={{ fill: pattern == "A8" ? "#8a6e4b" : "#fff" }}
                        className="cls-4"
                        points="248.28 212.02 225.54 212.02 225.54 219.39 213.91 219.39 213.91 232.29 217.26 232.29 217.26 241.34 226.88 241.34 226.88 241.33 248.28 241.33 248.28 212.02"
                    />
                    <polygon
                        style={{ fill: pattern == "C9" ? "#8a6e4b" : "#fff" }}
                        className="cls-4"
                        points="38.54 73.75 32.51 73.75 32.51 71.68 11.51 71.68 11.51 68 3.16 68 3.16 88.12 .2 88.12 .2 95.96 3.37 95.96 3.37 110.34 23.73 110.34 23.73 115.13 32.5 115.13 32.5 110.35 37.22 110.35 37.22 79.72 38.54 79.72 38.54 73.75"
                    />
                    <polygon
                        style={{ fill: pattern == "B6" ? "#8a6e4b" : "#fff" }}
                        className="cls-4"
                        points="268.49 49.92 268.49 46.78 255.99 46.78 255.99 53.78 255.99 53.78 255.99 86.48 279.11 86.48 279.11 49.92 268.49 49.92"
                    />
                    <polygon
                        style={{ fill: pattern == "B5" ? "#8a6e4b" : "#fff" }}
                        className="cls-2"
                        points="302.36 46.78 289.77 46.78 289.77 49.93 279.07 49.93 279.07 86.54 302.36 86.54 302.36 53.79 302.36 53.79 302.36 46.78"
                    />
                    <polygon
                        style={{ fill: pattern == "B9" ? "#8a6e4b" : "#fff" }}
                        className="cls-4"
                        points="259.05 109.77 217.94 109.77 217.94 135.44 217.94 135.44 217.94 150.27 240.56 150.27 240.56 148.32 249.55 148.32 249.55 135.44 259.05 135.44 259.05 109.77"
                    />
                    <polygon
                        className="cls-3"
                        points="87.24 45.6 87.24 36.49 46.77 36.49 46.77 44.13 42.84 44.13 42.84 44.2 41.11 42.47 32.75 42.47 32.75 63.94 36.02 66.68 34.72 67.99 31.81 67.99 31.85 74.12 38.19 74.13 38.19 79.9 88.83 79.9 88.83 70.38 98.19 70.38 98.19 45.6 87.24 45.6"
                    />
                    <polygon
                        className="cls-3"
                        points="300.55 86.39 256.26 86.39 256.26 76.51 248.12 76.51 248.12 90.66 248.19 90.66 248.19 111.3 258.82 111.3 259.07 147.16 270.3 147.16 270.3 136.75 281.68 136.75 281.68 132.26 292.29 132.26 292.29 111.3 300.55 111.3 300.55 86.39"
                    />
                    <polygon
                        style={{ fill: pattern == "B7" ? "#8a6e4b" : "#fff" }}
                        className="cls-4"
                        points="255.98 49.91 247.23 49.91 247.23 47.99 217.92 47.99 217.92 49.79 210.9 49.79 210.9 62.42 217.92 62.42 217.92 75.02 213.98 75.02 213.98 83.91 248.37 83.91 248.37 76.75 255.98 76.75 255.98 49.91"
                    />
                    <polygon
                        style={{ fill: pattern == "B2" ? "#8a6e4b" : "#fff" }}
                        className="cls-4"
                        points="342.45 85.02 310.29 85.02 310.29 92.82 300.24 92.82 300.24 113.09 329.89 113.09 329.89 105.35 342.45 105.35 342.45 85.02"
                    />
                    <polygon
                        style={{ fill: pattern == "B1" ? "#8a6e4b" : "#fff" }}
                        className="cls-4"
                        points="338.52 145.41 338.52 145.41 338.52 113.07 304.37 113.07 304.37 113.07 300.05 113.07 300.05 110.99 291.94 110.99 291.94 134.33 297.6 134.33 297.6 134.34 301.77 134.34 301.77 147.2 315.66 147.2 315.66 152.09 323.7 152.09 323.7 150.29 338.52 150.29 338.52 145.41"
                    />
                    <polygon
                        className="cls-3"
                        points="300.39 214.2 291.86 214.2 291.86 192.96 281.82 192.96 281.82 188.49 270.61 188.49 270.61 178.12 258.9 178.12 258.9 214.2 255.94 214.2 255.94 215.3 248.17 215.3 248.17 247.54 256.04 247.54 256.04 238.8 300.39 238.8 300.39 214.2"
                    />
                    <polygon
                        style={{ fill: pattern == "A6" ? "#8a6e4b" : "#fff" }}
                        className="cls-4"
                        points="279.06 238.7 255.93 238.7 255.93 275.34 255.96 275.34 255.96 278.48 268.46 278.48 268.46 275.34 279.06 275.34 279.06 238.7"
                    />
                    <polygon
                        style={{ fill: pattern == "A5" ? "#8a6e4b" : "#fff" }}
                        className="cls-4"
                        points="302.18 238.7 279.05 238.7 279.05 275.34 289.76 275.34 289.76 278.48 302.16 278.48 302.16 275.34 302.18 275.34 302.18 238.7"
                    />
                    <polygon
                        style={{ fill: pattern == "A3" ? "#8a6e4b" : "#fff" }}
                        className="cls-4"
                        points="343.32 244.69 338.47 244.69 338.47 240.14 310.35 240.14 310.35 232.36 300.22 232.36 300.22 242.22 302.16 242.22 302.16 278.48 326.04 278.48 326.04 282.38 338.45 282.38 338.45 278.48 338.47 278.48 338.47 254.31 343.32 254.31 343.32 244.69"
                    />
                    <polygon
                        style={{ fill: pattern == "A1" ? "#8a6e4b" : "#fff" }}
                        className="cls-1"
                        points="338.5 178.06 338.49 178.06 338.49 174.94 323.75 174.94 323.75 173.05 315.61 173.05 315.61 178.06 301.83 178.06 301.83 190.85 291.86 190.85 291.86 210.47 291.86 212.2 291.86 214.32 300.07 214.32 300.07 212.2 333.61 212.2 333.61 198.64 338.5 198.64 338.5 178.06"
                    />
                    <polygon
                        style={{ fill: pattern == "A7" ? "#8a6e4b" : "#fff" }}
                        className="cls-4"
                        points="255.95 273.27 255.95 247.67 248.28 247.67 248.28 241.26 245.27 241.26 245.27 241.28 216.21 241.28 216.21 276.38 231.67 276.38 231.67 278.48 255.96 278.48 255.96 273.27 255.95 273.27"
                    />
                    <polygon
                        style={{ fill: pattern == "B8" ? "#8a6e4b" : "#fff" }}
                        className="cls-4"
                        points="217.22 83.91 217.22 92.93 213.91 92.93 213.91 105.85 215.93 105.85 215.93 113.14 217.22 113.14 217.22 113.15 248.36 113.15 248.36 83.91 217.22 83.91"
                    />
                    <polygon
                        style={{ fill: pattern == "A2" ? "#8a6e4b" : "#fff" }}
                        className="cls-9"
                        points="329.94 219.89 329.94 212.17 300.18 212.17 300.18 232.38 310.39 232.38 310.39 240.23 342.56 240.23 342.56 219.89 329.94 219.89"
                    />                    {/* ab棟文字 */}
                    <g>
                        <path
                            style={{ fill: pattern == "B6" ? "#fff" : "#8a6e4b" }}
                            d="m266.11,71.98c-.82.49-1.76.73-2.83.73h-4.04v-11.89h4.15c2.58,0,3.88,1.02,3.88,3.01,0,1.18-.54,2.05-1.6,2.63,1.28.56,1.94,1.56,1.94,2.99,0,1.09-.5,1.94-1.5,2.52Zm-2.72-9.98h-2.92v3.94h2.58c.87,0,1.58-.18,2.15-.58.55-.38.83-.89.83-1.53,0-1.22-.89-1.83-2.65-1.83Zm1.99,5.63c-.55-.33-1.24-.51-2.1-.51h-2.81v4.39h2.81c.89,0,1.62-.18,2.22-.58.57-.38.87-.87.87-1.47,0-.8-.34-1.42-1-1.83Z"
                        />
                        <path
                            style={{ fill: pattern == "B6" ? "#fff" : "#8a6e4b" }}
                            d="m275.71,71.56c-.73.87-1.69,1.31-2.87,1.31-2.65,0-3.97-1.96-3.97-5.88,0-4.21,1.31-6.32,3.97-6.32,1.64,0,2.76.8,3.38,2.36l-1.19.42c-.23-.53-.48-.91-.73-1.14-.36-.29-.86-.45-1.46-.45-1.65,0-2.56,1.51-2.72,4.5.82-.76,1.74-1.16,2.81-1.16,1.19,0,2.12.36,2.79,1.07.62.67.95,1.54.95,2.63,0,1.02-.32,1.91-.96,2.67Zm-.91-4.56c-.46-.51-1.09-.76-1.87-.76-.52,0-1.05.15-1.6.44-.57.29-.96.63-1.21,1,.11,2.69,1.01,4.01,2.72,4.01.78,0,1.42-.29,1.92-.89.43-.54.66-1.18.66-1.91,0-.78-.21-1.42-.62-1.89Z"
                        />
                        <path
                            style={{ fill: pattern == "B5" ? "#fff" : "#8a6e4b" }}
                            d="m288.71,71.98c-.82.49-1.76.73-2.83.73h-4.04v-11.89h4.15c2.58,0,3.88,1.02,3.88,3.01,0,1.18-.54,2.05-1.6,2.63,1.28.56,1.94,1.56,1.94,2.99,0,1.09-.5,1.94-1.5,2.52Zm-2.72-9.98h-2.92v3.94h2.58c.87,0,1.58-.18,2.15-.58.55-.38.83-.89.83-1.53,0-1.22-.89-1.83-2.65-1.83Zm1.99,5.63c-.55-.33-1.24-.51-2.1-.51h-2.81v4.39h2.81c.89,0,1.62-.18,2.22-.58.57-.38.87-.87.87-1.47,0-.8-.34-1.42-1-1.83Z"
                        />
                        <path
                            style={{ fill: pattern == "B5" ? "#fff" : "#8a6e4b" }}
                            d="m297.82,71.76c-.71.74-1.58,1.11-2.61,1.11-1.67,0-2.8-.82-3.4-2.49l1.14-.51c.45,1.22,1.19,1.82,2.26,1.82.68,0,1.26-.26,1.72-.78.52-.56.78-1.34.78-2.36,0-1.92-.71-2.9-2.14-2.9-.98,0-1.69.49-2.15,1.47h-1.12v-6.3h6.16v1.2h-4.93v3.29c.46-.55,1.14-.84,2.05-.84,1.03,0,1.85.38,2.46,1.11.61.73.91,1.72.91,2.98,0,1.34-.37,2.41-1.12,3.21Z"
                        />
                    </g>
                    <g>
                        <path
                            style={{ fill: pattern == "B3" ? "#fff" : "#8a6e4b" }}
                            d="m318.87,71.78c-.82.49-1.76.73-2.83.73h-4.04v-11.89h4.15c2.58,0,3.88,1.02,3.88,3.01,0,1.18-.53,2.05-1.6,2.63,1.28.56,1.94,1.56,1.94,2.99,0,1.09-.5,1.94-1.5,2.52Zm-2.72-9.98h-2.92v3.94h2.58c.87,0,1.58-.18,2.16-.58.55-.38.83-.89.83-1.52,0-1.22-.89-1.83-2.65-1.83Zm1.99,5.63c-.55-.33-1.25-.51-2.1-.51h-2.81v4.39h2.81c.89,0,1.62-.18,2.23-.58.57-.38.87-.87.87-1.47,0-.8-.34-1.42-1-1.83Z"
                        />
                        <path
                            style={{ fill: pattern == "B3" ? "#fff" : "#8a6e4b" }}
                            d="m328.07,71.72c-.71.64-1.58.94-2.62.94-1.96,0-3.13-.91-3.52-2.76l1.17-.42c.25,1.34,1.03,2,2.35,2,.71,0,1.3-.2,1.76-.64.44-.42.67-.93.67-1.52,0-.65-.21-1.2-.64-1.67-.45-.43-.98-.67-1.62-.67h-1.37v-1.18h1.19c.46,0,.93-.24,1.39-.73.45-.47.68-.98.68-1.51,0-1.29-.66-1.94-1.98-1.94-1.14,0-1.83.63-2.05,1.91l-1.16-.38c.14-.76.48-1.4.98-1.89.57-.54,1.32-.82,2.22-.82.98,0,1.76.29,2.35.85.57.56.86,1.33.86,2.27,0,1.18-.55,2.07-1.62,2.65.6.22,1.1.62,1.48,1.18.35.56.53,1.2.53,1.92,0,.96-.36,1.76-1.07,2.39Z"
                        />
                        <path
                            style={{ fill: pattern == "B2" ? "#fff" : "#8a6e4b" }}
                            d="m318.87,101.29c-.82.49-1.76.73-2.83.73h-4.04v-11.89h4.15c2.58,0,3.88,1.02,3.88,3.01,0,1.18-.53,2.05-1.6,2.63,1.28.56,1.94,1.56,1.94,2.99,0,1.09-.5,1.94-1.5,2.52Zm-2.72-9.98h-2.92v3.94h2.58c.87,0,1.58-.18,2.16-.58.55-.38.83-.89.83-1.53,0-1.22-.89-1.83-2.65-1.83Zm1.99,5.63c-.55-.33-1.25-.51-2.1-.51h-2.81v4.39h2.81c.89,0,1.62-.18,2.23-.58.57-.38.87-.87.87-1.47,0-.8-.34-1.42-1-1.83Z"
                        />
                        <path
                            style={{ fill: pattern == "B2" ? "#fff" : "#8a6e4b" }}
                            d="m328.28,95.26c-.39.53-1.02,1.22-1.91,2.05-1.49,1.42-2.38,2.59-2.67,3.54h5.37v1.18h-7.1c.25-1.09.69-2.1,1.32-3.03.52-.76,1.26-1.62,2.26-2.54.85-.8,1.44-1.42,1.76-1.89.36-.53.55-1.05.55-1.6,0-.51-.2-.94-.57-1.27-.43-.36-1.03-.56-1.82-.56-1.46,0-2.24.96-2.37,2.87l-1.18-.47c.11-1.09.48-1.96,1.1-2.61.61-.64,1.41-.96,2.44-.96,1.1,0,1.97.27,2.63.78.64.55.98,1.29.98,2.23,0,.76-.29,1.53-.82,2.29Z"
                        />
                    </g>
                    <g>
                        <path
                            style={{ fill: pattern == "B9" ? "#fff" : "#8a6e4b" }}
                            d="m235.14,136.87c-.82.49-1.76.73-2.83.73h-4.04v-11.89h4.15c2.58,0,3.88,1.02,3.88,3.01,0,1.18-.54,2.05-1.6,2.63,1.28.56,1.94,1.56,1.94,2.99,0,1.09-.5,1.94-1.49,2.52Zm-2.73-9.98h-2.92v3.94h2.58c.87,0,1.58-.18,2.15-.58.55-.38.84-.89.84-1.52,0-1.22-.89-1.83-2.65-1.83Zm1.99,5.63c-.55-.33-1.24-.51-2.1-.51h-2.81v4.39h2.81c.89,0,1.62-.18,2.22-.58.57-.38.88-.87.88-1.47,0-.8-.34-1.42-1-1.83Z"
                        />
                        <path
                            style={{ fill: pattern == "B9" ? "#fff" : "#8a6e4b" }}
                            d="m241.5,137.76c-.73,0-1.35-.24-1.89-.71-.43-.36-.77-.83-.98-1.42l1.1-.51c.39.98.98,1.45,1.76,1.45,1.56,0,2.42-1.43,2.58-4.3-.71.78-1.53,1.16-2.47,1.16-1.02,0-1.82-.31-2.42-.96-.61-.64-.91-1.54-.91-2.7s.29-2.12.85-2.92c.62-.87,1.48-1.31,2.58-1.31,1.41,0,2.4.65,2.97,1.92.43.96.64,2.4.64,4.3,0,3.99-1.28,5.99-3.83,5.99Zm.21-11.04c-.66,0-1.19.29-1.6.83-.41.56-.61,1.31-.61,2.22,0,1.67.73,2.5,2.23,2.5.87,0,1.65-.49,2.35-1.49-.07-2.7-.85-4.07-2.37-4.07Z"
                        />
                        <path
                            style={{ fill: pattern == "B1" ? "#fff" : "#8a6e4b" }}
                            d="m318.88,136.87c-.82.49-1.76.73-2.83.73h-4.04v-11.89h4.15c2.58,0,3.88,1.02,3.88,3.01,0,1.18-.53,2.05-1.6,2.63,1.28.56,1.94,1.56,1.94,2.99,0,1.09-.5,1.94-1.5,2.52Zm-2.72-9.98h-2.92v3.94h2.58c.87,0,1.58-.18,2.15-.58.55-.38.83-.89.83-1.52,0-1.22-.89-1.83-2.65-1.83Zm1.99,5.63c-.55-.33-1.25-.51-2.1-.51h-2.81v4.39h2.81c.89,0,1.62-.18,2.23-.58.57-.38.87-.87.87-1.47,0-.8-.34-1.42-1-1.83Z"
                        />
                        <path
                            style={{ fill: pattern == "B1" ? "#fff" : "#8a6e4b" }}
                            d="m324.95,137.61v-9.53h-2.49v-.73h.13c.53,0,1.03-.13,1.53-.38.57-.29.96-.73,1.16-1.27h.91v11.91h-1.23Z"
                        />
                    </g>
                    <g>
                        <path
                            style={{ fill: pattern == "A1" ? "#fff" : "#8a6e4b" }}
                            d="m318.56,201.2l-1.37-3.39h-5.73l-1.37,3.39h-1.3l4.86-11.89h1.35l4.86,11.89h-1.3Zm-4.24-10.42l-2.38,5.84h4.77l-2.39-5.84Z"
                        />
                        <path
                            style={{ fill: pattern == "A1" ? "#fff" : "#8a6e4b" }}
                            d="m323.99,201.24v-9.53h-2.49v-.73h.13c.53,0,1.03-.13,1.53-.38.57-.29.96-.73,1.16-1.27h.91v11.91h-1.23Z"
                        />
                    </g>
                    <g>
                        <path
                            style={{ fill: pattern == "A9" ? "#fff" : "#8a6e4b" }}
                            d="m235.99,200.61l-1.37-3.39h-5.73l-1.37,3.39h-1.3l4.86-11.89h1.35l4.86,11.89h-1.3Zm-4.23-10.42l-2.39,5.84h4.77l-2.38-5.84Z"
                        />
                        <path
                            style={{ fill: pattern == "A9" ? "#fff" : "#8a6e4b" }}
                            d="m241.7,200.79c-.73,0-1.35-.24-1.89-.71-.43-.36-.77-.83-.98-1.42l1.1-.51c.39.98.98,1.45,1.76,1.45,1.57,0,2.42-1.43,2.58-4.3-.71.78-1.53,1.16-2.47,1.16-1.02,0-1.82-.31-2.42-.96-.61-.64-.91-1.54-.91-2.7s.29-2.12.85-2.92c.62-.87,1.48-1.31,2.58-1.31,1.41,0,2.4.65,2.97,1.92.43.96.64,2.4.64,4.3,0,3.99-1.28,5.99-3.83,5.99Zm.21-11.04c-.66,0-1.19.29-1.6.83-.41.56-.61,1.31-.61,2.22,0,1.67.73,2.5,2.23,2.5.87,0,1.66-.49,2.35-1.49-.07-2.7-.85-4.07-2.37-4.07Z"
                        />
                    </g>
                    <g>
                        <path
                            style={{ fill: pattern == "A8" ? "#fff" : "#8a6e4b" }}
                            d="m231.57,234.9l-1.37-3.39h-5.73l-1.37,3.39h-1.3l4.86-11.89h1.35l4.86,11.89h-1.3Zm-4.24-10.42l-2.38,5.84h4.77l-2.39-5.84Z"
                        />
                        <path
                            style={{ fill: pattern == "A8" ? "#fff" : "#8a6e4b" }}
                            d="m240.37,234.18c-.66.62-1.58.91-2.76.91s-2.13-.29-2.79-.91c-.68-.62-1-1.45-1-2.5,0-1.45.68-2.54,2.05-3.29-1.1-.58-1.64-1.43-1.64-2.54,0-.94.3-1.67.91-2.2.59-.51,1.41-.78,2.44-.78s1.84.27,2.44.78c.61.53.91,1.25.91,2.2,0,1.11-.55,1.96-1.64,2.54,1.35.74,2.05,1.83,2.05,3.29,0,1.07-.32,1.91-.96,2.5Zm-.98-4.5c-.46-.44-1.09-.67-1.83-.67s-1.37.24-1.82.67c-.46.45-.68,1.09-.68,1.92,0,.67.2,1.22.59,1.62.43.47,1.09.69,1.96.69,1.64,0,2.47-.76,2.47-2.31,0-.83-.23-1.47-.69-1.92Zm-1.82-5.63c-1.4,0-2.1.63-2.1,1.89,0,.55.19,1,.62,1.34.39.36.89.54,1.5.54s1.09-.18,1.49-.54c.39-.34.59-.8.59-1.34,0-1.25-.71-1.89-2.1-1.89Z"
                        />
                    </g>
                    <g>
                        <path
                            style={{ fill: pattern == "A2" ? "#fff" : "#8a6e4b" }}
                            d="m322.44,234.25l-1.37-3.39h-5.73l-1.37,3.39h-1.3l4.86-11.89h1.35l4.86,11.89h-1.3Zm-4.24-10.42l-2.38,5.84h4.77l-2.39-5.84Z"
                        />
                        <path
                            style={{ fill: pattern == "A2" ? "#fff" : "#8a6e4b" }}
                            d="m331.21,227.52c-.39.53-1.02,1.22-1.91,2.05-1.49,1.42-2.38,2.59-2.67,3.54h5.38v1.18h-7.1c.25-1.09.69-2.1,1.32-3.03.52-.76,1.26-1.62,2.26-2.54.85-.8,1.44-1.42,1.76-1.89.35-.53.55-1.05.55-1.6,0-.51-.2-.94-.57-1.27-.43-.36-1.03-.56-1.82-.56-1.46,0-2.24.96-2.37,2.87l-1.17-.47c.11-1.09.48-1.96,1.1-2.61.61-.64,1.41-.96,2.44-.96,1.1,0,1.98.27,2.63.78.64.55.98,1.29.98,2.23,0,.76-.28,1.53-.82,2.29Z"
                        />
                    </g>
                    <g>
                        <path
                            style={{ fill: pattern == "A7" ? "#fff" : "#8a6e4b" }}
                            d="m236.25,265.19l-1.37-3.39h-5.73l-1.37,3.39h-1.3l4.86-11.89h1.35l4.86,11.89h-1.3Zm-4.23-10.42l-2.38,5.84h4.77l-2.38-5.84Z"
                        />
                        <path
                            style={{ fill: pattern == "A7" ? "#fff" : "#8a6e4b" }}
                            d="m242.99,259.47c-.37,1.22-.55,3.14-.55,5.75h-1.26c0-2.4.2-4.27.59-5.61.5-1.74,1.48-3.45,2.97-5.12h-6.48v-1.2h8.01v1.18c-1.69,1.69-2.78,3.36-3.27,4.99Z"
                        />
                        <path
                            style={{ fill: pattern == "A6" ? "#fff" : "#8a6e4b" }}
                            d="m267.71,265.19l-1.37-3.39h-5.73l-1.37,3.39h-1.3l4.86-11.89h1.35l4.86,11.89h-1.3Zm-4.23-10.42l-2.38,5.84h4.77l-2.38-5.84Z"
                        />
                        <path
                            style={{ fill: pattern == "A6" ? "#fff" : "#8a6e4b" }}
                            d="m276.66,264.06c-.73.87-1.69,1.31-2.87,1.31-2.65,0-3.97-1.96-3.97-5.88,0-4.21,1.32-6.32,3.97-6.32,1.64,0,2.76.8,3.38,2.36l-1.19.42c-.23-.53-.48-.91-.73-1.14-.35-.29-.85-.45-1.46-.45-1.65,0-2.56,1.51-2.72,4.5.82-.76,1.74-1.16,2.81-1.16,1.19,0,2.12.36,2.79,1.07.62.67.94,1.54.94,2.63,0,1.02-.32,1.91-.96,2.67Zm-.91-4.56c-.46-.51-1.09-.76-1.87-.76-.52,0-1.05.15-1.6.44-.57.29-.96.63-1.21,1,.11,2.69,1.01,4.01,2.72,4.01.78,0,1.42-.29,1.92-.89.43-.54.66-1.18.66-1.91,0-.78-.21-1.42-.62-1.89Z"
                        />
                        <path
                            style={{ fill: pattern == "A5" ? "#fff" : "#8a6e4b" }}
                            d="m289.99,265.19l-1.37-3.39h-5.73l-1.37,3.39h-1.3l4.86-11.89h1.35l4.86,11.89h-1.3Zm-4.23-10.42l-2.38,5.84h4.77l-2.38-5.84Z"
                        />
                        <path
                            style={{ fill: pattern == "A5" ? "#fff" : "#8a6e4b" }}
                            d="m298.46,264.26c-.71.74-1.58,1.11-2.62,1.11-1.67,0-2.79-.82-3.4-2.49l1.14-.51c.44,1.22,1.19,1.82,2.26,1.82.68,0,1.26-.26,1.73-.78.52-.56.78-1.34.78-2.36,0-1.92-.71-2.9-2.13-2.9-.98,0-1.69.49-2.15,1.47h-1.12v-6.3h6.16v1.2h-4.93v3.29c.46-.55,1.14-.84,2.05-.84,1.03,0,1.85.38,2.46,1.11.6.73.91,1.72.91,2.98,0,1.34-.37,2.41-1.12,3.21Z"
                        />
                        <path
                            style={{ fill: pattern == "A3" ? "#fff" : "#8a6e4b" }}
                            d="m319.97,265.19l-1.37-3.39h-5.73l-1.37,3.39h-1.3l4.86-11.89h1.35l4.86,11.89h-1.3Zm-4.24-10.42l-2.38,5.84h4.77l-2.39-5.84Z"
                        />
                        <path
                            style={{ fill: pattern == "A3" ? "#fff" : "#8a6e4b" }}
                            d="m328.53,264.42c-.71.64-1.58.94-2.62.94-1.96,0-3.13-.91-3.52-2.76l1.17-.42c.25,1.34,1.03,2,2.35,2,.71,0,1.3-.2,1.77-.64.44-.42.67-.93.67-1.53,0-.65-.21-1.2-.64-1.67-.45-.44-.98-.67-1.62-.67h-1.37v-1.18h1.19c.46,0,.93-.24,1.39-.73.44-.47.68-.98.68-1.51,0-1.29-.66-1.94-1.98-1.94-1.14,0-1.83.63-2.05,1.91l-1.16-.38c.14-.76.48-1.4.98-1.89.57-.54,1.32-.82,2.22-.82.98,0,1.76.29,2.35.85.57.56.85,1.33.85,2.27,0,1.18-.55,2.07-1.62,2.65.6.22,1.1.62,1.48,1.18.35.56.53,1.2.53,1.92,0,.96-.36,1.76-1.07,2.4Z"
                        />
                    </g>
                    <g>
                        <path
                            style={{ fill: pattern == "B7" ? "#fff" : "#8a6e4b" }}
                            d="m234.67,71.48c-.82.49-1.77.73-2.83.73h-4.04v-11.89h4.15c2.58,0,3.88,1.02,3.88,3.01,0,1.18-.54,2.05-1.6,2.63,1.28.56,1.94,1.56,1.94,2.99,0,1.09-.5,1.94-1.49,2.52Zm-2.73-9.98h-2.92v3.94h2.58c.87,0,1.58-.18,2.15-.58.55-.38.84-.89.84-1.53,0-1.22-.89-1.83-2.65-1.83Zm1.99,5.63c-.55-.33-1.24-.51-2.1-.51h-2.81v4.39h2.81c.89,0,1.62-.18,2.22-.58.57-.38.87-.87.87-1.47,0-.8-.34-1.42-1-1.83Z"
                        />
                        <path
                            style={{ fill: pattern == "B7" ? "#fff" : "#8a6e4b" }}
                            d="m242.05,66.47c-.37,1.22-.55,3.14-.55,5.75h-1.26c0-2.4.2-4.27.59-5.61.5-1.74,1.48-3.45,2.97-5.12h-6.48v-1.2h8.01v1.18c-1.69,1.69-2.78,3.36-3.27,4.99Z"
                        />
                    </g>
                    <g>
                        <path
                            style={{ fill: pattern == "B8" ? "#fff" : "#8a6e4b" }}
                            d="m230.69,102.92c-.82.49-1.76.73-2.83.73h-4.04v-11.89h4.15c2.58,0,3.88,1.02,3.88,3.01,0,1.18-.54,2.05-1.6,2.63,1.28.56,1.94,1.56,1.94,2.99,0,1.09-.5,1.94-1.5,2.52Zm-2.72-9.98h-2.92v3.94h2.58c.87,0,1.58-.18,2.15-.58.55-.38.83-.89.83-1.53,0-1.22-.89-1.83-2.65-1.83Zm1.99,5.63c-.55-.33-1.24-.51-2.1-.51h-2.81v4.39h2.81c.89,0,1.62-.18,2.22-.58.57-.38.87-.87.87-1.47,0-.8-.34-1.42-1-1.83Z"
                        />
                        <path
                            style={{ fill: pattern == "B8" ? "#fff" : "#8a6e4b" }}
                            d="m240.14,102.9c-.66.62-1.58.91-2.76.91s-2.14-.29-2.8-.91c-.67-.62-1-1.45-1-2.5,0-1.45.68-2.54,2.05-3.29-1.1-.58-1.64-1.43-1.64-2.54,0-.94.3-1.67.91-2.2.59-.51,1.41-.78,2.44-.78s1.83.27,2.44.78c.61.53.91,1.25.91,2.2,0,1.11-.55,1.96-1.64,2.54,1.35.74,2.05,1.83,2.05,3.29,0,1.07-.32,1.91-.96,2.5Zm-.98-4.5c-.46-.44-1.09-.67-1.84-.67s-1.37.24-1.82.67c-.46.45-.67,1.09-.67,1.92,0,.67.2,1.22.59,1.62.43.47,1.09.69,1.96.69,1.64,0,2.47-.76,2.47-2.31,0-.83-.23-1.47-.69-1.92Zm-1.82-5.63c-1.41,0-2.1.63-2.1,1.89,0,.54.2,1,.62,1.34.39.36.89.54,1.49.54s1.09-.18,1.5-.54c.39-.34.59-.8.59-1.34,0-1.25-.71-1.89-2.1-1.89Z"
                        />
                    </g>
                    <rect className="cls-4" x="37.04" y="38.29" width="10.48" height="6.27" />
                    <polygon className="cls-4"
                        points="47.54 43.71 47.54 46.07 43.25 46.07 41.51 44.3 41.51 38.57 47.38 38.57 47.54 43.71" />
                    <rect className="cls-4" x="89.39" y="72.13" width="9.69" height="11.4" />
                    <polygon className="cls-4"
                        style={{ fill: pattern == "C2" ? "#8a6e4b" : "#fff" }}
                        points="138.42 21.95 134.78 21.95 134.78 5.92 100.19 5.92 100.19 7.59 92.98 7.59 92.98 .17 76.47 .17 76.47 7.59 70.16 7.59 70.16 37.25 70.14 37.25 70.14 47.71 97.43 47.71 97.43 38.57 100.19 38.57 100.19 41.39 111.02 41.39 111.02 45.01 134.87 45.01 134.87 40.17 138.42 40.17 138.42 21.95" />
                    <path className="cls-4"
                        d="m84.08,64.84c-.04.06-.1.12-.18.19-.14.1-.29.15-.46.15-.22,0-.4-.07-.54-.22-.17-.17-.25-.41-.25-.73,0-.29.08-.52.25-.7.15-.16.34-.24.56-.24.09,0,.18.01.28.04.1.03.15.04.15.04.04,0,.07-.03.09-.08h.06s.02.59.02.59h-.05c-.08-.34-.25-.51-.52-.51-.08,0-.16.01-.24.04-.09.03-.16.08-.21.13-.14.15-.2.38-.21.69,0,.28.07.49.22.64.13.13.28.2.46.2.2,0,.38-.1.55-.29l.03.04Z" />
                    <polygon className="cls-4"
                        style={{ fill: pattern == "C3" ? "#8a6e4b" : "#fff" }}
                        points="138.47 88.21 134.92 88.21 134.92 73.5 116.76 73.5 116.76 71.84 70.13 71.84 70.13 112.64 76.43 112.64 76.43 120.15 92.9 120.15 92.9 112.64 134.92 112.64 134.92 96.98 138.47 96.98 138.47 88.21" />
                    <polygon className="cls-3"
                        points="98.78 47.21 70.18 47.21 70.18 38.29 47.07 38.29 47.07 44.39 47.03 44.11 36.79 44.11 35.76 44.74 33.24 44.74 33.24 65.78 38.69 70.37 35.37 74.44 38.44 77.04 38.36 81.61 38.6 81.61 38.6 81.83 70.21 81.83 70.21 72.24 98.78 72.24 98.78 47.21" />
                    <polygon className="cls-9"
                        style={{ fill: pattern == "C1" ? "#8a6e4b" : "#fff" }}
                        points="70.11 7.61 68.86 7.61 68.86 .14 52.35 .14 52.35 7.61 47.31 7.61 47.31 5.82 3.76 5.82 3.76 6.44 3.55 6.44 3.55 21.47 3.76 21.47 3.76 21.63 .31 21.63 .31 40.27 3.76 40.27 3.76 45.08 47.31 45.08 47.31 38.23 70.11 38.23 70.11 7.61" />
                    <polygon className="cls-1"
                        style={{ fill: pattern == "C5" ? "#8a6e4b" : "#fff" }}
                        points="70.21 81.83 39.07 81.83 39.07 76.81 33.33 71.92 33.08 71.92 31.19 71.92 3.77 71.92 3.77 81.83 3.77 81.83 3.77 88.21 .17 88.21 .17 96.53 3.77 96.53 3.77 112.6 52.36 112.6 52.36 120.12 68.8 120.12 68.8 112.6 70.21 112.6 70.21 81.83" />
                    <g>
                        <path className="cls-8"
                            style={{ fill: pattern == "C1" ? "#fff" : "#8a6e4b" }}
                            d="m45.25,19.8c-.53-1.36-1.53-2.05-2.99-2.05-1,0-1.87.47-2.58,1.38-.8.98-1.19,2.25-1.19,3.78s.36,2.67,1.11,3.54c.66.78,1.46,1.16,2.4,1.16.78,0,1.44-.2,1.96-.62.44-.36.84-.94,1.16-1.74l1.14.45c-.85,2.07-2.26,3.09-4.26,3.09-1.35,0-2.46-.53-3.35-1.58-.93-1.09-1.39-2.53-1.39-4.31s.48-3.31,1.46-4.52c.96-1.2,2.14-1.82,3.55-1.82,2.03,0,3.42.94,4.15,2.8l-1.16.44Z" />
                        <path className="cls-8"
                            style={{ fill: pattern == "C1" ? "#fff" : "#8a6e4b" }}
                            d="m50.81,28.65v-9.54h-2.49v-.73h.12c.54,0,1.03-.13,1.53-.38.57-.29.96-.73,1.16-1.27h.91v11.92h-1.23Z" />
                        <path className="cls-9"
                            style={{ fill: pattern == "C2" ? "#fff" : "#8a6e4b" }}
                            d="m94.21,19.8c-.53-1.36-1.53-2.05-2.99-2.05-1,0-1.87.47-2.58,1.38-.8.98-1.19,2.25-1.19,3.78s.36,2.67,1.11,3.54c.66.78,1.46,1.16,2.4,1.16.78,0,1.44-.2,1.96-.62.44-.36.84-.94,1.16-1.74l1.14.45c-.85,2.07-2.26,3.09-4.26,3.09-1.35,0-2.46-.53-3.35-1.58-.93-1.09-1.39-2.53-1.39-4.31s.48-3.31,1.46-4.52c.96-1.2,2.14-1.82,3.55-1.82,2.03,0,3.42.94,4.15,2.8l-1.16.44Z" />
                        <path className="cls-9"
                            style={{ fill: pattern == "C2" ? "#fff" : "#8a6e4b" }}
                            d="m103.11,21.87c-.39.53-1.01,1.22-1.91,2.05-1.5,1.42-2.39,2.6-2.67,3.54h5.38v1.18h-7.11c.25-1.09.69-2.11,1.32-3.04.52-.76,1.27-1.62,2.27-2.54.86-.8,1.44-1.42,1.76-1.89.36-.53.55-1.05.55-1.6,0-.51-.2-.94-.57-1.27-.43-.36-1.03-.56-1.82-.56-1.46,0-2.24.96-2.37,2.87l-1.18-.47c.11-1.09.48-1.96,1.1-2.62.6-.64,1.41-.96,2.44-.96,1.1,0,1.98.27,2.63.78.64.54.98,1.29.98,2.23,0,.76-.28,1.53-.82,2.29Z" />
                    </g>
                    <g>
                        <path className="cls-9"
                            style={{ fill: pattern == "C5" ? "#fff" : "#8a6e4b" }}
                            d="m45.25,92.85c-.53-1.36-1.53-2.05-2.99-2.05-1,0-1.87.47-2.58,1.38-.8.98-1.19,2.25-1.19,3.78s.36,2.67,1.11,3.54c.66.78,1.46,1.16,2.4,1.16.78,0,1.44-.2,1.96-.62.44-.36.84-.94,1.16-1.74l1.14.45c-.85,2.07-2.26,3.09-4.26,3.09-1.35,0-2.46-.53-3.35-1.58-.93-1.09-1.39-2.53-1.39-4.31s.48-3.31,1.46-4.52c.96-1.2,2.14-1.82,3.55-1.82,2.03,0,3.42.94,4.15,2.8l-1.16.44Z" />
                        <path className="cls-9"
                            style={{ fill: pattern == "C5" ? "#fff" : "#8a6e4b" }}
                            d="m53.85,100.73c-.71.74-1.59,1.11-2.62,1.11-1.68,0-2.8-.82-3.4-2.49l1.14-.51c.45,1.22,1.19,1.82,2.26,1.82.67,0,1.26-.26,1.73-.78.52-.56.78-1.35.78-2.36,0-1.93-.71-2.91-2.14-2.91-.98,0-1.69.49-2.15,1.47h-1.12v-6.3h6.16v1.2h-4.94v3.29c.46-.55,1.14-.84,2.05-.84,1.03,0,1.85.38,2.46,1.11.61.73.91,1.73.91,2.98,0,1.34-.37,2.42-1.12,3.21Z" />
                        <path className="cls-9"
                            style={{ fill: pattern == "C3" ? "#fff" : "#8a6e4b" }}
                            d="m94.21,92.85c-.53-1.36-1.53-2.05-2.99-2.05-1,0-1.87.47-2.58,1.38-.8.98-1.19,2.25-1.19,3.78s.36,2.67,1.11,3.54c.66.78,1.46,1.16,2.4,1.16.78,0,1.44-.2,1.96-.62.44-.36.84-.94,1.16-1.74l1.14.45c-.85,2.07-2.26,3.09-4.26,3.09-1.35,0-2.46-.53-3.35-1.58-.93-1.09-1.39-2.53-1.39-4.31s.48-3.31,1.46-4.52c.96-1.2,2.14-1.82,3.55-1.82,2.03,0,3.42.94,4.15,2.8l-1.16.44Z" />
                        <path className="cls-9"
                            style={{ fill: pattern == "C3" ? "#fff" : "#8a6e4b" }}
                            d="m102.9,100.89c-.71.64-1.59.94-2.62.94-1.96,0-3.13-.91-3.53-2.76l1.18-.42c.25,1.35,1.03,2,2.35,2,.71,0,1.3-.2,1.76-.64.45-.42.68-.93.68-1.53,0-.65-.21-1.2-.64-1.67-.45-.44-.98-.67-1.62-.67h-1.37v-1.18h1.19c.46,0,.93-.24,1.39-.73.44-.47.67-.98.67-1.51,0-1.29-.66-1.94-1.98-1.94-1.14,0-1.83.64-2.05,1.91l-1.16-.38c.14-.76.48-1.4.98-1.89.57-.55,1.32-.82,2.22-.82.98,0,1.77.29,2.35.85.57.56.85,1.33.85,2.27,0,1.18-.55,2.07-1.62,2.65.61.22,1.11.62,1.48,1.18.36.56.53,1.2.53,1.93,0,.96-.35,1.76-1.07,2.4Z" />
                    </g>
                </g>
            </g>
        </svg>
    )
}

