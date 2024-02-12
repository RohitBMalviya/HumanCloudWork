import { Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import React from "react";
import Image1 from "../../_Assests/_Images/HowitWorkImage2.png";
import { styleTypography1, styleTypography2 } from "./HowitWorkStyle";
import Image from "next/image";

function HowitWorkSection1() {
  return (
    <>
      <Stack
        direction={"column"}
        spacing={4}
        alignItems="center"
        height={"900px"}
      >
        <Typography sx={styleTypography1}>How Does it Work</Typography>
        <Typography sx={styleTypography2}>
          Explore the mechanics of DataInsights, where data seamlessly
          transforms into insights. Real-time analytics, personalized
          dashboards, and automated reporting redefine how you interact with
          data, ensuring informed decisions at every turn.
        </Typography>
        <Box>
          <Image
            src={Image1}
            alt="images"
            style={{
              width: "1480px",
              height: "583px",
              borderRadius: "23px",
            }}
          />
        </Box>
      </Stack>
    </>
  );
}

export default HowitWorkSection1;
