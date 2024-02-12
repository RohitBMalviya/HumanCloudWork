import { Box } from "@mui/material";
import Navbar from "./Components/LangingPage/Navbar.js";
import Footer from "./Components/LangingPage/Footer.js";
import Banner from "./Components/LangingPage/Feed/Banner.js";
import Section1 from "./Components/LangingPage/Feed/Section1.js";
import Section2 from "./Components/LangingPage/Feed/Section2.js";
import Section3 from "./Components/LangingPage/Feed/Section3.js";
import Section4 from "./Components/LangingPage/Feed/Section4.js";
import Section5 from "./Components/LangingPage/Feed/Section5.js";
import Section6 from "./Components/LangingPage/Feed/Section6.js";
import Section7 from "./Components/LangingPage/Feed/Section7.js";

import "bootstrap/dist/css/bootstrap.min.css";
import Selectcity from "./Components/SelectCity/Selectcity";
function App() {
  return (
    <>
      <Box>
        <Navbar />
        <Box>
          <Section1 />
          <Section2 />
          <Section3 />
          <Section4 />
          <Banner />
          <Section5 />
          <Section6 />
          <Section7 />
        </Box>
        <Footer />
      </Box>
      {/* <Selectcity /> */}
    </>
  );
}

export default App;
