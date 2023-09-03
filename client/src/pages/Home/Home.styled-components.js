import styled from "styled-components";
import homebackground from "../../assets/homebackground.png";

export const HomeContainer = styled.div`
  background-color: #1d252d;
  background-image: url(${homebackground});
  min-height: 100vh;
  background-size: cover;
  background-attachment: fixed;
`;

export const PokemonCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  /* Arriba | Derecha | Abajo | Izquierda */
  margin: 45px 25px 5px 25px;
`;

export const FilterButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  position: absolute;
  margin-top: 130px;
  left: 270px;

  @media screen and (max-width: 768px) {
    bottom: 80px;
    left: 100px;
  }
`;

export const FilterButton = styled.button`
  display: inline-block;
  padding: 12px 70px;
  font-size: 16px;
  text-align: center;
  background-color: #9ce5b8;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 700px;

  &:hover {
    transform: translateY(-2px);
    background-color: #adfec6;
  }

  &:active {
    transform: translateY(0);
  }
`;
