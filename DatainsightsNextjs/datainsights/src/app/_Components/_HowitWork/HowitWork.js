import React from "react";
import HowitWorkSection1 from "./HowitWorkSection1";
import HowitWorkSection2 from "./HowitWorkSection2";
import HowitWorkSection3 from "./HowitWorkSection3";
import HowitWorkSection4 from "./HowitWorkSection4";
import { Box, Stack } from "@mui/material";
import Home8Section from "../_Home/Home8Section";

function HowitWork() {
  return (
    <>
      <Box paddingTop={"300px"}>
        <HowitWorkSection1 />
        <Stack direction={"column"} spacing={4} alignItems={"center"}>
          <HowitWorkSection2 ids={1} heights={"600px"} />
          <HowitWorkSection2 ids={2} heights={"600px"} />
          <HowitWorkSection2 ids={3} heights={"600px"} />
          <HowitWorkSection2 ids={4} heights={"600px"} />
        </Stack>
        <HowitWorkSection3 />
        <Stack
          direction={"column"}
          spacing={6}
          alignItems={"center"}
          height={"2000px"}
        >
          <HowitWorkSection4 ids={1} />
          <HowitWorkSection4 ids={2} />
          <HowitWorkSection4 ids={3} />
          <HowitWorkSection4 ids={4} />
          <HowitWorkSection4 ids={5} />
          <HowitWorkSection4 ids={6} />
          <HowitWorkSection4 ids={7} />
          <HowitWorkSection4 ids={8} />
        </Stack>
        <Home8Section />
      </Box>
    </>
  );
}

export default HowitWork;
