import React, { useState } from "react";
import {
  SearchButton,
  SearchContainer,
  SearchInput,
} from "./SearchBar.styled-component";
import { useDispatch } from "react-redux";
import {
  getPokemonByName,
  getPokemonById,
} from "../../redux/actions/getPokemon/action";

export default function SearchBar() {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isNaN(inputValue)) {
      dispatch(getPokemonByName(inputValue));
    } else {
      dispatch(getPokemonById(inputValue));
    }
    setInputValue("");
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <SearchContainer>
        <SearchInput
          type="search"
          onChange={handleChange}
          value={inputValue}
          placeholder="Ingrese el ID o nombre del Pokemon a buscar"
        />
        <SearchButton onClick={handleSubmit}>Buscar</SearchButton>
      </SearchContainer>
    </div>
  );
}
