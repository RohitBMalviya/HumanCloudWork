import React, { useState } from "react";
import {
  AppBar,
  Box,
  Drawer,
  Grid,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SliderBar from "./SliderBar";

function Navbar() {
  const [openDrawer, setOpenDrawer] = useState(false);
  const handleOpenDrawer = () => {
    setOpenDrawer(true);
  };
  const handleCloseDrawer = () => {
    setOpenDrawer(false);
  };
  return (
    <>
      <Box>
        <AppBar position="fixed">
          <Toolbar style={{ padding: "0px", background: "lightgrey" }}>
            <Grid container sx={{ display: "flex", alignItems: "center" }}>
              <Grid>
                <IconButton onClick={handleOpenDrawer}>
                  <MenuIcon fontSize="small" />
                </IconButton>
              </Grid>
              <Grid>
                <Typography
                  sx={{ fontSize: "20px", fontWeight: 400, color: "black" }}
                >
                  Avesha
                </Typography>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
        <Drawer anchor="left" open={openDrawer} onClose={handleCloseDrawer}>
          <SliderBar />
        </Drawer>
      </Box>
    </>
  );
}

export default Navbar;
