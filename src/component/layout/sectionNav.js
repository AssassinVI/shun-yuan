import React from 'react'

function SectionNav({ handleClick, data, type }) {
    const title = data.title.split("\n")
    return (
        <div className="section-nav">
            <div className="title-box" >
                <h3>{title[0]}<br />{title[1]}</h3>
            </div>
            <ul className="nav">
                {data.data.map((item, i) => {
                    return <li key={item.type} className={`${item.type}`} onClick={handleClick}><p style={{ color: item.type === type ? "#754c24" : "#534741" }}>{item.ch}</p><p style={{ color: item.type === type ? "#000000" : "#666666" }}>{item.en}</p></li>
                })}
            </ul>
        </div>
    )
}

export default SectionNav;