import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import Section1 from "./FeaturesSection1";
import Home6Section from "../_Home/Home6Section";
import { styleTypography1, styleTypography2 } from "./FeaturesStyle";

function Features() {
  return (
    <>
      <Box>
        <Stack
          direction={"column"}
          spacing={2}
          justifyContent="center"
          alignItems="center"
          paddingTop={"250px"}
        >
          <Typography sx={styleTypography1}>Features</Typography>
          <Typography sx={styleTypography2}>
            Step into the realm of boundless opportunities with DataInsights,
            where every piece of data transforms into your ultimate advantage.
            Delve into the extraordinary features that position DataInsights as
            the catalyst for informed decisions and unrivaled triumph in the
            business landscape.
          </Typography>
          <Section1 />
        </Stack>
        <Home6Section
          directions={"flex-start"}
          ids={2}
          lefts={"50%"}
          BorderRadius={"50px 0px 0px 50px"}
          left1={"81%"}
          left2={"8%"}
          heights={"900px"}
          widths={"60%"}
        />
        <Home6Section
          directions={"flex-end"}
          ids={3}
          lefts={"4%"}
          BorderRadius={"0px 50px 50px 0px"}
          left2={"38%"}
          heights={"900px"}
          widths={"78%"}
        />
        <Home6Section
          directions={"flex-start"}
          ids={4}
          lefts={"48%"}
          BorderRadius={"50px 0px 0px 50px"}
          left1={"81%"}
          left2={"7%"}
          heights={"1000px"}
          widths={"79%"}
        />
      </Box>
    </>
  );
}

export default Features;
