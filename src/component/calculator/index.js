import React, { useEffect, useRef, useState } from 'react'

const requireWebp = require.context("../../../img/calculator/webp", false, /^\.\/.*\.webp$/);
const webp = requireWebp.keys().map(requireWebp);
export default function Calculate() {
    const [inputValues, setInputValues] = useState({
        loanYear: "",
        totalPrice: "",
        interestRatio: "",
        allowancePeriod: "",
        houseType: "",
        ping: ""
    });
    return (
        <section className='calculate'>
            <VirtualKeyboard inputValues={inputValues} setInputValues={setInputValues}>
                <Calculator inputValues={inputValues} setInputValues={setInputValues} />
            </VirtualKeyboard>

            <div className="imgBox">
                <img src={webp[0].default} />
            </div>
        </section>
    )
}

function Calculator({ onFocus, inputValues, setInputValues }) {
    const [resultValues, setResultValues] = useState({
        deposit: "",
        sign: "",
        firstFloor: "",
        eighthFloor: "",
        sixteenThFloor: "",
        construction: "",
        license: "",
        delivery: "",
        ownMoney: "",
        loanMoney: "",
        monthlyCost: "",
        interestRepayment: "",
        allowancePeriodCost: "",
        afterAllowancePeriodCost: "",
    })

    const handleClearClick = () => {
        setInputValues({
            loanYear: '',
            totalPrice: '',
            interestRatio: '',
            allowancePeriod: '',
            houseType: "",
            ping: ""
        });
        setResultValues({
            deposit: "",
            sign: "",
            firstFloor: "",
            eighthFloor: "",
            sixteenThFloor: "",
            construction: "",
            license: "",
            delivery: "",
            ownMoney: "",
            loanMoney: "",
            monthlyCost: "",
            allowancePeriodCost: "",
            afterAllowancePeriodCost: ""
        })
    };
    const handleResult = () => {
        const monthRatio = inputValues.interestRatio / 12 / 100;
        //-- 寬限年>0 --
        let loanMonth;
        let periodMoney;
        let avgMonthRatio;
        let totalMoney;
        if ((inputValues.allowancePeriod) > 0) {
            //-- 月數= (貸款年限*12)-(寬限年*12) --
            loanMonth = ((inputValues.loanYear) * 12) - ((inputValues.allowancePeriod) * 12);
            periodMoney = ((inputValues.totalPrice * 0.75) * monthRatio) * 10000;
            avgMonthRatio = ((Math.pow((1 + monthRatio), loanMonth)) * monthRatio) / ((Math.pow(1 + monthRatio, loanMonth)) - 1);
        } else {
            //-- 月數= 貸款年限*12 --
            loanMonth = (inputValues.loanYear) * 12;
            avgMonthRatio = ((Math.pow((1 + monthRatio), loanMonth)) * monthRatio) / ((Math.pow(1 + monthRatio, loanMonth)) - 1);

            totalMoney = Math.floor(inputValues.totalPrice * 0.75 * avgMonthRatio * 10000 * loanMonth)
        }
        let licenseCorrect = 0;
        if (inputValues.totalPrice * 0.05 != Math.floor(inputValues.totalPrice * 0.05)) {
            licenseCorrect = licenseCorrect - (Math.ceil(inputValues.totalPrice * 0.05) - inputValues.totalPrice * 0.05)

        }
        if (inputValues.totalPrice * 0.1 - 10 != Math.ceil(inputValues.totalPrice * 0.1 - 10)) {
            licenseCorrect = licenseCorrect - (Math.ceil(inputValues.totalPrice * 0.1 - 10) - (inputValues.totalPrice * 0.1 - 10))
        }
        if (inputValues.totalPrice * 0.02 != Math.floor(inputValues.totalPrice * 0.02)) {
            licenseCorrect = licenseCorrect - (Math.ceil(inputValues.totalPrice * 0.02) - inputValues.totalPrice * 0.02) * 4
        }
        if (inputValues.totalPrice * 0.75 != Math.floor(inputValues.totalPrice * 0.75)) {
            licenseCorrect = licenseCorrect + (inputValues.totalPrice * 0.75 - Math.floor(inputValues.totalPrice * 0.75))
        }
        const toMoneyStyle = (num) => {
            return num.toLocaleString('zh-TW', { minimumFractionDigits: 0, maximumFractionDigits: 0 })
        }
        setResultValues({
            deposit: 10,
            sign: toMoneyStyle(Math.ceil(inputValues.totalPrice * 0.1 - 10)),
            firstFloor: toMoneyStyle(Math.ceil(inputValues.totalPrice * 0.02)),
            eighthFloor: toMoneyStyle(Math.ceil(inputValues.totalPrice * 0.02)),
            sixteenThFloor: toMoneyStyle(Math.ceil(inputValues.totalPrice * 0.02)),
            construction: toMoneyStyle(Math.ceil(inputValues.totalPrice * 0.02)),
            license: toMoneyStyle(inputValues.totalPrice * 0.02 + licenseCorrect),
            delivery: toMoneyStyle(Math.ceil(inputValues.totalPrice * 0.05)),
            ownMoney: toMoneyStyle(Math.ceil(inputValues.totalPrice * 0.25)),
            loanMoney: toMoneyStyle(Math.floor((inputValues.totalPrice * 0.75))),
            monthlyCost: toMoneyStyle(Math.floor(inputValues.totalPrice * 0.75 * avgMonthRatio * 10000)),
            interestRepayment: toMoneyStyle((totalMoney - inputValues.totalPrice * 0.75 * 10000) / loanMonth),
            allowancePeriodCost: toMoneyStyle(Math.floor(periodMoney)),
            afterAllowancePeriodCost: toMoneyStyle(Math.floor(inputValues.totalPrice * 0.75 * avgMonthRatio * 10000))
        });
    };
    const year = new Date().getFullYear();
    const month = new Date().getMonth() + 1;
    const date = new Date().getDate()
    return (
        <section className="calculator">
            <div className="tobe">
                <div className="box">
                    <label>戶別:</label>
                    <input type="text" autoComplete="off" onClick={onFocus} readOnly value={inputValues.houseType} name="houseType" />
                </div>
                <div className="box">
                    <label>權狀坪數:</label>
                    <input type="text" autoComplete="off" onClick={onFocus} readOnly value={inputValues.ping} name="ping" />
                    <label>坪</label>
                </div>
            </div>
            <div className="title">
                <h2>CALCULATION</h2>
            </div>
            <div className="parameters">
                <div className="box">
                    <label>
                        <p>貸款年限</p>
                        <div className="unitBox">
                            <input type="text" autoComplete="off" onClick={onFocus} readOnly name="loanYear" value={inputValues.loanYear} />
                            <span>年</span>
                        </div>

                    </label>
                </div>
                <div className="box">
                    <label>
                        <p>總價</p>
                        <div className="unitBox">
                            <input type="text" autoComplete="off" onClick={onFocus} readOnly name="totalPrice" value={inputValues.totalPrice} />
                            <span>萬元</span>
                        </div>

                    </label>
                </div>
                <div className="box">
                    <label>
                        <p>年利率</p>
                        <div className="unitBox">
                            <input type="text" autoComplete="off" onClick={onFocus} readOnly name="interestRatio" value={inputValues.interestRatio} />
                            <span>%</span>
                        </div>

                    </label>
                </div>
                <div className="box">
                    <label>
                        <p>寬限期</p>
                        <div className="unitBox">
                            <input type="text" autoComplete="off" onClick={onFocus} readOnly name="allowancePeriod" value={inputValues.allowancePeriod} />
                            <span>年</span>
                        </div>

                    </label>
                </div>
            </div>
            <div className="button">
                <div className="calc" onClick={() => {
                    if (inputValues.totalPrice && inputValues.loanYear && inputValues.interestRatio) {
                        handleResult()
                    }
                }}>
                    <p>試算</p>
                </div>
                <div className="delete" onClick={handleClearClick}>
                    <p>清除</p>
                </div>
                <div className="print" onClick={() => {
                    window.print()
                }}>
                    <p>列印</p>
                </div>
            </div>
            <div className="result">
                <div className="left">
                    <div className="box">
                        <p>訂金:</p><span>{resultValues.deposit}</span><p>萬元</p>
                    </div>
                    <div className="box">
                        <p>簽約金:</p><span>{resultValues.sign}</span><p>萬元</p>
                    </div>
                    <div className="box">
                        <p>1樓底板:</p><span>{resultValues.firstFloor}</span><p>萬元</p>
                    </div>
                    <div className="box">
                        <p>8樓底板:</p><span>{resultValues.eighthFloor}</span><p>萬元</p>
                    </div>
                    <div className="box">
                        <p>16樓底板:</p><span>{resultValues.sixteenThFloor}</span><p>萬元</p>
                    </div>
                    <div className="box">
                        <p>結構完成:</p><span>{resultValues.construction}</span><p>萬元</p>
                    </div>
                    <div className="box">
                        <p>使照申請:</p><span>{resultValues.license}</span><p>萬元</p>
                    </div>
                    <div className="box">
                        <p>交屋款:</p><span>{resultValues.delivery}</span><p>萬元</p>
                    </div>
                </div>
                <div className="right">
                    <div className="box">
                        <p>自備款:</p><span>{resultValues.ownMoney}</span><p>萬元</p>
                    </div>
                    <div className="box">
                        <p>貸款:</p><span>{resultValues.loanMoney}</span><p>萬元</p>
                    </div>

                    {inputValues.allowancePeriod > 0 ?
                        <>
                            <div className="box">
                                <p>寬限期:</p><span>{resultValues.allowancePeriodCost}</span><p>元</p>
                            </div>
                            <div className="box">
                                <p>寬限期後:</p><span>{resultValues.afterAllowancePeriodCost}</span><p>元</p>
                            </div>
                        </> :
                        <>
                            <div className="box">
                                <p>本利攤還:</p><span>{resultValues.monthlyCost}</span><p>元</p>
                            </div>
                            <div className="box">
                                <p>還息金額:</p><span>{resultValues.interestRepayment}</span><p>元</p>
                            </div>

                        </>

                    }


                </div>
            </div>
            <div className="printBox">
                <p className='temporary-payment'>暫收款2房10萬其餘15萬(多退少補)</p>
                <p className='ps'>備註:<br />
                    1.本付款表之坪數、價格需以正式訂購單為主。<br />
                    2.買房應於對保時繳納暫收款，暫收款內容包含：所有權移轉登記規費、印花稅、代書費、代辦手續費、貸款保險費、預繳社區管理費六個月..等(多退少補)。<br />
                    3.本付款表銀行貸款之成數、利率，需視客戶當時信用狀況而定。</p>
                <div className="writeBox">
                    <div className="box">
                        <p>日期:</p>
                        <div className="date">{`${year}年${month}月${date}日`}</div>
                    </div>
                    <div className="box">
                        <p>業務員:</p>
                        <div className="write-line"></div>
                    </div>
                </div>
            </div>


        </section>
    )
}


// function VirtualKeyboard({ showKyb, position, setShowKyb, handleKybInput }) {
//     const liStyle = {
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         flex: "0 0 33.3%",
//         height: "25%",
//         border: "1px solid #ccc",
//         cursor: "pointer",
//         pointerEvents: "auto",
//         fontSize: "0.8vw",
//         color: "#1a1a1a",
//         fontWeight: "600"
//     }
//     const closeStyle = {

//         position: "absolute",
//         backgroundColor: "#c3a457",
//         width: "100%", height: "1px",
//         top: 0,
//         right: 0,
//         bottom: 0,
//         left: 0,
//         margin: "auto"
//     }
//     return (
//         <ul className='keyboard' style={{ display: showKyb ? "flex" : "none", flexWrap: "wrap", width: "15vw", height: "15vw", position: "absolute", left: `calc(${position.x} + 8vw)`, top: `calc(${position.y} + 4vw)`, backgroundColor: "#f7f7f7", border: "1px solid #ccc" }}>
//             {[...Array(9)].map((item, i) => {
//                 return (
//                     <li value={i + 1} style={liStyle} onClick={handleKybInput} key={i}>{i + 1}</li>
//                 )

//             })}
//             <li value={0} style={liStyle} onClick={handleKybInput}>0</li>
//             <li value={"."} style={liStyle} onClick={handleKybInput}>.</li>
//             <li value={"delete"} style={liStyle} onClick={handleKybInput}>Delete</li>
//             <div className="close" style={{ position: "absolute", right: "0vw", top: "-2vw", cursor: "pointer", pointerEvents: "auto", width: "1.5vw", height: "1.5vw" }} onClick={() => {
//                 setShowKyb(false)
//             }}>
//                 <div className="line1" style={{ ...closeStyle, transform: "rotate(45deg)" }}></div>
//                 <div className="line2" style={{ ...closeStyle, transform: "rotate(-45deg)" }}></div>
//             </div>
//         </ul>
//     )
// }


function VirtualKeyboard({ children, setInputValues, inputValues }) {
    const liStyle = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flex: "1 1 33.3%",
        padding: "1vw 0",
        border: "1px solid #ccc",
        cursor: "pointer",
        pointerEvents: "auto",
        fontSize: "0.8vw",
        color: "#1a1a1a",
        fontWeight: "600",

    }
    const closeStyle = {

        position: "absolute",
        backgroundColor: "#c3a457",
        width: "100%", height: "1px",
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        margin: "auto"
    }
    const [showKyb, setShowKyb] = useState(false)
    const [kybPosition, setKybPosition] = useState({
        x: 0,
        y: 0
    })

    const [toggleEng, setToggleEng] = useState(false)
    const [targetInput, setTargetInput] = useState(null)


    const onFocus = (e) => {
        console.log(e.pageX)
        setTargetInput(e.target)
        setShowKyb(true)
        setKybPosition({
            x: e.pageX + "px",
            y: e.pageY + "px",
        })

    }

    const handleKybInput = (e) => {
        const regex = /\./
        let alreadyHaveDecimal = false
        if (regex.test(targetInput.value)) {
            alreadyHaveDecimal = true
        }

        if (alreadyHaveDecimal) {
            if (e.target.innerText !== ".") {
                if (e.target.innerText) {
                    setInputValues({
                        ...inputValues,
                        [targetInput.name]: inputValues[targetInput.name] + e.target.innerText
                    })
                }

            }
        } else {
            if (e.target.innerText) {
                setInputValues({
                    ...inputValues,
                    [targetInput.name]: inputValues[targetInput.name] + e.target.innerText
                })
            }
        }

    }
    const deleteKybInput = () => {
        setInputValues({
            ...inputValues,
            [targetInput.name]: inputValues[targetInput.name].slice(0, -1)
        })
    }
    // 将方法和变量作为props传递给组件B
    const modifiedChildren = React.Children.map(children, (child) => {
        return React.cloneElement(child, {
            onFocus: onFocus,
        });
    });
    return (
        <>
            <ul className='keyboard' style={{ display: showKyb ? "block" : "none", width: "12vw", position: "absolute", zIndex: "25", padding: "2vw 0.5vw 0.5vw", borderRadius: "15px 15px 0 0", left: `calc(${kybPosition.x} + 2.5vw)`, top: `calc(${kybPosition.y} + 3vw)`, backgroundColor: "#f7f7f7", border: "1px solid #ccc", pointerEvents: "auto" }}>
                {/* 中文鍵盤 */}
                <div className="number" style={{ display: !toggleEng ? "flex" : "none", flexWrap: "wrap", width: "100%" }}>
                    {[...Array(9)].map((item, i) => {
                        return (
                            <li value={i + 1} style={liStyle} onClick={handleKybInput} key={i}>{i + 1}</li>
                        )
                    })}


                </div>
                {/* english鍵盤 */}
                <div className="english" style={{ display: toggleEng ? "flex" : "none", flexWrap: "wrap", width: "100%" }}>
                    {["A", "B", "C", "D", "E", "F", "G", "H", "I"].map((item, i) => {
                        return (
                            <li value={item} style={{ ...liStyle }} onClick={handleKybInput} key={i}>{item}</li>
                        )
                    })}

                </div>
                {/* tool area */}
                <div className="toolBox" style={{ display: "flex", flexWrap: "wrap" }}>
                    <li value={toggleEng ? "-" : 0} style={liStyle} onClick={handleKybInput}>{toggleEng ? "-" : 0}</li>
                    <li value={"."} style={liStyle} onClick={handleKybInput}>.</li>
                    <li value={"delete"} style={liStyle} onClick={deleteKybInput}>Delete</li>
                    <li style={liStyle} onClick={() => setToggleEng(!toggleEng)}>{toggleEng ? "123" : "ABC"}</li>
                </div>
                {/* close area */}
                <div className="close" style={{ position: "absolute", right: "0.4vw", top: "0.25vw", cursor: "pointer", pointerEvents: "auto", width: "1.5vw", height: "1.5vw" }} onClick={() => {
                    setShowKyb(false)
                }}>
                    <div className="line1" style={{ ...closeStyle, transform: "rotate(45deg)" }}></div>
                    <div className="line2" style={{ ...closeStyle, transform: "rotate(-45deg)" }}></div>
                </div>
            </ul >
            {modifiedChildren}
        </>

    )
}