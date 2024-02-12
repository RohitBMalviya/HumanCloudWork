import { Box, Button, IconButton, Typography } from "@mui/material";
import React from "react";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

function Banner() {
  return (
    <>
      <Box
        sx={{
          background: "linear-gradient(90.35deg, #BB3B68 0%, #4666D6 100%)",
          padding: 3,
        }}
      >
        <Box sx={{ margin: 5 }}>
          <Typography variant="h5">Popular Events</Typography>
          <Typography sx={{ width: "35%", mt: 2 }}>
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia consequuntur ma
          </Typography>
        </Box>

        <Box sx={{ margin: 5 }}>
          <Button
            variant="contained"
            size="medium"
            sx={{ borderRadius: 4, background: "white" }}
          >
            <Typography sx={{ color: "black" }}>Login</Typography>
            <IconButton aria-label="Double Arrow">
              <KeyboardDoubleArrowRightIcon sx={{ color: "black" }} />
            </IconButton>
          </Button>
        </Box>
      </Box>
    </>
  );
}

export default Banner;
