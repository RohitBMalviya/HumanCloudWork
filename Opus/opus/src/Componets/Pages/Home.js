import { Box } from "@mui/material";
import React from "react";
import Section1 from "../Sections/Section1";
import Section2 from "../Sections/Section2";
import Section3 from "../Sections/Section3";
import Section4 from "../Sections/Section4";
import Section5 from "../Sections/Section5";
import Footer from "../Footer";

function Home() {
  return (
    <>
      <Box>
        <Box>
          <Section1 />
          <Section2 />
          <Section3 />
          <Section4 />
          <Section5 />
        </Box>
        <Footer />
      </Box>
    </>
  );
}

export default Home;
