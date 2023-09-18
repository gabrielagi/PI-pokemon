import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addFav, removeFav } from "../../redux/actions/Favorites/action";

import {
  PokemonName,
  CardContentWrapper,
  PokemonImage,
  StyledNavLink,
  CardWrapper,
  ActionButtons,
  // Pokebola,
  FavoriteButton,
  FavImage,
} from "./CardPokemon.styled-component";

import { DeleteButton } from "../Buttons/Buttons.styled-components";

import typeImages from "./TypesImages";

import defaultImage from "../../assets/basepokemon.png";

import heartgrey from "../../assets/heartgrey.png";

import heartred from "../../assets/heartred.png";

import { deletePokemonById } from "../../redux/actions/DeletePokemon/action";

const CardPokemon = ({ pokemon }) => {
  // Recibe el objeto Pokémon como prop
  const dispatch = useDispatch();

  const myFavorites = useSelector((state) => state.allFavPokemons);

  const [isFav, setIsFav] = useState(false);

  const handleFavorite = (pokemon) => {
    console.log("pokefav id", pokemon);
    if (isFav) {
      setIsFav(false);
      dispatch(removeFav(pokemon)); // Utiliza dispatch para llamar a la acción
    } else {
      setIsFav(true);
      dispatch(addFav(pokemon)); // Utiliza dispatch para llamar a la acción
    }
  };

  useEffect(() => {
    // Comprueba si el Pokémon actual está en la lista de favoritos
    const isPokemonFavorite = myFavorites.some((fav) => fav.id === pokemon.id);
    setIsFav(isPokemonFavorite);
  }, [myFavorites, pokemon]);

  // Eliminar un Pokemon
  const handleDelete = (id) => {
    // Muestra un cuadro de confirmación antes de eliminar
    const confirmDelete = window.confirm(
      "Are you sure you want to remove this Pokémon?"
    );

    if (confirmDelete) {
      dispatch(deletePokemonById(id));
    }
  };

  return (
    <div>
      <CardWrapper>
        <FavoriteButton
          onClick={() => handleFavorite(pokemon)}
          title={`Añadir/Quitar a ${pokemon.name} de Favoritos `}
        >
          <FavImage
            src={isFav ? heartred : heartgrey}
            alt={isFav ? "Favorito" : "No favorito"}
          />
        </FavoriteButton>
        {pokemon.createdInDb && ( // Renderizo los botones solo si createdInDb es verdadero
          <ActionButtons>
            <DeleteButton onClick={() => handleDelete(pokemon.id)}>
              Delete
            </DeleteButton>
          </ActionButtons>
        )}
        <StyledNavLink
          to={`/detail/${pokemon.id}`}
          title={`More information about Pokemon ${pokemon.name}`}
          alt={`Information about Pokemon ${pokemon.name}`}
        >
          <PokemonImage
            src={pokemon.image || pokemon.img}
            alt={pokemon.name}
            onError={(e) => {
              e.target.src = defaultImage; // Utilizo la imagen de respaldo de assets
            }}
          />
          <PokemonName>
            {pokemon.name &&
              pokemon.name[0].toUpperCase().concat(pokemon.name.slice(1))}
          </PokemonName>
        </StyledNavLink>
        {/* {pokemon.createdInDb && ( // Renderiza la Pokebola solo si createdInDb es verdadero
          <Pokebola
            title={`The Pokemon ${pokemon.name} was created by a form`}
            alt={`The Pokemon ${pokemon.name} was created by a form`}
          />
        )} */}
        <CardContentWrapper>
          <p>
            {pokemon.types &&
              pokemon.types.map((type, index) => (
                <span key={index}>
                  <img
                    src={typeImages[type.name.toLowerCase()]}
                    alt={type.name}
                    style={{ width: "35px", height: "35px" }}
                    title={`The Pokémon ${pokemon.name} is type: ${type.name}`}
                  />
                </span>
              ))}
          </p>
        </CardContentWrapper>
      </CardWrapper>
    </div>
  );
};

export default CardPokemon;
