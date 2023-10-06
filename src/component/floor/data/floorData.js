const data = [

    {
        type: "b3",
        text: "B3",
    },
    {
        type: "b2",
        text: "B2",
    },
    {
        type: "b1",
        text: "B1",
    },
    {
        type: "1f",
        text: "1F",

    },
    {
        type: "2f",
        text: "2F",
    },
    {
        type: "3~12f",
        text: "3F",

    },
    {
        type: "3~12f",
        text: "4F"
    },
    {
        type: "3~12f",
        text: "5F"
    },
    {
        type: "3~12f",
        text: "6F"
    },
    {
        type: "3~12f",
        text: "7F"
    },
    {
        type: "3~12f",
        text: "8F"
    },
    {
        type: "3~12f",
        text: "9F"
    },
    {
        type: "3~12f",
        text: "10F"
    },
    {
        type: "3~12f",
        text: "11F"
    },
    {
        type: "3~12f",
        text: "12F"
    },
    {
        type: "rf",
        text: "RF",
    },
]

export const sortData = [
    
    {
        type: "B3",

        img: require("@/img/floor/webp/B3_f.webp").default
    },
    {
        type: "B2",

        img: require("@/img/floor/webp/B2_f.webp").default
    },
    {
        type: "B1",
        img: require("@/img/floor/webp/B1_f.webp").default
    },
    {
        type: "1F",
        img: require("@/img/floor/webp/1F@2x.webp").default,
        anchor: [
            {
                class: "entry-gate",
                fancyImg: [require("@/img/floor/webp/entry-gate1.jpg").default, require("@/img/floor/webp/entry-gate2.jpg").default],
                thumb: require("@/img/life/SVG/point_icon_new.svg"),
                title: "接待大廳"
            },
            {
                class: "kitchen",
                fancyImg: [require("@/img/floor/webp/kitchen.jpg").default],
                thumb: require("@/img/life/SVG/point_icon_new.svg"),
                title: "生活廚房"
            }, 
            {
                class: "gym",
                fancyImg: [require("@/img/floor/webp/gym.jpg").default],
                thumb: require("@/img/life/SVG/point_icon_new.svg"),
                title: "健身房"
            }, 
            {
                class: "space-1f",
                fancyImg: [require("@/img/floor/webp/space-1f.jpg").default],
                thumb: require("@/img/life/SVG/point_icon_new.svg"),
                title: "一樓景觀"
            }, 
           
        ],
        //text: "全區平面圖"
    },
    {
        type: "2F",
        img: require("@/img/floor/webp/2F@2x.webp").default,
    },
    {
        type: "3~12F",
        img: require("@/img/floor/webp/3-12F@2x.webp").default,
        configurationGraph: "standard",
        anchor: [
            {
                class: "a1-standard",
                fancyImg: [require("@/img/floor/webp/funiture/A1@2x.webp").default],
                thumb: require("@/img/life/SVG/point_icon_new.svg"),
                title: "A1",
            },
            {
                class: "a2-standard",
                fancyImg: [require("@/img/floor/webp/funiture/A2@2x.webp").default],
                thumb: require("@/img/life/SVG/point_icon_new.svg"),
                title: "A2",
            },
            {
                class: "a3-standard",
                fancyImg: [require("@/img/floor/webp/funiture/A3@2x.webp").default],
                thumb: require("@/img/life/SVG/point_icon_new.svg"),
                title: "A3",
            },
            {
                class: "b1-standard",
                fancyImg: [require("@/img/floor/webp/funiture/B1@2x.webp").default],
                thumb: require("@/img/life/SVG/point_icon_new.svg"),
                title: "B1",
            },
            {
                class: "b2-standard",
                fancyImg: [require("@/img/floor/webp/funiture/B2@2x.webp").default],
                thumb: require("@/img/life/SVG/point_icon_new.svg"),
                title: "B2",
            },
            {
                class: "b3-standard",
                fancyImg: [require("@/img/floor/webp/funiture/B3@2x.webp").default],
                thumb: require("@/img/life/SVG/point_icon_new.svg"),
                title: "B3",
            },
                
        ],
    },
    {
        type: "RF",
        img: require("@/img/floor/webp/RF_f.webp").default,
        // anchor: {
        //     A: [
        //         {
        //             class: "sky-bar-A",
        //             fancyImg: [require("@/img/product/floor/floorPlan/webp/anchor/sky-bar1.webp").default, require("@/img/product/floor/floorPlan/webp/anchor/sky-bar2.webp").default, require("@/img/product/floor/floorPlan/webp/anchor/sky-bar3.webp").default, require("@/img/product/floor/floorPlan/webp/anchor/sky-bar4.webp").default],
        //             thumb: require("@/img/urban/svg/003-anchor-dot.svg").default,
        //             title: "A棟星空時尚花園吧"
        //         },
        //         {
        //             class: "ktv-A",
        //             fancyImg: [require("@/img/product/floor/floorPlan/webp/anchor/ktv1.webp").default, require("@/img/product/floor/floorPlan/webp/anchor/ktv2.webp").default],
        //             thumb: require("@/img/urban/svg/003-anchor-dot.svg").default,
        //             title: "A棟KTV包廂"
        //         },
        //     ],
        //     B: [
        //         {
        //             class: "sky-bar-B",
        //             fancyImg: [require("@/img/product/floor/floorPlan/webp/anchor/sky-bar1.webp").default, require("@/img/product/floor/floorPlan/webp/anchor/sky-bar2.webp").default, require("@/img/product/floor/floorPlan/webp/anchor/sky-bar3.webp").default, require("@/img/product/floor/floorPlan/webp/anchor/sky-bar4.webp").default],
        //             thumb: require("@/img/urban/svg/003-anchor-dot.svg").default,
        //             title: "B棟星空時尚花園吧"
        //         },
        //         {
        //             class: "ktv-B",
        //             fancyImg: [require("@/img/product/floor/floorPlan/webp/anchor/ktv1.webp").default, require("@/img/product/floor/floorPlan/webp/anchor/ktv2.webp").default],
        //             thumb: require("@/img/urban/svg/003-anchor-dot.svg").default,
        //             title: "B棟KTV包廂"
        //         },
        //     ],
        //     C: [
        //         {
        //             class: "sky-bar-C",
        //             fancyImg: [require("@/img/product/floor/floorPlan/webp/anchor/sky-bar1.webp").default, require("@/img/product/floor/floorPlan/webp/anchor/sky-bar2.webp").default, require("@/img/product/floor/floorPlan/webp/anchor/sky-bar3.webp").default, require("@/img/product/floor/floorPlan/webp/anchor/sky-bar4.webp").default],
        //             thumb: require("@/img/urban/svg/003-anchor-dot.svg").default,
        //             title: "C棟星空時尚花園吧"
        //         },
        //         {
        //             class: "ktv-C",
        //             fancyImg: [require("@/img/product/floor/floorPlan/webp/anchor/ktv1.webp").default, require("@/img/product/floor/floorPlan/webp/anchor/ktv2.webp").default],
        //             thumb: require("@/img/urban/svg/003-anchor-dot.svg").default,
        //             title: "C棟KTV包廂"
        //         },
        //     ]
        // }
    },
]
export const floorData = data.reverse()