import React from "react";
import { Box, Grid, Typography, Button } from "@mui/material";

function ImageDesc(props) {
  return (
    <>
      <Grid container>
        <Box>
          <img src={props.images} alt={props.titles} style={{ width: "80%" }} />

          <Typography
            width={"60%"}
            sx={{
              color: " #FFF",
              fontFamily: "Inter",
              fontSize: "16px",
              fontStyle: "normal",
              fontWeight: 700,
              lineHeight: "20 px" /* 200% */,
              letterSpacing: "1.5px",
            }}
          >
            {props.headers}
          </Typography>
          <Typography
            width={"90%"}
            sx={{
              color: " #B6BCCE",
              fontFamily: "Inter",
              fontSize: "11px",
              fontStyle: "normal",
              fontWeight: 700,
              lineHeight: "25px" /* 200% */,
              letterSpacing: "1.0px",
            }}
          >
            {props.descs}
          </Typography>
        </Box>
      </Grid>
    </>
  );
}

export default ImageDesc;
