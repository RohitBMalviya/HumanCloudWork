import { Box } from "@mui/material";
import React from "react";

function Borders({
  widths,
  heights,
  bottoms,
  rights,
  tops,
  lefts,
  zIndexs,
  color,
}) {
  const styleBox = {
    border: `1px solid ${color}`,
    width: widths,
    height: heights,
    position: "absolute",
    zIndex: zIndexs,
    bottom: bottoms,
    top: tops,
    left: lefts,
    right: rights,
    borderRadius: "100%",
    overflow: "hidden",
  };
  return (
    <>
      <Box sx={styleBox}></Box>
    </>
  );
}

export default Borders;
