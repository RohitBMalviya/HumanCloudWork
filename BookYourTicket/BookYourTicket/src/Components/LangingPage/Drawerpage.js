import {
  Box,
  Drawer,
  IconButton,
  Stack,
  Grid,
  Typography,
  Button,
  Menu,
  MenuItem,
} from "@mui/material";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { styled, alpha } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import Logo1 from "../Images/Logo1.svg";
import Logo2 from "../Images/Logo2.svg";
import PersonIcon from "@mui/icons-material/Person";
import AddIcon from "@mui/icons-material/Add";
import PlaceIcon from "@mui/icons-material/Place";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

function Drawerpage() {
  const [openDrawer, setOpenDrawer] = useState(false);
  // SEARCH BAR -------------------------------------------------------------------------------------------
  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    width: "100%",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),

      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      [theme.breakpoints.up("sm")]: {
        width: "12ch",
        "&:focus": {
          width: "40ch",
        },
      },
    },
  }));

  // DROPDOWN =====================================================================================================
  const options = ["Pune", "Mumbai", "Nagpur"];
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <img src={Logo2} alt="Logo" />
      <Drawer
        anchor="right"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        sx={{ background: "transparent" }}
      >
        <Stack
          direction={"column"}
          spacing={4}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "30px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin: "auto",
            }}
          >
            <IconButton aria-label="Bookyourticket">
              <img src={Logo1} alt="Logo" />
            </IconButton>
            <Typography sx={{ marginTop: 1.5 }}>Bookyourticket</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin: "auto",
            }}
          >
            <Search width="40ch">
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
            <IconButton aria-label="Location">
              <PlaceIcon />
            </IconButton>

            <Button
              size="small"
              endIcon={
                <IconButton aria-label="Dropdown">
                  <ArrowDropDownIcon />
                </IconButton>
              }
              onClick={handleClick}
              variant="contained"
              sx={{ background: "transparent" }}
            >
              {options[selectedIndex]}
            </Button>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              {options.map((option, index) => (
                <MenuItem
                  key={option}
                  selected={index === selectedIndex}
                  onClick={() => handleMenuItemClick(index)}
                >
                  {option}
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin: "auto",
            }}
          >
            <Grid>
              <Button
                variant="contained"
                size="small"
                sx={{ background: "white", marginRight: 2 }}
              >
                <IconButton aria-label="Add">
                  <AddIcon />
                </IconButton>
                <Typography
                  sx={{ color: "black", textTransform: "capitalize" }}
                >
                  Create Event
                </Typography>
              </Button>
              <Button
                variant="contained"
                size="small"
                sx={{
                  background:
                    "linear-gradient(90.35deg, #FF83AE 0%, #E6296B 100%)",
                }}
              >
                <Typography sx={{ textTransform: "capitalize" }}>
                  Login
                </Typography>
                <IconButton>
                  <PersonIcon aria-label="Login" />
                </IconButton>
              </Button>
            </Grid>
          </Box>
        </Stack>
      </Drawer>
      <IconButton
        sx={{ marginLeft: "auto" }}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon />{" "}
      </IconButton>
    </>
  );
}
export default Drawerpage;
