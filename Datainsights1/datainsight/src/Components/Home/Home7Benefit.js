import { Box, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import Buttons from "./Buttons";
import { styleTypography, styleBox1, styleBox2 } from "./Home7BenefitsStyle";

import Home7BenefitsSection from "./Home7BenefitsSection";
function BenefitSection() {
  return (
    <>
      <Stack
        spacing={4}
        sx={{
          width: "100%",
          height: "1024px",
          position: "relative",
          zIndex: 0,
        }}
      >
        <Box sx={styleBox1}>
          <Buttons
            ids={4}
            backgrounds={"#EFECFF"}
            colors={"#C43A8C"}
            widths={"166px"}
          />
        </Box>
        <Box sx={styleBox1}>
          <Typography sx={styleTypography}>
            Amplify Decision-Making, Embrace Ease and Clarity with DataInsights
            Benefits
          </Typography>
        </Box>
        <Box sx={styleBox2}>
          <Grid
            container
            rowGap={4}
            columnGap={8}
            justifyContent={"center"}
            item
            xs={12}
          >
            <Grid item xs={4}>
              <Home7BenefitsSection ids={1} />
            </Grid>
            <Grid item xs={4}>
              <Home7BenefitsSection ids={2} />
            </Grid>
            <Grid item xs={4}>
              <Home7BenefitsSection ids={3} />
            </Grid>
            <Grid item xs={4}>
              <Home7BenefitsSection ids={4} />
            </Grid>
          </Grid>
        </Box>
      </Stack>
    </>
  );
}

export default BenefitSection;
