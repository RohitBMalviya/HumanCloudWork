"use client";

import React, { useEffect, useState } from "react";
import Buttons from "./Buttons";
import { Box, Button, Divider, Stack, Typography } from "@mui/material";
import {
  styleTypography1,
  styleTypography2,
  styleTypography3,
  styleBox2,
  styleStack1,
  styleStack2,
} from "./Home2AboutStyle";
import { useRouter } from "next/navigation";
import Borders from "./Borders";
import Home2AboutImage2 from "./Home2AboutImage2";

function Home2About() {
  const router = useRouter();
  const [scrolling, setScrolling] = useState(false);
  const [initialLoad, setInitialLoad] = useState(true);

  const handleScroll = () => {
    setScrolling(window.scrollY > 0);
  };

  useEffect(() => {
    const handleInitialTransition = () => {
      setInitialLoad(false);
    };

    const timeoutId = setTimeout(handleInitialTransition, 1500);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  useEffect(() => {
    if (!initialLoad) {
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [initialLoad]);
  return (
    <>
      <Stack direction={"column"} spacing={14} sx={styleStack1}>
        {/* Design border ============================================================ */}
        <Box>
          <Borders
            widths={"854.11px"}
            heights={"851.91px"}
            zIndexs={0}
            bottoms={100}
            lefts={-500}
            color={"#EDD"}
          />
          <Borders
            widths={"1222.896px"}
            heights={"1050.752px"}
            bottoms={0}
            lefts={-600}
            zIndexs={0}
            color={"#EDD"}
          />
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Buttons
            ids={8}
            backgrounds={"#EFECFF"}
            colors={"#C43A8C"}
            widths={"166px"}
            color={"#EDD"}
          />
        </Box>

        <Box sx={styleBox2}>
          {/* Content1 =========================================================== */}
          <Box
            sx={{
              width: { sx: "100%", md: "50%" },
              position: "relative",
              zIndex: 1,
            }}
          >
            <Box
              sx={{
                width: "100%",
                height: "100%",
                position: "relative",
              }}
            >
              <Home2AboutImage2 scrollings={scrolling} />
            </Box>
          </Box>

          {/* Content2 =========================================================== */}
          <Box sx={{ width: { sx: "100%", md: "50%" } }}>
            <Stack direction={"column"} spacing={3} sx={styleStack2}>
              <Typography sx={styleTypography1}>
                Discover Our DataInsights Journey, Delivering Insights at Every
                Turn.
              </Typography>
              <Typography sx={styleTypography2}>
                At DataInsights, we simplify data exploration. We're your
                partners in unlocking insights effortlessly. With user-friendly
                tools, we help businesses make informed decisions. Our mission
                is to elevate your data experience, making it accurate, simple,
                and powerful for every user. Welcome to a world of seamless data
                exploration!
              </Typography>

              <Divider
                orientation="horizontal"
                sx={{
                  background: "rgba(161, 40, 115, 1)",
                  width: "15%",
                  borderBottomWidth: "medium",
                }}
              />

              <Button
                sx={{ padding: "0px" }}
                onClick={() => router.push("/about")}
              >
                <Typography sx={styleTypography3}>Learn More</Typography>
              </Button>
            </Stack>
          </Box>
        </Box>
      </Stack>
    </>
  );
}

export default Home2About;
