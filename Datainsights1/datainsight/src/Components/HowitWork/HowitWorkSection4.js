import React, { useState } from "react";
import { Stack, Typography, Box } from "@mui/material";
import { Data2 } from "./HowitWorkData";
function HowitWorkSection4({ ids }) {
  const [change, setChange] = useState(false);
  const isEven = ids % 2 === 0;
  const styleTypography8 = {
    fontFamily: "Nunito",
    fontWeight: 700,
    fontSize: "40px",
    lineHeight: "44px",
    alignContent: "center",
    width: "90%",
    color: change ? "white" : "black",
  };
  const styleTypography9 = {
    fontFamily: "Nunito",
    fontWeight: 600,
    lineHeight: "30px",
    color: change ? "white" : "#797979",
    fontSize: "22px",
    width: "90%",
  };

  const styleStack1 = {
    width: "38%",
    border: "1px solid #CBCBCB",
    background: change ? "#BE3788" : "#FFFFFF",
    borderRadius: "20px",
    alignItems: "center",
    justifyContent: "center",
    height: "180px",
    transition: "0.5s ease",
  };

  return (
    <>
      <Stack
        direction={"column"}
        spacing={4}
        sx={{
          justifyContent: "center",
          alignItems: "center",
          width: "90%",
          height: "200px",
        }}
      >
        {Data2.filter((item) => item.id === ids).map((item, index) => (
          <Stack
            key={index}
            direction="row"
            spacing={4}
            sx={{
              justifyContent: "space-around",
              alignItems: "center",
              width: "100%",
              position: "relative",
              zIndex: 0,
            }}
          >
            {isEven ? (
              <>
                <Box sx={{ width: "40%" }}>
                  <hr
                    style={{
                      border: "1px dashed #A9C7F7",
                      position: "absolute",
                      zIndex: 2,
                      width: "500px",
                      left: "27%",
                    }}
                  />
                </Box>
                <Stack
                  direction={"column"}
                  spacing={2}
                  sx={styleStack1}
                  onMouseEnter={() => setChange(true)}
                  onMouseLeave={() => setChange(false)}
                >
                  <Typography sx={styleTypography8}>{item.title}</Typography>
                  <Typography sx={styleTypography9}>{item.desc}</Typography>
                </Stack>
              </>
            ) : (
              <>
                <Stack
                  direction={"column"}
                  spacing={2}
                  sx={styleStack1}
                  onMouseEnter={() => setChange(true)}
                  onMouseLeave={() => setChange(false)}
                >
                  <Typography sx={styleTypography8}>{item.title}</Typography>
                  <Typography sx={styleTypography9}>{item.desc}</Typography>
                </Stack>
                <Box sx={{ width: "40%", position: "relative", zIndex: 1 }}>
                  <hr
                    style={{
                      border: "1px dashed #A9C7F7",
                      position: "absolute",
                      zIndex: 2,
                      width: "500px",
                      left: "-28%",
                    }}
                  />
                </Box>
              </>
            )}
          </Stack>
        ))}
      </Stack>
    </>
  );
}

export default HowitWorkSection4;
