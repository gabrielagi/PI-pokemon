import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  PageContainer,
  SelectorContainer,
  SelectorWrapper,
  CustomSelect,
} from "./FileOrder.styled-component";

import { FilterButton } from "../Buttons/Buttons.styled-components";

const FileOrder = () => {
  const [showContent, setShowContent] = useState(false);

  const toggleContent = () => {
    setShowContent(!showContent);
  };
  return (
    <PageContainer>
      <FilterButton onClick={toggleContent}>
        {showContent ? "Cerrar Filtro / Orden" : "Filtrar / Ordenar"}
      </FilterButton>
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
