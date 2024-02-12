import { Stack, Typography, Box, Grid, Divider } from "@mui/material";
import React from "react";
import { HoverComplex, SelectTitle2 } from "./UseCasesData";
import {
  styleTypography6,
  styleTypography7,
  styleTypography8,
  styleGrid,
} from "./UseCasesStyle";
import Image from "next/image";

function UseCasesSection4({ SelectedImageIndex }) {
  return (
    <>
      <Stack
        direction={"column"}
        spacing={6}
        sx={{
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: SelectedImageIndex ? "900px" : "1400px",
        }}
      >
        <Stack direction={"column"} spacing={4} sx={{ width: "80%" }}>
          <Typography sx={styleTypography6}>
            {SelectTitle2[SelectedImageIndex].title}
          </Typography>
          <Typography sx={styleTypography8}>
            {SelectTitle2[SelectedImageIndex].desc}
          </Typography>
        </Stack>
        <Box width={"80%"}>
          <Grid
            container
            item
            xs={12}
            rowGap={4}
            columnGap={6}
            sx={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {HoverComplex[SelectedImageIndex].content.map((items, index) => (
              <Grid item xs={3.5} key={index} sx={styleGrid}>
                <Stack
                  direction={"column"}
                  spacing={4}
                  sx={{
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Box width={"90%"}>
                    <Image
                      src={items.img}
                      alt="images"
                      style={{
                        borderRadius: "15px",
                        width: "100%",
                        height: "100%",
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
                    }}
                  >
                    <Typography sx={styleTypography7}>{items.title}</Typography>
                    <Typography sx={styleTypography8}>{items.desc}</Typography>
                  </Stack>
                </Stack>
              </Grid>
            ))}
          </Grid>
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
      </Stack>
    </>
  );
}

export default UseCasesSection4;
