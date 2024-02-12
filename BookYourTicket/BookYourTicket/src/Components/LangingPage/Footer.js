import {
  Box,
  Grid,
  IconButton,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TwitterIcon from "@mui/icons-material/Twitter";
import dribble from "../Images/dribbble.svg";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Logo2 from "../Images/1.svg";

function Footer() {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      <Box
        sx={{
          justifyContent: "center",
          display: "flex",
          alignItems: "center",
          background: "black",
          padding: 10,
        }}
      >
        {isMatch ? (
          <>
            <Box
              sx={{
                justifyContent: "center",
                justifyItems: "center",
                alignItems: "center",
                padding: "auto",
                margin: "auto",
              }}
            >
              <IconButton
                sx={{
                  justifyContent: "center",
                  display: "flex",
                  alignItems: "center",
                  padding: "auto",
                  margin: "auto",
                  marginBottom: 4,
                }}
              >
                <img
                  src={Logo2}
                  alt="logo2"
                  style={{ width: "100%", height: "100%" }}
                />
              </IconButton>

              <Stack direction={"column"}>
                <Stack
                  direction={{ xs: "column", md: "row" }}
                  spacing={{ xs: 2, md: 3 }}
                  sx={{ padding: "auto", margin: "auto", textAlign: "center" }}
                >
                  <Grid>
                    <Typography color={"#f5f5f5"}>Company</Typography>
                  </Grid>
                  <Grid>
                    <Typography color={"#f5f5f5"}>About Us</Typography>
                  </Grid>
                  <Grid>
                    <Typography color={"#f5f5f5"}>Team</Typography>
                  </Grid>
                  <Grid>
                    <Typography color={"#f5f5f5"}>Products</Typography>
                  </Grid>
                  <Grid>
                    <Typography color={"#f5f5f5"}>Blog</Typography>
                  </Grid>
                  <Grid>
                    <Typography color={"#f5f5f5"}>Pricing</Typography>
                  </Grid>
                </Stack>
                <Stack
                  direction={"row"}
                  spacing={{ xs: 2, md: 2 }}
                  sx={{ padding: "auto", margin: "auto" }}
                >
                  <Grid>
                    <IconButton sx={{ margin: 2 }}>
                      <img src={dribble} alt="dribble" />
                    </IconButton>
                  </Grid>
                  <Grid>
                    <IconButton sx={{ margin: 2 }}>
                      <TwitterIcon sx={{ color: "#f5f5f5" }} />
                    </IconButton>
                  </Grid>
                  <Grid>
                    <IconButton sx={{ margin: 2 }}>
                      <InstagramIcon sx={{ color: "#f5f5f5" }} />
                    </IconButton>
                  </Grid>
                  <Grid>
                    <IconButton sx={{ margin: 2 }}>
                      <PinterestIcon sx={{ color: "#f5f5f5" }} />
                    </IconButton>
                  </Grid>
                  <Grid>
                    <IconButton sx={{ margin: 2 }}>
                      <GitHubIcon sx={{ color: "#f5f5f5" }} />
                    </IconButton>
                  </Grid>
                </Stack>
                <Stack
                  direction={"column"}
                  sx={{ padding: "auto", margin: "auto" }}
                >
                  <Typography sx={{ color: "#f5f5f5" }}>
                    © 2023, made with{" "}
                    <IconButton>
                      <FavoriteIcon sx={{ color: "red" }} />
                    </IconButton>{" "}
                    by Humancloud.
                  </Typography>
                </Stack>
              </Stack>
            </Box>
          </>
        ) : (
          <>
            <Box
              sx={{
                justifyContent: "center",
                display: "flex",
                alignItems: "center",
                background: "black",
              }}
            >
              <Stack direction={"column"}>
                <Stack
                  direction={{ xs: "column", md: "row" }}
                  spacing={{ xs: 2, md: 3 }}
                  sx={{ padding: "auto", margin: "auto", marginLeft: 8 }}
                >
                  <Grid>
                    <Typography color={"#f5f5f5"} sx={{ margin: 3 }}>
                      Company
                    </Typography>
                  </Grid>
                  <Grid>
                    <Typography color={"#f5f5f5"} sx={{ margin: 3 }}>
                      About Us
                    </Typography>
                  </Grid>
                  <Grid>
                    <Typography color={"#f5f5f5"} sx={{ margin: 3 }}>
                      Team
                    </Typography>
                  </Grid>
                  <Grid>
                    <Typography color={"#f5f5f5"} sx={{ margin: 3 }}>
                      Products
                    </Typography>
                  </Grid>
                  <Grid>
                    <Typography color={"#f5f5f5"} sx={{ margin: 3 }}>
                      Blog
                    </Typography>
                  </Grid>
                  <Grid>
                    <Typography color={"#f5f5f5"} sx={{ margin: 3 }}>
                      Pricing
                    </Typography>
                  </Grid>
                </Stack>
                <Stack
                  direction={"row"}
                  spacing={{ xs: 2, md: 2 }}
                  sx={{ padding: "auto", margin: "auto" }}
                >
                  <Grid>
                    <IconButton sx={{ margin: 2 }}>
                      <img src={dribble} alt="dribble" />
                    </IconButton>
                  </Grid>
                  <Grid>
                    <IconButton sx={{ margin: 2 }}>
                      <TwitterIcon sx={{ color: "#f5f5f5" }} />
                    </IconButton>
                  </Grid>
                  <Grid>
                    <IconButton sx={{ margin: 2 }}>
                      <InstagramIcon sx={{ color: "#f5f5f5" }} />
                    </IconButton>
                  </Grid>
                  <Grid>
                    <IconButton sx={{ margin: 2 }}>
                      <PinterestIcon sx={{ color: "#f5f5f5" }} />
                    </IconButton>
                  </Grid>
                  <Grid>
                    <IconButton sx={{ margin: 2 }}>
                      <GitHubIcon sx={{ color: "#f5f5f5" }} />
                    </IconButton>
                  </Grid>
                </Stack>
                <Stack
                  direction={"column"}
                  sx={{ padding: "auto", margin: "auto" }}
                >
                  <Typography sx={{ color: "#f5f5f5", margin: 3 }}>
                    © 2023, made with{" "}
                    <IconButton>
                      <FavoriteIcon sx={{ color: "red" }} />
                    </IconButton>{" "}
                    by Humancloud.
                  </Typography>
                </Stack>
              </Stack>
            </Box>
          </>
        )}
      </Box>
    </>
  );
}

export default Footer;
