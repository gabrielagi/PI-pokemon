import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  PageContainer,
  SelectorContainer,
  SelectorWrapper,
  CustomSelect,
} from "./FileOrder.styled-component";

const FileOrder = ({ show, toggle }) => {
  const [showContent, setShowContent] = useState(false);

  const toggleContent = () => {
    setShowContent(!showContent);
  };
  return (
    <PageContainer>
      <button onClick={toggleContent}>
        {showContent ? "Cerrar Filtro / Orden" : "Filtrar / Ordenar"}
      </button>
      {showContent && (
        <SelectorContainer>
          <SelectorContainer>
            <CustomSelect>
              <option value="A">Ascendente</option>
              <option value="D">Descendente</option>
            </CustomSelect>
          </SelectorContainer>

          <SelectorWrapper>
            <CustomSelect>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Genderless">Genderless</option>
              <option value="unknown">unknown</option>
              <option value="allCharacters">All Characters</option>
            </CustomSelect>
          </SelectorWrapper>
        </SelectorContainer>
      )}
    </PageContainer>
  );
};

export default FileOrder;
