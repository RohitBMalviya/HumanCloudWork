import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import { styleTypography5, styleTypography6 } from "./AboutStyle";
import Data from "./AboutSection2Data";

const AboutSection2 = ({ ids, heights }) => {
  // Check if ids is even
  const isEven = ids % 2 === 0;

  return (
    <>
      <Stack
        direction="column"
        spacing={10}
        sx={{
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: heights,
        }}
      >
        {Data.filter((item) => item.id === ids).map((item, index) => (
          <Stack
            key={index}
            direction="row"
            spacing={4}
            sx={{
              justifyContent: "center",
              alignItems: "center",
              width: "80%",
            }}
          >
            {isEven ? (
              <>
                <Box sx={{ width: "50%" }}>
                  <img
                    src={item.img}
                    alt="images"
                    style={{ width: "100%", height: "100%" }}
                  />
                </Box>
                <Box sx={{ width: "40%" }}>
                  <Typography sx={styleTypography5}>{item.title}</Typography>
                  <Typography sx={styleTypography6}>
                    {item.desc1}
                    <br />
                    <br />
                    {item.desc2}
                  </Typography>
                </Box>
              </>
            ) : (
              <>
                <Box sx={{ width: "40%" }}>
                  <Typography sx={styleTypography5}>{item.title}</Typography>
                  <Typography sx={styleTypography6}>
                    {item.desc1}
                    <br />
                    <br />
                    {item.desc2}
                  </Typography>
                </Box>
                <Box sx={{ width: "50%" }}>
                  <img
                    src={item.img}
                    alt="images"
                    style={{ width: "100%", height: "100%" }}
                  />
                </Box>
              </>
            )}
          </Stack>
        ))}
      </Stack>
    </>
  );
};

export default AboutSection2;
