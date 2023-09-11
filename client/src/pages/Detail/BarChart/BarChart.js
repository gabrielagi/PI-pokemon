import React from "react";
import {
  BarChartContainer,
  Bar,
  BarLabel,
  BarContainer,
} from "./BarChart.styled-component";

const BarChart = ({ pokemon }) => {
  return (
    <BarChartContainer>
      <BarContainer>
        <BarLabel>Hp:</BarLabel>
        <Bar style={{ width: `${pokemon.hp}px` }}></Bar>
        <BarLabel>{pokemon.hp}</BarLabel>
      </BarContainer>
      <BarContainer>
        <BarLabel>Attack:</BarLabel>
        <Bar style={{ width: `${pokemon.attack}px` }}></Bar>
        <BarLabel>{pokemon.attack}</BarLabel>
      </BarContainer>
      <BarContainer>
        <BarLabel>Defense:</BarLabel>
        <Bar style={{ width: `${pokemon.defense}px` }}></Bar>
        <BarLabel>{pokemon.defense}</BarLabel>
      </BarContainer>
      <BarContainer>
        <BarLabel>Speed:</BarLabel>
        <Bar style={{ width: `${pokemon.speed}px` }}></Bar>
        <BarLabel>{pokemon.speed}</BarLabel>
      </BarContainer>
      <BarContainer>
        <BarLabel>Height:</BarLabel>
        <Bar style={{ width: `${pokemon.height}px` }}></Bar>
        <BarLabel>{pokemon.height}</BarLabel>
      </BarContainer>
      <BarContainer>
        <BarLabel>Weight:</BarLabel>
        <Bar style={{ width: `${pokemon.weight}px` }}></Bar>
        <BarLabel>{pokemon.weight}</BarLabel>
      </BarContainer>
    </BarChartContainer>
  );
};

export default BarChart;
