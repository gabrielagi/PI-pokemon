import React from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getPokemonById,
  clearSearch,
} from "../../redux/actions/getPokemon/action";

import { BackButton } from "../../components/Buttons/Buttons.styled-components";

import BarChart from "./BarChart/BarChart";

import { NavLink } from "react-router-dom";
import {
  DetailContainer,
  DetailCard,
  DetailInfo,
  DetailImage,
  AttributeTitle,
  DetailBackgroundContainer,
  TypeImage,
  TypeWrapper,
} from "./Detail.styled-component";

import typeImages from "../../components/CardPokemon/TypesImages";

const Detail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const pokemonByDetail = useSelector((state) => state.pokemonBySearchbar);

  useEffect(() => {
    dispatch(getPokemonById(id));
    return () => dispatch(clearSearch());
  }, [id]);

  // Poner la primera letra en mayúscula
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <DetailBackgroundContainer>
      <DetailContainer>
        {pokemonByDetail.name && (
          <DetailCard>
            <DetailImage
              src={pokemonByDetail.image || pokemonByDetail.img}
              alt=""
            />
            <DetailInfo>
              <AttributeTitle>
                {capitalizeFirstLetter(pokemonByDetail.name)}
              </AttributeTitle>
              <BarChart pokemon={pokemonByDetail} />{" "}
              <TypeWrapper>
                <p>
                  {/* Pokemon Types:{" "} */}
                  {pokemonByDetail.types &&
                    pokemonByDetail.types.map((type, index) => (
                      <span key={index}>
                        <TypeImage
                          src={typeImages[type.name.toLowerCase()]}
                          alt={type.name}
                          title={`The Pokémon ${pokemonByDetail.name} is type: ${type.name}`}
                        />
                        
                      </span>
                    ))}
                </p>
              </TypeWrapper>
              <NavLink to={`/home`}>
                <BackButton>Cerrar</BackButton>
              </NavLink>
            </DetailInfo>
          </DetailCard>
        )}
      </DetailContainer>
    </DetailBackgroundContainer>
  );
};

export default Detail;
