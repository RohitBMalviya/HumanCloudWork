import React from "react";
import { Stack, Typography, Box } from "@mui/material";
import {
  styleTypography6,
  styleTypography7,
  styleTypography8,
  styleTypography11,
  styleBox1,
} from "./UseCasesStyle";
import { SelectDesc1, SelectTitle3, SelectDataInsights } from "./UseCasesData";

function UseCasesSection5({ SelectedImageIndex }) {
  const styleBox3 = {
    width: "700px",
    height: "360px",
    background: "#BE3788",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "40px",
  };
  const styleStack = {
    alignItems: "flex-start",
    width: "50%",
    height: "1200px",
    overflowY: "scroll",
    scrollbarWidth: "none",
    msOverflowStyle: "none",
    "&::-webkit-scrollbar": {
      display: "none",
    },
  };

  return (
    <Stack
      direction={"column"}
      spacing={4}
      sx={{
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "1500px",
      }}
    >
      <Stack direction={"column"} spacing={4} sx={{ width: "80%" }}>
        <Typography sx={styleTypography6}>
          {SelectTitle3[SelectedImageIndex].title}
        </Typography>
        <Typography sx={styleTypography8}>
          {SelectTitle3[SelectedImageIndex].desc}
        </Typography>
      </Stack>

      {/* SelectDatainsights========================================================================= */}
      {/* Box1========================================================================= */}

      <Box
        sx={{
          ...styleBox1,
          justifyContent: "space-between",
          width: "80%",
        }}
      >
        <Box
          sx={{
            ...styleBox1,
            justifyContent: "start",
            alignItems: "flex-start",
            width: "45%",
            height: "1200px",
          }}
        >
          <Box sx={styleBox3}>
            <Typography sx={styleTypography11}>
              {SelectDesc1[SelectedImageIndex].desc}
            </Typography>
          </Box>
        </Box>

        {/* Box1========================================================================= */}

        <Stack direction={"column"} spacing={4} sx={styleStack}>
          {SelectDataInsights[SelectedImageIndex].content.map(
            (items, index) => (
              <Box
                key={index}
                sx={{
                  ...styleBox3,
                  background: "white",
                  border: "1px solid #CBCBCB",
                }}
              >
                <Stack
                  direction={"column"}
                  spacing={6}
                  sx={{
                    justifyContent: "center",
                    alignItems: "center",
                    height: "360px",
                  }}
                >
                  <Typography sx={{ ...styleTypography7, width: "85%" }}>
                    {items.title}
                  </Typography>
                  <Typography
                    sx={{
                      ...styleTypography11,
                      color: "#797979",
                      width: "85%",
                    }}
                  >
                    {items.desc}
                  </Typography>
                </Stack>
              </Box>
            )
          )}
        </Stack>
      </Box>
    </Stack>
  );
}

export default UseCasesSection5;
