import React from "react";
import {
  PokemonName,
  CardContentWrapper,
  PokemonImage,
  StyledNavLink,
  CardWrapper,
} from "./CardPokemon.styled-component";

import typeImages from "./TypesImages";

const CardPokemon = ({ pokemon }) => {
  // Recibe el objeto Pokémon como prop
  return (
    <div>
      {/* <NavLink
        to={`/detail/${pokemon.id}`}
        title={`Más información sobre ${pokemon.name}`}
        alt="Más información sobre el personaje"
      > */}
      <CardWrapper>
        <StyledNavLink
          to={`/detail/${pokemon.id}`}
          title={`More information about Pokemon ${pokemon.name}`}
          alt={`Information about Pokemon ${pokemon.name}`}
        >
          <PokemonImage src={pokemon.image} alt={pokemon.name} />
          <PokemonName>
            {pokemon.name &&
              pokemon.name[0].toUpperCase().concat(pokemon.name.slice(1))}
          </PokemonName>
        </StyledNavLink>
        <CardContentWrapper>
          <p>
            {pokemon.types &&
              pokemon.types.map((type, index) => (
                <span key={index}>
                  <img
                    src={typeImages[type.name.toLowerCase()]}
                    alt={type.name}
                    style={{ width: "35px", height: "35px" }}
                    title={`The Pokémon ${pokemon.name} is type: ${type.name}`}
                  />
                </span>
              ))}
          </p>
        </CardContentWrapper>
      </CardWrapper>
    </div>
  );
};

export default CardPokemon;
