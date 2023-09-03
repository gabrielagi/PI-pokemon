import styled from "styled-components";
import { StartButton } from "../../pages/LandingPage/LandingPage.styled-components";

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SearchButton = styled.button`
  display: inline-block;
  padding: 5px 20px;
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

export const SearchButtonshadow = styled(SearchButton)`
  background-color: #2d5744;

  &:hover {
    transform: translateY(0px);

    background-color: #2d5744;
  }
`;

export const SearchInput = styled.input`
  border: 1.5px solid #1d252d;
  border-radius: 4px 4px 4px 4px;
  margin: 5px 0px 0px;
  height: 25px;
  font-size: 14px;
  padding-left: 10px;
  color: #fff;
  background-color: rgba(255, 255, 255, 0.1);
  width: 350px;
  transition: border-color 0.3s ease-in-out;

  &::placeholder {
    font-size: 16px;
    padding-left: 10px;
    color: rgba(255, 255, 255, 0.5);
  }

  &:focus {
    outline: none;
    border: 1px solid #615f60;
  }
`;
