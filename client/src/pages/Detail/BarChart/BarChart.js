import React from "react";
import {
  BarChartContainer,
  Bar,
  BarLabel,
  BarLabelValue,
  BarContainer,
} from "./BarChart.styled-component";

const BarChart = ({ pokemon }) => {
  return (
    <BarChartContainer>
      <BarContainer>
        <Bar style={{ width: `${pokemon.hp + 100}px` }}></Bar>
        <BarLabelValue>({pokemon.hp})</BarLabelValue>
        <BarLabel>Hp</BarLabel>
      </BarContainer>
      <BarContainer>
        <Bar style={{ width: `${pokemon.attack + 100}px` }}></Bar>
        <BarLabelValue>({pokemon.attack})</BarLabelValue>
        <BarLabel>Attack</BarLabel>
      </BarContainer>
      <BarContainer>
        <Bar style={{ width: `${pokemon.defense + 100}px` }}></Bar>
        <BarLabelValue>({pokemon.defense})</BarLabelValue>
        <BarLabel>Defense</BarLabel>
      </BarContainer>
      <BarContainer>
        <Bar style={{ width: `${pokemon.speed + 100}px` }}></Bar>
        <BarLabelValue>({pokemon.speed})</BarLabelValue>
        <BarLabel>Speed</BarLabel>
      </BarContainer>
      <BarContainer>
        <Bar style={{ width: `${pokemon.height + 30}px` }}></Bar>
        <BarLabelValue>({pokemon.height})</BarLabelValue>
        <BarLabel>Height</BarLabel>
      </BarContainer>
      <BarContainer>
        {pokemon.weight > 170 ? (
          <>
            <Bar
              style={{
                width: `20px`,
                display: "block",
                backgroundColor: "pink",
              }}
            ></Bar>
            <BarLabelValue>({pokemon.weight})</BarLabelValue>
          </>
        ) : (
          <>
            <Bar
              style={{ width: `${pokemon.weight + 100}px`, display: "block" }}
            ></Bar>
            <BarLabelValue>({pokemon.weight})</BarLabelValue>
          </>
        )}
        <BarLabel>Weight</BarLabel>
      </BarContainer>
    </BarChartContainer>
  );
};

export default BarChart;
