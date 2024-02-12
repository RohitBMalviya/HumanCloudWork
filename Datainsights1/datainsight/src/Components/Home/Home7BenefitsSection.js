import React from "react";
import { Box, Grid, Stack, Typography } from "@mui/material";
import Home7BenefitsData from "./Home7BenefitsData";
import {
  styleTypography1,
  styleTypography2,
  styleBox,
} from "./Home7BenefitsStyle";

function Home7BenefitsSection({ ids }) {
  return (
    <>
      {Home7BenefitsData.filter((items) => items.id === ids).map(
        (items, index) => (
          <Box key={index} sx={styleBox}>
            <Stack
              direction={"row"}
              spacing={2}
              sx={{ justifyContent: "center", alignItems: "center" }}
            >
              <Box>
                <img
                  src={items.icons}
                  alt="icons"
                  style={{ width: "160px", height: "150px" }}
                />
              </Box>
              <Stack direction={"column"} spacing={2} sx={{ width: "80%" }}>
                <Grid item>
                  <Typography sx={styleTypography1}>{items.title}</Typography>
                </Grid>
                <Grid item>
                  <Typography sx={styleTypography2}>{items.desc}</Typography>
                </Grid>
              </Stack>
            </Stack>
          </Box>
        )
      )}
    </>
  );
}

export default Home7BenefitsSection;
