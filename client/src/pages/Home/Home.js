import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPokemons } from "../../redux/actions/getPokemon/action";
import { changePage } from "../../redux/actions/changePage/action";
import Cards from "../../components/Cards/Cards";
import { StartButton, StartButtonContainer } from "./Home.styled-components";

const Home = () => {
  const dispatch = useDispatch();
  const [showAllPokemons, setShowAllPokemons] = useState(false); // Estado para controlar si se muestran todos los pokemones

  const paginate = (event) => {
    dispatch(changePage(event.target.name));
  };

  useEffect(() => {
    dispatch(getAllPokemons());
  }, [dispatch]);

  const handleShowAllPokemons = () => {
    setShowAllPokemons(true);
  };

  const pokemonsInActualPage = useSelector(
    (state) => state.pokemonsInActualPage
  );

  return (
    <div>
      <StartButtonContainer>
        <StartButton onClick={handleShowAllPokemons}>
          Show All Pokemons
        </StartButton>
      </StartButtonContainer>

      <StartButtonContainer>
        <StartButton onClick={paginate} name="prev">
          Prev{" "}
        </StartButton>
        <StartButton onClick={paginate} name="next">
          Next {pokemonsInActualPage.length}
        </StartButton>
      </StartButtonContainer>
      {/* <Cards pokemons={pokemonsInActualPage} /> */}
    </div>
  );
};

export default Home;
