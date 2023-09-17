import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import CardPokemon from "../../components/CardPokemon/CardPokemon";
import {
  HomeContainer,
  PokemonCardContainer,
} from "../Home/Home.styled-components";

const Favorites = () => {
  const dispatch = useDispatch();
  const pokemonsFav = useSelector((state) => state.allFavPokemons);

  return (
    <HomeContainer>
      <PokemonCardContainer>
        {pokemonsFav.length ? (
          pokemonsFav.map((pokemon) => (
            <div key={pokemon.id}>
              <CardPokemon pokemon={pokemon} />
            </div>
          ))
        ) : (
          <p>No hay pokemons Favoritos aun</p>
        )}
      </PokemonCardContainer>
    </HomeContainer>
  );
};

export default Favorites;
