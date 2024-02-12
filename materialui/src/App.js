import { Box, Stack, ThemeProvider, createTheme } from "@mui/material";
import Feed from "./Components/Feed";
import Rightbar from "./Components/Rightbar";
import Slidebar from "./Components/Slidebar";
import Navbar from "./Components/Navbar";
import Add from "./Components/Add";
import { useState } from "react";

function App() {
  const [mode, setMode] = useState("dark");
  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <Box bgcolor={"background.default"} color={"text.primary"}>
          <Navbar />
          <Stack direction={"row"} spacing={2} justifyContent={"space-between"}>
            <Slidebar setMode={setMode} mode={mode} />
            <Feed />
            <Rightbar />
          </Stack>
          <Add />
        </Box>
      </ThemeProvider>
    </>
  );
}

export default App;
