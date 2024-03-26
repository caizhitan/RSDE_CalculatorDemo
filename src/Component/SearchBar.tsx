import React, { useState } from "react";

const SearchIcon = require("../Images/SearchIcon.png");


type SearchBarProps = {
  onSearch: (query: string) => void;
};

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
    onSearch(event.target.value); // Notify parent component about the search query
  };

  return (
    <div className="pt-5 pb-1">
      <div className="border border-BlueHeader rounded overflow-hidden flex items-center bg-white">
        <div>
          <img
            className="h-6 w-6 text-black mx-4"
            src={SearchIcon}
            alt="Search Icon"
          />
        </div>
        <div className="border-l border-BlueHeader">
          <input
            className="bg-white rounded-full py-2 px-4 text-black placeholder-BlueBG leading-tight focus:outline-none w-64"
            id="search"
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
