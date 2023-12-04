"use client";
import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const Search = ({ options }) => {
  const [searchValue, setSearchValue] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const onSearch = () => {};

  const handleSearch = () => {
    onSearch(searchValue, selectedOption);
  };

  const handleOptionChange = (value) => {
    setSelectedOption(value);
    setIsDropdownOpen(false);
  };

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  //   React.useEffect(() => {
  //  if (searchValue === '') {
  //   setSelectedOption('All')
  //  }
  //   }, [searchValue])
  React.useEffect(() => {
    handleSearch();
  }, [searchValue]);

  return (
    <div className="relative">
      <input
        type="text"
        value={searchValue}
        onChange={handleInputChange}
        className="pl-4 pr-4 py-2 w-full bg-transparent border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
        placeholder="Default Sorting"
      />
      <div className="absolute inset-y-0 right-0 flex items-center">
        <div className="relative">
          <button
            type="button"
            onClick={toggleDropdown}
            className="flex items-center p-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
          >
            <span className="mr-1">{selectedOption}</span>
            <IoIosArrowDown />
          </button>
          {isDropdownOpen && (
            <div className="origin-top-right absolute right-0 mt-2 w-25 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100">
              {options.map((option) => (
                <div
                  key={option.value}
                  className="py-1 px-4 cursor-pointer hover:bg-gray-100"
                  onClick={() => handleOptionChange(option.value)}
                >
                  {option.label}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Search;
