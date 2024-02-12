import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Features from "./Components/Features/Features";
import HowitWorks from "./Components/HowitWork/HowitWork";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import UseCases from "./Components/UseCases/UseCases";
import WhyUs from "./Components/WhyUs/WhyUs";
import ContactUs from "./Components/ContactUs/ContactUs";
import ChatBox from "./Components/Home/ChatBox";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/howitworks" element={<HowitWorks />} />
          <Route path="/features" element={<Features />} />
          <Route path="/usecases" element={<UseCases />} />
          <Route path="/whyus" element={<WhyUs />} />
          <Route path="/contactus" element={<ContactUs />} />
        </Routes>
        <Footer />
        <ChatBox />
      </BrowserRouter>
    </>
  );
}

export default App;
