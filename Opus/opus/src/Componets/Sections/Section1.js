import { Box, Grid, IconButton, Typography } from "@mui/material";
import React from "react";
import Logo3 from "../Images/Logo3.svg";
import Logo4 from "../Images/Logo4.svg";
import Logo5 from "../Images/Logo5.svg";
import Logo6 from "../Images/Logo6.svg";
import { Button } from "antd";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Image4 from "../Images/Image4.png";
import Info from "../Reused/Info";
import Logo from "../Reused/Logo";
function Section1() {
  const Logos = [
    {
      id: 1,
      logo: Logo3,
    },
    {
      id: 2,
      logo: Logo4,
    },
    {
      id: 3,
      logo: Logo5,
    },
    {
      id: 4,
      logo: Logo6,
    },
  ];

  const Infos = [
    {
      id: 1,
      info: "99.95%",
      desc: "Accuracy Rate",
      order: "in fulfilling orders",
    },
    {
      id: 2,
      info: "5,000+",
      desc: "Ecommerce businesses",
      order: "partner with Opus",
    },
    {
      id: 3,
      info: "99.96%",
      desc: "Of orders ship on time",
      order: "within SLA",
    },
    {
      id: 4,
      info: "#1",
      desc: "Best Fulfillment Technology",
      order: "by AdWeek’s Retail Awards",
    },
  ];
  return (
    <>
      <Box
        sx={{
          background: "rgba(24, 38, 78, 1)",
          height: "600px",
        }}
      >
        <Box display={"flex"}>
          <Box sx={{ width: "50%", margin: 5 }}>
            <Typography
              sx={{
                color: " #FFF",
                fontFamily: "Inter",
                fontSize: "64px",
                fontStyle: "normal",
                fontWeight: 700,
                lineHeight: "68px" /* 200% */,
                margin: 1,
                width: "40%",
              }}
            >
              Built for
            </Typography>
            <Typography
              sx={{
                width: "50%",
                color: " #FFF",
                fontFamily: "Inter",
                fontSize: "64px",
                fontStyle: "normal",
                fontWeight: 700,
                lineHeight: "68px" /* 200% */,
                margin: 1,
              }}
            >
              enterprise
            </Typography>
            <Typography
              sx={{
                width: "50%",
                color: " #FFF",
                fontFamily: "Inter",
                fontSize: "64px",
                fontStyle: "normal",
                fontWeight: 700,
                lineHeight: "68px" /* 200% */,
                margin: 1,
              }}
            >
              businesses.
            </Typography>
            <Typography
              sx={{
                color: " #FFF",
                fontFamily: "Inter",
                fontSize: "18px",
                fontStyle: "normal",
                fontWeight: 700,
                lineHeight: "36px" /* 200% */,
                margin: 1,
                width: "60%",
              }}
            >
              Opus includes everything you need to build a beautiful website for
              your business. Built to perform and look good doing so.
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "flex-start" }}>
              <Grid sx={{ mr: 6 }}>
                <Button type="primary" size="large">
                  Learn More
                </Button>
              </Grid>
              <Grid>
                <IconButton sx={{ color: "white" }}>
                  Explore Pages
                  <ArrowForwardIcon />
                </IconButton>
              </Grid>
            </Box>
          </Box>
          <Box>
            <img
              src={Image4}
              alt="image"
              style={{ position: "relative", width: "90%", marginTop: "25%" }}
            />

            <Box
              sx={{
                background: "white",
                width: "15%",
                left: "60%",
                position: "absolute",
                top: " 70%",
                p: 5,
              }}
            >
              <Typography
                sx={{
                  color: " #37456C",
                  fontFamily: "Inter",
                  fontSize: "13px",
                  fontStyle: "normal",
                  fontWeight: 700,
                  lineHeight: "25px" /* 200% */,
                  margin: 1,
                  width: "100%",
                }}
              >
                I felt like I couldn’t grow until I moved to Opus. Now I am
                encouraged to sell more with them.
              </Typography>
              <Typography
                sx={{
                  color: " #333",
                  fontFamily: "Inter",
                  fontSize: "24px",
                  fontStyle: "normal",
                  fontWeight: 700,
                  lineHeight: "32px" /* 200% */,
                  margin: 1,
                  width: "80%",
                }}
              >
                Frank Dublin
              </Typography>
              <Typography
                sx={{
                  color: " #67718E",
                  fontFamily: "Inter",
                  fontSize: "16px",
                  fontStyle: "normal",
                  fontWeight: 700,
                  lineHeight: "24px" /* 200% */,
                  margin: 1,
                  width: "40%",
                }}
              >
                CEO @stamps
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box sx={{ m: 5, ml: 12 }}>
        <Typography
          sx={{
            color: " #061237",
            fontFamily: "Inter",
            fontSize: "32px",
            fontStyle: "normal",
            fontWeight: 700,
            lineHeight: "48px" /* 200% */,
            margin: 1,
            ml: 12,
          }}
        >
          Trusted and loved by the world<sup>'</sup>s best teams
        </Typography>
        <Box display={"flex"}>
          {Logos.map((item, index) => (
            <Logo key={item.id} logo={item.logo} />
          ))}
        </Box>
        <Box display={"flex"}>
          {Infos.map((item, index) => (
            <Info
              key={item.id}
              info={item.info}
              desc={item.desc}
              order={item.order}
            />
          ))}
        </Box>
      </Box>
    </>
  );
}

export default Section1;
