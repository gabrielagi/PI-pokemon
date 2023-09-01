import styled, { keyframes } from "styled-components";

const borderAnimation = keyframes`
  0% {
    border-color: #ff6bd6;
  }
  25% {
    border-color: #8DF904;
  }
  50% {
    border-color: #FF4800;
  }
  75% {
    border-color: #66BDFF;
  }
  100% {
    border-color: #ff6bd6;
  }
`;

export const CardWrapper = styled.div`
  position: relative;
  background-color: rgba(30, 13, 58, 0.7);
  color: #ffffff;
  padding: 10px;
  /* Arriba | Derecha | Abajo | Izquierda */
  margin: 55px 15px 5px 15px;
  border-radius: 8px;
  width: 170px;
  height: 220px;
  box-shadow: rgba(100, 100, 111, 0.6) 0px 7px 18px 2px;
  transition: transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  overflow: hidden;
  /* animation: ${borderAnimation} 5s linear infinite;  Aplica la animación al borde */

  &:hover {
    transform: scale(1.05);
    border: 1.5px solid #8df904;
  }

  @media screen and (max-width: 768px) {
    margin: 70px 10px 0px 10px;
    padding: 20px;
  }
`;

export const PokemonName = styled.h2`
  font-size: 22px;
  margin: 10px;
  color: #08bae3;
  font-family: Roboto, sans-serif;
  font-weight: 600;
`;

export const PokemonTypes = styled.p`
  font-size: 14px;
  margin: 0; /* Elimina el margen para ajustar el tamaño */
  font-family: Roboto, sans-serif;
  font-weight: 400;
  color: #ffffff;
`;

export const DetailsButton = styled.button`
  position: absolute;
  bottom: 10px; /* Posición desde abajo */
  left: 50%; /* Centrar horizontalmente */
  transform: translateX(-50%); /* Centrar horizontalmente */
  background-color: #1d252d;
  color: #ffffff;
  border: none;
  padding: 4px 9px;
  border-radius: 50%;
  cursor: pointer;

  &:hover {
    background-color: #82e405;
    background-image: none;
  }
`;

export const CardContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 114%; /* Ocupa todo el alto disponible en el CardWrapper */
`;

export const PokemonImage = styled.img`
  width: 220px;
  height: 220px;
  object-fit: cover;
  border-radius: 0px 0px 8px 8px;
  height: 62%;
  margin-top: 14px;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 6px;
  right: 7px;
  background-color: red;
  color: #ffffff;
  border: none;
  cursor: pointer;
  font-size: 9px; /* Tamaño de fuente más pequeño */
  border-radius: 50%; /* Para hacerlo redondo */
  width: 16px; /* Ancho del botón */
  height: 16px; /* Alto del botón */
  display: flex;
  align-items: center;
  justify-content: center;
`;
