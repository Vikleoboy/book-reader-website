import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";

const SearchComponent: React.FC = () => {
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleIconClick = () => {
    setIsSearchVisible(!isSearchVisible);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleSearch = () => {
    // Navigate to Google search results
    if (searchQuery.trim() !== "") {
      window.location.href = `https://www.google.com/search?q=${encodeURIComponent(searchQuery)}`;
    }
  };

  return (
    <div className="relative">
      <button onClick={handleIconClick} className="">
        <FaMagnifyingGlass />
      </button>
      {isSearchVisible && (
        <div className="absolute top-0  right-4 xl:left-4 opacity-100 ml-2">
          <input
            type="text"
            value={searchQuery}
            onChange={handleInputChange}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSearch();
              }
            }}
            onBlur={handleSearch}
            onClick={(e) => e.stopPropagation()} // Prevent closing on input click
            className="border-black border-b outline-none"
            placeholder="Search for books.."
            // style={{ transitionProperty: "width, opacity" }}
          />
        </div>
      )}
    </div>
  );
};

export default SearchComponent;
