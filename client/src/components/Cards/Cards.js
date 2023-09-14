import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CardPokemon from "../CardPokemon/CardPokemon";
import { PokemonCardContainer } from "./Cards.styled-component";
import Pagination from "../Pagination/Pagination";

import EmptyCard from "../CardPokemon/EmptyCard";

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
  const [previousPage, setPreviousPage] = useState(1);
  const pokemonsPerPage = 12;
  const totalPokemons = isFiltered
    ? pokemonsFilteredByType.length + 1 // Uso la longitud del pokemons filtrados por type
    : allPokemons.length; // Uso la longitud de todos los pokemones

  //const totalPages = Math.ceil(totalPokemons / pokemonsPerPage);
  const lastIndex = currentPage * pokemonsPerPage;
  const firstIndex = lastIndex - pokemonsPerPage;

  useEffect(() => {
    setPokemons(allPokemons);
  }, [allPokemons]);

  useEffect(() => {
    setPreviousPage(currentPage);
    if (isFiltered.length === 0) {
      setCurrentPage(previousPage);
      setPreviousPage(1); // Establecer la página anterior a 1
    }
    setCurrentPage(previousPage);
  }, [isFiltered]);

  return (
    <>
      <FilterOrder />
      <PokemonCardContainer>
        {isFiltered ? (
          pokemonsFilteredByType.length === 0 ? (
            <EmptyCard />
          ) : (
            pokemonsFilteredByType
              .map((pokemon) => (
                <div key={pokemon.id}>
                  <CardPokemon key={pokemon.id} pokemon={pokemon} />
                </div>
              ))
              .slice(firstIndex, lastIndex)
          )
        ) : isOrdered ? (
          orderedPokemons
            .map((pokemon) => (
              <div key={pokemon.id}>
                <CardPokemon key={pokemon.id} pokemon={pokemon} />
              </div>
            ))
            .slice(firstIndex, lastIndex)
        ) : (
          pokemons
            .map((pokemon) => (
              <div key={pokemon.id}>
                <CardPokemon key={pokemon.id} pokemon={pokemon} />
              </div>
            ))
            .slice(firstIndex, lastIndex)
        )}

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
