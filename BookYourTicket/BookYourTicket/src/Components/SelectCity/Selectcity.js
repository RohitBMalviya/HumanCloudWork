import styled from "@emotion/styled";
import {
  Box,
  InputBase,
  Typography,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Avatar,
} from "@mui/material";
import React from "react";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Pune from "../Images/Pune.svg";
import Mumbai from "../Images/Mumbai.svg";
import Ahmedabad from "../Images/Ahmedabad.svg";
import Hyderabad from "../Images/Hyberabad.svg";
import Delhi from "../Images/Delhi.svg";
import Benagluru from "../Images/Benagluru.svg";

function Selectcity() {
  const Search = styled("div")(({ theme }) => ({
    backgroundColor: "white",
    padding: "0px 10px",
    borderRadius: "2px",
    width: "45%",
  }));

  const options = ["Pune", "Mumbai", "Nagpur"];
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedIndex, setSelectedIndex] = React.useState(0);

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
    <Box sx={{ margin: "12rem" }}>
      <Box sx={{ margin: "4rem", alignContent: "center" }}>
        <Typography variant="h2" sx={{ margin: "2rem", marginLeft: "9rem" }}>
          Select your city
        </Typography>
        <Typography variant="h6">
          Knowing your city helps us define your experience better on
          Bookyourtickets.io
        </Typography>
      </Box>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        sx={{ margin: "1rem" }}
      >
        <Box>
          <Search>
            <InputBase
              placeholder="Search"
              sx={{ color: "black", width: "50ch" }}
            />
          </Search>
        </Box>
        <Box>
          <Button
            size="small"
            endIcon={
              <IconButton aria-label="Dropdown">
                <ArrowDropDownIcon />
              </IconButton>
            }
            onClick={handleClick}
            variant="contained"
            sx={{ borderRadius: 3, maxWidth: "250px" }}
          >
            <IconButton aria-label="Dropdown">
              <FmdGoodIcon />
            </IconButton>
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
      </Box>
      <Box>
        <Stack direction="row" spacing={2}>
          <Avatar alt="Pune" src={Pune} sx={{ width: 64, height: 64 }} />
          <Avatar
            alt="Benagluru"
            src={Benagluru}
            sx={{ width: 64, height: 64 }}
          />
          <Avatar alt="Delhi" src={Delhi} sx={{ width: 64, height: 64 }} />
          <Avatar
            alt="Hyderabad"
            src={Hyderabad}
            sx={{ width: 64, height: 64 }}
          />
          <Avatar alt="Mumbai" src={Mumbai} sx={{ width: 64, height: 64 }} />
          <Avatar
            alt="Ahmedabad"
            src={Ahmedabad}
            sx={{ width: 64, height: 64 }}
          />
        </Stack>
      </Box>
    </Box>
  );
}

export default Selectcity;
