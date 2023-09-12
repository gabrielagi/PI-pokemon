import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CardPokemon from "../CardPokemon/CardPokemon";
import { PokemonCardContainer } from "./Cards.styled-component";
import Pagination from "../Pagination/Pagination";

import FilterOrder from "../../components/FilterOrder/FilterOrder";

const Cards = () => {
  const allPokemons = useSelector((state) => state.allPokemons);

  const isFiltered = useSelector((state) => state.isFiltered);
  const isOrdered = useSelector((state) => state.isOrdered);

  const pokemonsFilteredByType = useSelector(
    (state) => state.pokemonsFilteredByType
  );
  const orderedPokemons = useSelector((state) => state.pokemonsOrdered);

  const [currentPage, setCurrentPage] = useState(1);
  const [pokemons, setPokemons] = useState([]);

  const pokemonsPerPage = 12;
  const totalPokemons = isFiltered
    ? pokemonsFilteredByType.length // Uso la longitud del pokemons filtrados por type
    : allPokemons.length; // Uso la longitud de todos los pokemones

  //const totalPages = Math.ceil(totalPokemons / pokemonsPerPage);
  const lastIndex = currentPage * pokemonsPerPage;
  const firstIndex = lastIndex - pokemonsPerPage;

  useEffect(() => {
    setPokemons(allPokemons);
  }, [allPokemons]);

  return (
    <>
      <FilterOrder />
      <PokemonCardContainer>
        {isFiltered
          ? pokemonsFilteredByType
              .map((pokemon) => (
                <div key={pokemon.id}>
                  <CardPokemon key={pokemon.id} pokemon={pokemon} />
                </div>
              ))
              .slice(firstIndex, lastIndex)
          : isOrdered
          ? orderedPokemons
              .map((pokemon) => (
                <div key={pokemon.id}>
                  <CardPokemon key={pokemon.id} pokemon={pokemon} />
                </div>
              ))
              .slice(firstIndex, lastIndex)
          : pokemons
              .map((pokemon) => (
                <div key={pokemon.id}>
                  <CardPokemon key={pokemon.id} pokemon={pokemon} />
                </div>
              ))
              .slice(firstIndex, lastIndex)}

        <Pagination
          pokemonsPerPage={pokemonsPerPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalPokemons={totalPokemons}
        />
      </PokemonCardContainer>
    </>
  );
};

export default Cards;
