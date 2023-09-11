import styled from "styled-components";

export const BarChartContainer = styled.div`
  display: flex;
`;

export const BarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 10px;
`;

export const Bar = styled.div`
  width: 20px;
  height: 20px; /* Cambia a altura en lugar de ancho para barras horizontales */
  background-color: #8df904;
  border-radius: 5px;
  margin-top: 5px;
  margin-left: 10px;
`;

export const BarLabel = styled.span`
  margin-top: 5px;
  font-size: 16px;
  color: #1d252d;
`;
