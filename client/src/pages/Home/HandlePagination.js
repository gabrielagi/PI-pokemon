import React, { useMemo } from "react";

const HandlePagination = ({
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
    <nav
      className="pagination is-centered"
      role="navigation"
      aria-label="pagination"
    >
      <button
        onClick={onPreviousPage}
        className={`pagination-previous button ${
          currentPage === 1 ? "is-disabled" : ""
        }`}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      <button
        onClick={onNextPage}
        className={`pagination-next button ${
          currentPage === totalPages ? "is-disabled" : ""
        }`}
        disabled={currentPage === totalPages}
      >
        Next page
      </button>
      <div className="pagination-list">
        {pageNumbers.map((pageNum) => (
          <button
            key={pageNum}
            onClick={() => onSpecificPage(pageNum)}
            className={`pagination-link button ${
              pageNum === currentPage ? "is-current" : ""
            }`}
            aria-label={`Goto page ${pageNum}`}
          >
            {pageNum}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default HandlePagination;
