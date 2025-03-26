import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar, Footer } from "./components";
import Home from "./pages/Home";
import WhyJoin from "./components/WhyJoin";
import Training from "./Pages/Training";
import Gallery from "./Pages/Gallery";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/why-join" element={<WhyJoin />} />
        <Route path="/training" element={<Training />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App;