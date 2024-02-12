import {
  Box,
  Divider,
  Grid,
  IconButton,
  Input,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import Logo from "../Componets/Images/Logo.svg";
import { Button } from "antd";
function Footer() {
  const overview = [
    "Overview",
    "Landing",
    "Company",
    "Pricing",
    "CMS Pages",
    "Accounts",
    "Buy for Figma",
  ];
  const Pages1 = [
    "Langing1",
    "Landing2",
    "Langing3",
    "Comany1",
    "Comany2",
    "Comany3",
    "Blog1",
    "Blog2",
    "Contact1",
    "Contact2",
    "Contact3",
  ];
  const Pages2 = [
    "Case Studies",
    "Careers",
    "Pricing1",
    "Pricing2",
    "Login",
    "Register",
    "Forgot Password",
    "Blog Post",
    "Team Member",
    "Case Study",
    "Job Post",
  ];

  return (
    <>
      <Box sx={{ margin: 4, ml: 10 }}>
        <IconButton>
          <img src={Logo} alt="Logo" />
        </IconButton>
      </Box>
      <Box
        display={{ xs: "block", md: "flex" }}
        sx={{ margin: 5, justifyContent: "space-between", ml: 12 }}
      >
        <Stack mr={15}>
          <Typography
            sx={{
              color: " #B6BCCE",
              fontFamily: "Inter",
              fontSize: "15px",
              fontStyle: "normal",
              fontWeight: 700,
              lineHeight: "24px" /* 200% */,
              letterSpacing: "1.5px",
              textTransform: "uppercase",
              margin: 1,
            }}
          >
            overview
          </Typography>
          {overview.map((items, index) => (
            <Grid key={index} sx={{ margin: 1 }}>
              <Typography
                sx={{
                  color: "rgba(6, 18, 55, 1)",
                  fontFamily: "Inter",
                  fontSize: "18px",
                  fontStyle: "normal",
                  fontWeight: 500,
                  lineHeight: "24px" /* 200% */,
                  textTransform: "capitalize",
                }}
              >
                {items}
              </Typography>
            </Grid>
          ))}
        </Stack>
        <Stack mr={15}>
          <Typography
            sx={{
              color: " #B6BCCE",
              fontFamily: "Inter",
              fontSize: "15px",
              fontStyle: "normal",
              fontWeight: 700,
              lineHeight: "24px" /* 200% */,
              letterSpacing: "1.5px",
              textTransform: "uppercase",
              margin: 1,
            }}
          >
            Pages
          </Typography>
          {Pages1.map((items, index) => (
            <Grid key={index} sx={{ margin: 1 }}>
              <Typography
                sx={{
                  color: "rgba(6, 18, 55, 1)",
                  fontFamily: "Inter",
                  fontSize: "18px",
                  fontStyle: "normal",
                  fontWeight: 500,
                  lineHeight: "24px" /* 200% */,
                  textTransform: "capitalize",
                }}
              >
                {items}
              </Typography>
            </Grid>
          ))}
        </Stack>
        <Stack mr={15}>
          <Typography
            sx={{
              color: " #B6BCCE",
              fontFamily: "Inter",
              fontSize: "15px",
              fontStyle: "normal",
              fontWeight: 700,
              lineHeight: "24px" /* 200% */,
              letterSpacing: "1.5px",
              textTransform: "uppercase",
              margin: 1,
            }}
          >
            Pages
          </Typography>
          {Pages2.map((items, index) => (
            <Grid key={index} sx={{ margin: 1 }}>
              <Typography
                sx={{
                  color: "rgba(6, 18, 55, 1)",
                  fontFamily: "Inter",
                  fontSize: "18px",
                  fontStyle: "normal",
                  fontWeight: 500,
                  lineHeight: "24px" /* 200% */,

                  textTransform: "capitalize",
                }}
              >
                {items}
              </Typography>
            </Grid>
          ))}
        </Stack>
        <Stack spacing={2} rowGap={2}>
          <Grid>
            <Input placeholder="Email" sx={{ width: "30%" }}></Input>
            <Button type="primary" size="large">
              Get Started
            </Button>
          </Grid>
          <Box>
            <Grid container rowGap={4}>
              <Grid xs={5.5}>
                <Typography
                  sx={{
                    color: " #B6BCCE",
                    fontFamily: "Inter",
                    fontSize: "10px",
                    fontStyle: "normal",
                    fontWeight: 700,
                    lineHeight: "24px" /* 200% */,
                    letterSpacing: "1.5px",
                    textTransform: "uppercase",
                  }}
                >
                  OPUS FOR WEBFLOW
                </Typography>
              </Grid>
              <Grid xs={6}>
                <Typography
                  sx={{
                    color: " #B6BCCE",
                    fontFamily: "Inter",
                    fontSize: "10px",
                    fontStyle: "normal",
                    fontWeight: 700,
                    lineHeight: "24px" /* 200% */,
                    letterSpacing: "1.5px",
                    textTransform: "uppercase",
                  }}
                >
                  OPUS FOR WEBFLOW
                </Typography>
              </Grid>
              <Grid>
                <Typography
                  xs={6}
                  sx={{
                    color: " #1355FF",
                    fontFamily: "Inter",
                    fontSize: "20px",
                    fontStyle: "normal",
                    fontWeight: 900,
                    lineHeight: "32px" /* 200% */,
                    textTransform: "capitalize",
                    marginRight: "11rem",
                  }}
                >
                  Lorem Ipsum
                </Typography>
              </Grid>
              <Grid xs={6}>
                <Typography
                  sx={{
                    color: " #1355FF",
                    fontFamily: "Inter",
                    fontSize: "20px",
                    fontStyle: "normal",
                    fontWeight: 900,
                    lineHeight: "32px" /* 200% */,
                    textTransform: "capitalize",
                  }}
                >
                  Lorem Ipsum
                </Typography>
              </Grid>
            </Grid>
          </Box>

          <Grid>
            <Typography
              sx={{
                color: " #B6BCCE",
                fontFamily: "Inter",
                fontSize: "16px",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "32px" /* 200% */,
                textTransform: "capitalize",
              }}
            >
              © Template by Lorem - Powered by Ipsum
            </Typography>
          </Grid>
        </Stack>
        <Divider />
      </Box>
      <Stack
        direction={"row"}
        spacing={2}
        sx={{ margin: 5, justifyContent: "flex-start", ml: 12 }}
      >
        <Typography>Style Guide</Typography>
        <Typography>Licence</Typography>
        <Typography>Changlog</Typography>
      </Stack>
    </>
  );
}

export default Footer;
