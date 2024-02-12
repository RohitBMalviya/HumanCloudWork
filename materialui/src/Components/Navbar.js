import {
  AppBar,
  Avatar,
  Badge,
  Box,
  InputBase,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  styled,
} from "@mui/material";
import { useState } from "react";
import * as React from "react";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import MailIcon from "@mui/icons-material/Mail";
import { Notifications } from "@mui/icons-material";
import { deepOrange } from "@mui/material/colors";

function Navbar() {
  const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
  });
  const Search = styled("div")(({ theme }) => ({
    backgroundColor: "white",
    padding: "0px 10px",
    borderRadius: theme.shape.borderRadius,
    width: "40%",
  }));
  const Icon = styled(Box)(({ theme }) => ({
    display: "none",
    gap: "20px",
    alignItems: "center",
    [theme.breakpoints.up("sm")]: {
      display: "flex",
    },
  }));
  const UserBox = styled(Box)(({ theme }) => ({
    display: "flex",
    gap: "10px",
    alignItems: "center",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  }));
  const [open, setopen] = useState(false);

  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Toolbar variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          MUI
        </Toolbar>
        <AcUnitIcon sx={{ display: { xs: "block", sm: "none" } }} />
        <Search>
          <InputBase placeholder="Search"></InputBase>
        </Search>
        <Icon>
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
          <Badge badgeContent={4} color="error">
            <Notifications />
          </Badge>
          <Avatar
            sx={{ bgcolor: deepOrange[500], width: 25, height: 25 }}
            onClick={(e) => setopen(true)}
          >
            R
          </Avatar>
        </Icon>
        <UserBox onClick={(e) => setopen(true)}>
          <Avatar sx={{ bgcolor: deepOrange[500], width: 25, height: 25 }}>
            R
          </Avatar>
          <Typography variant="span">Rohit</Typography>
        </UserBox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e) => setopen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
}

export default Navbar;
