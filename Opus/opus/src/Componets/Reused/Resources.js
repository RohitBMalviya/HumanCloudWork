import React from "react";
import { Button, Grid, Typography } from "@mui/material";

function Resources(props) {
  return (
    <Grid>
      <img
        src={props.images}
        alt={props.titles}
        style={{ margin: 2, width: "70%", height: "70%" }}
      />
      <Typography
        sx={{
          color: " #061237",
          fontFamily: "Inter",
          fontSize: "20px",
          fontStyle: "normal",
          fontWeight: 700,
          lineHeight: "25px" /* 200% */,
          letterSpacing: "1px",

          width: "60%",
        }}
      >
        {props.headers}
      </Typography>
      <Typography
        sx={{
          color: " #37456C",
          fontFamily: "Inter",
          fontSize: "12px",
          fontStyle: "normal",
          fontWeight: 700,
          lineHeight: "20px" /* 200% */,
          letterSpacing: "1px",

          width: "60%",
        }}
      >
        {props.descs}
      </Typography>
      <Button
        variant="contained"
        size="medium"
        sx={{
          color: "black",
          marginTop: 3,
          background: "#F7F9FC",
        }}
      >
        {props.buttons}
      </Button>
    </Grid>
  );
}

export default Resources;
