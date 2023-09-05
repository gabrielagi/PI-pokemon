import React, { useMemo } from "react";
import { FixedPaginationContainer } from "./Pagination.styled-component";

import {
  PrevNextButton,
  PaginationButton,
} from "../Buttons/Buttons.styled-components";

const Pagination = ({
  pokemonsPerPage,
  currentPage,
  setCurrentPage,
  totalPokemons,
}) => {
  const totalPages = Math.ceil(totalPokemons / pokemonsPerPage);

  const pageNumbers = useMemo(() => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
    return pages;
  }, [totalPages]);

  const onPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const onNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const onSpecificPage = (page) => {
    setCurrentPage(page);
  };

  return (
    <FixedPaginationContainer>
      <PrevNextButton
        onClick={onPreviousPage}
        isSelected={false}
        disabled={currentPage === 1}
      >
        Previous
      </PrevNextButton>
      {pageNumbers.map((pageNum) => (
        <PaginationButton
          key={pageNum}
          onClick={() => onSpecificPage(pageNum)}
          isSelected={pageNum === currentPage}
          disabled={pageNum === currentPage}
        >
          {pageNum}
        </PaginationButton>
      ))}
      <PrevNextButton
        onClick={onNextPage}
        isSelected={false}
        disabled={currentPage === totalPages}
      >
        Next page
      </PrevNextButton>
    </FixedPaginationContainer>
  );
};

export default Pagination;
