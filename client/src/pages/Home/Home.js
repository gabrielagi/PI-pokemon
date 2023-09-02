import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPokemons } from "../../redux/actions/getPokemon/action";
import CardPokemon from "../../components/CardPokemon/CardPokemon";
import { PokemonCardContainer } from "./Home.styled-components";
import Pagination from "../../components/Pagination/Pagination";

const Home = () => {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const [pokemonsInActualPage, setPokemonsInActualPage] = useState([]);
  const [pokemonsPerPage, setPokemonsPerPage] = useState(12);

  useEffect(() => {
    dispatch(getAllPokemons());
  }, [dispatch]);

  const allPokemons = useSelector((state) => state.allPokemons);

  const totalPokemons = allPokemons.length;

  const totalPages = Math.ceil(totalPokemons / pokemonsPerPage);

  const lastIndex = currentPage * pokemonsPerPage;
  const firstIndex = lastIndex - pokemonsPerPage;

  return (
    <>
      <PokemonCardContainer>
        {allPokemons
          .map((pokemon) => (
            <div>
              <CardPokemon key={pokemon.id} pokemon={pokemon} />
            </div>
          ))
          .slice(firstIndex, lastIndex)}
      </PokemonCardContainer>

      <p>cantidad total de {totalPokemons}</p>
      <p>cantidad limite de paginas num {totalPages}</p>

      <Pagination
        pokemonsPerPage={pokemonsPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPokemons={totalPokemons}
      />
    </>
  );
};

export default Home;
