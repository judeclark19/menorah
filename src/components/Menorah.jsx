import React from "react";

import "./Menorah.css";
import { motion } from "framer-motion";

//Variants
const containerVariants = {
  hidden: { transition: { duration: 2 } },
  visible: { transition: { duration: 0.5, staggerChildren: 1 } },
};

const coronaVariants = {
  hidden: {
    scale: 0,
    opacity: 0,
    transition: { duration: 2 },
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { delay: 0.3, duration: 2 },
  },
  flickering: {
    scale: [1, 1.05, 0.95, 0.9, 1, 1.05, 0.95, 0.9, 1.05, 1, 0.95],
    transition: { yoyo: Infinity, duration: 1.2 },
  },
};

const flameVariants = {
  hidden: { scale: 0, opacity: 0, transition: { duration: 2 } },
  visible: { scale: 1, opacity: 1, transition: { duration: 2 } },
  flickering: {
    scale: [1, 1.05, 0.95, 0.9, 1, 1.05, 0.95, 0.9, 1.05, 1, 0.95],
    transition: { yoyo: Infinity, duration: 1.2 },
  },
};

function Menorah({
  numberLit,
  setNumberLit,
  shamashPresence,
  setShamashPresence,
  shamashLit,
  setShamashLit,
  shamashFlicker,
  setShamashFlicker,
  candle1Presence,
  setCandle1Presence,
  candle1Lit,
  setCandle1Lit,
  candle1Flicker,
  setCandle1Flicker,
  candle2Presence,
  setCandle2Presence,
  candle2Lit,
  setCandle2Lit,
  candle2Flicker,
  setCandle2Flicker,
  candle3Presence,
  setCandle3Presence,
  candle3Lit,
  setCandle3Lit,
  candle3Flicker,
  setCandle3Flicker,
  candle4Presence,
  setCandle4Presence,
  candle4Lit,
  setCandle4Lit,
  candle4Flicker,
  setCandle4Flicker,
  candle5Presence,
  setCandle5Presence,
  candle5Lit,
  setCandle5Lit,
  candle5Flicker,
  setCandle5Flicker,
  candle6Presence,
  setCandle6Presence,
  candle6Lit,
  setCandle6Lit,
  candle6Flicker,
  setCandle6Flicker,
  candle7Presence,
  setCandle7Presence,
  candle7Lit,
  setCandle7Lit,
  candle7Flicker,
  setCandle7Flicker,
  candle8Presence,
  setCandle8Presence,
  candle8Lit,
  setCandle8Lit,
  candle8Flicker,
  setCandle8Flicker,
}) {
  return (
    <svg
      version="1.1"
      id="Layer_1"
      x="0px"
      y="0px"
      viewBox="0 0 1700 1400"
      enable-background="new 0 0 1700 1400"
    >
      <motion.g variants={containerVariants} initial="hidden" animate="visible">
        {/* <!-- background color --> */}
        {/* <rect fill="white" width="100%" height="1400" /> */}
        <g>
          <rect x="832.5" y="480.5" fill="#DDAB6F" width="35" height="22.6" />
          <rect x="832.5" y="1131.4" fill="#BC9357" width="35" height="22.6" />

          {/* <!-- Lowest loop --> */}
          <path
            fill="#AD884D"
            d="M1230,578L1230,578c0,51.3-10,101.1-29.9,147.9c-19.1,45.2-46.5,85.9-81.4,120.8
			c-34.9,34.9-75.5,62.3-120.8,81.4C951.1,948,901.3,958,850,958s-101.1-10-147.9-29.9c-45.2-19.1-85.9-46.5-120.8-81.4
			c-34.9-34.9-62.3-75.5-81.4-120.8C480,679.1,470,629.3,470,578v0h-35v0c0,56,11,110.4,32.6,161.5c20.9,49.4,50.8,93.8,88.9,131.9
			c38.1,38.1,82.5,68,131.9,88.9C739.6,982.1,794,993,850,993s110.4-11,161.5-32.6c49.4-20.9,93.8-50.8,131.9-88.9
			c38.1-38.1,68-82.5,88.9-131.9C1254,688.4,1265,634,1265,578v0H1230z"
          />
          {/* <!-- second loop --> */}
          <path
            fill="#AD884D"
            d="M627.3,800.8C686.8,860.3,765.9,893,850,893s163.2-32.8,222.7-92.3c59.5-59.5,92.3-138.6,92.3-222.7v0h-35
			v0c0,74.8-29.1,145.1-82,198c-52.9,52.9-123.2,82-198,82s-145.1-29.1-198-82c-52.9-52.9-82-123.2-82-198v0h-35v0
			C535,662.2,567.8,741.3,627.3,800.8z"
          />

          {/* <!-- Third loop --> */}
          <path
            fill="#AD884D"
            d="M850,793c57.4,0,111.4-22.4,152-63c40.6-40.6,63-94.6,63-152h-35c0,99.3-80.8,180-180,180
			s-180-80.8-180-180h-35c0,57.4,22.4,111.4,63,152C738.6,770.7,792.6,793,850,793z"
          />
          {/* <!-- smallest loop --> */}
          <path
            fill="#AD884D"
            d="M850,693c63.4,0,115-51.6,115-115h-35c0,44.1-35.9,80-80,80s-80-35.9-80-80h-35
			C735,641.4,786.6,693,850,693z"
          />
          {/* 
<!-- 8th candle base --> */}
          <g
            className="pointer"
            onClick={() => {
              setCandle8Presence(!candle8Presence);
              if (candle8Lit) {
                setCandle8Lit(false);
                setNumberLit(numberLit - 1);
              }
            }}
          >
            <polygon
              fill="#967444"
              points="435,578 470,578 477,538.7 428,538.7 		"
            />
            <polygon
              fill="#967444"
              points="429.5,498.7 475.5,498.7 484.7,483.1 420.3,483.1 		"
            />
            <path
              fill="#AD884D"
              d="M477.4,518.7h-49.7c-2.6,0-4.8,2.1-4.8,4.8V534c0,2.6,2.1,4.8,4.8,4.8h49.7c2.6,0,4.8-2.1,4.8-4.8v-10.4
			C482.1,520.9,480,518.7,477.4,518.7z"
            />
            <path
              fill="#BC9357"
              d="M477.4,498.7h-49.7c-2.6,0-4.8,2.1-4.8,4.8V514c0,2.6,2.1,4.8,4.8,4.8h49.7c2.6,0,4.8-2.1,4.8-4.8v-10.4
			C482.1,500.9,480,498.7,477.4,498.7z"
            />
          </g>
          {/* <!-- 7th candle base --> */}
          <g
            className="pointer"
            onClick={() => {
              setCandle7Presence(!candle7Presence);
              if (candle7Lit) {
                setCandle7Lit(false);
                setNumberLit(numberLit - 1);
              }
            }}
          >
            <polygon
              fill="#967444"
              points="535.7,578 570.7,578 577.7,538.7 528.6,538.7 		"
            />
            <polygon
              fill="#967444"
              points="530.2,498.7 576.1,498.7 585.4,483.1 521,483.1 		"
            />
            <path
              fill="#AD884D"
              d="M578,518.7h-49.7c-2.6,0-4.8,2.1-4.8,4.8V534c0,2.6,2.1,4.8,4.8,4.8H578c2.6,0,4.8-2.1,4.8-4.8v-10.4
			C582.8,520.9,580.7,518.7,578,518.7z"
            />
            <path
              fill="#BC9357"
              d="M578,498.7h-49.7c-2.6,0-4.8,2.1-4.8,4.8V514c0,2.6,2.1,4.8,4.8,4.8H578c2.6,0,4.8-2.1,4.8-4.8v-10.4
			C582.8,500.9,580.7,498.7,578,498.7z"
            />
          </g>
          {/* <!-- 6th candle blase --> */}
          <g
            className="pointer"
            onClick={() => {
              setCandle6Presence(!candle6Presence);
              if (candle6Lit) {
                setCandle6Lit(false);
                setNumberLit(numberLit - 1);
              }
            }}
          >
            <polygon
              fill="#967444"
              points="634.8,578 669.8,578 676.9,538.7 627.8,538.7 		"
            />
            <polygon
              fill="#967444"
              points="629.4,498.7 675.3,498.7 684.5,483.1 620.1,483.1 		"
            />
            <path
              fill="#AD884D"
              d="M677.2,518.7h-49.7c-2.6,0-4.8,2.1-4.8,4.8V534c0,2.6,2.1,4.8,4.8,4.8h49.7c2.6,0,4.8-2.1,4.8-4.8v-10.4
			C682,520.9,679.8,518.7,677.2,518.7z"
            />
            <path
              fill="#BC9357"
              d="M677.2,498.7h-49.7c-2.6,0-4.8,2.1-4.8,4.8V514c0,2.6,2.1,4.8,4.8,4.8h49.7c2.6,0,4.8-2.1,4.8-4.8v-10.4
			C682,500.9,679.8,498.7,677.2,498.7z"
            />
          </g>
          {/* 
<!-- 5th candle blase --> */}
          <g
            className="pointer"
            onClick={() => {
              setCandle5Presence(!candle5Presence);
              if (candle5Lit) {
                setCandle5Lit(false);
                setNumberLit(numberLit - 1);
              }
            }}
          >
            <polygon
              fill="#967444"
              points="734.8,578 769.8,578 776.9,538.7 727.8,538.7 		"
            />
            <polygon
              fill="#967444"
              points="729.4,498.7 775.3,498.7 784.5,483.1 720.1,483.1 		"
            />
            <path
              fill="#AD884D"
              d="M777.2,518.7h-49.7c-2.6,0-4.8,2.1-4.8,4.8V534c0,2.6,2.1,4.8,4.8,4.8h49.7c2.6,0,4.8-2.1,4.8-4.8v-10.4
			C782,520.9,779.8,518.7,777.2,518.7z"
            />
            <path
              fill="#BC9357"
              d="M777.2,498.7h-49.7c-2.6,0-4.8,2.1-4.8,4.8V514c0,2.6,2.1,4.8,4.8,4.8h49.7c2.6,0,4.8-2.1,4.8-4.8v-10.4
			C782,500.9,779.8,498.7,777.2,498.7z"
            />
          </g>
          {/* <!-- 1st candle base --> */}
          <g
            className="pointer"
            onClick={() => {
              setCandle1Presence(!candle1Presence);
              if (candle1Lit) {
                setCandle1Lit(false);
                setNumberLit(numberLit - 1);
              }
            }}
          >
            <polygon
              fill="#967444"
              points="1265,578 1230,578 1223,538.7 1272,538.7 		"
            />
            <polygon
              fill="#967444"
              points="1270.5,498.7 1224.5,498.7 1215.3,483.1 1279.7,483.1 		"
            />
            <path
              fill="#AD884D"
              d="M1222.6,518.7h49.7c2.6,0,4.8,2.1,4.8,4.8V534c0,2.6-2.1,4.8-4.8,4.8h-49.7c-2.6,0-4.8-2.1-4.8-4.8v-10.4
			C1217.9,520.9,1220,518.7,1222.6,518.7z"
            />
            <path
              fill="#BC9357"
              d="M1222.6,498.7h49.7c2.6,0,4.8,2.1,4.8,4.8V514c0,2.6-2.1,4.8-4.8,4.8h-49.7c-2.6,0-4.8-2.1-4.8-4.8v-10.4
			C1217.9,500.9,1220,498.7,1222.6,498.7z"
            />
          </g>

          {/* <!-- 2nd candle base --> */}
          <g
            className="pointer"
            onClick={() => {
              setCandle2Presence(!candle2Presence);
              if (candle2Lit) {
                setCandle2Lit(false);
                setNumberLit(numberLit - 1);
              }
            }}
          >
            <polygon
              fill="#967444"
              points="1164.3,578 1129.3,578 1122.3,538.7 1171.4,538.7 		"
            />
            <polygon
              fill="#967444"
              points="1169.8,498.7 1123.9,498.7 1114.6,483.1 1179,483.1 		"
            />
            <path
              fill="#AD884D"
              d="M1122,518.7h49.7c2.6,0,4.8,2.1,4.8,4.8V534c0,2.6-2.1,4.8-4.8,4.8H1122c-2.6,0-4.8-2.1-4.8-4.8v-10.4
			C1117.2,520.9,1119.3,518.7,1122,518.7z"
            />
            <path
              fill="#BC9357"
              d="M1122,498.7h49.7c2.6,0,4.8,2.1,4.8,4.8V514c0,2.6-2.1,4.8-4.8,4.8H1122c-2.6,0-4.8-2.1-4.8-4.8v-10.4
			C1117.2,500.9,1119.3,498.7,1122,498.7z"
            />
          </g>
          {/* <!-- 
3rd candle base --> */}
          <g
            className="pointer"
            onClick={() => {
              setCandle3Presence(!candle3Presence);
              if (candle3Lit) {
                setCandle3Lit(false);
                setNumberLit(numberLit - 1);
              }
            }}
          >
            <polygon
              fill="#967444"
              points="1065.2,578 1030.2,578 1023.1,538.7 1072.2,538.7 		"
            />
            <polygon
              fill="#967444"
              points="1070.6,498.7 1024.7,498.7 1015.5,483.1 1079.9,483.1 		"
            />
            <path
              fill="#AD884D"
              d="M1022.8,518.7h49.7c2.6,0,4.8,2.1,4.8,4.8V534c0,2.6-2.1,4.8-4.8,4.8h-49.7c-2.6,0-4.8-2.1-4.8-4.8v-10.4
			C1018,520.9,1020.2,518.7,1022.8,518.7z"
            />
            <path
              fill="#BC9357"
              d="M1022.8,498.7h49.7c2.6,0,4.8,2.1,4.8,4.8V514c0,2.6-2.1,4.8-4.8,4.8h-49.7c-2.6,0-4.8-2.1-4.8-4.8v-10.4
			C1018,500.9,1020.2,498.7,1022.8,498.7z"
            />
          </g>
          {/* 
<!-- 4th candle base --> */}
          <g
            className="pointer"
            onClick={() => {
              setCandle4Presence(!candle4Presence);
              if (candle4Lit) {
                setCandle4Lit(false);
                setNumberLit(numberLit - 1);
              }
            }}
          >
            <polygon
              fill="#967444"
              points="965.2,578 930.2,578 923.1,538.7 972.2,538.7 		"
            />
            <polygon
              fill="#967444"
              points="970.6,498.7 924.7,498.7 915.5,483.1 979.9,483.1 		"
            />
            <path
              fill="#AD884D"
              d="M922.8,518.7h49.7c2.6,0,4.8,2.1,4.8,4.8V534c0,2.6-2.1,4.8-4.8,4.8h-49.7c-2.6,0-4.8-2.1-4.8-4.8v-10.4
			C918,520.9,920.2,518.7,922.8,518.7z"
            />
            <path
              fill="#BC9357"
              d="M922.8,498.7h49.7c2.6,0,4.8,2.1,4.8,4.8V514c0,2.6-2.1,4.8-4.8,4.8h-49.7c-2.6,0-4.8-2.1-4.8-4.8v-10.4
			C918,500.9,920.2,498.7,922.8,498.7z"
            />
          </g>

          {/* <!-- shamash base --> */}
          <g
            className="pointer"
            onClick={() => {
              setShamashPresence(!shamashPresence);
              if (shamashLit) {
                setShamashLit(false);
                setNumberLit(numberLit - 1);
              }
            }}
          >
            <polygon
              fill="#967444"
              points="832.5,480.5 867.5,480.5 874.5,441.2 825.5,441.2 		"
            />
            <polygon
              fill="#967444"
              points="827,401.2 873,401.2 882.2,385.6 850,385.6 817.8,385.6 		"
            />
            <path
              fill="#AD884D"
              d="M874.9,421.2h-49.7c-2.6,0-4.8,2.1-4.8,4.8v10.4c0,2.6,2.1,4.8,4.8,4.8h49.7c2.6,0,4.8-2.1,4.8-4.8V426
			C879.6,423.4,877.5,421.2,874.9,421.2z"
            />
            <path
              fill="#BC9357"
              d="M874.9,401.2h-49.7c-2.6,0-4.8,2.1-4.8,4.8v10.4c0,2.6,2.1,4.8,4.8,4.8h49.7c2.6,0,4.8-2.1,4.8-4.8V406
			C879.6,403.4,877.5,401.2,874.9,401.2z"
            />
          </g>
          {/* <!-- Menorah spine and base --> */}
          <path
            fill="#CC9E62"
            d="M867.5,520.2l-35-23.3l0,0c-4.8-3.2-5.7-10-1.9-14.4l1.9-2.1l35,23.1l0.1,0.1c4.9,3.2,5.8,10,1.9,14.4
			L867.5,520.2z"
          />
          <path
            fill="#DDAB6F"
            d="M867.5,536.5l-35-23.3v0c-4.8-3.2-5.7-10-1.9-14.4l1.9-2.1l35,23.1l0.1,0.1c4.9,3.2,5.8,10,1.9,14.4
			L867.5,536.5z"
          />
          <path
            fill="#BC9357"
            d="M867.5,552.7l-35-23.3v0c-4.8-3.2-5.7-10-1.9-14.4l1.9-2.1l35,23.1l0.1,0.1c4.9,3.2,5.8,10,1.9,14.4
			L867.5,552.7z"
          />
          <path
            fill="#CC9E62"
            d="M867.5,569l-35-23.3v0c-4.8-3.2-5.7-10-1.9-14.4l1.9-2.1l35,23.1l0.1,0.1c4.9,3.2,5.8,10,1.9,14.4
			L867.5,569z"
          />
          <path
            fill="#DDAB6F"
            d="M867.5,585.2l-35-23.3v0c-4.8-3.2-5.7-10-1.9-14.4l1.9-2.1l35,23.1l0.1,0.1c4.9,3.2,5.8,10,1.9,14.4
			L867.5,585.2z"
          />
          <path
            fill="#BC9357"
            d="M867.5,601.5l-35-23.3v0c-4.8-3.2-5.7-10-1.9-14.4l1.9-2.1l35,23.1l0.1,0.1c4.9,3.2,5.8,10,1.9,14.4
			L867.5,601.5z"
          />
          <path
            fill="#CC9E62"
            d="M867.5,617.7l-35-23.3v0c-4.8-3.2-5.7-10-1.9-14.4l1.9-2.1l35,23.1l0.1,0.1c4.9,3.2,5.8,10,1.9,14.4
			L867.5,617.7z"
          />
          <path
            fill="#DDAB6F"
            d="M867.5,634l-35-23.3v0c-4.8-3.2-5.7-10-1.9-14.4l1.9-2.1l35,23.1l0.1,0.1c4.9,3.2,5.8,10,1.9,14.4
			L867.5,634z"
          />
          <path
            fill="#BC9357"
            d="M867.5,650.2l-35-23.3v0c-4.8-3.2-5.7-10-1.9-14.4l1.9-2.1l35,23.1l0.1,0.1c4.9,3.2,5.8,10,1.9,14.4
			L867.5,650.2z"
          />
          <path
            fill="#CC9E62"
            d="M867.5,666.5l-35-23.3v0c-4.8-3.2-5.7-10-1.9-14.4l1.9-2.1l35,23.1l0.1,0.1c4.9,3.2,5.8,10,1.9,14.4
			L867.5,666.5z"
          />
          <path
            fill="#DDAB6F"
            d="M867.5,682.7l-35-23.3v0c-4.8-3.2-5.7-10-1.9-14.4l1.9-2.1l35,23.1l0.1,0.1c4.9,3.2,5.8,10,1.9,14.4
			L867.5,682.7z"
          />
          <path
            fill="#BC9357"
            d="M867.5,699l-35-23.3v0c-4.8-3.2-5.7-10-1.9-14.4l1.9-2.1l35,23.1l0.1,0.1c4.9,3.2,5.8,10,1.9,14.4
			L867.5,699z"
          />
          <path
            fill="#CC9E62"
            d="M867.5,715.2l-35-23.3v0c-4.8-3.2-5.7-10-1.9-14.4l1.9-2.1l35,23.1l0.1,0.1c4.9,3.2,5.8,10,1.9,14.4
			L867.5,715.2z"
          />
          <path
            fill="#DDAB6F"
            d="M867.5,731.5l-35-23.3v0c-4.8-3.2-5.7-10-1.9-14.4l1.9-2.1l35,23.1l0.1,0.1c4.9,3.2,5.8,10,1.9,14.4
			L867.5,731.5z"
          />
          <path
            fill="#BC9357"
            d="M867.5,747.7l-35-23.3v0c-4.8-3.2-5.7-10-1.9-14.4l1.9-2.1l35,23.1l0.1,0.1c4.9,3.2,5.8,10,1.9,14.4
			L867.5,747.7z"
          />
          <path
            fill="#CC9E62"
            d="M867.5,764l-35-23.3v0c-4.8-3.2-5.7-10-1.9-14.4l1.9-2.1l35,23.1l0.1,0.1c4.9,3.2,5.8,10,1.9,14.4
			L867.5,764z"
          />
          <path
            fill="#DDAB6F"
            d="M867.5,780.2l-35-23.3v0c-4.8-3.2-5.7-10-1.9-14.4l1.9-2.1l35,23.1l0.1,0.1c4.9,3.2,5.8,10,1.9,14.4
			L867.5,780.2z"
          />
          <path
            fill="#BC9357"
            d="M867.5,796.5l-35-23.3v0c-4.8-3.2-5.7-10-1.9-14.4l1.9-2.1l35,23.1l0.1,0.1c4.9,3.2,5.8,10,1.9,14.4
			L867.5,796.5z"
          />
          <path
            fill="#CC9E62"
            d="M867.5,812.7l-35-23.3v0c-4.8-3.2-5.7-10-1.9-14.4l1.9-2.1l35,23.1l0.1,0.1c4.9,3.2,5.8,10,1.9,14.4
			L867.5,812.7z"
          />
          <path
            fill="#DDAB6F"
            d="M867.5,829l-35-23.3v0c-4.8-3.2-5.7-10-1.9-14.4l1.9-2.1l35,23.1l0.1,0.1c4.9,3.2,5.8,10,1.9,14.4
			L867.5,829z"
          />
          <path
            fill="#BC9357"
            d="M867.5,845.2l-35-23.3v0c-4.8-3.2-5.7-10-1.9-14.4l1.9-2.1l35,23.1l0.1,0.1c4.9,3.2,5.8,10,1.9,14.4
			L867.5,845.2z"
          />
          <path
            fill="#CC9E62"
            d="M867.5,861.5l-35-23.3v0c-4.8-3.2-5.7-10-1.9-14.4l1.9-2.1l35,23.1l0.1,0.1c4.9,3.2,5.8,10,1.9,14.4
			L867.5,861.5z"
          />
          <path
            fill="#DDAB6F"
            d="M867.5,877.7l-35-23.3v0c-4.8-3.2-5.7-10-1.9-14.4l1.9-2.1l35,23.1l0.1,0.1c4.9,3.2,5.8,10,1.9,14.4
			L867.5,877.7z"
          />
          <path
            fill="#BC9357"
            d="M867.5,894l-35-23.3v0c-4.8-3.2-5.7-10-1.9-14.4l1.9-2.1l35,23.1l0.1,0.1c4.9,3.2,5.8,10,1.9,14.4
			L867.5,894z"
          />
          <path
            fill="#CC9E62"
            d="M867.5,910.2l-35-23.3v0c-4.8-3.2-5.7-10-1.9-14.4l1.9-2.1l35,23.1l0.1,0.1c4.9,3.2,5.8,10,1.9,14.4
			L867.5,910.2z"
          />
          <path
            fill="#DDAB6F"
            d="M867.5,926.5l-35-23.3v0c-4.8-3.2-5.7-10-1.9-14.4l1.9-2.1l35,23.1l0.1,0.1c4.9,3.2,5.8,10,1.9,14.4
			L867.5,926.5z"
          />
          <path
            fill="#BC9357"
            d="M867.5,942.7l-35-23.3v0c-4.8-3.2-5.7-10-1.9-14.4l1.9-2.1l35,23.1l0.1,0.1c4.9,3.2,5.8,10,1.9,14.4
			L867.5,942.7z"
          />
          <path
            fill="#CC9E62"
            d="M867.5,959l-35-23.3v0c-4.8-3.2-5.7-10-1.9-14.4l1.9-2.1l35,23.1l0.1,0.1c4.9,3.2,5.8,10,1.9,14.4
			L867.5,959z"
          />
          <path
            fill="#DDAB6F"
            d="M867.5,975.2l-35-23.3v0c-4.8-3.2-5.7-10-1.9-14.4l1.9-2.1l35,23.1l0.1,0.1c4.9,3.2,5.8,10,1.9,14.4
			L867.5,975.2z"
          />
          <path
            fill="#BC9357"
            d="M867.5,991.5l-35-23.3v0c-4.8-3.2-5.7-10-1.9-14.4l1.9-2.1l35,23.1l0.1,0.1c4.9,3.2,5.8,10,1.9,14.4
			L867.5,991.5z"
          />
          <path
            fill="#CC9E62"
            d="M867.5,1007.7l-35-23.3v0c-4.8-3.2-5.7-10-1.9-14.4l1.9-2.1l35,23.1l0.1,0.1c4.9,3.2,5.8,10,1.9,14.4
			L867.5,1007.7z"
          />
          <path
            fill="#DDAB6F"
            d="M867.5,1024l-35-23.3v0c-4.8-3.2-5.7-10-1.9-14.4l1.9-2.1l35,23.1l0.1,0.1c4.9,3.2,5.8,10,1.9,14.4
			L867.5,1024z"
          />
          <path
            fill="#BC9357"
            d="M867.5,1040.2l-35-23.3v0c-4.8-3.2-5.7-10-1.9-14.4l1.9-2.1l35,23.1l0.1,0.1c4.9,3.2,5.8,10,1.9,14.4
			L867.5,1040.2z"
          />
          <path
            fill="#CC9E62"
            d="M867.5,1056.5l-35-23.3l0,0c-4.8-3.2-5.7-10-1.9-14.4l1.9-2.1l35,23.1l0.1,0.1c4.9,3.2,5.8,10,1.9,14.4
			L867.5,1056.5z"
          />
          <path
            fill="#DDAB6F"
            d="M867.5,1072.7l-35-23.3l0,0c-4.8-3.2-5.7-10-1.9-14.4l1.9-2.1l35,23.1l0.1,0.1c4.9,3.2,5.8,10,1.9,14.4
			L867.5,1072.7z"
          />
          <path
            fill="#BC9357"
            d="M867.5,1089l-35-23.3l0,0c-4.8-3.2-5.7-10-1.9-14.4l1.9-2.1l35,23.1l0.1,0.1c4.9,3.2,5.8,10,1.9,14.4
			L867.5,1089z"
          />
          <path
            fill="#CC9E62"
            d="M867.5,1105.2l-35-23.3l0,0c-4.8-3.2-5.7-10-1.9-14.4l1.9-2.1l35,23.1l0.1,0.1c4.9,3.2,5.8,10,1.9,14.4
			L867.5,1105.2z"
          />
          <path
            fill="#DDAB6F"
            d="M867.5,1121.5l-35-23.3l0,0c-4.8-3.2-5.7-10-1.9-14.4l1.9-2.1l35,23.1l0.1,0.1c4.9,3.2,5.8,10,1.9,14.4
			L867.5,1121.5z"
          />
          <path
            fill="#BC9357"
            d="M867.5,1137.7l-35-23.3l0,0c-4.8-3.2-5.7-10-1.9-14.4l1.9-2.1l35,23.1l0.1,0.1c4.9,3.2,5.8,10,1.9,14.4
			L867.5,1137.7z"
          />
          <path
            fill="#CC9E62"
            d="M867.5,1154l-35-23.3l0,0c-4.8-3.2-5.7-10-1.9-14.4l1.9-2.1l35,23.1l0.1,0.1c4.9,3.2,5.8,10,1.9,14.4
			L867.5,1154z"
          />
          <path
            fill="#BC9357"
            d="M867.6,487.2L867.6,487.2l-10.1-6.7h-25c0,0,0,0,0,0v0l35,23.3l2-2.2C873.4,497.2,872.5,490.4,867.6,487.2
			z"
          />
          <path
            fill="#DDAB6F"
            d="M867.6,1153.6L867.6,1153.6l-35.1-23.1l-1.9,2.1c-3.9,4.4-3,11.1,1.9,14.4l10.5,7h25
			C867.9,1153.9,867.8,1153.7,867.6,1153.6z"
          />
          <path
            fill="#BC9357"
            d="M1297.6,558.4H402.4c-5.4,0-9.8,4.4-9.8,9.8v0c0,5.4,4.4,9.8,9.8,9.8h895.2c5.4,0,9.8-4.4,9.8-9.8v0
			C1307.4,562.8,1303,558.4,1297.6,558.4z"
          />
          <path
            fill="#AD884D"
            d="M876.4,1162.2h-52.8c-2.3,0-4.1-1.8-4.1-4.1l0,0c0-2.3,1.8-4.1,4.1-4.1h52.8c2.3,0,4.1,1.8,4.1,4.1l0,0
			C880.5,1160.4,878.7,1162.2,876.4,1162.2z"
          />
          <path
            fill="#BC9357"
            d="M850.1,1189.2H782l10.8-13.9c6.4-8.3,16.3-13.1,26.8-13.1h30.5V1189.2z"
          />
          <path
            fill="#CC9E62"
            d="M850.1,1189.2h68.1l-10.8-13.9c-6.4-8.3-16.3-13.1-26.8-13.1h-30.5V1189.2z"
          />
          <path
            fill="#AD884D"
            d="M850.1,1265.7H692.9l25-32.1c14.8-19.1,37.6-30.2,61.8-30.2h70.3V1265.7z"
          />
          <path
            fill="#BC9357"
            d="M850.1,1265.7h157.1l-25-32.1c-14.8-19.1-37.6-30.2-61.8-30.2h-70.3V1265.7z"
          />
          <path
            fill="#CC9E62"
            d="M825.2,1203.4h-55.4c-3.9,0-7.1-3.2-7.1-7.1l0,0c0-3.9,3.2-7.1,7.1-7.1h55.4V1203.4z"
          />
          <path
            fill="#CC9E62"
            d="M874.9,1203.4h55.4c3.9,0,7.1-3.2,7.1-7.1l0,0c0-3.9-3.2-7.1-7.1-7.1h-55.4V1203.4z"
          />
          <path
            fill="#DDAB6F"
            d="M886.9,1203.4h-73.8c-3.9,0-7.1-3.2-7.1-7.1l0,0c0-3.9,3.2-7.1,7.1-7.1h73.8c3.9,0,7.1,3.2,7.1,7.1l0,0
			C894,1200.2,890.8,1203.4,886.9,1203.4z"
          />
          <path
            fill="#CC9E62"
            d="M782,1294.2H670.5c-7.9,0-14.2-6.4-14.2-14.2l0,0c0-7.9,6.4-14.2,14.2-14.2H782V1294.2z"
          />
          <path
            fill="#CC9E62"
            d="M918.1,1294.2h111.5c7.9,0,14.2-6.4,14.2-14.2l0,0c0-7.9-6.4-14.2-14.2-14.2H918.1V1294.2z"
          />
          <path
            fill="#DDAB6F"
            d="M924.2,1294.2H775.7c-7.9,0-14.2-6.4-14.2-14.2l0,0c0-7.9,6.4-14.2,14.2-14.2h148.5
			c7.9,0,14.2,6.4,14.2,14.2l0,0C938.5,1287.9,932.1,1294.2,924.2,1294.2z"
          />
          {candle8Presence && (
            <g>
              <g>
                {/* <!-- 8th candle flame --> */}
                {candle8Lit && (
                  <motion.g
                    variants={flameVariants}
                    initial="hidden"
                    animate={candle8Flicker ? "flickering" : "visible"}
                  >
                    <path
                      fill="#FEFEDE"
                      d="M466.4,317.2l-9.5-23.3c-1.6-4-7.3-4-8.9,0l-9.5,23.3c-1.8,4.5-0.8,9.7,2.7,13.1l2.7,2.7
					c4.7,4.7,12.4,4.7,17.2,0l2.7-2.7C467.2,326.9,468.3,321.7,466.4,317.2z"
                    />
                    <path
                      fill="#F0CF85"
                      d="M451.9,332.2c-1.1-0.1-2.2-0.7-3-1.5l-3.1-3.1c-1.4-1.4-1.8-3.5-1.1-5.3l6.3-15.5c0.5-1.3,2.4-1.3,3,0
					l6.3,15.5c0.7,1.8,0.3,3.9-1.1,5.3l-3.2,3.2C454.9,331.9,453.4,332.4,451.9,332.2z"
                    />
                  </motion.g>
                )}
                {/* <!-- 8th candle wick and wax --> */}

                <motion.g>
                  <path
                    className="pointer"
                    onClick={() => {
                      setCandle8Lit(!candle8Lit);

                      if (candle8Lit) {
                        setNumberLit(numberLit - 1);
                        setCandle8Flicker(false);
                      } else if (!candle8Lit) {
                        setNumberLit(numberLit + 1);
                        setTimeout(() => {
                          setCandle8Flicker(true);
                        }, 2000);
                      }
                    }}
                    fill="#d5e3ec"
                    d="M468,342.3h-31c-5,0-9,4-9,9v131.8H477V351.3C477,346.3,473,342.3,468,342.3z"
                  />
                  <path
                    fill="#504B42"
                    d="M452.5,324.4L452.5,324.4c-1,0-1.8,0.8-1.8,1.8v16h3.7v-16C454.3,325.3,453.5,324.4,452.5,324.4z"
                  />
                </motion.g>
              </g>

              {/* <!-- 8th candle corona --> */}
              {candle8Lit && (
                <motion.g
                  className="pointer"
                  onClick={() => {
                    setCandle8Lit(!candle8Lit);

                    if (candle8Lit) {
                      setNumberLit(numberLit - 1);
                      setCandle8Flicker(false);
                    } else if (!candle8Lit) {
                      setNumberLit(numberLit + 1);
                      setTimeout(() => {
                        setCandle8Flicker(true);
                      }, 2000);
                    }
                  }}
                  variants={coronaVariants}
                  initial="hidden"
                  animate={candle8Flicker ? "flickering" : "visible"}
                >
                  <circle
                    opacity="0.1"
                    fill="#FEFEDE"
                    cx="450.7"
                    cy="319"
                    r="115.7"
                  />
                  <circle
                    opacity="0.1"
                    fill="#FEFEDE"
                    cx="450.7"
                    cy="319"
                    r="79.7"
                  />
                  <circle
                    opacity="0.1"
                    fill="#FEFEDE"
                    cx="450.7"
                    cy="319"
                    r="47.2"
                  />
                </motion.g>
              )}
            </g>
          )}
          {candle7Presence && (
            <g>
              <g>
                {/* <!-- 7th candle flame --> */}
                {candle7Lit && (
                  <motion.g
                    variants={flameVariants}
                    initial="hidden"
                    animate={candle7Flicker ? "flickering" : "visible"}
                  >
                    <path
                      fill="#FEFEDE"
                      d="M567.1,317.2l-9.5-23.3c-1.6-4-7.3-4-8.9,0l-9.5,23.3c-1.8,4.5-0.8,9.7,2.7,13.1l2.7,2.7
					c4.7,4.7,12.4,4.7,17.2,0l2.7-2.7C567.9,326.9,568.9,321.7,567.1,317.2z"
                    />
                    <path
                      fill="#F0CF85"
                      d="M552.5,332.2c-1.1-0.1-2.2-0.7-3-1.5l-3.1-3.1c-1.4-1.4-1.8-3.5-1.1-5.3l6.3-15.5c0.5-1.3,2.4-1.3,3,0
					l6.3,15.5c0.7,1.8,0.3,3.9-1.1,5.3l-3.2,3.2C555.6,331.9,554.1,332.4,552.5,332.2z"
                    />
                  </motion.g>
                )}
                {/* <!-- 7th candle wick and wax --> */}

                <motion.g>
                  <path
                    className="pointer"
                    onClick={() => {
                      setCandle7Lit(!candle7Lit);

                      if (candle7Lit) {
                        setNumberLit(numberLit - 1);
                        setCandle7Flicker(false);
                      } else if (!candle7Lit) {
                        setNumberLit(numberLit + 1);
                        setTimeout(() => {
                          setCandle7Flicker(true);
                        }, 2000);
                      }
                    }}
                    fill="#d5e3ec"
                    d="M568.7,342.3h-31c-5,0-9,4-9,9v131.8h49.1V351.3C577.7,346.3,573.7,342.3,568.7,342.3z"
                  />
                  <path
                    fill="#504B42"
                    d="M553.2,324.4L553.2,324.4c-1,0-1.8,0.8-1.8,1.8v16h3.7v-16C555,325.3,554.2,324.4,553.2,324.4z"
                  />
                </motion.g>
              </g>
              {/* <!-- 7th candle corona --> */}
              {candle7Lit && (
                <motion.g
                  className="pointer"
                  onClick={() => {
                    setCandle7Lit(!candle7Lit);

                    if (candle7Lit) {
                      setNumberLit(numberLit - 1);
                      setCandle7Flicker(false);
                    } else if (!candle7Lit) {
                      setNumberLit(numberLit + 1);
                      setTimeout(() => {
                        setCandle7Flicker(true);
                      }, 2000);
                    }
                  }}
                  variants={coronaVariants}
                  initial="hidden"
                  animate={candle7Flicker ? "flickering" : "visible"}
                >
                  <circle
                    opacity="0.1"
                    fill="#FEFEDE"
                    cx="551.3"
                    cy="319"
                    r="115.7"
                  />
                  <circle
                    opacity="0.1"
                    fill="#FEFEDE"
                    cx="551.3"
                    cy="319"
                    r="79.7"
                  />
                  <circle
                    opacity="0.1"
                    fill="#FEFEDE"
                    cx="551.3"
                    cy="319"
                    r="47.2"
                  />
                </motion.g>
              )}
            </g>
          )}
          {candle6Presence && (
            <g>
              <g>
                {/* <!-- 6th candle flame --> */}
                {candle6Lit && (
                  <motion.g
                    variants={flameVariants}
                    initial="hidden"
                    animate={candle6Flicker ? "flickering" : "visible"}
                  >
                    <path
                      fill="#FEFEDE"
                      d="M666.3,317.2l-9.5-23.3c-1.6-4-7.3-4-8.9,0l-9.5,23.3c-1.8,4.5-0.8,9.7,2.7,13.1l2.7,2.7
					c4.7,4.7,12.4,4.7,17.2,0l2.7-2.7C667.1,326.9,668.1,321.7,666.3,317.2z"
                    />
                    <path
                      fill="#F0CF85"
                      d="M651.7,332.2c-1.1-0.1-2.2-0.7-3-1.5l-3.1-3.1c-1.4-1.4-1.8-3.5-1.1-5.3l6.3-15.5c0.5-1.3,2.4-1.3,3,0
					l6.3,15.5c0.7,1.8,0.3,3.9-1.1,5.3l-3.2,3.2C654.7,331.9,653.2,332.4,651.7,332.2z"
                    />
                  </motion.g>
                )}
                {/* <!-- 6th candle wick and wax --> */}
                <motion.g>
                  <path
                    className="pointer"
                    onClick={() => {
                      setCandle6Lit(!candle6Lit);

                      if (candle6Lit) {
                        setNumberLit(numberLit - 1);
                        setCandle6Flicker(false);
                      } else if (!candle6Lit) {
                        setNumberLit(numberLit + 1);
                        setTimeout(() => {
                          setCandle6Flicker(true);
                        }, 2000);
                      }
                    }}
                    fill="#d5e3ec"
                    d="M667.8,342.3h-31c-5,0-9,4-9,9v131.8h49.1V351.3C676.9,346.3,672.8,342.3,667.8,342.3z"
                  />
                  <path
                    fill="#504B42"
                    d="M652.3,324.4L652.3,324.4c-1,0-1.8,0.8-1.8,1.8v16h3.7v-16C654.2,325.3,653.3,324.4,652.3,324.4z"
                  />
                </motion.g>
              </g>
              {/* <!-- 6th candle corona --> */}
              {candle6Lit && (
                <motion.g
                  className="pointer"
                  onClick={() => {
                    setCandle6Lit(!candle6Lit);

                    if (candle6Lit) {
                      setNumberLit(numberLit - 1);
                      setCandle6Flicker(false);
                    } else if (!candle6Lit) {
                      setNumberLit(numberLit + 1);
                      setTimeout(() => {
                        setCandle6Flicker(true);
                      }, 2000);
                    }
                  }}
                  variants={coronaVariants}
                  initial="hidden"
                  animate={candle6Flicker ? "flickering" : "visible"}
                >
                  <circle
                    opacity="0.1"
                    fill="#FEFEDE"
                    cx="652.3"
                    cy="319"
                    r="115.7"
                  />
                  <circle
                    opacity="0.1"
                    fill="#FEFEDE"
                    cx="650.5"
                    cy="319"
                    r="79.7"
                  />
                  <circle
                    opacity="0.1"
                    fill="#FEFEDE"
                    cx="650.5"
                    cy="319"
                    r="47.2"
                  />
                </motion.g>
              )}
            </g>
          )}
          {candle5Presence && (
            <g>
              <g>
                {/* <!-- 5th candle flame --> */}
                {candle5Lit && (
                  <motion.g
                    variants={flameVariants}
                    initial="hidden"
                    animate={candle5Flicker ? "flickering" : "visible"}
                  >
                    <path
                      fill="#FEFEDE"
                      d="M765.4,317.2l-9.5-23.3c-1.6-4-7.3-4-8.9,0l-9.5,23.3c-1.8,4.5-0.8,9.7,2.7,13.1l2.7,2.7
					c4.7,4.7,12.4,4.7,17.2,0l2.7-2.7C766.2,326.9,767.3,321.7,765.4,317.2z"
                    />
                    <path
                      fill="#F0CF85"
                      d="M750.9,332.2c-1.1-0.1-2.2-0.7-3-1.5l-3.1-3.1c-1.4-1.4-1.8-3.5-1.1-5.3l6.3-15.5c0.5-1.3,2.4-1.3,3,0
					l6.3,15.5c0.7,1.8,0.3,3.9-1.1,5.3l-3.2,3.2C753.9,331.9,752.4,332.4,750.9,332.2z"
                    />
                  </motion.g>
                )}
                {/* <!-- 5th candle wick and wax --> */}

                <motion.g
                // variants={candleWaxVariants}
                // initial="hidden"
                // animate="visible"
                >
                  <path
                    className="pointer"
                    onClick={() => {
                      setCandle5Lit(!candle5Lit);

                      if (candle5Lit) {
                        setNumberLit(numberLit - 1);
                        setCandle5Flicker(false);
                      } else if (!candle5Lit) {
                        setNumberLit(numberLit + 1);
                        setTimeout(() => {
                          setCandle5Flicker(true);
                        }, 2000);
                      }
                    }}
                    fill="#d5e3ec"
                    d="M767,342.3h-31c-5,0-9,4-9,9v131.8H776V351.3C776,346.3,772,342.3,767,342.3z"
                  />
                  <path
                    fill="#504B42"
                    d="M751.5,324.4L751.5,324.4c-1,0-1.8,0.8-1.8,1.8v16h3.7v-16C753.3,325.3,752.5,324.4,751.5,324.4z"
                  />
                </motion.g>
              </g>
              {/* <!-- 5th candle corona --> */}
              {candle5Lit && (
                <motion.g
                  className="pointer"
                  onClick={() => {
                    setCandle5Lit(!candle5Lit);

                    if (candle5Lit) {
                      setNumberLit(numberLit - 1);
                      setCandle5Flicker(false);
                    } else if (!candle5Lit) {
                      setNumberLit(numberLit + 1);
                      setTimeout(() => {
                        setCandle5Flicker(true);
                      }, 2000);
                    }
                  }}
                  variants={coronaVariants}
                  initial="hidden"
                  animate={candle5Flicker ? "flickering" : "visible"}
                >
                  <circle
                    opacity="0.1"
                    fill="#FEFEDE"
                    cx="751.5"
                    cy="319"
                    r="115.7"
                  />
                  <circle
                    opacity="0.1"
                    fill="#FEFEDE"
                    cx="749.7"
                    cy="319"
                    r="79.7"
                  />
                  <circle
                    opacity="0.1"
                    fill="#FEFEDE"
                    cx="749.7"
                    cy="319"
                    r="47.2"
                  />
                </motion.g>
              )}
            </g>
          )}
          {candle1Presence && (
            <g>
              <motion.g>
                {/* <!-- 1st candle flame --> */}
                {candle1Lit && (
                  <motion.g
                    variants={flameVariants}
                    initial="hidden"
                    animate={candle1Flicker ? "flickering" : "visible"}
                  >
                    <path
                      fill="#FEFEDE"
                      d="M1233.6,317.2l9.5-23.3c1.6-4,7.3-4,8.9,0l9.5,23.3c1.8,4.5,0.8,9.7-2.7,13.1l-2.7,2.7
					c-4.7,4.7-12.4,4.7-17.2,0l-2.7-2.7C1232.8,326.9,1231.7,321.7,1233.6,317.2z"
                    />
                    <path
                      fill="#F0CF85"
                      d="M1248.1,332.2c1.1-0.1,2.2-0.7,3-1.5l3.1-3.1c1.4-1.4,1.8-3.5,1.1-5.3l-6.3-15.5c-0.5-1.3-2.4-1.3-3,0
					l-6.3,15.5c-0.7,1.8-0.3,3.9,1.1,5.3l3.2,3.2C1245.1,331.9,1246.6,332.4,1248.1,332.2z"
                    />
                  </motion.g>
                )}
                {/* <!-- 1st candle wick and wax --> */}

                <motion.g
                // variants={candleWaxVariants}
                // initial="hidden"
                // animate="visible"
                >
                  <path
                    className="pointer"
                    onClick={() => {
                      setCandle1Lit(!candle1Lit);

                      if (candle1Lit) {
                        setNumberLit(numberLit - 1);
                        setCandle1Flicker(false);
                      } else if (!candle1Lit) {
                        setNumberLit(numberLit + 1);
                        setTimeout(() => {
                          setCandle1Flicker(true);
                        }, 2000);
                      }
                    }}
                    fill="#d5e3ec"
                    d="M1232,342.3h31c5,0,9,4,9,9v131.8H1223V351.3C1223,346.3,1227,342.3,1232,342.3z"
                  />
                  <path
                    fill="#504B42"
                    d="M1247.5,324.4L1247.5,324.4c1,0,1.8,0.8,1.8,1.8v16h-3.7v-16C1245.7,325.3,1246.5,324.4,1247.5,324.4z"
                  />
                </motion.g>
              </motion.g>

              {/* <!-- 1st candle corona --> */}
              {candle1Lit && (
                <motion.g
                  className="pointer"
                  onClick={() => {
                    setCandle1Lit(!candle1Lit);

                    if (candle1Lit) {
                      setNumberLit(numberLit - 1);
                      setCandle1Flicker(false);
                    } else if (!candle1Lit) {
                      setNumberLit(numberLit + 1);
                      setTimeout(() => {
                        setCandle1Flicker(true);
                      }, 2000);
                    }
                  }}
                  variants={coronaVariants}
                  initial="hidden"
                  animate={candle1Flicker ? "flickering" : "visible"}
                >
                  <circle
                    opacity="0.1"
                    fill="#FEFEDE"
                    cx="1247.5"
                    cy="319"
                    r="115.7"
                  />
                  <circle
                    opacity="0.1"
                    fill="#FEFEDE"
                    cx="1249.3"
                    cy="319"
                    r="79.7"
                  />
                  <circle
                    opacity="0.1"
                    fill="#FEFEDE"
                    cx="1249.3"
                    cy="319"
                    r="47.2"
                  />
                </motion.g>
              )}
            </g>
          )}
          {candle2Presence && (
            <g>
              <motion.g>
                {/* <!-- 2nd candle flame --> */}
                {candle2Lit && (
                  <motion.g
                    variants={flameVariants}
                    initial="hidden"
                    animate={candle2Flicker ? "flickering" : "visible"}
                  >
                    <path
                      fill="#FEFEDE"
                      d="M1132.9,317.2l9.5-23.3c1.6-4,7.3-4,8.9,0l9.5,23.3c1.8,4.5,0.8,9.7-2.7,13.1l-2.7,2.7
					c-4.7,4.7-12.4,4.7-17.2,0l-2.7-2.7C1132.1,326.9,1131.1,321.7,1132.9,317.2z"
                    />
                    <path
                      fill="#F0CF85"
                      d="M1147.5,332.2c1.1-0.1,2.2-0.7,3-1.5l3.1-3.1c1.4-1.4,1.8-3.5,1.1-5.3l-6.3-15.5c-0.5-1.3-2.4-1.3-3,0
					l-6.3,15.5c-0.7,1.8-0.3,3.9,1.1,5.3l3.2,3.2C1144.4,331.9,1145.9,332.4,1147.5,332.2z"
                    />
                  </motion.g>
                )}

                {/* <!-- 2nd candle wick and wax --> */}

                <motion.g>
                  <path
                    className="pointer"
                    onClick={() => {
                      setCandle2Lit(!candle2Lit);

                      if (candle2Lit) {
                        setNumberLit(numberLit - 1);
                        setCandle2Flicker(false);
                      } else if (!candle2Lit) {
                        setNumberLit(numberLit + 1);
                        setTimeout(() => {
                          setCandle2Flicker(true);
                        }, 2000);
                      }
                    }}
                    fill="#d5e3ec"
                    d="M1131.3,342.3h31c5,0,9,4,9,9v131.8h-49.1V351.3C1122.3,346.3,1126.3,342.3,1131.3,342.3z"
                  />
                  <path
                    fill="#504B42"
                    d="M1146.8,324.4L1146.8,324.4c1,0,1.8,0.8,1.8,1.8v16h-3.7v-16C1145,325.3,1145.8,324.4,1146.8,324.4z"
                  />
                </motion.g>
              </motion.g>
              {/* <!-- 2nd candle corona --> */}
              {candle2Lit && (
                <motion.g
                  className="pointer"
                  onClick={() => {
                    setCandle2Lit(!candle2Lit);

                    if (candle2Lit) {
                      setNumberLit(numberLit - 1);
                      setCandle2Flicker(false);
                    } else if (!candle2Lit) {
                      setNumberLit(numberLit + 1);
                      setTimeout(() => {
                        setCandle2Flicker(true);
                      }, 2000);
                    }
                  }}
                  variants={coronaVariants}
                  initial="hidden"
                  animate={candle2Flicker ? "flickering" : "visible"}
                >
                  <circle
                    opacity="0.1"
                    fill="#FEFEDE"
                    cx="1146.8"
                    cy="319"
                    r="115.7"
                  />
                  <circle
                    opacity="0.1"
                    fill="#FEFEDE"
                    cx="1148.7"
                    cy="319"
                    r="79.7"
                  />
                  <circle
                    opacity="0.1"
                    fill="#FEFEDE"
                    cx="1148.7"
                    cy="319"
                    r="47.2"
                  />
                </motion.g>
              )}
            </g>
          )}
          {candle3Presence && (
            <g>
              <motion.g>
                {/* <!-- 3rd candle flame --> */}
                {candle3Lit && (
                  <motion.g
                    variants={flameVariants}
                    initial="hidden"
                    animate={candle3Flicker ? "flickering" : "visible"}
                  >
                    <path
                      fill="#FEFEDE"
                      d="M1033.7,317.2l9.5-23.3c1.6-4,7.3-4,8.9,0l9.5,23.3c1.8,4.5,0.8,9.7-2.7,13.1l-2.7,2.7
					c-4.7,4.7-12.4,4.7-17.2,0l-2.7-2.7C1032.9,326.9,1031.9,321.7,1033.7,317.2z"
                    />
                    <path
                      fill="#F0CF85"
                      d="M1048.3,332.2c1.1-0.1,2.2-0.7,3-1.5l3.1-3.1c1.4-1.4,1.8-3.5,1.1-5.3l-6.3-15.5c-0.5-1.3-2.4-1.3-3,0
					l-6.3,15.5c-0.7,1.8-0.3,3.9,1.1,5.3l3.2,3.2C1045.3,331.9,1046.8,332.4,1048.3,332.2z"
                    />
                  </motion.g>
                )}

                {/* <!-- 3rd candle wick and wax --> */}

                <motion.g>
                  <path
                    className="pointer"
                    onClick={() => {
                      setCandle3Lit(!candle3Lit);

                      if (candle3Lit) {
                        setNumberLit(numberLit - 1);
                        setCandle3Flicker(false);
                      } else if (!candle3Lit) {
                        setNumberLit(numberLit + 1);
                        setTimeout(() => {
                          setCandle3Flicker(true);
                        }, 2000);
                      }
                    }}
                    fill="#d5e3ec"
                    d="M1032.2,342.3h31c5,0,9,4,9,9v131.8h-49.1V351.3C1023.1,346.3,1027.2,342.3,1032.2,342.3z"
                  />
                  <path
                    fill="#504B42"
                    d="M1047.7,324.4L1047.7,324.4c1,0,1.8,0.8,1.8,1.8v16h-3.7v-16C1045.8,325.3,1046.7,324.4,1047.7,324.4z"
                  />
                </motion.g>
              </motion.g>
              {/* <!-- 3rd candle corona --> */}
              {candle3Lit && (
                <motion.g
                  className="pointer"
                  onClick={() => {
                    setCandle3Lit(!candle3Lit);

                    if (candle3Lit) {
                      setNumberLit(numberLit - 1);
                      setCandle3Flicker(false);
                    } else if (!candle3Lit) {
                      setNumberLit(numberLit + 1);
                      setTimeout(() => {
                        setCandle3Flicker(true);
                      }, 2000);
                    }
                  }}
                  variants={coronaVariants}
                  initial="hidden"
                  animate={candle3Flicker ? "flickering" : "visible"}
                >
                  <circle
                    opacity="0.1"
                    fill="#FEFEDE"
                    cx="1047.7"
                    cy="319"
                    r="115.7"
                  />
                  <circle
                    opacity="0.1"
                    fill="#FEFEDE"
                    cx="1049.5"
                    cy="319"
                    r="79.7"
                  />
                  <circle
                    opacity="0.1"
                    fill="#FEFEDE"
                    cx="1049.5"
                    cy="319"
                    r="47.2"
                  />
                </motion.g>
              )}
            </g>
          )}
          {candle4Presence && (
            <g>
              <g>
                {/* <!-- 4th candle flame --> */}
                {candle4Lit && (
                  <motion.g
                    variants={flameVariants}
                    initial="hidden"
                    animate={candle4Flicker ? "flickering" : "visible"}
                  >
                    <path
                      fill="#FEFEDE"
                      d="M934.6,317.2l9.5-23.3c1.6-4,7.3-4,8.9,0l9.5,23.3c1.8,4.5,0.8,9.7-2.7,13.1l-2.7,2.7
					c-4.7,4.7-12.4,4.7-17.2,0l-2.7-2.7C933.8,326.9,932.7,321.7,934.6,317.2z"
                    />
                    <path
                      fill="#F0CF85"
                      d="M949.1,332.2c1.1-0.1,2.2-0.7,3-1.5l3.1-3.1c1.4-1.4,1.8-3.5,1.1-5.3l-6.3-15.5c-0.5-1.3-2.4-1.3-3,0
					l-6.3,15.5c-0.7,1.8-0.3,3.9,1.1,5.3l3.2,3.2C946.1,331.9,947.6,332.4,949.1,332.2z"
                    />
                  </motion.g>
                )}

                {/* <!-- 4th candle wick and wax --> */}

                <motion.g
                // variants={candleWaxVariants}
                // initial="hidden"
                // animate="visible"
                >
                  <path
                    className="pointer"
                    onClick={() => {
                      setCandle4Lit(!candle4Lit);

                      if (candle4Lit) {
                        setNumberLit(numberLit - 1);
                        setCandle4Flicker(false);
                      } else if (!candle4Lit) {
                        setNumberLit(numberLit + 1);
                        setTimeout(() => {
                          setCandle4Flicker(true);
                        }, 2000);
                      }
                    }}
                    fill="#d5e3ec"
                    d="M933,342.3h31c5,0,9,4,9,9v131.8H924V351.3C924,346.3,928,342.3,933,342.3z"
                  />
                  <path
                    fill="#504B42"
                    d="M948.5,324.4L948.5,324.4c1,0,1.8,0.8,1.8,1.8v16h-3.7v-16C946.7,325.3,947.5,324.4,948.5,324.4z"
                  />
                </motion.g>
              </g>
              {/* <!-- 4th candle corona --> */}
              {candle4Lit && (
                <motion.g
                  className="pointer"
                  onClick={() => {
                    setCandle4Lit(!candle4Lit);

                    if (candle4Lit) {
                      setNumberLit(numberLit - 1);
                      setCandle4Flicker(false);
                    } else if (!candle4Lit) {
                      setNumberLit(numberLit + 1);
                      setTimeout(() => {
                        setCandle4Flicker(true);
                      }, 2000);
                    }
                  }}
                  variants={coronaVariants}
                  initial="hidden"
                  animate={candle4Flicker ? "flickering" : "visible"}
                >
                  <circle
                    opacity="0.1"
                    fill="#FEFEDE"
                    cx="948.5"
                    cy="319"
                    r="115.7"
                  />
                  <circle
                    opacity="0.1"
                    fill="#FEFEDE"
                    cx="950.3"
                    cy="319"
                    r="79.7"
                  />
                  <circle
                    opacity="0.1"
                    fill="#FEFEDE"
                    cx="950.3"
                    cy="319"
                    r="47.2"
                  />
                </motion.g>
              )}
            </g>
          )}
          {shamashPresence && (
            <motion.g id="shamash-group">
              <g>
                {/* <!-- shamash flame --> */}
                {shamashLit && (
                  <motion.g
                    variants={flameVariants}
                    initial="hidden"
                    animate={shamashFlicker ? "flickering" : "visible"}
                  >
                    <path
                      id="shamash__outer-flame"
                      fill="#FEFEDE"
                      d="M864,219.6l-9.5-23.3c-1.6-4-7.3-4-8.9,0l-9.5,23.3c-1.8,4.5-0.8,9.7,2.7,13.1l2.7,2.7
					c4.7,4.7,12.4,4.7,17.2,0l2.7-2.7C864.8,229.3,865.8,224.2,864,219.6z"
                    />
                    <path
                      id="shamash__inner-flame"
                      fill="#F0CF85"
                      d="M849.4,234.7c-1.1-0.1-2.2-0.7-3-1.5l-3.1-3.1c-1.4-1.4-1.8-3.5-1.1-5.3l6.3-15.5c0.5-1.3,2.4-1.3,3,0
					l6.3,15.5c0.7,1.8,0.3,3.9-1.1,5.3l-3.2,3.2C852.5,234.4,851,234.9,849.4,234.7z"
                    />
                  </motion.g>
                )}

                {/* <!-- shamash wick and wax --> */}

                <motion.g>
                  <path
                    className="pointer"
                    onClick={() => {
                      setShamashLit(!shamashLit);

                      if (shamashLit) {
                        setNumberLit(numberLit - 1);
                        setShamashFlicker(false);
                      } else if (!shamashLit) {
                        setNumberLit(numberLit + 1);
                        setTimeout(() => {
                          setShamashFlicker(true);
                        }, 2000);
                      }
                    }}
                    fill="#7daaca"
                    d="M865.6,244.8h-31c-5,0-9,4-9,9v131.8h49.1V253.8C874.6,248.8,870.6,244.8,865.6,244.8z"
                  />
                  <path
                    fill="#504B42"
                    d="M850.1,226.9L850.1,226.9c-1,0-1.8,0.8-1.8,1.8v16h3.7v-16C851.9,227.8,851.1,226.9,850.1,226.9z"
                  />
                </motion.g>
              </g>
              {/* <!-- shamash corona --> */}
              {shamashLit && (
                <motion.g
                  className="pointer"
                  onClick={() => {
                    setShamashLit(!shamashLit);

                    if (shamashLit) {
                      setNumberLit(numberLit - 1);
                      setShamashFlicker(false);
                    } else if (!shamashLit) {
                      setNumberLit(numberLit + 1);
                      setTimeout(() => {
                        setShamashFlicker(true);
                      }, 2000);
                    }
                  }}
                  variants={coronaVariants}
                  initial="hidden"
                  animate={shamashFlicker ? "flickering" : "visible"}
                  // animate="visible"
                >
                  <circle
                    opacity="0.1"
                    fill="#FEFEDE"
                    cx="850.1"
                    cy="221.5"
                    r="115.7"
                  />
                  <circle
                    opacity="0.1"
                    fill="#FEFEDE"
                    cx="848.2"
                    cy="221.5"
                    r="79.7"
                  />
                  <circle
                    opacity="0.1"
                    fill="#FEFEDE"
                    cx="848.2"
                    cy="221.5"
                    r="47.2"
                  />
                </motion.g>
              )}
            </motion.g>
          )}
        </g>
      </motion.g>
    </svg>
  );
}

export default Menorah;
