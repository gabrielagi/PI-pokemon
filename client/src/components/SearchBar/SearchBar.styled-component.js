import styled from "styled-components";

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SearchButton = styled.button`
  display: inline-block;
  padding: 5px 18px;
  font-size: 14px;
  text-align: center;
  background-color: #8ca8be;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 700px;

  &:hover {
    background-color: #e4c0be;
  }

  &:active {
    transform: translateY(0);
  }
`;

export const SearchInput = styled.input`
  border: 2px solid #fff;
  border-radius: 4px 4px 4px 4px;
  margin: 1px 0px 0px;
  height: 25px;
  font-size: 14px;
  padding-left: 7px;
  color: #1d252d;
  background-color: rgba(255, 255, 255);
  width: 350px;
  transition: border-color 0.3s ease-in-out;

  &::placeholder {
    font-size: 14px;
    padding-left: 2px;
    color: rgba(140, 168, 190, 0.6);
  }

  &:focus {
    outline: none;
    border: 2px solid #8ca8be;
  }
`;
