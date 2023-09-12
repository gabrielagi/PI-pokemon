import React, { useState } from "react";
import {
  PageContainer,
  SelectorContainer,
  SelectorWrapper,
  CustomSelect,
} from "./FilterOrder.styled-component";
import { FilterButton } from "../Buttons/Buttons.styled-components";
import {
  handleFilterType,
  handleFilterByOrigin,
} from "./Handlers/handlerFilter";
import { handleOrder } from "./Handlers/handlerOrder";

import { useDispatch, useSelector } from "react-redux";

const FilterOrder = () => {
  const [showontent, setShowContent] = useState(false);
  const dispatch = useDispatch();
  const allTypes = useSelector((state) => state.pokemonTypes);
  const allPokemons = useSelector((state) => state.allPokemons);

  const toggleContent = () => {
    setShowContent(!showontent);
  };

  return (
    <PageContainer>
      <FilterButton showontent={showontent} onClick={toggleContent}>
        {showontent ? "Hide Filter / Order" : "Filter / Order"}
      </FilterButton>

      {showontent && (
        <SelectorContainer>
          <SelectorWrapper>
            <CustomSelect
              onChange={(event) =>
                handleFilterType({
                  allPokemons,
                  type: event.target.value,
                  dispatch,
                })
              }
            >
              <option value="" disabled selected>
                Filter x Type
              </option>
              <option value="none">All Pokemons</option>
              {allTypes.map((type) => (
                <option key={type.id} value={type.name}>
                  {type.name}
                </option>
              ))}
            </CustomSelect>
          </SelectorWrapper>

          <SelectorWrapper>
            <CustomSelect
              onChange={(event) =>
                handleFilterByOrigin({
                  allPokemons,
                  origin: event.target.value,
                  dispatch,
                })
              }
            >
              <option value="" disabled selected>
                Filter x Origin
              </option>
              <option value="none">All Pokemons</option>
              <option value="db">From Db</option>
              <option value="api">From Api</option>
            </CustomSelect>
          </SelectorWrapper>

          <SelectorContainer>
            <CustomSelect
              onChange={(event) =>
                handleOrder({
                  allPokemons,
                  order: event.target.value,
                  dispatch,
                })
              }
            >
              <option value="" disabled selected>
                Order
              </option>
              <option value="none">Clear Order</option>
              <option value="A">Name Ascendent</option>
              <option value="D">Name Descendent</option>
              <option value="AA">Attack Ascendent</option>
              <option value="AD">Attack Descendent</option>
            </CustomSelect>
          </SelectorContainer>
        </SelectorContainer>
      )}
    </PageContainer>
  );
};

export default FilterOrder;
