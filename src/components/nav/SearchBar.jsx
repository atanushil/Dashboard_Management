import React from 'react';

const SearchBar = () => {
  return (
    <div className="flex items-center p-1.5 border border-border_color rounded-lg shadow-sm bg-gray w-3/5">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="h-6 w-6 text-gray-700"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
        />
      </svg>
      <input
        type="text"
        placeholder="Search anything..."
        className="ml-2 w-full border-none outline-none text-gray-700 placeholder-gray-500 bg-inherit"
      />
    </div>
  );
};

export default SearchBar;
