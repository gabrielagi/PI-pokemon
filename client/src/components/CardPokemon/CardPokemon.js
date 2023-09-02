import React from "react";
import { NavLink } from "react-router-dom";
import {
  PokemonName,
  CardContentWrapper,
  PokemonImage,
  PokemonTypes,
} from "./CardPokemon.styled-component";

const CardPokemon = ({ pokemon }) => {
  // Recibe el objeto Pokémon como prop
  return (
    <div>
      {/* <NavLink
        to={`/detail/${pokemon.id}`}
        title={`Más información sobre ${pokemon.name}`}
        alt="Más información sobre el personaje"
      > */}
      <PokemonName>
        {pokemon.name &&
          pokemon.name[0].toUpperCase().concat(pokemon.name.slice(1))}
      </PokemonName>
      {/* </NavLink> */}
      <CardContentWrapper>
        <p>
          Pokemon Types:{" "}
          {pokemon.types.map((type, index) => (
            <span key={index}>{type.name}</span>
          ))}
        </p>
        <PokemonImage
          // src={`images/sprites/${pokemon.image}`}
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/2.gif"
          alt={`Imagen de ${pokemon.name}`}
        />
      </CardContentWrapper>
    </div>
  );
};

export default CardPokemon;
