import React from "react";
import { Link } from "react-router-dom";
import {
  LandingContainer,
  StartButton,
  StartButtonContainer,
  StartButtonContainerShadow,
  StartButtonShadow,
} from "./LandingPage.styled-components";

const LandingPage = () => {
  return (
    <LandingContainer>
      <div className="div-button">
        <Link className="link" to={"/home"}>
          <StartButtonContainerShadow>
            <StartButtonShadow>START</StartButtonShadow>
          </StartButtonContainerShadow>
          <StartButtonContainer>
            <StartButton>START</StartButton>
          </StartButtonContainer>
        </Link>
      </div>
    </LandingContainer>
  );
};

export default LandingPage;
