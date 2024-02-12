"use client";

import { Box, Button, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import WorkMap from "../../_Assests/_Images/HowitWorkWorkdMap.svg";
import Sql from "../../_Assests/_Images/HowitWorkSql.svg";
import VisualMasterpiece from "../../_Assests/_Images/HowitWorkMasterpiece.svg";
import Analysis from "../../_Assests/_Images/HowitWorkAnalysis.svg";
import Web from "../../_Assests/_Images/HowitWorkWeb.svg";
import PieChart from "../../_Assests/_Images/HowitWorkPieChart.svg";
import { SelectButton, SelectTypography } from "../_WhyUs/WhyUseData";
import {
  styleTypography3,
  styleTypography4,
  styleTypography5,
  styleTypography6,
  styleTypography7,
  StyleButton,
} from "./HowitWorkStyle";
import Image from "next/image";

function HowitWorkSection3() {
  const [selectedButtonIndex, setSelectedButtonIndex] = useState(0);
  const [selectedTextOption, setSelectedTextOption] = useState(0);
  const [image1Visibility, setImage1Visibility] = useState(false);
  const [image2Visibility, setImage2Visibility] = useState(false);
  const [image3Visibility, setImage3Visibility] = useState(false);
  const [image4Visibility, setImage4Visibility] = useState(false);
  const [image5Visibility, setImage5Visibility] = useState(false);
  const [image6Visibility, setImage6Visibility] = useState(false);

  const handleButtonClick = (index) => {
    setSelectedButtonIndex(index);
    setSelectedTextOption(0);

    if (index === 1) {
      setImage1Visibility(false);
      setImage2Visibility(false);
      setImage3Visibility(false);
      setImage4Visibility(false);
      setImage5Visibility(true);
      setImage6Visibility(false);
    } else if (index === 2) {
      setImage1Visibility(false);
      setImage2Visibility(false);
      setImage3Visibility(false);
      setImage4Visibility(false);
      setImage5Visibility(false);
      setImage6Visibility(true);
    } else {
      setImage1Visibility(true);
      setImage2Visibility(false);
      setImage3Visibility(false);
      setImage4Visibility(false);
      setImage5Visibility(false);
      setImage6Visibility(false);
    }
  };

  const handleTextOptionClick = (index) => {
    setSelectedTextOption(index);

    if (selectedButtonIndex === 1) {
      setImage1Visibility(false);
      setImage2Visibility(false);
      setImage3Visibility(false);
      setImage4Visibility(false);
      setImage5Visibility(true);
      setImage6Visibility(false);
    } else if (selectedButtonIndex === 2) {
      setImage1Visibility(false);
      setImage2Visibility(false);
      setImage3Visibility(false);
      setImage4Visibility(false);
      setImage5Visibility(false);
      setImage6Visibility(true);
    } else {
      if (index === 0) {
        setImage1Visibility(true);
        setImage2Visibility(false);
        setImage3Visibility(false);
        setImage4Visibility(false);
        setImage5Visibility(false);
        setImage6Visibility(false);
      } else if (index === 1) {
        setImage1Visibility(false);
        setImage2Visibility(true);
        setImage3Visibility(false);
        setImage4Visibility(false);
        setImage5Visibility(false);
        setImage6Visibility(false);
      } else if (index === 2) {
        setImage1Visibility(false);
        setImage2Visibility(false);
        setImage3Visibility(true);
        setImage4Visibility(false);
        setImage5Visibility(false);
        setImage6Visibility(false);
      } else if (index === 3) {
        setImage1Visibility(false);
        setImage2Visibility(false);
        setImage3Visibility(false);
        setImage4Visibility(true);
        setImage5Visibility(false);
        setImage6Visibility(false);
      }
    }
  };

  return (
    <>
      <Box sx={{ width: "100%", height: "900px", paddingTop: "100px" }}>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Typography sx={styleTypography4}>
            From Row Data to Stunning Visualization Datainsights’ Drag-and-Drop
            Revolutionizes Dashboard Creation
          </Typography>
        </Box>
        {/* Transition state==================================================== */}

        <Box
          sx={{ display: "flex", justifyContent: "center" }}
          paddingTop={"80px"}
        >
          <Stack direction={"column"} spacing={10}>
            {/* Button ========================================== */}
            <Stack direction={"row"} spacing={2} justifyContent={"center"}>
              {SelectButton.map((items, index) => (
                <Button
                  key={index}
                  sx={{
                    ...StyleButton,
                    backgroundColor:
                      index === selectedButtonIndex ? "#A12873" : "#F9F9F9",
                    ":hover": {
                      backgroundColor:
                        index === selectedButtonIndex ? "#A12873" : "#F9F9F9",
                    },
                  }}
                  onClick={() => handleButtonClick(index)}
                >
                  <Typography
                    sx={{
                      ...styleTypography5,
                      color:
                        index === selectedButtonIndex
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
            <Box sx={{ display: "flex" }}>
              <Stack
                direction={"column"}
                spacing={2}
                sx={{
                  width: "37%",
                  alignItems: "center",
                }}
              >
                {SelectTypography[selectedButtonIndex].textOptions.map(
                  (option, index) => (
                    <Typography
                      key={index}
                      sx={{
                        ...styleTypography6,
                        cursor: "pointer",
                        color:
                          selectedTextOption === index ? "#A12873" : "#797979",
                      }}
                      onClick={() => handleTextOptionClick(index)}
                    >
                      {option}
                    </Typography>
                  )
                )}
              </Stack>
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                {image1Visibility && (
                  <Image
                    src={WorkMap}
                    alt="Images"
                    style={{ width: "96%", height: "auto" }}
                  />
                )}
                {image2Visibility && (
                  <Image
                    src={Analysis}
                    alt="Images"
                    style={{ width: "120%", height: "90%" }}
                  />
                )}
                {image3Visibility && (
                  <Image
                    src={Web}
                    alt="Images"
                    style={{ width: "110%", height: "90%" }}
                  />
                )}
                {image4Visibility && (
                  <Image
                    src={PieChart}
                    alt="Images"
                    style={{ width: "110%", height: "90%" }}
                  />
                )}
                {image5Visibility && (
                  <Image
                    src={Sql}
                    alt="Images"
                    style={{ width: "110%", height: "90%" }}
                  />
                )}
                {image6Visibility && (
                  <Image
                    src={VisualMasterpiece}
                    alt="Images"
                    style={{ width: "110%", height: "90%" }}
                  />
                )}
              </Box>
            </Box>
          </Stack>
        </Box>
      </Box>
      <Stack
        direction={"column"}
        sx={{ alignItems: "center", width: "100%", justifyContent: "center" }}
      >
        <Stack
          direction={"column"}
          spacing={2}
          sx={{
            alignItems: "center",
            width: "80%",
            justifyContent: "center",
            height: "250px",
          }}
        >
          <Typography sx={styleTypography3} textAlign={"center"}>
            Navigating Data Brilliance with DataInsights
          </Typography>
          <Typography sx={styleTypography7} textAlign={"center"}>
            In the realm of data mastery, DataInsights stands as the beacon,
            simplifying the intricacies of data handling and empowering your
            journey. Here's a glance at how DataInsights works its magic:
          </Typography>
        </Stack>
      </Stack>
    </>
  );
}

export default HowitWorkSection3;
