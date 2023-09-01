// PaginationStyles.js
import styled from "styled-components";

export const PaginationContainer = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

export const Button = styled.button`
  width: 40px;
  height: 40px;
  margin: 0 5px;
  border: none;
  background-color: ${(props) => (props.isSelected ? "green" : "transparent")};
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
  background-color: white;
  padding: 10px;
  display: flex;
  justify-content: center;
  z-index: 999;
`;
