import styled, { keyframes } from "styled-components";
import formbackground from "../../assets/formbackground.jpg";

export const CreatePokemonContainer = styled.div`
  background-color: #1d252d;
  background-image: url(${formbackground});
  background-size: cover; // Ajusta el tamaño de la imagen de fondo según el contenedor
  background-repeat: no-repeat; // Evita la repetición de la imagen de fondo
  background-position: center center; // Centra la imagen de fondo

  min-height: 100vh;
  background-size: cover;
  background-attachment: fixed;
`;

export const FormContainer = styled.div`
  position: absolute;
  width: 600px;
  height: auto;
  margin-top: 60px;
  padding: 25px 65px;
  transform: translate(-50%, -50%);
  left: 49%;
  top: 50%;
  background-color: rgba(255, 255, 255, 0.12);
  border-radius: 10px;
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 0 40px rgba(8, 7, 16, 0.4);
  text-align: center;

  @media screen and (max-width: 768px) {
    width: 250px;
    padding: 30px 40px;
    top: 45%;
  }
`;

export const InputContainer = styled.div`
  margin-bottom: 20px; /* Espacio vertical entre elementos */
`;

export const StyledLabel = styled.label`
  color: #1d252d;
  font-size: 16px;
  font-weight: 300;
`;

export const StyledInput = styled.input`
  height: 45px;
  width: 65%;
  background-color: rgba(255, 255, 255, 0.07);
  border-radius: 3px;
  padding: 10px;
  font-size: 16px;
  font-weight: 300;
  color: #1d252d;
  border: 2px solid rgba(255, 255, 255, 0.6);
  outline: none;
  box-sizing: border-box;

  &::placeholder {
    color: #e5e5e5;
  }

  &:focus {
    border-color: #8ca8be;
  }

  @media screen and (max-width: 768px) {
    height: 45px;
    font-size: 14px;
  }
`;

export const LeftColumn = styled.div`
  flex: 1; /* La columna izquierda ocupará 1/2 del espacio disponible */
  padding-right: 10px; /* Espacio entre las columnas */
`;

// Nueva imagen superpuesta
export const ImageOverlay = styled.img`
  position: absolute;
  top: 60px;
  left: 150px;
  width: 80%;
  height: 90%;
`;

export const ErrorMsg = styled.p`
  position: absolute;
  color: red;
  font-size: 14px;
  margin: 0px;

  @media screen and (max-width: 768px) {
    width: 250px;
    padding: 0px;
    font-size: 14px;
  }
`;

const psychedelicAnimation = keyframes`
   0% {
    background-position: 0 0;
  }
  100% {
    background-position: 200% 0;
  }
`;

export const StyledButton = styled.button`
  margin-top: 20px;
  width: 100%;
  background-color: #ffffff;
  color: #080710;
  padding: 16px 0;
  font-size: 18px;
  font-weight: 600;
  border-radius: 5px;
  cursor: pointer;
  border: none;
  outline: none;
  background-image: linear-gradient(
    45deg,
    #79fc6f,
    #ff59e6,
    #62ff1f,
    #f1ff29,
    #54ff68
  );
  background-size: 500% 100%;
  transition: background 0.5s ease-in-out;
  animation: ${psychedelicAnimation} 5s linear infinite;

  &:hover {
    background-color: #59fff1;
    background-image: none;
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.1),
      0 0 20px rgba(255, 255, 255, 0.2), 0 0 30px rgba(255, 255, 255, 0.4);
    animation: none;
  }

  @media screen and (max-width: 768px) {
    width: 250px;
    padding: 14px;
    font-size: 16px;
  }
`;
