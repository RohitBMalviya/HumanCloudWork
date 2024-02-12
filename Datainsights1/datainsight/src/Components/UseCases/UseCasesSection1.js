import React from "react";
import { Typography, Stack, Box } from "@mui/material";
import Image1 from "../../Images/UseCaseImage1.png";
import { styleTypography1, styleTypography2 } from "./UseCasesStyle";

const UseCaseSection1 = () => {
  return (
    <>
      <Stack
        direction={"column"}
        spacing={4}
        sx={{
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "900px",
        }}
      >
        <Stack
          direction={"column"}
          spacing={4}
          sx={{
            justifyContent: "center",
            alignItems: "center",
            width: "80%",
          }}
        >
          <Typography sx={styleTypography1}>Use Case</Typography>
          <Typography sx={styleTypography2}>
            Discover insights, make informed decisions with DataInsights your
            ultimate exploration companion. DataInsight is the architect of your
            data revolution. Elevate your business with accuracy, simplicity,
            and unmatched power, enabling creativity in every data-driven
            activity.
          </Typography>
        </Stack>
        <Box>
          <img
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
};

export default UseCaseSection1;
