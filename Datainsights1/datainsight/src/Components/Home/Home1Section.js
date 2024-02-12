import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import Buttons from "./Buttons";
import {
  styleTypography1,
  styleTypography2,
  styleBox1,
  styleBox2,
  styleBox3,
  styleStack,
} from "./Home1SectionStyle";

function Home1Section1() {
  return (
    <>
      <Box display={"flex"} height={"880px"} zIndex={0} position={"relative"}>
        <Box sx={styleBox1}>
          <Stack sx={styleStack} spacing={4} direction={"column"}>
            <Stack spacing={1}>
              <Typography sx={styleTypography1}>
                <span
                  style={{
                    color: " #C84D9A",
                    fontFamily: "Nunito",
                    fontSize: "50px",
                    fontWeight: 800,
                    lineHeight: "110%",
                  }}
                >
                  DataInsights
                </span>
                <br />
                Revolutionize Exploration with Flawless Visualization
              </Typography>
              <Typography sx={styleTypography2}>
                Unlock Insights for Informed Decision-Making
              </Typography>
            </Stack>
            <Stack direction={"row"} spacing={3}>
              <Buttons
                ids={2}
                backgrounds={"rgba(161, 40, 115, 1)"}
                colors={"white"}
                widths={"200px"}
              />
              <Buttons
                ids={3}
                backgrounds={"white"}
                colors={"black"}
                widths={"200px"}
                bordercolor={"rgba(161, 40, 115, 1)"}
              />
            </Stack>
          </Stack>
        </Box>
        <Box sx={styleBox2}>
          <Box sx={styleBox3}></Box>
        </Box>
        {/* <ChatBox /> */}
      </Box>
    </>
  );
}

export default Home1Section1;
