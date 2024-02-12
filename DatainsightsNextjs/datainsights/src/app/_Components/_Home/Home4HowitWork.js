"use client";
import Image from "next/image";
import { Box, Button, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import Buttons from "./Buttons";
import Image1 from "../../_Assests/_Images/Home4howitworkImage1.svg";
import Image2 from "../../_Assests/_Images/Home4howitworkImage2.svg";
import Image3 from "../../_Assests/_Images/Home4howitworkImage3.svg";
import Borders from "./Borders";
import { SelectButton, SelectTypography } from "./Home4HowitWorkData";
import {
  styleTypography1,
  styleTypography2,
  styleTypography3,
  styleBox1,
  styleBox2,
  styleBox3,
  StyleButton,
} from "./Home4HowitWorkStyle";

function Home4HowitWork() {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  // console.log(selectedImageIndex);

  const handleButtonClick = (index) => {
    setSelectedImageIndex(index);
  };

  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "950px",
          position: "relative",
          zIndex: 0,
          overflow: "hidden",
        }}
      >
        <Borders
          widths={"600px"}
          heights={"600px"}
          rights={"96%"}
          bottoms={"6%"}
          zIndexs={1}
          color={"#EDD"}
        />
        <Borders
          widths={"900px"}
          heights={"900px"}
          rights={"90%"}
          bottoms={"-10%"}
          zIndexs={1}
          color={"#EDD"}
        />
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          paddingTop={"40px"}
        >
          <Buttons
            ids={6}
            backgrounds={"#EFECFF"}
            colors={"#C43A8C"}
            widths={"166px"}
          />
        </Box>
        <Box sx={styleBox1}>
          <Typography sx={styleTypography1}>
            Navigating Data Brilliance with DataInsights
          </Typography>
        </Box>
        {/* Transition state========================================= */}

        <Box sx={styleBox1} paddingTop={"40px"}>
          <Stack direction={"column"} spacing={4} width={"100%"}>
            {/* Button ========================================== */}
            <Stack direction={"row"} spacing={4} justifyContent={"center"}>
              {SelectButton.map((items, index) => (
                <Button
                  key={index}
                  sx={{
                    ...StyleButton,
                    backgroundColor:
                      index === selectedImageIndex ? "#A12873" : "#F9F9F9",
                    ":hover": {
                      backgroundColor:
                        index === selectedImageIndex ? "#A12873" : "#F9F9F9",
                    },
                  }}
                  onClick={() => handleButtonClick(index)}
                >
                  <Typography
                    sx={{
                      ...styleTypography2,
                      color:
                        index === selectedImageIndex
                          ? "white"
                          : "rgba(36, 35, 49, 1)",
                    }}
                  >
                    {items.name}
                  </Typography>
                </Button>
              ))}
            </Stack>
            {/* Content=============================================   */}
            <Box sx={styleBox3}>
              <Stack
                direction={"column"}
                spacing={4}
                sx={{ width: "40%", alignItems: "center" }}
              >
                <Typography sx={styleTypography3}>
                  {SelectTypography[selectedImageIndex].text}
                </Typography>
                <Box sx={{ width: "80%" }}>
                  <Buttons
                    ids={9}
                    backgrounds={"#242331"}
                    widths={"193px"}
                    colors={"white"}
                  />
                </Box>
              </Stack>
              {/* Image=============================================  */}
              <Box sx={styleBox2}>
                <Image
                  src={[Image1, Image2, Image3][selectedImageIndex]}
                  alt="Images"
                  style={{ width: "85%" }}
                />
              </Box>
            </Box>
          </Stack>
        </Box>
      </Box>
    </>
  );
}

export default Home4HowitWork;
