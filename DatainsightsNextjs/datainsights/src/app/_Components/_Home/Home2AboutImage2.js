import Image from "next/image";
import React from "react";
import AboutChart from "../../_Assests/_Images/Home2AboutChart.svg";
import Aboutcharillustration from "../../_Assests/_Images/Home2Aboutcharillustration.svg";
import Dashboard from "../../_Assests/_Images/Home2Dashboard.svg";
import Rectangle1 from "../../_Assests/_Images/Home2Rectangle.svg";
import Rectangle2 from "../../_Assests/_Images/Home2Rectangle.svg";
import Home2AboutImage1 from "./Home2AboutImage1";
import Pattern1 from "../../_Assests/_Images/Home2BackgroundPattern1.svg";
import Pattern2 from "../../_Assests/_Images/Home2BackgroundPattern2.svg";
import Borders from "./Borders";
import { Box } from "@mui/material";

function Home2AboutImage2({ scrollings }) {
  return (
    <>
      <Box sx={{ width: "100%", height: "100%", position: "relative" }}>
        <Image
          src={Dashboard}
          alt="-"
          style={{
            position: "absolute",
            zIndex: 5,
            width: "100%",
            height: "80%",
            top: 0,
            left: 0,
          }}
        />
        <Home2AboutImage1 ids={1} tops={75} rights={75} />
        <Home2AboutImage1 ids={2} tops={70} lefts={40} />
        <Home2AboutImage1 ids={4} tops={170} rights={90} />
        <Home2AboutImage1 ids={5} tops={150} lefts={70} />
        <Home2AboutImage1 ids={6} tops={220} lefts={70} />
      </Box>

      <Image
        src={Rectangle1}
        alt="-"
        style={{
          position: "absolute",
          zIndex: 3,
          width: "100%",
          height: "55%",
          bottom: scrollings ? 0 : 110,
          left: scrollings ? 160 : 60,
          transition: "all 1s",
        }}
      />
      <Borders
        widths={"214px"}
        heights={"198px"}
        tops={"45%"}
        lefts={"68%"}
        zIndexs={4}
        color={"#FFFFFF33"}
      />

      <Image
        src={Rectangle2}
        alt="-"
        style={{
          position: "absolute",
          zIndex: 3,
          width: "100%",
          height: "55%",
          bottom: scrollings ? 260 : 100,
          right: scrollings ? 110 : 40,
          transition: "all 1s",
        }}
      />
      <Image
        src={Pattern1}
        alt="-"
        style={{
          width: "100%",
          height: "45%",
          position: "absolute",
          bottom: scrollings ? 280 : 100,
          right: scrollings ? 35 : 0,
          zIndex: 4,
          transition: "all 0.5s",
        }}
      />
      <Image
        src={Pattern2}
        alt="-"
        style={{
          width: "100%",
          height: "35%",
          position: "absolute",
          bottom: scrollings ? 260 : 100,
          right: scrollings ? 180 : 120,
          zIndex: 4,
          transition: "all 0.5s",
        }}
      />
      <Borders
        widths={"329px"}
        heights={"135px"}
        tops={"4%"}
        lefts={"40%"}
        zIndexs={4}
        color={"#FFFFFF33"}
      />
      <Borders
        widths={"205px"}
        heights={"157px"}
        tops={"-11%"}
        lefts={"11%"}
        zIndexs={4}
        color={"#FFFFFF33"}
      />
      <Image
        src={AboutChart}
        alt="-"
        style={{
          width: "100%",
          height: "50%",
          position: "absolute",
          top: scrollings ? 150 : 0,
          right: scrollings ? 180 : 0,
          transition: "all 1s",
          zIndex: scrollings ? 6 : 0,
        }}
      />
      <Image
        src={Aboutcharillustration}
        alt="-"
        style={{
          width: "100%",
          height: "50%",
          position: "absolute",
          zIndex: scrollings ? 6 : 0,
          top: scrollings ? 0 : 0,
          left: scrollings ? 200 : 0,
          transition: "all 1s",
        }}
      />
    </>
  );
}

export default Home2AboutImage2;
