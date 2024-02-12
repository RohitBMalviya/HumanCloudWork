import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/partials/Home";
import Register from "./Components/partials/Register";
import Login from "./Components/partials/Login";
import React from "react";
function App() {
  return (
    <>
      <BrowserRouter>
        {/* <Header /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
