import { Typography, Box, Stack } from "@mui/material";
import { Data1 } from "./HowitWorkData";
import React from "react";
import { styleTypography8, styleTypography9 } from "./HowitWorkStyle";

function HowitWorkSection2({ ids, heights }) {
  const isEven = ids % 2 !== 0;

  return (
    <>
      <Stack
        direction={"row"}
        sx={{
          alignItems: "center",
          justifyContent: "center",
          width: "80%",
          height: heights,
        }}
      >
        <Box>
          {Data1.filter((item) => item.id === ids).map((item, index) => (
            <Stack
              key={index}
              direction="row"
              spacing={2}
              sx={{
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
              }}
            >
              {isEven ? (
                <>
                  <Box
                    sx={{
                      width: "50%",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <img src={item.img} alt="-" />
                  </Box>
                  <Stack direction={"column"} spacing={2} sx={{ width: "50%" }}>
                    <Typography sx={styleTypography8}>{item.title}</Typography>
                    <Typography sx={styleTypography9}>{item.desc}</Typography>
                  </Stack>
                </>
              ) : (
                <>
                  <Stack direction={"column"} spacing={2} sx={{ width: "50%" }}>
                    <Typography sx={styleTypography8}>{item.title}</Typography>
                    <Typography sx={styleTypography9}>{item.desc}</Typography>
                  </Stack>
                  <Box
                    sx={{
                      width: "50%",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <img src={item.img} alt="-" />
                  </Box>
                </>
              )}
            </Stack>
          ))}
        </Box>
      </Stack>
    </>
  );
}

export default HowitWorkSection2;
