import styled from "styled-components";
import formbackground from "../../assets/formbackground.jpg";

export const CreatePokemonContainer = styled.div`
  background-color: #1d252d;
  background-image: url(${formbackground});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;

  min-height: 100vh;
  background-size: cover;
  background-attachment: fixed;
`;

export const FormContainer = styled.div`
  position: absolute;
  width: 420px;
  height: auto;
  padding: 15px 25px;
  transform: translate(-50%, -50%);
  left: 32%;
  top: 51%;
  border-radius: 10px;
  text-align: center;

  @media screen and (max-width: 768px) {
    width: 250px;
    padding: 30px 40px;
    top: 45%;
  }
`;

export const InputContainer = styled.div`
  margin-top: 16px;
  margin-bottom: 5px;
`;

export const StyledLabel = styled.label`
  font-family: Consolas, monospace;
  color: #fff;
  font-size: 15px;
  font-weight: 600;
  margin-right: 5px;
`;

export const StyledInput = styled.input`
  height: 20px;
  width: 65%;
  font-family: Consolas, monospace;
  background-color: rgba(255, 255, 255, 0.07);
  border: none;
  border-bottom: 2px solid rgba(255, 255, 255, 0.7);
  padding: 10px;
  font-size: 14px;
  font-weight: 300;
  color: #1d252d;
  outline: none;
  box-sizing: border-box;

  &::placeholder {
    color: #e5e5e5;
    font-size: 13px;
  }

  &:focus {
    border-color: #8ca8be; /* Cambia el color del borde al enfocar */
  }
`;

// Nueva imagen superpuesta
export const ImageOverlay = styled.img`
  position: absolute;
  top: 80px;
  left: 180px;
  width: 65%;
  height: 86%;
`;

export const ErrorMsg = styled.p`
  position: absolute;
  color: red;
  font-size: 10px;
  margin-left: 140px;
  margin-right: 60px;
  margin-top: 25px;

  @media screen and (max-width: 768px) {
    width: 250px;
    padding: 0px;
    font-size: 14px;
  }
`;

export const PokemonTypeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const StyledSelect = styled.select`
  height: 30px;
  width: 45%;
  background-color: rgba(255, 255, 255, 0.5);
  font-family: Consolas, monospace;
  border-radius: 3px;
  margin-left: 10px;
  margin-right: 10px;
  margin-top: 10px;
  padding: 5px;
  font-size: 12px;
  font-weight: 300;
  color: #1d252d;
  border: 2px solid rgba(255, 255, 255, 0.6);
  outline: none;
  box-sizing: border-box;

  &::placeholder {
    color: #e5e5e5;
    font-size: 13px;
  }

  &:focus {
    border-color: #1d252d;
  }
`;

export const SelectedTypesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;
`;

export const SelectedType = styled.div`
  background-color: #1d252d;
  color: white;
  padding: 3px 7px;
  border-radius: 3px;
  margin-right: 5px;
  margin-bottom: 5px;
  display: flex;
  align-items: center;
`;

export const SelectedTypeOption = styled.p`
  font-size: 12px;
  margin: 0;
  margin-right: 5px;
  font-family: Consolas, monospace;
`;

export const SelectedTypeButtonOption = styled.button`
  background-color: #ff5959;
  color: white;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  font-size: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 14px;
  height: 14px;
`;

export const SubmitButton = styled.button`
  background-color: yellow;
  color: #1d252d;
  padding: 12px 20px;
  font-size: 16px;
  font-weight: 600;
  border: 1px solid black;
  border-left: none;
  border-radius: 5px;
  cursor: pointer;
  outline: none;
  box-shadow: -5px 5px 0px #8c6d0c, 1px 1px 0px black;
  position: relative;
  top: 97px;
  margin-left: 210px;

  &:hover {
    background-color: #aeff00;
    box-shadow: -5px 5px 0px #658b14, 1px 1px 0px black;
  }
`;
