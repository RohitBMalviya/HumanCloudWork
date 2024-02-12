"use client";
import { Button, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import React from "react";
import ButtonData from "./ButtonData";
function Buttons({ ids, backgrounds, colors, widths, bordercolor }) {
  const router = useRouter();
  const styleTypography = {
    fontFamily: "Nunito",
    fontSize: "18px",
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "normal",
    color: colors,
    textTransform: "capitalize",
  };
  const styleButton = {
    background: backgrounds,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "40px",
    padding: "0px",
    width: widths,
    height: "75px",
    border: `1px solid ${bordercolor}`,
    "&:hover": {
      backgroundColor: backgrounds,
    },
  };
  return (
    <>
      {ButtonData.filter((items) => items.id === ids).map((items, index) => (
        <Button
          key={index}
          sx={styleButton}
          onClick={() => router.push(`${items.link}`)}
        >
          <Typography sx={styleTypography}>{items.name}</Typography>
        </Button>
      ))}
    </>
  );
}

export default Buttons;
