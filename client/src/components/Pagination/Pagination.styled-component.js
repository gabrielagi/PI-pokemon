// PaginationStyles.js
import styled from "styled-components";

export const PaginationContainer = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
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
