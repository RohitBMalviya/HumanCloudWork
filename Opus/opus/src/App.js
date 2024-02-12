import { BrowserRouter, Routes, Route } from "react-router-dom";
import Overview from "./Componets/Pages/Overview.js";
import Pages from "./Componets/Pages/Pages.js";
import Templates from "./Componets/Pages/Templates.js";
import Home from "./Componets/Pages/Home.js";
import Navbar from "./Componets/Navbar.js";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/overview" element={<Overview />} />
          <Route path="/pages" element={<Pages />} />
          <Route path="/templates" element={<Templates />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
