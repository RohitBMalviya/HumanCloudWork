import { Box } from "@mui/material";
import React from "react";
import UseCaseSection1 from "./UseCasesSection1";
import UseCasesSection2 from "./UseCasesSection2";
import Home8Section from "../Home/Home8Section";

function UseCases() {
  return (
    <>
      <Box paddingTop={"200px"}>
        <UseCaseSection1 />
        <UseCasesSection2 />
        <Home8Section />
      </Box>
    </>
  );
}

export default UseCases;
