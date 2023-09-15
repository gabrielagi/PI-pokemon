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
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    const input = inputValue.trim();

    if (/^[a-zA-Z]+$/.test(input)) {
      dispatch(getPokemonByName(inputValue));
    } else {
      dispatch(getPokemonById(inputValue));
    }
    setInputValue("");
    setIsButtonDisabled(true);
  };

  const handleChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
    setIsButtonDisabled(value.trim() === "");
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
        <SearchButton onClick={handleSubmit} disabled={isButtonDisabled}>
          Buscar
        </SearchButton>
      </SearchContainer>
    </div>
  );
}
