import { Stack } from "@mui/material";
import React from "react";
import Home5Featuresdata from "../Home/Home5FeaturesData";

function Section1() {
  return (
    <>
      <Stack
        width="100%"
        height="550px"
        direction={"row"}
        spacing={4}
        sx={{ display: "flex", justifyContent: "center" }}
      >
        <Home5Featuresdata
          ids={4}
          backgrounds={"transparent"}
          heights={"560px"}
        />
        <Home5Featuresdata ids={5} backgrounds={"#F9F9F9"} heights={"560px"} />
        <Home5Featuresdata
          ids={6}
          backgrounds={"tranparent"}
          heights={"560px"}
        />
      </Stack>
    </>
  );
}

export default Section1;
