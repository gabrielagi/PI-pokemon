import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllPokemons,
  clearSearch,
} from "../../redux/actions/getPokemon/action";
import CardPokemon from "../../components/CardPokemon/CardPokemon";
import Cards from "../../components/Cards/Cards";
import { HomeContainer, PokemonCardContainer } from "./Home.styled-components";
import SearchBar from "../../components/SearchBar/SearchBar";

const Home = () => {
  const dispatch = useDispatch();
  const pokemonById = useSelector((state) => state.pokemonById);

  useEffect(() => {
    dispatch(getAllPokemons());
  }, [dispatch]);

  const handleChange = () => {
    dispatch(clearSearch());
  };

  return (
    <HomeContainer>
      <PokemonCardContainer>
        {pokemonById.name ? (
          <div>
            <p>Pokemon name: {pokemonById.name}</p>
            <CardPokemon key={pokemonById.id} pokemon={pokemonById} />
            <button onClick={handleChange}>Cerrar</button>
          </div>
        ) : (
          <Cards />
        )}
        <SearchBar />
      </PokemonCardContainer>
    </HomeContainer>
  );
};

export default Home;
