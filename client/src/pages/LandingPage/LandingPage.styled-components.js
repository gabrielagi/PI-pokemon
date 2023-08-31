import styled from "styled-components";
//import { Link } from "react-router-dom";
import LandingBackground from "../../assets/pokemon-landingpage.jpg";
import LandingBackgroundMobile from "../../assets/pokemon-landingpage-mobile.jpg";

export const LandingContainer = styled.div`
  background-image: url(${LandingBackground});
  background-size: cover;
  background-position: center;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background-attachment: fixed;

  @media (max-width: 768px) {
    background-image: url(${LandingBackgroundMobile});
  }
`;

export const StartButton = styled.button`
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

export const StartButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  position: absolute;
  margin-top: 130px;
  left: 270px;

  @media screen and (max-width: 768px) {
    bottom: 100px;
    left: 100px;
  }
`;

export const StartButtonShadow = styled(StartButton)`
  background-color: #2d5744;

  &:hover {
    transform: translateY(0px);

    background-color: #2d5744;
  }
`;

export const StartButtonContainerShadow = styled(StartButtonContainer)`
  margin-top: 138px;
  left: 278px;

  @media screen and (max-width: 768px) {
    bottom: 95px;
    left: 105px;
  }
`;
