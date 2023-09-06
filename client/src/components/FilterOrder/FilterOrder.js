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

import { pokemonsByTypes, pokemonsByOrigin } from "./Filter.operations";
import { pokemonsOrdered } from "./Order.operations";

const FilterOrder = () => {
  const [showContent, setShowContent] = useState(false);

  const dispatch = useDispatch();

  const allPokemons = useSelector((state) => state.allPokemons);
  const allTypes = useSelector((state) => state.pokemonTypes);

  const toggleContent = () => {
    setShowContent(!showContent);
  };

  // Hanlder de types
  const handleFilterByType = (event) => {
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

  // Handler de Origin
  const handleFilterByOrigin = (event) => {
    const origin = event.target.value;
    if (origin) {
      const filteredPokemons = pokemonsByOrigin({
        allPokemons: allPokemons,
        origin: origin,
      });
      console.log("filteredPokemons:", filteredPokemons);
      dispatch(filterPokemonByOrigin(filteredPokemons));
    } else {
      dispatch(clearFilter());
    }
  };

  //Handler de Order
  const handleOrder = (event) => {
    const order = event.target.value;
    if (order) {
      const orderedPokemons = pokemonsOrdered({
        allPokemons: allPokemons,
        order: order,
      });
      console.log("orderedPokemons:", orderedPokemons);
      dispatch(filterPokemonByOrigin(orderedPokemons));
    } else {
      dispatch(clearFilter());
    }
  };

  return (
    <PageContainer>
      <FilterButton showContent={showContent} onClick={toggleContent}>
        {showContent ? "Hide Filter / Order" : "Filter / Order"}
      </FilterButton>

      {showContent && (
        <SelectorContainer>
          <SelectorWrapper>
            <CustomSelect onChange={handleFilterByType}>
              <option value="" disabled selected>
                Filter x Type
              </option>
              <option value="none">All Pokemons</option>
              {allTypes.map((type) => (
                <option key={type.id} value={type.name}>
                  {type.name}
                </option>
              ))}
            </CustomSelect>
          </SelectorWrapper>

          <SelectorWrapper>
            <CustomSelect onChange={handleFilterByOrigin}>
              <option value="" disabled selected>
                Filter x Origin
              </option>
              <option value="db">From Db</option>
              <option value="api">From Api</option>
            </CustomSelect>
          </SelectorWrapper>

          <SelectorContainer>
            <CustomSelect onChange={handleOrder}>
              <option value="" disabled selected>
                Order
              </option>
              <option value="A">Name Ascendent</option>
              <option value="D">Name Descendent</option>
              <option value="AA">Attack Ascendent</option>
              <option value="AD">Attack Descendent</option>
            </CustomSelect>
          </SelectorContainer>
        </SelectorContainer>
      )}
    </PageContainer>
  );
};

export default FilterOrder;
