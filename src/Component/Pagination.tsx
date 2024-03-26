import React, { useState } from 'react';

type PaginationProps = {
  totalItems: number;
  itemsPerPage: number;
  onPageChange: (page: number) => void;
  currentPage: number; // Add currentPage prop
};

const Pagination: React.FC<PaginationProps> = ({
  totalItems,
  itemsPerPage,
  onPageChange,
  currentPage,
}) => {
  const [inputPage, setInputPage] = useState('');

  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (page: number) => {
    onPageChange(page);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputPage(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const parsedPage = parseInt(inputPage, 10);
    if (parsedPage >= 1 && parsedPage <= totalPages) {
      handlePageChange(parsedPage);
      setInputPage('');
    }
  };

  const renderPaginationItems = () => {
    const pages = [];
    const maxVisibleButtons = 3; // Number of buttons to display

    // Calculate the start and end page numbers
    let startPage = Math.max(1, currentPage - 1);
    let endPage = Math.min(totalPages, startPage + maxVisibleButtons - 1);

    // Adjust the start and end page numbers if needed
    if (endPage - startPage < maxVisibleButtons - 1) {
      startPage = Math.max(1, endPage - maxVisibleButtons + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <button
          key={i}
          className={`pagination-item border border-BlueHeader text-BlueHeader w-8 h-8  mx-1 ${
            currentPage === i ? 'active bg-BlueHeader text-white' : ''
          }`}
          onClick={() => handlePageChange(i)}
        >
          {i}
        </button>
      );
    }

    return pages;
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      handlePageChange(currentPage - 1);
    }
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      handlePageChange(currentPage + 1);
    }
  };

  return (
    <div className="pagination shadow ">
      <form onSubmit={handleSubmit} className="pagination-form flex items-center">
        <button
          className={`pagination-item border  bg-white w-8 h-8 mr-1
          ${currentPage !== 1 ? 'active bg-BlueHeader text-BlueHeader' : ''}
            ${currentPage === 1 ? 'disabled border-BlueBG text-BlueBG' : ''}`
        }
          onClick={goToPreviousPage}
        >
          &#8249;
        </button>
        {renderPaginationItems()}
        <button
          className={`pagination-item border  bg-white w-8 h-8 ml-1
          ${currentPage !== totalPages ? 'active bg-BlueHeader text-BlueHeader' : ''}
          ${currentPage === totalPages ? 'disabled border-BlueBG text-BlueBG' : ''}`}
          onClick={goToNextPage}
        >
          &#8250;
        </button>
        <div className="min-w-min flex ml-auto">
          <span className="pagination-text m-1 whitespace-nowrap">Go to Page</span>
          <input
            type="number"
            min="1"
            max={totalPages}
            value={inputPage}
            onChange={handleInputChange}
            className="pagination-input border border-BlueHeader text-BlueHeader text-center bg-white w-12 h-8 rounded-lg mx-1"
            inputMode="numeric"
            pattern="[0-9]*"
          />
          <button
            type="submit"
            className="pagination-submit border border-BlueHeader text-BlueHeader bg-white w-12 h-8"
            
          >
            Go
          </button>
        </div>
      </form>
    </div>
  );
};

export default Pagination;
