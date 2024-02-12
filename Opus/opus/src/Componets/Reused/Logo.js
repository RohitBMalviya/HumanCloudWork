import React from "react";
import { Grid, Stack } from "@mui/material";

function Logo(props) {
  return (
    <>
      <Stack direction={{ xs: "column", md: "row" }}>
        <Grid>
          <img src={props.logo} alt="logo" />
        </Grid>
      </Stack>
    </>
  );
}

export default Logo;
