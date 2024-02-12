import { Box, ImageList, ImageListItem, Typography } from "@mui/material";
import React from "react";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import { deepOrange, deepPurple } from "@mui/material/colors";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import Image from "../Tech.png";
function Rightbar() {
  return (
    <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position={"fixed"} width={300}>
        <Typography variant="h6" fontWeight={100} mt={2}>
          Online Frinds
        </Typography>
        <AvatarGroup max={4}>
          <Avatar sx={{ bgcolor: deepOrange[500] }}>A</Avatar>
          <Avatar sx={{ bgcolor: deepPurple[500] }}>B</Avatar>
          <Avatar sx={{ bgcolor: deepOrange[500] }}>C</Avatar>
          <Avatar sx={{ bgcolor: deepPurple[500] }}>P</Avatar>
          <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar>
          <Avatar sx={{ bgcolor: deepPurple[500] }}>O</Avatar>
          <Avatar sx={{ bgcolor: deepOrange[500] }}>Z</Avatar>
          <Avatar sx={{ bgcolor: deepPurple[500] }}>X</Avatar>
        </AvatarGroup>
        <Typography variant="h6" fontWeight={100} mt={2} mb={2}>
          Lastest Photos
        </Typography>
        <ImageList cols={3} rowHeight={100} gap={5}>
          <ImageListItem>
            <img src={Image} alt="tech" />
          </ImageListItem>
          <ImageListItem>
            <img src={Image} alt="tech" />
          </ImageListItem>
          <ImageListItem>
            <img src={Image} alt="tech" />
          </ImageListItem>
        </ImageList>
        <Typography variant="h6" fontWeight={100} mt={2} mb={2}>
          Lastest Conversation
        </Typography>
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar sx={{ bgcolor: deepOrange[500] }}>A</Avatar>
            </ListItemAvatar>
            <ListItemText
              primary="Brunch this weekend?"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Ali Connors
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar sx={{ bgcolor: deepOrange[500] }}>Z</Avatar>
            </ListItemAvatar>
            <ListItemText
              primary="Summer BBQ"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    to Scott, Alex, Jennifer
                  </Typography>
                  {" — Wish I could come, but I'm out of town this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar sx={{ bgcolor: deepOrange[500] }}>B</Avatar>
            </ListItemAvatar>
            <ListItemText
              primary="Oui Oui"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Sandra Adams
                  </Typography>
                  {" — Do you have Paris recommendations? Have you ever…"}
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
}

export default Rightbar;
