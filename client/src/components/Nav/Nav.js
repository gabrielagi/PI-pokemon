import React from "react";
import { NavLink } from "react-router-dom";
import { NavBar, NavContainer } from "./Nav.styled.components";
import {
  NavButton,
  NavButtonLogOut,
} from "../Buttons/Buttons.styled-components";

import SearchBar from "../SearchBar/SearchBar";

// import FileOrder from "../FilterOrder/FileOrder";

const Navbar = () => {
  return (
    <NavBar>
      <NavContainer>
        <NavLink to="/home" className="home">
          <NavButton>Home</NavButton>
        </NavLink>
        <NavLink to="/crearpokemon" className="home">
          <NavButton>Crear Pokemon</NavButton>
        </NavLink>
      </NavContainer>
      <NavContainer>
        <SearchBar />
      </NavContainer>
      <NavLink to="/" className="home">
        <NavButtonLogOut>Salir</NavButtonLogOut>
      </NavLink>
      {/* <FileOrder /> */}
    </NavBar>
  );
};

export default Navbar;
