// Handlers/handlerFilter.js

import { useDispatch } from "react-redux";
import {
  filterPokemonByType,
  filterPokemonByOrigin,
  clearFilter,
} from "../../../redux/actions/filterPokemon/action";
import {
  pokemonsByTypes,
  pokemonsByOrigin,
} from "../Operations/Filter.operations";

// Hanlder de types
export const handleFilterType = ({ allPokemons, type, dispatch }) => {
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
export const handleFilterByOrigin = ({ allPokemons, origin, dispatch }) => {
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
