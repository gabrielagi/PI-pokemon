import React from "react";
import { CardsContainer } from "./Cards.styled-component";
import CardPokemon from "../CardPokemon/CardPokemon"; // Importa el componente CardPokemon

export default function Cards({ pokemons }) {
  return (
    <CardsContainer>
      {pokemons.length > 0 ? (
        pokemons.map((pokemon) => (
          <CardPokemon key={pokemon.id} pokemon={pokemon} />
        ))
      ) : (
        <p>No hay Pokémon disponibles en esta página.</p>
      )}
    </CardsContainer>
  );
}
