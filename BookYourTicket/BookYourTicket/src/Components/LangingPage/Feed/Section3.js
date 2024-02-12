import { Box, IconButton, Typography, Button, Stack } from "@mui/material";
import React from "react";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import EventIcon from "@mui/icons-material/Event";
import TodayIcon from "@mui/icons-material/Today";
import Free from "../../Images/Free.svg";
import Week from "../../Images/Week.svg";
import Weekend from "../../Images/Weekend.svg";

function Section3() {
  return (
    <>
      <Box sx={{ background: "rgba(100, 128, 225, 1)" }} padding={2}>
        <Box sx={{ margin: 5 }}>
          <Typography variant="h5">Quick Filter Events by</Typography>
          <Typography>Lorem Ipsum sit dolor amet.</Typography>
        </Box>
        <Box sx={{ margin: 5 }}>
          <Stack
            direction={{ xs: "row", sm: "row" }}
            spacing={{ xs: 1, sm: 2, md: 4 }}
          >
            <Button
              variant="contained"
              sx={{
                background:
                  "linear-gradient(0deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)),linear-gradient(0deg, #FFFFFF, #FFFFFF);",
                borderRadius: 4,
              }}
            >
              <IconButton aria-label="Free">
                <img src={Free} alt="Free" />
                <Typography>Free</Typography>
              </IconButton>
            </Button>
            <Button
              variant="contained"
              sx={{
                background:
                  "linear-gradient(0deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)),linear-gradient(0deg, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.4))",
                borderRadius: 4,
              }}
            >
              <IconButton aria-label="Weekend">
                <img src={Weekend} alt="Weekend" />
                <Typography>Weekend</Typography>
              </IconButton>
            </Button>
            <Button
              variant="contained"
              sx={{
                background:
                  "linear-gradient(0deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)),linear-gradient(0deg, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.4))",
                borderRadius: 4,
              }}
            >
              <IconButton aria-label="Week">
                <img src={Week} alt="Week" />
                <Typography>Week</Typography>
              </IconButton>
            </Button>
            <Button
              variant="contained"
              sx={{
                background:
                  "linear-gradient(0deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)),linear-gradient(0deg, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.4))",
                borderRadius: 4,
              }}
            >
              <IconButton aria-label="Month">
                <CalendarMonthIcon sx={{ color: "white" }} />
                <Typography>Month</Typography>
              </IconButton>
            </Button>
            <Button
              variant="contained"
              sx={{
                background:
                  "linear-gradient(0deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)),linear-gradient(0deg, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.4))",
                borderRadius: 4,
              }}
            >
              <IconButton aria-label="Tomorrow">
                <EventIcon sx={{ color: "white" }} />
                <Typography>Tomorrow</Typography>
              </IconButton>
            </Button>
            <Button
              variant="contained"
              sx={{
                background:
                  "linear-gradient(0deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)),linear-gradient(0deg, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.4))",
                borderRadius: 4,
              }}
            >
              <IconButton aria-label="Today">
                <TodayIcon sx={{ color: "white" }} />
                <Typography>Today</Typography>
              </IconButton>
            </Button>
          </Stack>
        </Box>
      </Box>
    </>
  );
}

export default Section3;
