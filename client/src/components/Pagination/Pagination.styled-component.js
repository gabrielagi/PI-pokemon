// PaginationStyles.js
import styled from "styled-components";

export const PaginationContainer = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;

export const Button = styled.button`
  padding: 10px 14px;
  font-size: 12px;
  text-align: center;
  background-color: #9ce5b8;
  color: white;
  border: solid 1px #9ce5b8;
  border-radius: 6px;
  margin: 3px;
  background-color: ${(props) => (props.isSelected ? "#9ce5b8" : "#adfec6")};
  color: ${(props) => (props.isSelected ? "white" : "black")};
  cursor: pointer;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const PrevNextButton = styled(Button)`
  margin: 0 10px;
`;

export const FixedPaginationContainer = styled(PaginationContainer)`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: transparent;
  padding: 5px;
  display: flex;
  justify-content: center;
  z-index: 999;
`;
