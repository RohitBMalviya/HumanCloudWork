"use client";
import React, { useState } from "react";
import { Typography, Button, Stack, Box, Divider } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SelectButton, SelectTypography } from "./UseCasesData";
import Image1 from "../../_Assests/_Images/Home3steel.png";
import Image2 from "../../_Assests/_Images/Home3Banking.png";
import Image3 from "../../_Assests/_Images/Home3Healthcare.png";
import UseCasesSection3 from "./UseCasesSection3";
import UseCasesSection4 from "./UseCasesSection4";
import UseCasesSection5 from "./UseCasesSection5";
import Image from "next/image";
import {
  styleTypography3,
  styleTypography4,
  styleTypography5,
  styleBox1,
  styleBox2,
  settings,
  StyleButton,
} from "./UseCasesStyle";
import UseCaseSection6 from "./UseCasesSection6";
import "../../_Assests/Style/style1.css";
// function CustomSlide(props) {
//   const { index, style, ...otherProps } = props;
//   return (
//     <div
//       {...otherProps}
//       style={{
//         ...style,
//         ".slick-track": {
//           position: "relative",
//           top: 0,
//           left: 0,
//           marginLeft: 0,
//           marginRight: 0,
//           display: "flex",
//           gap: "70px",
//         },
//         ".slick-slider": {
//           left: "120px",
//         },
//         ".slick-next:before": {
//           fontSize: "40px",
//           position: "absolute",
//           top: "75px",
//           left: "-100px",
//         },
//         ".slick-prev:before": {
//           fontSize: "40px",
//           position: "absolute",
//           right: "50px",
//           top: "75px",
//         },
//       }}
//     ></div>
//   );
// }

function UseCasesSection2() {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  console.log(selectedImageIndex);

  const handleButtonClick = (index) => {
    setSelectedImageIndex(index);
  };

  return (
    <>
      {/* Button ========================================== */}
      <Stack sx={{ width: "80%", margin: "auto" }}>
        <Slider {...settings}>
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
                  ...styleTypography3,
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
        </Slider>
      </Stack>
      {/* Content=============================================   */}

      <Box sx={styleBox2}>
        <Stack direction={"column"} spacing={4} sx={{ width: "50%" }}>
          <Typography sx={styleTypography4}>
            {SelectTypography[selectedImageIndex].title}
          </Typography>
          <Typography sx={styleTypography5}>
            {SelectTypography[selectedImageIndex].text}
          </Typography>
        </Stack>
        {/* Image=============================================  */}
        <Box sx={styleBox1}>
          <Image
            src={
              [Image1, Image2, Image3, Image1, Image2, Image3][
                selectedImageIndex
              ]
            }
            alt="Images"
            style={{ width: "520px", borderRadius: "20px" }}
          />
        </Box>
      </Box>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Divider sx={{ width: "80%" }} />
      </Box>
      <UseCasesSection3 SelectedImageIndex={selectedImageIndex} />
      <UseCasesSection4 SelectedImageIndex={selectedImageIndex} />
      <UseCaseSection6 SelectedImageIndex={selectedImageIndex} />
      <UseCasesSection5 SelectedImageIndex={selectedImageIndex} />
    </>
  );
}

export default UseCasesSection2;
