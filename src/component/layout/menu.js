import React from "react";

import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { slideChange } from "../redux/type";
import { moveToBuildingTeam } from "../redux/action/buildingTeam";
import { slideChangeAction } from "../redux/action/slideChange";

export default function Menu() {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="menu"
      style={{
        width: open == false ? "0%" : "100%",
        transitionDelay: open == true ? "0s" : "1.5s",
        pointerEvents: open == true ? "auto" : "none",
      }}
    >
      <ToggleButton open={open} setOpen={setOpen} />
      <MenuContent open={open} setOpen={setOpen} />

      
    </div>
  );
}

function MenuContent({ open, setOpen }) {
  const dispatch = useDispatch();
  const [extend, setExtend] = useState(new Array(5).fill(true));

  const menu_obj = [
    {
      title: {
        ch: "底蘊雲在",
        en: "BRAND",
      },
      item: [
        {
          id: "/dayuan",
          ch: "舜元建設",
          slide: 1,
        },
        {
          id: "/construction",
          ch: "順億營造",
          slide: 1,
        },
        {
          id: "/prospect",
          ch: "默契共砌",
          slide: 1,
        },
      ],
    },
    {
      title: {
        ch: "食尚雲集",
        en: "LIFE",
      },
      item: [
        {
          id: "/vr720", //"/traffic",
          ch: "環境空拍",
          slide: 2,
        },
        {
          id: "/lifefunction", //"/lifefunction",
          ch: "生活綠洲",
          slide: 2,
        },
      ],
    },
    {
      title: {
        ch: "建築雲想",
        en: "BUILDING",
      },
      item: [
        {
          id: "/t1",
          ch: "雋雅外觀",
          slide: 3,
        },
        {
          id: "/t2",
          ch: "全區配置",
          slide: 3,
        },
        {
          id: "/t3",
          ch: "風光家居",
          slide: 3,
        },
        {
            id: "/t4",
            ch: "樓層空拍",
            slide: 3,
        },
      ],
    },
    {
      title: {
        ch: "悠然雲居",
        en: "EQUIPMENT",
      },
      item: [
        {
          id: "/p1",
          ch: "接軌國際",
          slide: 4,
        },
        {
            id: "/p2",
            ch: "五感建材",
            slide: 4,
        },
        {
          id: "/p3",
          ch: "適居方案",
          slide: 4,
        },
      ],
    },
    {
      title: {
        ch: "自在雲遊",
        en: "NEWS",
      },
      item: [
        {
          id: "/news",
          ch: "區域個案",
          slide: 5,
        },
        {
          id: "/method/waterProof",
          ch: "房貸試算",
          slide: 5,
        },
      ],
    },
  ];

  return (
    <div
      className="menu-content"
      style={{
        WebkitMaskPositionX: open == true ? "-260vw" : "  0vw",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="menu-logo">
        <Link
          to={"/"}
          onClick={() => {
            setOpen(false);
            dispatch(slideChangeAction(-1));
            // dispatch(fullActive())
          }}
        >
          <img src={require("@/img/index/svg/logo-white.svg").default} />
        </Link>
      </div>
      <div className="menu-option">
        {menu_obj.map((menu, i) => {
          return (
            <Option
              key={i}
              index={i}
              setOpen={setOpen}
              title={menu.title}
              item={menu.item}
              extend={extend}
              setExtend={setExtend}
            />
          );
        })}
      </div>

      <div className="bg">
        <img className="cloud1" src={require('../../../img/menu/menu_cloud@2x.webp').default} />
        <img className="cloud2" src={require('../../../img/menu/menu_cloud@2x.webp').default} />
      </div>
    </div>
  );
}

function Option({ title, item, setOpen, extend, handleClick, index }) {
  const location = useLocation();
  const dispatch = useDispatch();

  return (
    <div className="option">
      <div className="option-wrapper">
        <div className="title-box">
          <h2>{title.en}</h2>
          <h2>{title.ch}</h2>
        </div>
        <ul
          className="nav"
          style={{ transform: extend[index] ? "scaleY(1)" : "scaleY(0)" }}
        >
          {item.map((item, i) => {
            return (
              <li
                key={item.id}
                onClick={() => {
                  dispatch({ type: slideChange, payload: item.slide });
                  if (item.id == null) {
                    dispatch(moveToBuildingTeam("team3"));
                  }
                  setOpen(false);
                }}
                style={{
                  pointerEvents:
                    item.id == null
                      ? "auto"
                      : location.pathname == item.id
                      ? "none"
                      : "auto",
                }}
              >
                <Link to={`${item.id == null ? "/" : item.id}`}>
                  {/* <div className="square"></div> */}
                  <p
                    style={{
                      color:
                        item.id == null
                          ? "#fff"
                          : location.pathname == item.id
                          ? "#747474"
                          : "#fff",
                    }}
                  >
                    {item.ch}
                  </p>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

function ToggleButton({ open, setOpen }) {
  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div
      className="toggle-button"
      onClick={handleClick}
      style={{ right: 0, pointerEvents: "auto" }}
    >
      <div
        className={`hamburger ${open == true ? "hamburger-active" : null}`}
      ></div>
    </div>
  );
}
