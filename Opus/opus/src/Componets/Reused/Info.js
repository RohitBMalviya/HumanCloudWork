import React from "react";
import { Grid, Stack, Typography } from "@mui/material";

function Info(props) {
  return (
    <>
      <Stack direction={{ xs: "column", md: "row" }}>
        <Grid m={6}>
          <Typography
            sx={{
              color: " #061237",
              fontFamily: "Inter",
              fontSize: "37px",
              fontStyle: "normal",
              fontWeight: 700,
              lineHeight: "48px",
              margin: 1,
            }}
          >
            {props.info}
          </Typography>
          <Typography
            sx={{
              color: " #061237",
              fontFamily: "Inter",
              fontSize: "16px",
              fontStyle: "normal",
              fontWeight: 700,
              lineHeight: "32px" /* 200% */,
              margin: 1,
            }}
          >
            {props.desc}
          </Typography>
          <Typography
            sx={{
              color: " #67718E",
              fontFamily: "Inter",
              fontSize: "16px",
              fontStyle: "normal",
              fontWeight: 700,
              lineHeight: "32px" /* 200% */,
              margin: 1,
            }}
          >
            {props.order}
          </Typography>
        </Grid>
      </Stack>
    </>
  );
}

export default Info;
