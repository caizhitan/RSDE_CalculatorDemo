import React, { useState } from 'react';

const FilterIcon = require("../Images/FilterIcon.png");

type FilterDropdownProps = {
  applyFilters: (filters: string) => void;
  clearFilters: () => void;
};

// type Filters = {
//   fileType: string;
// };

const FilterDropdown: React.FC<FilterDropdownProps> = ({
  applyFilters,
  clearFilters,
}) => {
  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const [fileType, setFileType] = useState('');

  const handleApplyFilters = () => {
    let selectedFileType = fileType;
    if (fileType === 'all') {
      selectedFileType = ''; // or any other value that represents including all file types
    }

    applyFilters(selectedFileType);

    setIsFilterVisible(false);
  };

  const handleClearFilters = () => {
    setFileType('');
    clearFilters();

    setIsFilterVisible(false);
  };

  return (
    <div className="flex justify-end">
      {!isFilterVisible && (
       <button
       className=" bg-white text-sm font-medium rounded"
       onClick={() => setIsFilterVisible(true)}
       style={{
         borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
         paddingBottom: '5px',
         display: 'flex',
         alignItems: 'center',
       }}
     >
       <img className="h-6 w-6 text-black ml-2 mr-0" src={FilterIcon} alt="Filter Icon" />
     </button>
        
      )}
      {isFilterVisible && (
        <div className="w-full inset-0 flex items-center justify-center">
          <div className="w-full border border-BlueHeader shadow p-2 rounded-lg bg-white">
            <div className="flex items-center justify-between">
              <p className="font-bold text-2xl pb-1">Filter</p>
              <button className="" onClick={() => setIsFilterVisible(false)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 fill-Black"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M11.414 10l4.293-4.293a1 1 0 0 0-1.414-1.414L10 8.586 5.707 4.293A1 1 0 0 0 4.293 5.707L8.586 10l-4.293 4.293a1 1 0 1 0 1.414 1.414L10 11.414l4.293 4.293a1 1 0 1 0 1.414-1.414L11.414 10z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
            <div className="flex flex-grow">

              <div className="flex flex-col flex-grow mb-0">
                <label className="font-medium">File Type:</label>
                <select
                  className="p-2 border border-gray-200 rounded-md w-full"
                  value={fileType}
                  onChange={(e) => setFileType(e.target.value)}
                >
                  <option value="all">All</option>
                  <option value="Excel">EXCEL</option>
                  <option value="PDF">PDF</option>
                </select>
              </div>
            </div>
            <div className="flex justify-end mt-3">
              <button
                className="px-4 py-2 border border-BlueHeader bg-BlueBG hover:bg-BlueHeader hover:text-white text-sm font-medium rounded-md mr-3"
                onClick={handleClearFilters}
              >
                Clear Filters
              </button>
              <button
                className="px-4 py-2 border border-BlueHeader bg-BlueBG hover:bg-BlueHeader hover:text-white text-sm font-medium rounded-md"
                onClick={handleApplyFilters}
              >
                Apply Filters
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterDropdown;
