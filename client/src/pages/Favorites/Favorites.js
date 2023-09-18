import React from "react";
import { useSelector } from "react-redux";

import CardPokemon from "../../components/CardPokemon/CardPokemon";
import { HomeContainer } from "../Home/Home.styled-components";

import { PokemonCardContainer } from "../../components/Cards/Cards.styled-component";

const Favorites = () => {
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
