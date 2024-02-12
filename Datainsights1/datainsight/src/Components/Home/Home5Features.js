import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import Buttons from "./Buttons";
import Home5Featuresdata from "./Home5FeaturesData";
import Borders from "./Borders";
import { styleTypography } from "./Home5FeaturesStyle";
function FeaturesSection() {
  return (
    <>
      <Stack
        direction={"column"}
        spacing={4}
        position={"relative"}
        overflow={"hidden"}
        zIndex={0}
        height={"920px"}
      >
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Borders
            widths={"800px"}
            heights={"800px"}
            zIndexs={1}
            tops={"16%"}
            rights={"-21%"}
            color={"#EDD"}
          />
          <Borders
            widths={"1000px"}
            heights={"1000px"}
            zIndexs={1}
            tops={"3%"}
            rights={"-24%"}
            color={"#EDD"}
          />
          <Buttons
            ids={5}
            backgrounds={"#EFECFF"}
            colors={"#C43A8C"}
            widths={"166px"}
          />
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Typography sx={styleTypography}>
            Explore and visualize diverse data effortlessly
          </Typography>
        </Box>
        <Stack
          width="100%"
          height="550px"
          direction={"row"}
          spacing={4}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <Home5Featuresdata
            ids={1}
            backgrounds={"transparent"}
            heights={"658px"}
          />
          <Home5Featuresdata
            ids={2}
            backgrounds={"#F9F9F9"}
            heights={"658px"}
          />
          <Home5Featuresdata
            ids={3}
            backgrounds={"tranparent"}
            heights={"658px"}
          />
        </Stack>
      </Stack>
    </>
  );
}

export default FeaturesSection;
