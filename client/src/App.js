import React from "react";
import { useLocation } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import Home from "./pages/Home/Home";
import Nav from "./components/Nav/Nav";

function App() {
  const location = useLocation();

  return (
    <div>
      {location.pathname !== "/" && <Nav />}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
