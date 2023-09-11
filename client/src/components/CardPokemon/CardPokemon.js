import React from "react";
//import { NavLink } from "react-router-dom";
import {
  PokemonName,
  CardContentWrapper,
  PokemonImage,
  // PokemonTypes,
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
        <PokemonImage src={pokemon.image} alt={pokemon.name} />
        <PokemonName>
          {pokemon.name &&
            pokemon.name[0].toUpperCase().concat(pokemon.name.slice(1))}
        </PokemonName>
        {/* </NavLink> */}
        <CardContentWrapper>
          <p>
            {/* Pokemon Types:{" "} */}
            {pokemon.types &&
              pokemon.types.map((type, index) => (
                <span key={index}>
                  <img
                    src={typeImages[type.name.toLowerCase()]}
                    alt={type.name}
                    style={{ width: "35px", height: "35px" }}
                    title={`The Pokémon ${pokemon.name} is type: ${type.name}`}
                  />
                  {/* {type.name}
                  {index < pokemon.types.length - 1 ? ", " : ""} */}
                </span>
              ))}
          </p>
        </CardContentWrapper>

        {/* <CardContentWrapper>
          <p>
            Pokemon Types:{" "}
            {pokemon.types &&
              pokemon.types.map((type, index) => (
                <span key={index}>
                  {type.name}
                  {index < pokemon.types.length - 1 ? ", " : ""}
                </span>
              ))}
          </p> */}

        {
          //Si quiero agregar una imagen por cada tipo
          /* <p>
            Pokemon Types:{" "}
            {pokemon.types &&
              pokemon.types.map((type, index) => (
                <span key={index}>
                  <img
                    src={getTypeImage(type.name)}
                    alt={type.name}
                    style={{ width: "20px", height: "20px" }}
                  />
                  {type.name}
                  {index < pokemon.types.length - 1 ? ", " : ""}
                </span>
              ))}
          </p> */
        }
        {/* <PokemonImage
            // src={`images/sprites/${pokemon.image}`}
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/2.gif"
            alt={`Imagen de ${pokemon.name}`}
          /> */}
        {/* </CardContentWrapper> */}
      </CardWrapper>
    </div>
  );
};

export default CardPokemon;
