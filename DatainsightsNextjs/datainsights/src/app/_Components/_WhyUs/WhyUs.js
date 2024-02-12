import React from "react";
import { Box, Stack } from "@mui/material";
import AboutSection2 from "../_About/AboutSection2";
import Home8Section from "../_Home/Home8Section";
import WhySection1 from "./WhyUsSection1";
import WhySection2 from "./WhyUsSection2";
import WhySection3 from "./WhyUsSection3";
import HowitWorkSection4 from "../_HowitWork/HowitWorkSection4";

function WhyUse() {
  return (
    <>
      <Box paddingTop={"300px"}>
        <WhySection1 />
        <WhySection2 />
        <Stack
          direction={"column"}
          spacing={6}
          justifyContent={"center"}
          alignItems={"center"}
          height={"1050px"}
        >
          <HowitWorkSection4 ids={9} />
          <HowitWorkSection4 ids={10} />
          <HowitWorkSection4 ids={11} />
          <HowitWorkSection4 ids={12} />
        </Stack>
        <WhySection3 />
        <AboutSection2 ids={3} heights={"480px"} />
        <AboutSection2 ids={4} heights={"640px"} />
        <Home8Section />
      </Box>
    </>
  );
}

export default WhyUse;
