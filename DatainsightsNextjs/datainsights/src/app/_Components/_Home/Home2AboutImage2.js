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

function Home2AboutImage2({ scrollings }) {
  return (
    <>
      <Image
        src={Dashboard}
        alt="-"
        style={{
          transition: "all 0.5s",
          position: "absolute",
          zIndex: 5,
          width: "300px",
          height: "226px",
          top: "20%",
          left: "30%",
        }}
      />
      <Home2AboutImage1 ids={1} widths={"13%"} tops={"35%"} lefts={"34%"} />
      <Home2AboutImage1 ids={2} widths={"5%"} tops={"33%"} lefts={"48.5%"} />
      <Home2AboutImage1 ids={4} widths={"9%"} tops={"54%"} lefts={"35%"} />
      <Home2AboutImage1 ids={5} widths={"15%"} tops={"52%"} lefts={"46.7%"} />
      <Home2AboutImage1 ids={6} widths={"15%"} tops={"68%"} lefts={"46.7%"} />
      <Image
        src={Rectangle1}
        alt="-"
        style={{
          position: "absolute",
          zIndex: 3,
          width: "342px",
          height: "180px",
          top: scrollings ? "48%" : "28%",
          right: scrollings ? "15%" : "31%",
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
          width: "342px",
          height: "180px",
          bottom: scrollings ? "46%" : "22%",
          right: scrollings ? "44%" : "32%",
          transition: "all 1s",
        }}
      />
      <Image
        src={Pattern1}
        alt="-"
        style={{
          position: "absolute",
          top: scrollings ? "8%" : "45%",
          left: scrollings ? "43%" : "30%",
          zIndex: 4,
          transition: "all 0.5s",
        }}
      />
      <Image
        src={Pattern2}
        alt="-"
        style={{
          position: "absolute",
          top: scrollings ? "26%" : "34%",
          left: scrollings ? "18%" : "52%",
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
          width: "21%",
          position: "absolute",
          top: scrollings ? "54%" : "52%",
          left: scrollings ? "21%" : "24%",
          transition: "all 1s",
          zIndex: scrollings ? 6 : 0,
        }}
      />
      <Image
        src={Aboutcharillustration}
        alt="-"
        style={{
          width: "21%",
          position: "absolute",
          zIndex: scrollings ? 6 : 0,
          top: scrollings ? "14%" : "14%",
          right: scrollings ? "24%" : "30%",
          transition: "all 1s",
        }}
      />
    </>
  );
}

export default Home2AboutImage2;
