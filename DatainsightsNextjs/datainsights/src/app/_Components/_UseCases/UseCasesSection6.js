import { Stack, Typography, Box, Divider } from "@mui/material";
import React from "react";
import { styleTypography4, styleTypography5 } from "./UseCasesStyle";
import AboutSection2 from "../_About/AboutSection2";

function UseCaseSection6({ SelectedImageIndex }) {
  return (
    <>
      <Box sx={{ display: SelectedImageIndex === 1 ? "flex" : "none" }}>
        <Stack
          direction={"column"}
          spacing={4}
          sx={{
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Stack direction={"column"} spacing={4} sx={{ width: "80%" }}>
            <Typography sx={styleTypography4}>
              Challenges Faced by Banking Industries
            </Typography>
            <Typography sx={{ ...styleTypography5, width: "100%" }}>
              Challenges for Banks in Handling Data Delve into the hurdles that
              banks face in managing data effectively. Navigating through
              regulatory compliance, ensuring data security, and adapting to the
              fast-paced digital era are key challenges. Understand how banks
              work to overcome these obstacles while maintaining the trust and
              confidence of their customers.
            </Typography>
          </Stack>
          <Stack direction={"column"} spacing={8} sx={{ height: "2000px" }}>
            <AboutSection2 ids={5} heights={"500px"} />
            <AboutSection2 ids={6} heights={"500px"} />
            <AboutSection2 ids={7} heights={"500px"} />
            <AboutSection2 ids={8} heights={"500px"} />
          </Stack>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Divider sx={{ width: "80%" }} />
          </Box>
        </Stack>
      </Box>
    </>
  );
}

export default UseCaseSection6;
