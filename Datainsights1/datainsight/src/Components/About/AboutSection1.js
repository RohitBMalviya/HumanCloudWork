import React from "react";
import About1 from "../../Images/About1.png";
import About2 from "../../Images/About2.png";
import { Typography, Stack, Box } from "@mui/material";
import {
  styleTypography1,
  styleTypography2,
  styleTypography3,
  styleTypography4,
} from "./AboutStyle";

const AboutSection1 = () => {
  return (
    <>
      <Stack
        direction={"column"}
        spacing={1}
        justifyContent="center"
        alignItems="center"
        height={"1200px"}
        position={"relative"}
        zIndex={0}
      >
        <Typography sx={styleTypography1}>About DataInsights</Typography>
        <Typography sx={styleTypography2}>
          DataInsights Unleashes a Data Revolution using HumanCloud Technology-
          Blending Machine Learning and Human Insights for Powerful Discoveries!
        </Typography>
        <Stack
          direction="row"
          sx={{
            justifyContent: "space-around",
            alignItems: "center",
            width: "80%",
            height: "700px",
          }}
        >
          <img
            src={About2}
            alt="images"
            style={{
              width: "884px",
              height: "583px",
              borderRadius: "50px",
            }}
          />
          <img
            src={About1}
            alt="images"
            style={{ width: "476px", height: " 583px" }}
          />
        </Stack>
        <Box
          sx={{
            justifyContent: "center",
            alignItems: "center",
            width: "80%",
          }}
        >
          <Stack
            direction={"row"}
            spacing={8}
            justifyContent="center"
            alignItems="flex-start"
            width={"%"}
          >
            <Typography sx={styleTypography3}>What we do</Typography>

            <Typography sx={styleTypography4}>
              DataInsights provides a user-friendly platform to help you
              navigate your data journey. Simplify analysis to achieve better
              outcomes, and uncover a world of amazing visualizations and shared
              discoveries.
              <br />
              <br />
              Unlock trends using DataInsight's predictive analytics to make
              more informed decisions. Your insights are important in shaping
              your data journey into a seamless, empowering experience.- what we
              do content matter!
            </Typography>
          </Stack>
        </Box>
      </Stack>
    </>
  );
};

export default AboutSection1;
