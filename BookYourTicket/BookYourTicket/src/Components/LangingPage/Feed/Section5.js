import { Box, Typography } from "@mui/material";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Sliders from "./Sliders.js";
import Image1 from "../../Images/Section1.1.png";

export default function Section5() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1025 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 1024, min: 801 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 800, min: 465 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };

  const Section5Img = [
    {
      id: 1,
      images: Image1,
      Desc: "The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to Naviglio where you can enjoy the main night life in Barcelona.",
      Heading: "Southern Star Deccan Run 2023",
      Price: 889,
      Location: "Campus,Pune",
    },
    {
      id: 2,
      images: Image1,
      Desc: "The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to Naviglio where you can enjoy the main night life in Barcelona.",
      Heading: "Southern Star Deccan Run 2023",
      Price: 889,
      Location: "Campus,Pune",
    },
    {
      id: 3,
      images: Image1,
      Desc: "The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to Naviglio where you can enjoy the main night life in Barcelona.",
      Heading: "Southern Star Deccan Run 2023",
      Price: 889,
      Location: "Campus,Pune",
    },
    {
      id: 4,
      images: Image1,
      Desc: "The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to Naviglio where you can enjoy the main night life in Barcelona.",
      Heading: "Southern Star Deccan Run 2023",
      Price: 889,
      Location: "Campus,Pune",
    },
    {
      id: 5,
      images: Image1,
      Desc: "The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to Naviglio where you can enjoy the main night life in Barcelona.",
      Heading: "Southern Star Deccan Run 2023",
      Price: 889,
      Location: "Campus,Pune",
    },
    {
      id: 6,
      images: Image1,
      Desc: "The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to Naviglio where you can enjoy the main night life in Barcelona.",
      Heading: "Southern Star Deccan Run 2023",
      Price: 889,
      Location: "Campus,Pune",
    },
  ];

  const slider = Section5Img.map((item) => (
    <Sliders
      key={item.id}
      headers={item.Heading}
      urls={item.images}
      prices={item.Price}
      locations={item.Location}
    />
  ));

  return (
    <>
      <Box
        sx={{
          width: { xs: "78%", md: "90%" },
          height: { xs: "400px", md: "490px" },
          margin: { xs: 4, md: 6 },
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <Box sx={{ marginLeft: "45px" }}>
          <Typography variant="h4">Tours Events</Typography>
          <Typography variant="body1">Lorem Ipsum sit dolor amet.</Typography>
        </Box>
        <Carousel responsive={responsive}>{slider}</Carousel>
      </Box>
    </>
  );
}
