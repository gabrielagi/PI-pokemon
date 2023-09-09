import styled from "styled-components";

// FilterButton

export const FilterButton = styled.button`
  display: inline-block;
  padding: 7px 25px;
  font-size: 14px;
  text-align: center;
  background-color: ${(props) =>
    props.showContent ? "red" : "#C788F3"}; /* #A06CC5  #C788F3  #A468CF */
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 500;

  &:hover {
    background-color: ${(props) =>
      props.showContent ? "red" : "#9A37DF"}; /* #9ce5b8 #adfec6 #A468CF */
  }
`;

// Nav Buttons

export const NavButton = styled.button`
  display: inline-block;
  padding: 5px 18px;
  font-size: 14px;
  text-align: center;
  background-color: #e4c0be;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 700px;
  margin-left: 40px;

  &:hover {
    background-color: #adfec6;
  }

  &:active {
    transform: translateY(0);
  }
`;

export const NavButtonLogOut = styled(NavButton)`
  background-color: red;
  color: #fff;
  margin-right: 30px;
  margin: 5px 80px;
  border: none;

  &:hover {
    background-color: #c20000;

    box-shadow: none;
    border: none;
    color: #fff;
  }
`;

// Pagination Buttons

export const PaginationButton = styled.button`
  padding: 10px 14px;
  font-size: 12px;
  text-align: center;
  background-color: #9ce5b8;
  color: white;
  border: solid 1px #fff;
  border-radius: 6px;
  font-weight: 600;
  margin: 3px;
  background-color: ${(props) => (props.isSelected ? "#E8E8E8" : "#C788F3")};
  color: ${(props) => (props.isSelected ? "black" : "white")};
  cursor: pointer;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const PrevNextButton = styled(PaginationButton)`
  margin: 0 10px;
`;

export const CloseButtonNotification = styled.button`
  padding: 10px 15px;
  background-color: red;
  color: #ffffff;
  border: none;
  cursor: pointer;
  font-size: 12px;
  border-radius: 15%;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #df1414;
  }
`;
