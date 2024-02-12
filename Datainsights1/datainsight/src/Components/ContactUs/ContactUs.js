import {
  Grid,
  Typography,
  Box,
  Stack,
  TextField,
  InputLabel,
  TextareaAutosize,
} from "@mui/material";
import Icon1 from "../../Images/ContactIcon1.svg";
import Icon2 from "../../Images/ContactIcon2.svg";
import Buttons from "../Home/Buttons";
import React, { useState } from "react";
import Background from "../../Images/ContactBackground1.png";
import {
  styleTypography1,
  styleTypography2,
  styleTypography3,
  styleBox1,
  styleGrid1,
  styleStack1,
  styleStack2,
  styleInputLabel,
  styleTextField,
} from "./ContactUsStyle";

function ContactUs() {
  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    Company: "",
    Subject: "",
    Message: "",
  });

  const handleInput = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormData((prev) => {
      return { ...prev, [name]: value };
    });
  };
  return (
    <>
      <Box
        sx={{
          position: "absolute",
          zIndex: 0,
          left: "63%",
          top: "10%",
        }}
      >
        <img
          src={Background}
          alt="-"
          style={{
            width: "700px",
            height: "1500px",
          }}
        />
      </Box>
      <Stack
        direction={"column"}
        spacing={6}
        sx={{
          ...styleStack1,
          overflow: "hidden",
          position: "relative",
          zIndex: 1,
        }}
      >
        <Typography sx={styleTypography1}>Get in Touch</Typography>
        {/* Mail & Contact us ============================================ */}
        <Stack
          direction={"column"}
          spacing={8}
          sx={{
            width: "80%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Grid
            container
            item
            columnGap={6}
            sx={{ alignItems: "center", justifyContent: "center" }}
          >
            <Grid item sx={styleGrid1}>
              <Box sx={styleBox1}>
                <img
                  src={Icon1}
                  alt="-"
                  style={{ width: "40%", height: "40%" }}
                />
                <Typography sx={styleTypography2}>Mail Us</Typography>
              </Box>
              <Box sx={styleTypography3}>saasup@gmail.co</Box>
            </Grid>
            <Grid item sx={styleGrid1}>
              <Box sx={styleBox1}>
                <img
                  src={Icon2}
                  alt="-"
                  style={{ width: "34%", height: "34%" }}
                />
                <Typography sx={styleTypography2}>Contact Us</Typography>
              </Box>
              <Box sx={styleTypography3}>+91 8530116304</Box>
            </Grid>
          </Grid>

          {/* Form Detail ============================================ */}
          <Stack sx={styleStack2}>
            <Grid
              container
              item
              spacing={4}
              sx={{ width: "90%", height: "800px" }}
            >
              <Grid item xs={6}>
                <InputLabel sx={styleInputLabel} required>
                  First Name
                </InputLabel>
                <TextField
                  name="Name"
                  type="text"
                  placeholder="John David"
                  autoComplete="off"
                  value={formData.name}
                  onChange={handleInput}
                  sx={styleTextField}
                  InputProps={{
                    style: {
                      height: "70px",
                    },
                  }}
                />
              </Grid>
              <Grid item xs={6}>
                <InputLabel sx={styleInputLabel} required>
                  Your Email
                </InputLabel>
                <TextField
                  name="Email"
                  type="Email"
                  placeholder="example@yourmail.com"
                  autoComplete="off"
                  value={formData.Email}
                  onChange={handleInput}
                  sx={styleTextField}
                  InputProps={{
                    style: {
                      height: "70px",
                    },
                  }}
                />
              </Grid>
              <Grid item xs={6}>
                <InputLabel sx={styleInputLabel} required>
                  Company
                </InputLabel>
                <TextField
                  name="Company"
                  type="text"
                  placeholder="Your company name here"
                  autoComplete="off"
                  value={formData.Company}
                  onChange={handleInput}
                  sx={styleTextField}
                  InputProps={{
                    style: {
                      height: "70px",
                    },
                  }}
                />
              </Grid>
              <Grid item xs={6}>
                <InputLabel sx={styleInputLabel} required>
                  Subject
                </InputLabel>
                <TextField
                  name="Subject"
                  type="text"
                  placeholder="How can we Help"
                  autoComplete="off"
                  value={formData.Subject}
                  onChange={handleInput}
                  sx={styleTextField}
                  InputProps={{
                    style: {
                      height: "70px",
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <InputLabel sx={styleInputLabel} required>
                  Message
                </InputLabel>
                <TextareaAutosize
                  name="Message"
                  type="text"
                  placeholder="Hello there, I would like to talk about how to..."
                  autoComplete="off"
                  value={formData.Message}
                  onChange={handleInput}
                  style={{
                    fontFamily: "Nunito",
                    fontSize: "20px",
                    width: "1200px",
                    height: "300px",
                    border: "1px solid #D3D3D3",
                    borderRadius: "20px",
                    padding: "20px",
                    "&:focus": {
                      outline: 0,
                      borderColor: "#D3D3D3",
                    },

                    "&:focusVisible": {
                      outline: 0,
                    },
                  }}
                />
              </Grid>
            </Grid>
            <Buttons
              ids={10}
              backgrounds={"rgba(161, 40, 115, 1)"}
              colors={"white"}
              widths={"240px"}
            />
          </Stack>
        </Stack>
      </Stack>
    </>
  );
}

export default ContactUs;
