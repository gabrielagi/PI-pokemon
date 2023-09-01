import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPokemons } from "../../redux/actions/getPokemon/action";
import Cards from "../../components/Cards/Cards";
import { StartButton, StartButtonContainer } from "./Home.styled-components";
import HandlePagination from "./HandlePagination";

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
      <div>
        {allPokemons
          .map((pokemon) => (
            <div>
              <p>
                NombrePokemon: {pokemon.id}
                {pokemon.name}
              </p>
            </div>
          ))
          .slice(firstIndex, lastIndex)}
      </div>
      {/* <StartButtonContainer>
          <StartButton onClick={() => paginate("prev")}>Prev</StartButton>
        <StartButton onClick={() => paginate("next")}>Next</StartButton>
        </StartButtonContainer>
        <Cards pokemons={pokemonsInActualPage} /> */}
      <p>cantidad total de {totalPokemons}</p>
      <p>cantidad limite de paginas num {totalPages}</p>
      <HandlePagination
        pokemonsPerPage={pokemonsPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPokemons={totalPokemons}
      />
    </>
  );
};

export default Home;
