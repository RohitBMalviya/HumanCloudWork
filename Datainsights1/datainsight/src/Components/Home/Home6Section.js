import React from "react";
import { Box, Typography, Stack } from "@mui/material";
import { Home6SectionData, Images } from "./Home6SectionData";

const Home6Section = ({
  ids,
  heights,
  lefts,
  BorderRadius,
  left1,
  left2,
  directions,
  widths,
}) => {
  const styleBox1 = {
    width: "100%",
    height: heights,
    position: "relative",
    zIndex: 0,
    overflow: "hidden",
  };
  const styleBox2 = {
    width: "55%",
    height: "700px",
    top: "20%",
    left: left2,
    borderRadius: "50px",
    position: "absolute",
    backgroundColor: "#F1F1F1",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1,
  };
  const styleBox3 = {
    width: "368px",
    height: "685px",
    background: "#BE3788",
    left: left1,
    top: "19%",
    borderRadius: BorderRadius,
    position: "absolute",
    zIndex: 1,
  };
  const styleTypography1 = {
    fontWeight: 700,
    fontSize: "40px",
    fontFamily: "Nunito",
    lineHeight: "44px",
    color: "black",
    width: widths,
  };
  const styleTypography2 = {
    fontWeight: 400,
    fontSize: "22px",
    fontFamily: "Nunito",
    color: "#797979",
    lineHeight: "34px",
    width: "75%",
  };

  return (
    <Box sx={styleBox1}>
      {Home6SectionData.filter((items) => items.id === ids).map(
        (items, index) => (
          <Box key={index} sx={styleBox2}>
            <Stack
              direction="column"
              alignItems={directions}
              spacing={4}
              width={"88%"}
            >
              <Typography sx={styleTypography1}>{items.title}</Typography>

              <Typography sx={styleTypography2}>
                {items.desc1}
                <br />
                <br />
                {items.desc2}
              </Typography>
            </Stack>
          </Box>
        )
      )}
      {Images.filter((items) => items.id === ids).map((items, index) => (
        <Box key={index}>
          <Box width={"100%"}>
            <img
              src={items.img}
              alt="-"
              style={{
                width: "800x",
                height: "482px",
                left: lefts,
                top: "30%",
                position: "absolute",
                zIndex: 2,
              }}
            />
          </Box>
          <Box sx={styleBox3}></Box>
        </Box>
      ))}
    </Box>
  );
};

export default Home6Section;
