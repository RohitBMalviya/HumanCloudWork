import { Box, FormControl, Stack, TextField, Typography } from "@mui/material";
import React from "react";
import Buttons from "./Buttons";
import Borders from "./Borders";
import {
  styleTypography1,
  styleTypography2,
  styleBox1,
  styleBox2,
  styleBox3,
  styleBox4,
  styleBox41,
  styleFormcontrol,
} from "./Home8Style";
function Home8Section() {
  return (
    <>
      <Box sx={styleBox1}>
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

        <Box sx={styleBox2}>
          <Stack direction={"column"} spacing={2} sx={{ width: "70%" }}>
            <Typography sx={styleTypography1}>
              Got questions or looking to harness the power of DataInsights
            </Typography>
            <Typography sx={styleTypography2}>
              Our team is ready to assist you on your data-driven journey. Let's
              connect and transform your insights today
            </Typography>
            <Stack direction={"row"} spacing={2} alignItems={"center"}>
              <FormControl sx={styleFormcontrol}>
                <TextField
                  id="Email"
                  name="Email"
                  placeholder="your mail here..."
                  autoComplete="off"
                  InputProps={{
                    style: {
                      paddingLeft: "20px",
                    },
                  }}
                />
              </FormControl>
              <Buttons ids={2} backgrounds={"white"} widths={"166px"} />
            </Stack>
          </Stack>
        </Box>
        <Box sx={{ width: "50%" }}>
          <Box sx={styleBox3}>
            <Box sx={styleBox4}>
              <Box sx={styleBox41}></Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Home8Section;
