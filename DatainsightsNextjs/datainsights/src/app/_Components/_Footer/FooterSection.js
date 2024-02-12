"use client";

import { Box, Button, Grid, Icon, Typography } from "@mui/material";
import React from "react";
import { Data } from "./FooterData";
import { useRouter } from "next/navigation";
import {
  styleTypography6,
  styleTypography7,
  styleGrid2,
  styleLink2,
} from "./FooterStyle";

function FooterSection({ ids }) {
  const router = useRouter();
  return (
    <Box sx={{ width: "80%", paddingLeft: "20px" }}>
      {Data.filter((item) => item.id === ids).map((item, index) => (
        <Box key={index}>
          <Typography sx={styleTypography6}>{item.title}</Typography>
          <Typography sx={styleTypography7}>{item.desc}</Typography>
          <Grid sx={styleGrid2}>
            <Button sx={styleLink2} onClick={() => router.push(`${item.link}`)}>
              {item.text}
              <Icon
                fontSize="15px"
                sx={{ color: "#BE3788", paddingLeft: "4px" }}
              >
                {item.logo}
              </Icon>
            </Button>
          </Grid>
        </Box>
      ))}
    </Box>
  );
}

export default FooterSection;
