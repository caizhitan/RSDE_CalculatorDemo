import React from 'react';

interface PageSizeProps {
  pageSize: number;
  totalItems: number;
  onPageSizeChange: (newSize: number) => void;
}

const PageSize: React.FC<PageSizeProps> = ({ pageSize, totalItems, onPageSizeChange }) => {
  const maxOptions = Math.floor(totalItems / 5);
  const options = Array.from({ length: maxOptions }, (_, index) => (index + 1) * 5);

  const handlePageSizeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newSize = parseInt(e.target.value);
    onPageSizeChange(newSize);
  };

  return (
    <div className="flex items-center pl-2">
      <div className="relative inline-block">
        <select
          value={pageSize}
          onChange={handlePageSizeChange}
          className="w-full py-1 px-1 pr-3 rounded bg-white focus:outline-none"
        >
          {options.map((option) => (
            <option key={option} value={option}>
              {option} files per page
            </option>
          ))}
          <option value={totalItems}>Show All</option>
        </select>
      </div>
    </div>
  );
};

export default PageSize;
