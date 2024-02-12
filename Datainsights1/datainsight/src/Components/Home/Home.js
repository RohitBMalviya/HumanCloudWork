import { Box } from "@mui/material";
import React from "react";
import Home1Section from "./Home1Section";
import Home2About from "./Home2About";
import Home3UseCase from "./Home3UseCase";
import Home4HowitWork from "./Home4HowitWork";
import Home5Features from "./Home5Features";
import Home6Section from "./Home6Section";
import Home7Benefit from "./Home7Benefit";
import Home8Section from "./Home8Section";
function Home() {
  return (
    <>
      <Box>
        <Home1Section />
        <Home2About />
        <Home3UseCase />
        <Home4HowitWork />
        <Home5Features />
        <Home6Section
          directions={"flex-start"}
          ids={1}
          lefts={"48%"}
          BorderRadius={"50px 0px 0px 50px"}
          left1={"81%"}
          left2={"7%"}
          heights={"1000px"}
          widths={"80%"}
        />
        <Home7Benefit />
        <Home8Section />
      </Box>
    </>
  );
}

export default Home;
