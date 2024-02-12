import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import Image from "../../Componets/Images/Image1.png";
import ImageDesc from "../Reused/ImageDesc";
import Resources from "../Reused/Resources";

function Section5() {
  const Article = [
    {
      id: 1,
      image: Image,
      title: "Image",
      header: "A high-converting, high-performing template",
      desc: "Turpis senectus amet tortor in sodates odio tettus. Pretium id amet, euismod sceteriscue vetit.",
      button: "Read Article",
    },
    {
      id: 2,
      image: Image,
      title: "Image",
      header: "A high-converting, high-performing template",
      desc: "Turpis senectus amet tortor in sodates odio tettus. Pretium id amet, euismod sceteriscue vetit.",
      button: "Read Article",
    },
    {
      id: 3,
      image: Image,
      title: "Image",
      header: "A high-converting, high-performing template",
      desc: "Turpis senectus amet tortor in sodates odio tettus. Pretium id amet, euismod sceteriscue vetit.",
      button: "Read Article",
    },
  ];
  return (
    <>
      <Box margin={5} ml={15} sx={{ width: "80%", height: "680px" }}>
        <Box display={"flex"} justifyContent={"space-between"}>
          <Typography
            sx={{
              color: " #061237",
              fontFamily: "Inter",
              fontSize: "30px",
              fontStyle: "normal",
              fontWeight: 700,
              lineHeight: "56px" /* 200% */,
              letterSpacing: "1px",

              margin: 1,
              marginLeft: 10,
            }}
          >
            Resources
          </Typography>
          <Button variant="contained" size="small" sx={{ marginRight: 50 }}>
            Get Started
          </Button>
        </Box>
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={1}
          margin={4}
          justifyContent={"space-between"}
        >
          {Article.map((item, index) => (
            <Resources
              key={item.id}
              images={item.image}
              titles={item.title}
              headers={item.header}
              descs={item.desc}
              buttons={item.button}
            />
          ))}
        </Stack>
      </Box>
    </>
  );
}

export default Section5;
