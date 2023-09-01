import React from "react";
import { NavLink } from "react-router-dom";
import {
  PokemonName,
  CardContentWrapper,
  DetailsButton,
  PokemonImage,
  PokemonTypes,
} from "./CardPokemon.styled-component";

const CardPokemon = ({ id, name, image, types }) => {
  return (
    <div>
      <NavLink
        to={`/detail/${id}`}
        title={`Mas información sobre ${name}`}
        alt="Mas información sobre el personaje"
      >
        <PokemonName>
          {name && name[0].toUpperCase().concat(name.slice(1))}
        </PokemonName>
      </NavLink>
      <CardContentWrapper>
        <NavLink to={`/detail/${id}`}>
          <DetailsButton
            title={`Mas información sobre ${name}`}
            alt="Mas información sobre el personaje"
          >
            +
          </DetailsButton>
          <PokemonTypes>
            {types.map((type, index) => (
              <span key={index}>{type}</span>
            ))}
          </PokemonTypes>
        </NavLink>
        <PokemonImage src={image} alt={`Imagen sobre ${name}`} />
      </CardContentWrapper>
    </div>
  );
};

export default CardPokemon;
