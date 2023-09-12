import React from "react";
import {
  PokemonName,
  PokemonImage,
  CardWrapper,
} from "./CardPokemon.styled-component";

import pokebola from "../../assets/pokebola.png";

const EmptyCard = () => {
  // Recibe el objeto Pokémon como prop
  return (
    <div>
      <CardWrapper>
        <PokemonImage src={pokebola} />
        <PokemonName>There are no Pokemon with that type</PokemonName>
      </CardWrapper>
    </div>
  );
};

export default EmptyCard;
