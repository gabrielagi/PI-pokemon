import React from "react";
import { useLocation } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import Home from "./pages/Home/Home";
import Nav from "./components/Nav/Nav";
import CreatePokemon from "./pages/CreatePokemon/CreatePokemon";
import Detail from "./pages/Detail/Detail";

function App() {
  const location = useLocation();

  return (
    <div>
      {location.pathname !== "/" && <Nav />}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/createpokemon" element={<CreatePokemon />} />
        <Route path="/:id" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
