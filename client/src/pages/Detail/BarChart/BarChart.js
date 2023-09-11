import React from "react";
import {
  BarChartContainer,
  BarContainer,
  Bar,
  BarLabel,
} from "./BarChart.styled-component";

const BarChart = ({ pokemonByDetail, data }) => {
  return (
    <BarChartContainer>
      {data.map((item, index) => (
        <BarContainer key={index}>
          <Bar style={{ height: `${item}px` }} />
          <BarLabel>{item}</BarLabel>
        </BarContainer>
      ))}
    </BarChartContainer>
  );
};

export default BarChart;
