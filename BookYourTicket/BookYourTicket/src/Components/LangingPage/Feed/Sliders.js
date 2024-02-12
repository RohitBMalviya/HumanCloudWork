import { Box, Divider, IconButton, Typography, Button } from "@mui/material";
import React from "react";
import PlaceIcon from "@mui/icons-material/Place";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";

function Slider(props) {
  return (
    <>
      <Box
        sx={{
          margin: { xs: "1px", md: 1 },
          padding: { xs: "none", md: "30PX" },
          width: { xs: "none", md: "490PX" },
        }}
      >
        <Box>
          <img
            src={props.urls}
            alt="Enjoyment"
            style={{ width: "100%", height: "auto" }}
          />
        </Box>
        <Box margin={{ xs: "none", md: 1 }}>
          <Typography variant="h6">{props.headers}</Typography>
          <Typography variant="body2">{props.descs}</Typography>
        </Box>

        <Box
          display={"flex"}
          justifyContent="space-between"
          margin={{ xs: "none", md: 1 }}
        >
          <Button sx={{ padding: 0, justifyContent: "flex-start" }}>
            <IconButton sx={{ padding: 0, color: "blue" }}>
              <CurrencyRupeeIcon
                sx={{ fontSize: { xs: "medium", md: "large" } }}
              />
            </IconButton>
            <Typography
              sx={{
                fontSize: { xs: "14px", md: "24px" },
              }}
            >
              {props.prices}
            </Typography>
          </Button>
          <Button sx={{ padding: 0 }}>
            <IconButton sx={{ padding: 0, color: "blue" }}>
              <PlaceIcon fontSize="small" />
            </IconButton>
            <Typography variant="body2" textTransform={"capitalize"}>
              {props.locations}
            </Typography>
          </Button>
        </Box>
      </Box>
    </>
  );
}

export default Slider;
