import {
  Box,
  Button,
  Grid,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import ImageIcon from "@mui/icons-material/Image";
import SendIcon from "@mui/icons-material/Send";
import DoneIcon from "@mui/icons-material/Done";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import Image2 from "../Images/Image2.png";
import Logo2 from "../Images/Logo1.svg";

function Section4() {
  return (
    <>
      {/* BOX1====================================================================================================================== */}
      <Box display={"flex"} sx={{ m: 5, ml: 10 }}>
        <Stack direction={{ xs: "column", md: "row" }} spacing={4}>
          <Grid>
            <Box display={"flex"} sx={{ height: "40%", margin: 5 }}>
              <IconButton
                sx={{
                  marginBottom: 20,
                  background: "blue",
                }}
              >
                <SendIcon />
              </IconButton>
              <Box sx={{ width: "80%" }}>
                <Typography
                  width={"40%"}
                  sx={{
                    color: " #061237",
                    fontFamily: "Inter",
                    fontSize: "24px",
                    fontStyle: "normal",
                    fontWeight: 700,
                    lineHeight: "20px" /* 200% */,
                    letterSpacing: "1px",
                    margin: 1,
                  }}
                >
                  Choose your sections
                </Typography>
                <Typography
                  width={"90%"}
                  sx={{
                    color: " #061237",
                    fontFamily: "Inter",
                    fontSize: "14px",
                    fontStyle: "normal",
                    fontWeight: 400,
                    lineHeight: "20px" /* 200% */,
                    letterSpacing: "1px",
                    margin: 1,
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique.
                </Typography>
              </Box>
            </Box>
            <Grid>
              <Box display={"flex"} sx={{ height: "20%", margin: 5 }}>
                <IconButton sx={{ marginBottom: 20, background: "blue" }}>
                  <ImageIcon />
                </IconButton>
                <Box sx={{ width: "80%" }}>
                  <Typography
                    width={"45%"}
                    sx={{
                      color: " #061237",
                      fontFamily: "Inter",
                      fontSize: "24px",
                      fontStyle: "normal",
                      fontWeight: 700,
                      lineHeight: "24px" /* 200% */,
                      letterSpacing: "1px",
                      margin: 1,
                    }}
                  >
                    Add the images and text you need
                  </Typography>
                  <Typography
                    width={"90%"}
                    sx={{
                      color: " #061237",
                      fontFamily: "Inter",
                      fontSize: "14px",
                      fontStyle: "normal",
                      fontWeight: 400,
                      lineHeight: "20px" /* 200% */,
                      letterSpacing: "1px",

                      margin: 1,
                    }}
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros elementum tristique.
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
          <Grid sx={{ height: "80%", width: "80%" }}>
            <Grid>
              <Typography
                width={"70%"}
                sx={{
                  color: " #061237",
                  fontFamily: "Inter",
                  fontSize: "48px",
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "45px" /* 200% */,
                  letterSpacing: "1px",
                  margin: 5,
                }}
              >
                Create pages using beautiful components.
              </Typography>
            </Grid>
            <Grid>
              <Typography
                width={"50%"}
                sx={{
                  color: " #37456C",
                  fontFamily: "Inter",
                  fontSize: "16px",
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "20px" /* 200% */,
                  letterSpacing: "1px",
                  margin: 5,
                  padding: 4,
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla.
              </Typography>
            </Grid>
            <Button
              variant="contained"
              sx={{ background: "rgba(247, 249, 252, 1)", color: "black" }}
            >
              Learn More
            </Button>
          </Grid>
        </Stack>
      </Box>

      {/* BOX2====================================================================================================================== */}
      <Box
        sx={{
          display: { xs: "contents", md: "flex" },
          justifyContent: "space-between",
          margin: 5,
          width: "80%",
          ml: 12,
        }}
      >
        <Stack direction={{ xs: "column", md: "row" }} spacing={2}>
          <Grid>
            <Box>
              <Stack>
                <Typography
                  sx={{
                    width: "20%",
                    color: " #67718E",
                    fontFamily: "Inter",
                    fontSize: "14px",
                    fontStyle: "normal",
                    fontWeight: 700,
                    lineHeight: "20px" /* 200% */,
                    letterSpacing: "1px",
                    textTransform: "uppercase",
                    margin: 1,
                  }}
                >
                  Features
                </Typography>
                <Typography
                  sx={{
                    width: "50%",
                    color: " #061237",
                    fontFamily: "Inter",
                    fontSize: "48px",
                    fontStyle: "normal",
                    fontWeight: 700,
                    lineHeight: "45px" /* 200% */,
                    letterSpacing: "1px",
                    margin: 1,
                  }}
                >
                  You<sup>'</sup>re not just doing business. You<sup>'</sup>re
                  doing life.
                </Typography>
                <Box display={"flex"}>
                  <IconButton>
                    <DoneIcon />
                  </IconButton>
                  <Typography
                    sx={{
                      color: " #061237",
                      fontFamily: "Inter",
                      fontSize: "16px",
                      fontStyle: "normal",
                      fontWeight: 700,
                      lineHeight: "30px" /* 200% */,
                      letterSpacing: "1px",
                      margin: 1,
                    }}
                  >
                    Responsive Components
                  </Typography>
                </Box>
                <Box display={"flex"}>
                  <IconButton>
                    <DoneIcon />
                  </IconButton>
                  <Typography
                    sx={{
                      color: " #061237",
                      fontFamily: "Inter",
                      fontSize: "16px",
                      fontStyle: "normal",
                      fontWeight: 700,
                      lineHeight: "30px" /* 200% */,
                      letterSpacing: "1px",
                      margin: 1,
                    }}
                  >
                    Over 50 Sections
                  </Typography>
                </Box>
                <Box display={"flex"}>
                  <IconButton>
                    <DoneIcon />
                  </IconButton>
                  <Typography
                    sx={{
                      color: " #061237",
                      fontFamily: "Inter",
                      fontSize: "16px",
                      fontStyle: "normal",
                      fontWeight: 700,
                      lineHeight: "30px" /* 200% */,
                      letterSpacing: "1px",
                      margin: 1,
                    }}
                  >
                    Handcrafted Pages
                  </Typography>
                </Box>
              </Stack>
            </Box>
          </Grid>
        </Stack>
        <Box>
          <img
            src={Image2}
            alt="image"
            style={{ height: "100%", width: "80%" }}
          />
        </Box>
      </Box>

      {/* BOX3====================================================================================================================== */}
      <Box
        sx={{
          display: { xs: "contents", md: "flex" },
          justifyContent: "space-between",
          m: 5,
          width: "75%",
          ml: 20,
        }}
      >
        <Box>
          <img
            src={Image2}
            alt="image"
            style={{ height: "100%", width: "80%" }}
          />
        </Box>
        <Stack direction={{ xs: "column", md: "row" }} spacing={2}>
          <Grid>
            <Box>
              <Typography
                sx={{
                  width: "20%",
                  color: " #67718E",
                  fontFamily: "Inter",
                  fontSize: "14px",
                  fontStyle: "normal",
                  fontWeight: 700,
                  lineHeight: "30px" /* 200% */,
                  letterSpacing: "1px",
                  textTransform: "uppercase",
                  margin: 1,
                }}
              >
                Our knowledge
              </Typography>
              <Typography
                sx={{
                  color: " #061237",
                  fontFamily: "Inter",
                  fontSize: "48px",
                  fontStyle: "normal",
                  fontWeight: 700,
                  lineHeight: "50px" /* 200% */,
                  letterSpacing: "1px",
                  margin: 1,
                  width: "60%",
                }}
              >
                A UI Kit that's Modern & Elegant
              </Typography>

              <Typography
                width={"50%"}
                sx={{
                  width: "50%",
                  color: " #37456C",
                  fontFamily: "Inter",
                  fontSize: "16px",
                  fontStyle: "normal",
                  fontWeight: 700,
                  lineHeight: "30px" /* 200% */,
                  letterSpacing: "1px",
                  margin: 1,
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                eget consectetur eros. Aliquam erat volutpat.
              </Typography>
            </Box>
          </Grid>
        </Stack>
      </Box>
      {/* BOX4====================================================================================================================== */}
      <Box
        sx={{
          display: { xs: "contents", md: "flex" },
          justifyContent: "space-between",
          m: 5,
          ml: 30,
          width: "75%",
        }}
      >
        <Stack direction={{ xs: "column", md: "row" }}>
          <Grid>
            <Box>
              <Box>
                <img
                  src={Logo2}
                  alt="logo"
                  style={{ height: "50%", width: "30%" }}
                />
              </Box>
              <Typography
                sx={{
                  color: " #333",
                  fontFamily: "Inter",
                  fontSize: "24px",
                  fontStyle: "normal",
                  fontWeight: 700,
                  lineHeight: "30px" /* 200% */,
                  letterSpacing: "1px",
                  margin: 1,
                  width: "60%",
                  alignContent: "center",
                }}
              >
                The Opus UI Kit lets you showcase your work in style. It's
                helped take our business online
              </Typography>
              <Typography
                sx={{
                  width: "20%",
                  color: " #061237",
                  fontFamily: "Inter",
                  fontSize: "16px",
                  fontStyle: "normal",
                  fontWeight: 700,
                  lineHeight: "20px" /* 200% */,
                  letterSpacing: "1px",
                  margin: 1,
                }}
              >
                ALEXA F.
              </Typography>
              <Typography
                sx={{
                  width: "20%",
                  color: " #1355FF",
                  fontFamily: "Inter",
                  fontSize: "12px",
                  fontStyle: "normal",
                  fontWeight: 700,
                  lineHeight: "20px" /* 200% */,
                  letterSpacing: "1px",
                  margin: 1,
                }}
              >
                Designer @stamps
              </Typography>
              <Stack direction={"row"} spacing={8}>
                <Button
                  variant="contained"
                  size="small"
                  sx={{ background: "#F2F3F8" }}
                >
                  <IconButton>
                    <ArrowBackRoundedIcon />
                  </IconButton>
                </Button>
                <Button
                  variant="contained"
                  size="small"
                  sx={{ background: "#F2F3F8" }}
                >
                  <IconButton>
                    <ArrowForwardRoundedIcon />
                  </IconButton>
                </Button>
              </Stack>
            </Box>
          </Grid>
        </Stack>

        <Box>
          <img
            src={Image2}
            alt="image"
            style={{ height: "100%", width: "90%" }}
          />
        </Box>
      </Box>
    </>
  );
}

export default Section4;
