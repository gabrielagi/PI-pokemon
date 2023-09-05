import styled from "styled-components";

export const PokemonCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  justify-content: center;
  gap: 11px;
  /* Arriba | Derecha | Abajo | Izquierda */
  /*margin: 45px 15px 5px 15px*/
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
