import styled from "styled-components";

export const PageContainer = styled.nav`
  position: fixed;
  margin-top: 50px;
  width: 100%;
  z-index: 100;
  padding: 3px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;
export const SelectorContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SelectorWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 20px 0px 40px;
}
`;

export const CustomSelect = styled.select`
  font-size: 14px;
  padding: 4px 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin: 40px 15px 0 15px;

  &:hover {
    background-color: #dae1e5;
    cursor: pointer;
    color: #000;
  }
`;

