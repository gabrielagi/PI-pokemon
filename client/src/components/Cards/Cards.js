import React from "react";
import { CardsContainer } from "./Cards.styled-component";
import Card from "../CardPokemon/CardPokemon";

export default function Cards({ pokemons, onClose }) {
  return (
    <CardsContainer>
      {pokemons.map(({ id, name, image }) => {
        return (
          <Card key={id} id={id} name={name} image={image} onClose={onClose} />
        );
      })}
    </CardsContainer>
  );
}
