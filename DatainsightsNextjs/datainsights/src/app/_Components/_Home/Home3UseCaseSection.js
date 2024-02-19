"use client";
import Image from "next/image";
import React from "react";
import { Box, Stack } from "@mui/system";
import { Button, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../_Assests/Style/Style1.css";
import Data from "./Home3UseCaseData";
import {
  settings,
  styleTypography1,
  styleTypography2,
  styleTypography3,
  styleBox1,
} from "./Home3UseCaseStyle";
function Home3UseCaseData() {
  const router = useRouter();

  return (
    <>
      <Slider {...settings}>
        {Data.map((items, index) => (
          <Box key={index} sx={styleBox1}>
            <Stack
              direction={"column"}
              spacing={2}
              sx={{
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box width={"84%"}>
                <Image
                  src={items.img}
                  alt="images"
                  style={{
                    borderRadius: "15px",
                    width: "100%",
                    height: "22vh",
                  }}
                />
              </Box>
              <Stack
                direction={"column"}
                spacing={2}
                sx={{
                  justifyContent: "center",
                  alignItems: "flex-start",
                  width: "85%",
                  height: "100%",
                }}
              >
                <Typography sx={styleTypography1}>{items.title}</Typography>
                <Typography
                  sx={{ ...styleTypography2, paddingBottom: `${items.pd}` }}
                >
                  {items.desc}
                </Typography>

                <Button
                  onClick={() => router.push("/usecases")}
                  sx={{ padding: "0px" }}
                >
                  <Typography
                    sx={{
                      ...styleTypography3,
                      textAlign: "start",
                      width: "100%",
                    }}
                  >
                    {items.read}
                  </Typography>
                </Button>
              </Stack>
            </Stack>
          </Box>
        ))}
      </Slider>
    </>
  );
}

export default Home3UseCaseData;
