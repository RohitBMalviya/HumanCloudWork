import React, { useEffect, useState } from "react";
import Buttons from "./Buttons";
import { Box, Button, Divider, Stack, Typography } from "@mui/material";
import {
  styleTypography1,
  styleTypography2,
  styleTypography3,
  styleBox1,
  styleBox2,
  styleStack1,
  styleStack2,
} from "./Home2AboutStyle";
import { useNavigate } from "react-router-dom";
import Borders from "./Borders";
import Home2AboutImage2 from "./Home2AboutImage2";

function Home2About() {
  const navigate = useNavigate();
  const [scrolling, setScrolling] = useState(false);
  const [boxHeightExceeded, setBoxHeightExceeded] = useState(false);
  const [initialLoad, setInitialLoad] = useState(true);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const boxHeight = document.getElementById("aboutBox")?.clientHeight || 0;

    setScrolling(scrollTop > 0);
    setBoxHeightExceeded(boxHeight > 800);
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
        <Borders
          widths={"854.11px"}
          heights={"751.91px"}
          zIndexs={0}
          bottoms={"8%"}
          lefts={"-16%"}
          color={"#EDD"}
        />
        <Borders
          widths={"1222.896px"}
          heights={"950.752px"}
          tops={"-16%"}
          lefts={"-26%"}
          zIndexs={0}
          color={"#EDD"}
        />
        <Box sx={styleBox1}>
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
          <Box sx={{ width: "45%", position: "relative", zIndex: 1 }}>
            <Home2AboutImage2 scrollings={scrolling} />
          </Box>

          {/* Content2 =========================================================== */}

          <Stack direction={"column"} spacing={3} sx={styleStack2}>
            <Typography sx={styleTypography1}>
              Discover Our DataInsights Journey, Delivering Insights at Every
              Turn.
            </Typography>
            <Typography sx={styleTypography2}>
              At DataInsights, we simplify data exploration. We're your partners
              in unlocking insights effortlessly. With user-friendly tools, we
              help businesses make informed decisions. Our mission is to elevate
              your data experience, making it accurate, simple, and powerful for
              every user. Welcome to a world of seamless data exploration!
            </Typography>
            <Box sx={{ width: "82%" }}>
              <Divider
                orientation="horizontal"
                sx={{
                  background: "rgba(161, 40, 115, 1)",
                  width: "15%",
                  borderBottomWidth: "medium",
                }}
              />
            </Box>
            <Box width={"82%"}>
              <Button onClick={() => navigate("/about")}>
                <Typography sx={styleTypography3}>Learn More</Typography>
              </Button>
            </Box>
          </Stack>
        </Box>
      </Stack>
    </>
  );
}

export default Home2About;
