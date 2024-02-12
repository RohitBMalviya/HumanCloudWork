import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  AppBar,
  Box,
  Grid,
  IconButton,
  Toolbar,
  Typography,
  Button,
  Icon,
} from "@mui/material";
import Logo1 from "../Images/Logo1.svg";
import navbarElements from "./NavbarElement";
import Buttons from "./Home/Buttons";

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [scrolling, setScrolling] = useState(false);
  const [change, setChange] = useState(false);
  const [showSubMenu, setShowSubMenu] = useState(false);
  console.log("change", change);
  console.log("show", showSubMenu);

  useEffect(() => {
    if (location.pathname === "/") {
      setChange(true);
    } else {
      setChange(false);
    }
  }, [location]);

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
        zindex="0"
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
              <Button sx={{ display: "flex" }} onClick={() => navigate("/")}>
                <Icon sx={{ padding: "5px" }}>
                  <img
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
              <Box sx={styleBox1}>
                {navbarElements.map((item, index) => (
                  <Button
                    key={index}
                    sx={styleButton}
                    onMouseEnter={() => setShowSubMenu(item.id === 3.0)}
                    onMouseLeave={() => setShowSubMenu(false)}
                    onClick={() => navigate(`${item.link}`)}
                  >
                    {item.title}
                    {item.id === 3.0 && <Icon>{item.icon}</Icon>}
                    {item.id === 3.0 && showSubMenu && (
                      <Box
                        sx={{
                          ...styleBox1,
                          width: "160px",
                          height: "110px",
                          position: "absolute",
                          top: "100%",
                          left: -20,
                          zIndex: 4,
                          display: "block",
                          borderRadius: "20px",
                          paddingTop: "10px",
                        }}
                      >
                        {item.subtitle.map((subItem, subIndex) => (
                          <div
                            key={subIndex}
                            style={{
                              ...styleButton,
                              width: "150px",
                            }}
                            onClick={() => navigate(`${subItem.link}`)}
                          >
                            {subItem.title}
                          </div>
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
