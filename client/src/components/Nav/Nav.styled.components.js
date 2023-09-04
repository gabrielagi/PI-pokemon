import styled from "styled-components";

export const NavBar = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;
  background-color: #08225f;
  padding: 3px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const NavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 20px 0px 40px;
}
`;

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
