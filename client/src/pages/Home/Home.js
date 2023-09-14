import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllPokemons,
  clearSearch,
  clearHomeState,
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
  const pokemonBySearchbar = useSelector((state) => state.pokemonBySearchbar);
  const types = useSelector((state) => state.pokemonTypes);

  useEffect(() => {
    dispatch(getAllPokemons());
    if (types.length < 1) {
      dispatch(getTypes());
    }

    return () => dispatch(clearHomeState());
  }, [dispatch]);

  const handleChange = () => {
    dispatch(clearSearch());
  };

  return (
    <HomeContainer>
      {pokemonBySearchbar.name ? (
        <PokemonCardContainer>
          <PokemonIndividualCardContainer>
            <CardPokemon
              key={pokemonBySearchbar.id}
              pokemon={pokemonBySearchbar}
            />
          </PokemonIndividualCardContainer>
          <CloseButton
            onClick={handleChange}
            alt="Cerrar tarjeta del personaje"
          >
            Cerrar
          </CloseButton>
        </PokemonCardContainer>
      ) : (
        <PokemonCardContainer>
          <Cards />
        </PokemonCardContainer>
      )}
    </HomeContainer>
  );
};

export default Home;
