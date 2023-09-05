import React, { useState } from "react";
//import { NavLink } from "react-router-dom";
import {
  PageContainer,
  SelectorContainer,
  SelectorWrapper,
  CustomSelect,
} from "./FilterOrder.styled-component";

import { FilterButton } from "../Buttons/Buttons.styled-components";

import { useDispatch, useSelector } from "react-redux";
import {
  filterPokemonByType,
  filterPokemonByOrigin,
  clearFilter,
} from "../../redux/actions/filterPokemon/action";

import { pokemonsByTypes } from "./FilterOrder.actions";

const FilterOrder = () => {
  const [showContent, setShowContent] = useState(false);

  const dispatch = useDispatch();

  const allPokemons = useSelector((state) => state.allPokemons);
  const allTypes = useSelector((state) => state.pokemonTypes);

  const toggleContent = () => {
    setShowContent(!showContent);
  };

  const handleFilter = (event) => {
    const type = event.target.value;
    if (type !== "none") {
      const filteredPokemons = pokemonsByTypes({
        allPokemons: allPokemons,
        type: type,
      });
      console.log("filteredPokemons:", filteredPokemons);
      dispatch(filterPokemonByType(filteredPokemons));
    } else {
      dispatch(clearFilter());
    }
  };

  return (
    <PageContainer>
      <FilterButton showContent={showContent} onClick={toggleContent}>
        {showContent ? "Cerrar Filtro / Orden" : "Filtrar / Ordenar"}
      </FilterButton>

      {showContent && (
        <SelectorContainer>
          <SelectorWrapper>
            <CustomSelect onChange={handleFilter}>
              <option value="" disabled selected>
                Filtro x Type
              </option>
              {allTypes.map((type) => (
                <option key={type.id} value={type.name}>
                  {type.name}
                </option>
              ))}
              <option value="none">All Pokemons</option>
            </CustomSelect>
          </SelectorWrapper>

          <SelectorWrapper>
            <CustomSelect onChange={handleFilter}>
              <option value="" disabled selected>
                Filtro x Origin
              </option>
              <option value="db">From Db</option>
              <option value="api">From Api</option>
            </CustomSelect>
          </SelectorWrapper>

          <SelectorContainer>
            <CustomSelect>
              <option value="" disabled selected>
                Orden
              </option>
              <option value="A">Ascendente</option>
              <option value="D">Descendente</option>
            </CustomSelect>
          </SelectorContainer>
        </SelectorContainer>
      )}
    </PageContainer>
  );
};

export default FilterOrder;
