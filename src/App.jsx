import Navbar from "./components/Navbar"
import { BrowserRouter, Route, Routes, ScrollRestoration, useLocation } from "react-router-dom";

import Aboutus from "./components/Aboutus";
import Contact from "./components/Contact";
import Faq from "./components/Faq";
import Offer from "./components/Offer";
import Home from "./components/Home";
import Details from "./components/Details";
import Footer from "./components/Footer";

import "./styles/Main.scss";
import "./styles/Media.scss";
import { useEffect } from "react";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <>
      <BrowserRouter basename="/">
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ClgProject" element={<Home />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/offer" element={<Offer />} />
        <Route path="/details" element={<Details />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    </>
  )
}

export default App
