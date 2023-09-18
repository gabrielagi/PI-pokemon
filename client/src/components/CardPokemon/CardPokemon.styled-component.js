import styled from "styled-components";
import { NavLink } from "react-router-dom";
import pokebola from "../../assets/pokebola.png";

export const CardWrapper = styled.div`
  position: relative;
  background-color: rgba(30, 13, 58, 0.7);
  color: #ffffff;
  justify-content: center;
  padding: 20px;
  margin: 25px 5px 5px 5px;
  /* Arriba | Derecha | Abajo | Izquierda */
  border-radius: 8px;
  width: 160px;
  height: 220px;
  box-shadow: rgba(100, 100, 111, 0.6) 0px 7px 18px 2px;
  transition: transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  &:hover {
    transform: scale(1.05);
    background-color: rgba(30, 13, 58, 0.7);
  }

  @media screen and (max-width: 768px) {
    margin: 70px 10px 0px 10px;
    padding: 20px;
  }
`;

export const PokemonName = styled.h2`
  font-size: 22px;
  margin: 0px;
  margin-top: 20px;
  color: #08bae3;
  font-family: Roboto, sans-serif;
  font-weight: 600;
  -webkit-text-stroke: 0.01px #fff765;
  text-align: center;
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
  margin: 0;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const PokemonImage = styled.img`
  height: 120px;
  margin-top: 0px;
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
`;

export const ActionButtons = styled.div`
  display: flex;
  align-items: center;
`;

export const Pokebola = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  background-image: url(${pokebola});
  background-size: cover;
  width: 18px;
  height: 18px;
`;

export const FavoriteButton = styled.div`
  position: absolute;
  top: 5px;
  right: 5px;
  background-size: cover;
  font-size: 15px;
`;

export const FavImage = styled.img`
  height: 18px;
  margin-top: 0px;
`;
