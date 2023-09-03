import React from "react";
import { NavLink } from "react-router-dom";
import {
  NavBar,
  NavContainer,
  NavButton,
  NavButtonLogOut,
} from "./Nav.styled.components";

import SearchBar from "../SearchBar/SearchBar";

const Navbar = () => {
  return (
    <NavBar>
      <NavContainer>
        <NavLink to="/home" className="home">
          <NavButton>Crear Pokemon</NavButton>
        </NavLink>
        <NavLink to="/formulario" className="home">
          <NavButton>Crear Pokemon</NavButton>
        </NavLink>
      </NavContainer>
      <NavContainer>
        <SearchBar />
      </NavContainer>
      <NavButtonLogOut>Salir</NavButtonLogOut>
    </NavBar>
  );
};

export default Navbar;
