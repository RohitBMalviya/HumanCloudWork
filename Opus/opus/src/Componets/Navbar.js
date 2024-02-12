import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from "../Componets/Images/Logo.svg";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <Box>
        <AppBar position="static" sx={{ background: "transparent" }}>
          <Toolbar
            sx={{ justifyContent: { xs: "space-between", md: "space-around" } }}
          >
            <Box
              sx={{
                display: { xs: "flex", md: "flex" },
              }}
            >
              <Link to="/">
                <img src={Logo} alt="logo" />
              </Link>
            </Box>
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                width: "50%",
                justifyContent: "space-around",
              }}
            >
              <Box
                sx={{ display: "contents", justifyContent: "space-between" }}
              >
                <Typography variant="h6">
                  <Link
                    to="/overview"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Overview
                  </Link>
                </Typography>
                <Typography variant="h6">
                  <Link
                    to="/pages"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Pages
                  </Link>
                </Typography>
                <Typography variant="h6">
                  <Link
                    to="/templates"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Templates
                  </Link>
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
              }}
            >
              <Button
                variant="contained"
                sx={{ color: "white", background: "#1355FF" }}
              >
                Contact Us
              </Button>
            </Box>
            <MenuIcon sx={{ display: { md: "none" } }} />
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}

export default Navbar;
