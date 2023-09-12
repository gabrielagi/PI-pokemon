import { useDispatch } from "react-redux";
import { clearOrder } from "../../../redux/actions/orderPokemon/action";
import { orderedPokemon } from "../../../redux/actions/orderPokemon/action";

import { pokemonsOrdered } from "../Operations/Order.operations";

//Handler de Order
export const handleOrder = ({ allPokemons, order, dispatch }) => {
  if (order !== "none") {
    const orderPokemons = pokemonsOrdered({
      allPokemons: allPokemons,
      order: order,
    });
    console.log("orderedPokemons:", orderPokemons);
    dispatch(orderedPokemon(orderPokemons));
  } else {
    dispatch(clearOrder());
  }
};
