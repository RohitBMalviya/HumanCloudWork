import { Box, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import Home7BenefitsSection from "../Home/Home7BenefitsSection";
import { styleTypography6 } from "./WhyUsStyle";

function WhyUsSection2() {
  return (
    <>
      <Stack
        direction={"column"}
        spacing={4}
        height={"550px"}
        alignItems={"center"}
      >
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Typography sx={styleTypography6}>
            DataInsights Organized Your Data Guides Wise Choices for Lasting
            Achievements in Every Endeavor
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
            width: "100%",
          }}
        >
          <Grid
            container
            rowGap={4}
            columnGap={8}
            justifyContent={"center"}
            item
          >
            <Grid item xs={4}>
              <Home7BenefitsSection ids={5} />
            </Grid>
            <Grid item xs={4}>
              <Home7BenefitsSection ids={6} />
            </Grid>
          </Grid>
        </Box>
      </Stack>
    </>
  );
}

export default WhyUsSection2;
