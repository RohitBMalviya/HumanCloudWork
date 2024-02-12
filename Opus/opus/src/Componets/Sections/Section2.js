import {
  Box,
  Grid,
  Typography,
  Button,
  Stack,
  IconButton,
} from "@mui/material";
import React from "react";
import ArrowOutwardRoundedIcon from "@mui/icons-material/ArrowOutwardRounded";
import ParkRoundedIcon from "@mui/icons-material/ParkRounded";
import Vedio from "../Images/Vedio.png";
function Section2() {
  return (
    <>
      <Box sx={{ m: 5, ml: 12, width: "70%" }}>
        <Stack>
          <Typography
            sx={{
              width: "10%",
              color: "#67718E",
              fontFamily: "Inter",
              fontSize: "14px",
              fontStyle: "normal",
              fontWeight: 700,
              lineHeight: "24px" /* 200% */,
              letterSpacing: "1.5px",
              margin: 1,
              ml: 13,
            }}
          >
            VIDEO TITLE
          </Typography>
          <Typography
            sx={{
              width: "60%",
              color: "#061237",
              fontFamily: "Inter",
              fontSize: "40px",
              fontStyle: "normal",
              fontWeight: 700,
              lineHeight: "50px" /* 200% */,
              margin: 1,
              ml: 13,
            }}
          >
            Inform users with video sections
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
            }}
          >
            <img src={Vedio} style={{ width: "80%" }} />
          </Box>
          <Box sx={{ display: "flex", justifyContent: "flex-end", mr: 12 }}>
            <Typography
              sx={{
                width: "40%",
                color: " #37456C",
                fontFamily: "Inter",
                fontSize: "15px",
                fontStyle: "normal",
                fontWeight: 700,
                lineHeight: "20px" /* 200% */,
                margin: 1,
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget
              consectetur eros. Aliquam erat volutpat. Praesent pulvinar arcu
              non lectus dapibus, a pulvinar mauris aliquam.
            </Typography>
          </Box>
        </Stack>
      </Box>
      <Box display={"flex"} sx={{ m: 5, ml: 20 }}>
        <Stack direction={{ xs: "column", md: "row" }} spacing={2}>
          <Grid sx={{ width: "50%" }}>
            <Grid>
              <Typography
                sx={{
                  color: " #061237",
                  fontFamily: "Inter",
                  fontSize: "48px",
                  fontStyle: "normal",
                  fontWeight: 700,
                  lineHeight: "56px" /* 200% */,
                  margin: 1,
                  width: "60%",
                }}
              >
                Make your site better with Opus
              </Typography>
            </Grid>
            <Grid>
              <Typography
                sx={{
                  width: "70%",
                  color: " #37456C",
                  fontFamily: "Inter",
                  fontSize: "16px",
                  fontStyle: "normal",
                  fontWeight: 700,
                  lineHeight: "32px" /* 200% */,
                  margin: 1,
                  ml: 15,
                  mb: 5,
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla.
              </Typography>
            </Grid>
            <Button variant="contained">Learn More</Button>
          </Grid>
          <Grid>
            <Box>
              <IconButton>
                <ArrowOutwardRoundedIcon sx={{ color: "blue" }} />
              </IconButton>
              <Box>
                <Typography
                  sx={{
                    width: "50%",
                    color: " #061237",
                    fontFamily: "Inter",
                    fontSize: "24px",
                    fontStyle: "normal",
                    fontWeight: 700,
                    lineHeight: "32px" /* 200% */,
                    margin: 1,
                  }}
                >
                  Build or Customize a Website in Minutes
                </Typography>
              </Box>
            </Box>
            <Grid>
              <Box>
                <IconButton>
                  <ParkRoundedIcon sx={{ color: "blue" }} />
                </IconButton>
                <Box>
                  <Typography
                    sx={{
                      width: "60%",
                      color: " #061237",
                      fontFamily: "Inter",
                      fontSize: "24px",
                      fontStyle: "normal",
                      fontWeight: 700,
                      lineHeight: "32px" /* 200% */,
                      margin: 1,
                    }}
                  >
                    Our UI Kit was made for creativity.
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Stack>
      </Box>
    </>
  );
}

export default Section2;
