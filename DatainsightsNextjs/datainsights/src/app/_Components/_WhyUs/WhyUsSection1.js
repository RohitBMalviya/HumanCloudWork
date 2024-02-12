import React from "react";
import Image from "next/image";
import { Typography, Stack, Box } from "@mui/material";
import Image1 from "../../_Assests/_Images/HowitWorkImage1.png";
import MackBook from "../../_Assests/_Images/HowitWorkMackbook.svg";
import {
  styleTypography1,
  styleTypography2,
  styleTypography3,
} from "./WhyUsStyle";
const Section1 = () => {
  return (
    <>
      <Stack direction="column" alignItems="center" spacing={6}>
        <Stack
          direction="column"
          spacing={2}
          alignItems="center"
          justifyContent="center"
        >
          <Typography sx={styleTypography1}>
            Why Choose Datainsights ?
          </Typography>
          <Typography sx={styleTypography2}>
            At DataInsights, we understand that making sense of your data can be
            a daunting task, especially when dealing with large and complex
            datasets. That's why we've developed a suite of data exploration and
            visualization tools that are designed to help you uncover real-time
            insights and make data-driven decisions with ease.
          </Typography>
        </Stack>
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
        <Stack
          direction="row"
          spacing={4}
          justifyContent="center"
          alignItems="center"
          width={"80%"}
        >
          <Box>
            <Image
              src={MackBook}
              alt="images"
              style={{
                width: "483px",
                height: "316px",
                marginTop: "49px",
              }}
            />
          </Box>
          <Typography sx={styleTypography3}>
            What sets us apart from traditional business intelligence tools is
            our ability to handle complex data analysis and provide real-time
            insights. Our tools are equipped with advanced analytics
            capabilities and machine learning algorithms that enable you to
            explore your data in depth, without any lag or delay.
            <br />
            <br />
            We also recognize that dealing with big data can be a challenge for
            many organizations. That's why our tools are designed to handle
            massive amounts of data with ease, ensuring that you can analyze and
            visualize your data quickly and efficiently.
          </Typography>
        </Stack>
      </Stack>
    </>
  );
};

export default Section1;
