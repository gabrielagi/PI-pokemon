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
        {pokemon.attack < 20 ? (
          <>
            <Bar style={{ width: `${pokemon.attack}px` }}></Bar>
            <BarLabelValue>({pokemon.attack})</BarLabelValue>
            <BarLabel>Attack</BarLabel>
          </>
        ) : (
          <>
            <Bar style={{ width: `${pokemon.attack + 100}px` }}></Bar>
            <BarLabelValue>({pokemon.attack})</BarLabelValue>
            <BarLabel>Attack</BarLabel>
          </>
        )}
      </BarContainer>
      <BarContainer>
        {pokemon.defense < 20 ? (
          <>
            <Bar style={{ width: `${pokemon.defense}px` }}></Bar>
            <BarLabelValue>({pokemon.defense})</BarLabelValue>
            <BarLabel>Defense</BarLabel>
          </>
        ) : (
          <>
            <Bar style={{ width: `${pokemon.defense + 100}px` }}></Bar>
            <BarLabelValue>({pokemon.defense})</BarLabelValue>
            <BarLabel>Defense</BarLabel>
          </>
        )}
      </BarContainer>
      <BarContainer>
        {pokemon.speed < 20 ? (
          <>
            <Bar style={{ width: `${pokemon.speed}px` }}></Bar>
            <BarLabelValue>({pokemon.speed})</BarLabelValue>
            <BarLabel>Speed</BarLabel>
          </>
        ) : (
          <>
            <Bar style={{ width: `${pokemon.speed + 100}px` }}></Bar>
            <BarLabelValue>({pokemon.speed})</BarLabelValue>
            <BarLabel>Speed</BarLabel>
          </>
        )}
      </BarContainer>
      <BarContainer>
        {pokemon.height < 20 ? (
          <>
            <Bar style={{ width: `${pokemon.height}px` }}></Bar>
            <BarLabelValue>({pokemon.height})</BarLabelValue>
            <BarLabel>Height</BarLabel>
          </>
        ) : (
          <>
            <Bar style={{ width: `${pokemon.height}px` }}></Bar>
            <BarLabelValue>({pokemon.height})</BarLabelValue>
            <BarLabel>Height</BarLabel>
          </>
        )}
      </BarContainer>
      <BarContainer>
        {pokemon.weight < 80 ? (
          <>
            <Bar style={{ width: `${pokemon.weight}px` }}></Bar>
            <BarLabelValue>({pokemon.weight})</BarLabelValue>
          </>
        ) : (
          <>
            {pokemon.weight > 180 ? (
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
                  style={{
                    width: `${pokemon.weight + 100}px`,
                    display: "block",
                  }}
                ></Bar>
                <BarLabelValue>({pokemon.weight})</BarLabelValue>
              </>
            )}
          </>
        )}

        <BarLabel>Weight</BarLabel>
      </BarContainer>
    </BarChartContainer>
  );
};

export default BarChart;
