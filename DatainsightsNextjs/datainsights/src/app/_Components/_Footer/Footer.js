"use client";
import Image from "next/image";
import React from "react";
import {
  Icon,
  Stack,
  Typography,
  Box,
  Grid,
  Divider,
  Button,
} from "@mui/material";
import { useRouter } from "next/navigation";
import FacebookLogo from "../../_Assests/_Images/Facebooklogo.svg";
import FooterSection from "./FooterSection";
import Logo1 from "../../_Assests/_Images/Logo1.svg";
import { Pages, Help, ContactUs, Followus } from "./FooterData";
import {
  styleBox,
  styleTypography1,
  styleTypography2,
  styleTypography3,
  styleTypography4,
  styleTypography5,
  styleGrid1,
  styleButton,
  styleStack,
} from "./FooterStyle";

function Footer() {
  const router = useRouter();

  return (
    <>
      {/* Content ========================================================================= */}
      <Box sx={styleBox}>
        <Stack
          direction={"row"}
          spacing={2}
          width={"100%"}
          alignItems={"center"}
          justifyContent={"center"}
          divider={
            <Divider
              orientation="vertical"
              flexItem
              sx={{ bgcolor: "#BEAFAC", height: "200px", width: "1px" }}
            />
          }
        >
          <Grid width="38%" sx={styleGrid1}>
            <Icon sx={{ paddingTop: "8px", height: "40px", width: "45px" }}>
              <Image
                src={Logo1}
                alt="logo"
                style={{ width: "29px", height: "29px" }}
              />
            </Icon>
            <FooterSection ids={1} />
          </Grid>
          <Grid width="40%" sx={styleGrid1}>
            <Icon sx={{ paddingTop: "8px", height: "40px", width: "30px" }}>
              <Image
                src={Logo1}
                alt="logo"
                style={{ width: "29px", height: "29px" }}
              />
            </Icon>
            <FooterSection ids={2} />
          </Grid>
        </Stack>
      </Box>

      {/* Footer================================================= */}

      <Stack direction={"row"} spacing={8} sx={styleStack}>
        <Box sx={{ width: "25%" }}>
          <Stack direction={"column"} spacing={2}>
            <Grid
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Icon sx={{ padding: "8px", paddingLeft: "0px" }}>
                <Image
                  src={Logo1}
                  alt="logo"
                  style={{ width: "29px", height: "29px" }}
                />
              </Icon>
              <Typography sx={styleTypography1}>datainsights</Typography>
            </Grid>
            <Typography sx={styleTypography5}>
              Our team is ready to assist you on your data-driven journey. Let's
              connect and transform your insights today!
              <br />
              <br />
              Level 2, Prime Business Bay, Baner, Pune 411045, Maharashtra,
              India
            </Typography>
          </Stack>
        </Box>
        {/* Pages ================================================================== */}

        <Stack direction={"column"} spacing={4}>
          <Typography sx={styleTypography2}>Pages</Typography>
          <Divider sx={{ border: "1.5px solid rgba(227, 227, 227, 1)" }} />
          {Pages.map((items, index) => (
            <Stack key={index}>
              <Button
                sx={styleButton}
                onClick={() => router.push(`${items.link}`)}
              >
                <Typography sx={styleTypography3}>{items.title}</Typography>
              </Button>
            </Stack>
          ))}
        </Stack>

        {/* Help ================================================================== */}

        <Stack direction={"column"} spacing={4}>
          <Typography sx={styleTypography2}>Help</Typography>
          <Divider sx={{ border: "1.5px solid rgba(227, 227, 227, 1)" }} />
          {Help.map((items, index) => (
            <Stack key={index}>
              <Button
                sx={styleButton}
                onClick={() => router.push(`${items.link}`)}
              >
                <Typography sx={styleTypography3}>{items.title}</Typography>
              </Button>
            </Stack>
          ))}
        </Stack>

        {/* Contactus ================================================================== */}

        <Stack direction={"column"} spacing={4}>
          <Typography sx={styleTypography2}>Contact Us</Typography>
          <Divider sx={{ border: "1.5px solid rgba(227, 227, 227, 1)" }} />
          {ContactUs.map((item, index) => (
            <Stack key={index}>
              {item.id === 1 ? (
                <Button
                  sx={styleButton}
                  onClick={() => router.push(`${item.link}`)}
                >
                  <Typography
                    sx={{ ...styleTypography3, textTransform: "math-auto" }}
                  >
                    {item.title}
                  </Typography>
                </Button>
              ) : (
                <Button sx={styleButton}>
                  <Typography
                    sx={{ ...styleTypography3, textTransform: "math-auto" }}
                  >
                    {item.title}
                  </Typography>
                </Button>
              )}
            </Stack>
          ))}
        </Stack>

        {/* Follow ================================================================== */}

        <Stack direction={"column"} spacing={4}>
          <Typography sx={styleTypography2}>Follow Us</Typography>

          <Divider sx={{ border: "1.5px solid rgba(227, 227, 227, 1)" }} />
          <Stack direction={"row"} spacing={1} alignItems={"center"}>
            <Button onClick={() => router.push("#")} sx={{ padding: "0px" }}>
              <Image
                src={FacebookLogo}
                alt="-"
                style={{ width: "30%", height: "30%" }}
              />
            </Button>
            {Followus.map((items, index) => (
              <Button
                key={index}
                onClick={() => router.push("#")}
                sx={{ padding: "0px" }}
              >
                <Image
                  src={items.Logo}
                  alt="-"
                  style={{ width: "50%", height: "50%" }}
                />
              </Button>
            ))}
          </Stack>
        </Stack>
      </Stack>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "rgba(190, 55, 136, 1)",
          width: "100%",
          height: "62px",
        }}
      >
        <Typography sx={styleTypography4}>
          © Copyright 2024 – All Right Reserved by Datainsights, Inc.
        </Typography>
      </Box>
    </>
  );
}

export default Footer;
