import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CardPokemon from "../CardPokemon/CardPokemon";
import { PokemonCardContainer } from "./Cards.styled-component";
import Pagination from "../Pagination/Pagination";

import FilterOrder from "../../components/FilterOrder/FilterOrder";

const Cards = () => {
  const allPokemons = useSelector((state) => state.allPokemons);
  const [currentPage, setCurrentPage] = useState(1);
  const [pokemons, setPokemons] = useState([]);
  const [filteredPokemon, setFilteredPokemon] = useState([]);

  const pokemonsPerPage = 12;
  const totalPokemons = allPokemons.length;
  //const totalPages = Math.ceil(totalPokemons / pokemonsPerPage);
  const lastIndex = currentPage * pokemonsPerPage;
  const firstIndex = lastIndex - pokemonsPerPage;

  useEffect(() => {
    setPokemons(allPokemons);
  }, [allPokemons]);

  return (
    <>
      <FilterOrder setFilteredPokemon={setFilteredPokemon} />
      <PokemonCardContainer>
        {pokemons
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
