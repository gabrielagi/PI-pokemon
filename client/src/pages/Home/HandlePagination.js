import React from "react";

const pageNumbers = [];

const HandlePagination = ({
  pokemonsPerPage,
  currentPage,
  setCurrentPage,
  totalPokemons,
}) => {
  const totalPages = Math.ceil(totalPokemons / pokemonsPerPage);

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  const onPreviousPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const onNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const onSpecificPage = (event) => {
    setCurrentPage(event);
  };

  return (
    <nav
      className="pagination is-centered"
      role="navigation"
      aria-label="pagination"
    >
      <a
        // className={`pagination-previous ${currentPage === 1 ? "diseable" : ""}`}
        onClick={onPreviousPage}
      >
        Previous
      </a>
      <a
        // className={`pagination-previous ${currentPage === 1 ? "diseable" : ""}`}
        onClick={onNextPage}
      >
        Next page
      </a>
      <ul className="pagination-list">
        {pageNumbers.map((pageNum) => (
          <ul key={pageNum}>
            {/* className=
            {`pagination-link ${pageNum === currentPage ? isActive : ""}`}
            aria-label="Goto page 1" */}
            <button onClick={() => onSpecificPage(pageNum)}>{pageNum}</button>
          </ul>
        ))}
      </ul>
    </nav>
  );
};

export default HandlePagination;
