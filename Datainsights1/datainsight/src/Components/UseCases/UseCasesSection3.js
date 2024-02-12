import {
  List,
  ListItem,
  ListItemButton,
  Stack,
  Typography,
  Box,
} from "@mui/material";
import React, { useState } from "react";
import {
  SelectContent,
  SelectImage,
  SelectMenu,
  SelectTitle1,
} from "./UseCasesData";
import {
  styleTypography6,
  styleTypography8,
  styleTypography9,
  styleTypography10,
} from "./UseCasesStyle";

function UseCasesSection3({ SelectedImageIndex }) {
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);

  const handleListItemClick = (index) => {
    setSelectedItemIndex(index);
  };

  return (
    <>
      <Stack
        direction={"column"}
        spacing={4}
        sx={{
          justifyContent: "center",
          alignItems: "center",
          height: "800px",
        }}
      >
        <Stack direction={"column"} spacing={4} sx={{ width: "80%" }}>
          <Typography sx={styleTypography6}>
            {SelectTitle1[SelectedImageIndex].title}
          </Typography>
          <Typography sx={styleTypography8}>
            {SelectTitle1[SelectedImageIndex].desc}
          </Typography>
        </Stack>

        {/* Transition ========================================================== */}

        <Box width={"80%"}>
          <Stack
            direction={"row"}
            spacing={1}
            sx={{
              width: "50%",
              overflowX: "scroll",
              scrollbarColor: "black",
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              "&::-webkit-scrollbar": {
                display: "none",
              },
            }}
          >
            {/* Menu List ========================================================== */}
            {SelectMenu.map((items, index) => (
              <List key={index}>
                <ListItem sx={{ padding: "0px" }}>
                  <ListItemButton
                    sx={{ padding: "0px" }}
                    onClick={() => handleListItemClick(index)}
                  >
                    <Typography
                      sx={{
                        ...styleTypography9,
                        color:
                          index === selectedItemIndex ? "#BE3788" : "#CBC2C2",
                        ...items.styles,
                      }}
                    >
                      {items.menu}
                    </Typography>
                  </ListItemButton>
                </ListItem>
              </List>
            ))}
          </Stack>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "80%",
          }}
        >
          {/* Image ========================================================== */}

          <Box width={"50%"}>
            <img
              src={SelectImage[selectedItemIndex].img}
              alt="-"
              style={{ width: "100%", height: "100%" }}
            />
          </Box>
          {/* Content ========================================================== */}

          <Box
            width={"50%"}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography sx={styleTypography10}>
              {SelectContent[selectedItemIndex].desc1}
              <br />
              <br />
              {SelectContent[selectedItemIndex].desc2}
            </Typography>
          </Box>
        </Box>
      </Stack>
    </>
  );
}

export default UseCasesSection3;
