import styled from "styled-components";

export const CardWrapper = styled.div`
  position: relative;
  background-color: rgba(30, 13, 58, 0.7);
  color: #ffffff;
  padding: 60px;
  /* Arriba | Derecha | Abajo | Izquierda */
  margin: 25px 5px 5px 5px;
  border-radius: 8px;
  width: 170px;
  height: 220px;
  box-shadow: rgba(100, 100, 111, 0.6) 0px 7px 18px 2px;
  transition: transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  overflow: hidden;

  &:hover {
    transform: scale(1.05);
    /* border: 1.5px solid #8df904 */
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
  margin: 0;
  font-family: Roboto, sans-serif;
  font-weight: 400;
  color: #ffffff;
`;

export const DetailsButton = styled.button`
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
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
  justify-content: center; /* Agregar esta línea para centrar verticalmente */
`;

export const PokemonImage = styled.img`
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 0px 0px 8px 8px;
  margin-top: 14px;
  margin-left: 100px;
`;
