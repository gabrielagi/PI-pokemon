import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllPokemons,
  clearSearch,
} from "../../redux/actions/getPokemon/action";
import { getTypes } from "../../redux/actions/getTypes/action";
import CardPokemon from "../../components/CardPokemon/CardPokemon";
import Cards from "../../components/Cards/Cards";
import {
  HomeContainer,
  PokemonCardContainer,
  CloseButton,
  PokemonIndividualCardContainer,
} from "./Home.styled-components";

const Home = () => {
  const dispatch = useDispatch();
  const pokemonById = useSelector((state) => state.pokemonById);

  useEffect(() => {
    dispatch(getAllPokemons());
    dispatch(getTypes());
  }, [dispatch]);

  const handleChange = () => {
    dispatch(clearSearch());
  };

  return (
    <HomeContainer>
      {pokemonById.name ? (
        <PokemonCardContainer>
          <PokemonIndividualCardContainer>
            <CardPokemon key={pokemonById.id} pokemon={pokemonById} />
          </PokemonIndividualCardContainer>
          <CloseButton
            onClick={handleChange}
            alt="Cerrar tarjeta del personaje"
          >
            Cerrar
          </CloseButton>
        </PokemonCardContainer>
      ) : (
        <PokemonIndividualCardContainer>
          <Cards />
        </PokemonIndividualCardContainer>
      )}
    </HomeContainer>
  );
};

export default Home;
