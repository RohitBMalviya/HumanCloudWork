"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

import {
  AppBar,
  Box,
  Grid,
  Toolbar,
  Typography,
  Button,
  Icon,
} from "@mui/material";
import Logo1 from "../../_Assests/_Images/Logo1.svg";
import navbarElements from "./NavbarElement";
import Buttons from "../_Home/Buttons";
import { useRouter } from "next/navigation";

function Navbar() {
  const router = useRouter();
  const [scrolling, setScrolling] = useState(false);
  const [change, setChange] = useState(false);
  const [showSubMenu, setShowSubMenu] = useState(false);

  useEffect(() => {
    if (router.pathname === "/") {
      setChange(true);
    } else {
      setChange(false);
    }
  }, [router.pathname]);

  const handleScroll = () => {
    const scrollTop = window.scrollY;

    setScrolling(scrollTop > 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const styleTypography1 = {
    color: "#AA2974",
    fontFamily: "Nunito",
    fontSize: "35px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "normal",
    textAlign: "center",
    paddingTop: "7px",
    paddingLeft: "4px",
    textTransform: "lowercase",
  };

  const styleButton = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "20px",
    padding: "0px",
    width: "117px",
    height: "48px",
    "&:hover": {
      backdropFilter: "blur(10px)",
      backgroundColor: scrolling
        ? "#9D9D9D33"
        : "rgba(255, 255, 255, 0.2)" && change
        ? "rgba(255, 255, 255, 0.2)"
        : "#9D9D9D33",
    },
    color: scrolling ? "black" : "#fff" && change ? "#fff" : "black",
    fontFamily: "Nunito",
    fontSize: "18px",
    fontWeight: scrolling ? 800 : 600 && change ? 600 : 800,
    textTransform: "capitalize",
  };

  const styleBox1 = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "100px",
    backdropFilter: scrolling
      ? "contrast(0.8)"
      : "contrast(0.9)" && change
      ? "contrast(0.9)"
      : "contrast(0.8)",
    background: scrolling
      ? "#F9F9F9"
      : "transparent" && change
      ? "transparent"
      : "#F9F9F9",
    width: "605px",
    height: "70px",
  };
  const styleGrid = {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "923px",
  };

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          background: "transparent",
          boxShadow: "none",
        }}
      >
        <Toolbar
          sx={{
            height: scrolling ? "110px" : "140px",
            alignItems: "center",
            background: scrolling
              ? "white"
              : "transparent" && change
              ? "transparent"
              : "white",
            boxShadow: scrolling
              ? "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px"
              : "none",
          }}
        >
          <Grid
            container
            sx={{ display: "flex", justifyContent: "space-between" }}
          >
            {/* Logo and the Text ============================================================================= */}
            <Grid
              sx={{
                display: "flex",
                alignItems: "center",
                paddingLeft: "48px",
              }}
            >
              <Button sx={{ display: "flex" }} onClick={() => router.push("/")}>
                <Icon sx={{ padding: "5px" }}>
                  <Image
                    src={Logo1}
                    alt="logo"
                    style={{ width: "29px", height: "29px" }}
                  />
                </Icon>
                <Typography sx={styleTypography1}>datainsights</Typography>
              </Button>
            </Grid>

            {/* List========================================================================== */}

            <Grid sx={styleGrid}>
              <Box sx={{ ...styleBox1, zIndex: 0, gap: "20px" }}>
                {navbarElements.map((item, index) => (
                  <Button
                    key={index}
                    sx={styleButton}
                    onMouseEnter={() => setShowSubMenu(item.id === 3.0)}
                    onMouseLeave={() => setShowSubMenu(false)}
                    onClick={() => router.push(`${item.link}`)}
                  >
                    {item.title}
                    {item.id === 3.0 && (
                      <Icon sx={{ paddingBottom: "12px" }}>{item.icon}</Icon>
                    )}
                    {item.id === 3.0 && showSubMenu && (
                      <Box
                        sx={{
                          ...styleBox1,
                          width: "150px",
                          height: "100px",
                          position: "absolute",
                          zIndex: 2,
                          top: "100%",
                          left: -20,
                          display: "block",
                          borderRadius: "20px",
                          paddingTop: "10px",
                        }}
                      >
                        {item.subtitle.map((subItem, subIndex) => (
                          <Button
                            key={subIndex}
                            style={{
                              ...styleButton,
                              width: "150px",
                              position: "relative",
                              zIndex: 3,
                            }}
                            onClick={(event) => {
                              event.stopPropagation();
                              router.push(`${subItem.link}`);
                            }}
                          >
                            {subItem.title}
                          </Button>
                        ))}
                      </Box>
                    )}
                  </Button>
                ))}
              </Box>

              {/* Sign up========================================================================== */}

              <Box>
                <Buttons
                  ids={1}
                  backgrounds={
                    scrolling
                      ? "rgba(161, 40, 115, 1)"
                      : "white" && change
                      ? "white"
                      : "rgba(161, 40, 115, 1)"
                  }
                  colors={
                    scrolling ? "white" : "black" && change ? "black" : "white"
                  }
                  widths={"213px"}
                />
              </Box>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Navbar;
