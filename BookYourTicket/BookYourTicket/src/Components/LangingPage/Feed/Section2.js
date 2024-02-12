import { Box, Grid, IconButton, Typography, Button } from "@mui/material";
import React from "react";
import Enjoyment1 from "../../Images/Card.svg";
import Enjoyment2 from "../../Images/Card.svg";
import Enjoyment3 from "../../Images/Card.svg";
import Enjoyment4 from "../../Images/Card.svg";
import Enjoyment5 from "../../Images/Card.svg";
import Enjoyment from "../../Images/Card.svg";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

function Section2() {
  const images = [
    { img: Enjoyment1, title: "Enjoyment1" },
    { img: Enjoyment2, title: "Enjoyment2" },
    { img: Enjoyment3, title: "Enjoyment3" },
    { img: Enjoyment4, title: "Enjoyment4" },
    { img: Enjoyment5, title: "Enjoyment5" },
    { img: Enjoyment, title: "Enjoyment" },
  ];

  return (
    <Box margin={5} justifyContent={"center"}>
      <Box sx={{ margin: 2, marginBottom: 4 }}>
        <Typography variant="h4">Browse By Category</Typography>
        <Typography variant="body1">Lorem Ipsum sit dolor amet.</Typography>
      </Box>
      <Grid
        container
        spacing={2}
        marginLeft={{ md: "3px" }}
        justifyContent="center"
      >
        {images.map((item) => (
          <Grid key={item.title} item xs={6} md={4} lg={4}>
            <img src={item.img} alt={item.title} style={{ width: "100%" }} />
          </Grid>
        ))}
      </Grid>
      <Box margin={2} marginTop={5}>
        <Button variant="contained" size="medium">
          View all
          <IconButton aria-label="Double Arrow">
            <KeyboardDoubleArrowRightIcon sx={{ color: "white" }} />
          </IconButton>
        </Button>
      </Box>
    </Box>
  );
}

export default Section2;
