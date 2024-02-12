import * as React from "react";
import Tooltip from "@mui/material/Tooltip";
import Modal from "@mui/material/Modal";
import Fab from "@mui/material/Fab";
import { Add as AddIcon } from "@mui/icons-material";
import { useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import styled from "@emotion/styled";
import { deepOrange } from "@mui/material/colors";
import Avatar from "@mui/material/Avatar";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import {
  DateRange,
  EmojiEmotions,
  Image,
  PersonAdd,
  VideoCameraBack,
} from "@mui/icons-material";

const StyleModel = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});
const UserBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  marginBottom: "20px",
});
function Add() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Tooltip
        onClick={(e) => setOpen(true)}
        title="ADD"
        sx={{
          position: "fixed",
          bottom: 20,
          left: { xs: "cal(50%-25px)", md: 30 },
        }}
      >
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>
      <StyleModel
        open={open}
        onClose={(e) => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          width={400}
          height={280}
          bgcolor={"background.default"}
          color={"text.primary"}
          p={3}
          borderRadius={5}
        >
          <Typography variant="h6" color={"gray"} textAlign={"center"}>
            Create Post
          </Typography>
          <UserBox>
            <Avatar sx={{ bgcolor: deepOrange[500] }}>A</Avatar>
            <Typography fontWeight={500} variant="span">
              AAAA
            </Typography>
          </UserBox>
          <TextField
            sx={{ width: "100%" }}
            id="standard-multiline-static"
            multiline
            rows={4}
            placeholder="Default Value"
            variant="standard"
          />
          <Stack direction={"row"} gap={1} mt={2} mb={3}>
            <EmojiEmotions color="primary" />
            <Image color="seconday" />
            <VideoCameraBack color="success" />
            <PersonAdd color="error" />
          </Stack>
          <ButtonGroup
            fullWidth
            variant="contained"
            aria-label="outlined primary button group"
          >
            <Button>Post</Button>
            <Button
              sx={{
                width: "100px",
              }}
            >
              <DateRange />
            </Button>
          </ButtonGroup>
        </Box>
      </StyleModel>
    </>
  );
}

export default Add;
