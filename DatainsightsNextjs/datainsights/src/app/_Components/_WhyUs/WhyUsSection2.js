import React from "react";
import { Stack, Typography } from "@mui/material";
import { styleTypography4, styleTypography5 } from "./WhyUsStyle";
function WhyUsSection2() {
  return (
    <>
      <Stack
        direction={"column"}
        spacing={4}
        sx={{
          justifyContent: "center",
          alignItems: "center",
          height: "300px",
        }}
      >
        <Stack
          direction={"column"}
          spacing={2}
          width={"100%"}
          alignItems={"center"}
        >
          <Typography sx={styleTypography4}>
            Boost decisions effortlessly with DataInsights' impactful benefits.
          </Typography>
          <Typography sx={styleTypography5}>
            Step into a world where data is your secret weapon. Unleash the
            benefits as DataInsights refines operations, predicts trends, and
            customizes solutions seamlessly. Fortify your data fortress, ignite
            innovation, and magnify success. Immerse yourself in the
            irresistible ascent to greatness with DataInsights!
          </Typography>
        </Stack>
      </Stack>
    </>
  );
}

export default WhyUsSection2;
