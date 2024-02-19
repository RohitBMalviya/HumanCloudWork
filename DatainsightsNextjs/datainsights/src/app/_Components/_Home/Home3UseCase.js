import React from "react";
import Buttons from "./Buttons";
import { Box, Stack } from "@mui/material";
import Home3UseCaseSection from "./Home3UseCaseSection";
import Borders from "./Borders";
import { styleStack, styleBox2 } from "./Home3UseCaseStyle";
function Home3UseCase() {
  return (
    <>
      <Stack direction={"column"} spacing={6} sx={styleStack}>
        <Box sx={styleBox2}>
          <Buttons
            ids={7}
            backgrounds={"#EFECFF"}
            colors={"#C43A8C"}
            widths={"166px"}
          />
        </Box>
        <Borders
          widths={"72%"}
          heights={"130%"}
          rights={"78%"}
          bottoms={"44%"}
          zIndexs={0}
          color={"rgba(255, 255, 255, 0.40)"}
        />
        <Borders
          widths={"1158px"}
          heights={"961.752px"}
          rights={"-46%"}
          bottoms={"-41%"}
          zIndexs={0}
          color={"rgba(255, 255, 255, 0.40)"}
        />
        <Borders
          widths={"1658px"}
          heights={"1377.017px"}
          tops={"-2%"}
          lefts={"75%"}
          zIndexs={0}
          color={"rgba(255, 255, 255, 0.40)"}
        />

        <Stack sx={{ width: "96%" }}>
          <Home3UseCaseSection />
        </Stack>
      </Stack>
    </>
  );
}

export default Home3UseCase;
