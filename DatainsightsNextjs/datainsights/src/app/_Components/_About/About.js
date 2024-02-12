import { Box } from "@mui/material";
import React from "react";
import AboutSection1 from "./AboutSection1";
import AboutSection2 from "./AboutSection2";

function About() {
  return (
    <>
      <Box paddingTop={"250px"}>
        <AboutSection1 />
        <AboutSection2 ids={1} heights={"580px"} />
        <AboutSection2 ids={2} heights={"650px"} />
      </Box>
    </>
  );
}

export default About;
