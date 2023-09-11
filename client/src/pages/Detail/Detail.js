import React from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getPokemonById,
  clearSearch,
} from "../../redux/actions/getPokemon/action";

import BarChart from "./BarChart/BarChart";

import { NavLink } from "react-router-dom";
import {
  DetailContainer,
  DetailCard,
  DetailInfo,
  DetailImage,
  TitleWrapper,
  AttributeWrapper,
  AttributeTitle,
  AttributeValue,
  BackButton,
} from "./Detail.styled-component";

const Detail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const pokemonByDetail = useSelector((state) => state.pokemonBySearchbar);

  useEffect(() => {
    dispatch(getPokemonById(id));
    return () => dispatch(clearSearch());
  }, [id]);

  return (
    <DetailContainer>
      {pokemonByDetail.name && (
        <DetailCard>
          <DetailImage src={pokemonByDetail.image} alt="" />
          <DetailInfo>
            <h1>{pokemonByDetail.name}</h1>
            <BarChart
              pokemonByDetail={pokemonByDetail}
              data={[
                pokemonByDetail.hp,
                pokemonByDetail.defense,
                pokemonByDetail.attack,
                pokemonByDetail.speed,
              ]}
            />{" "}
            <NavLink to={`/home`}>
              <BackButton>Cerrar</BackButton>
            </NavLink>
          </DetailInfo>
        </DetailCard>
      )}
    </DetailContainer>
  );
};

export default Detail;
