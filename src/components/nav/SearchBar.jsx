import { useState, useMemo, useEffect, useRef } from "react";
import { categoryList } from "../../constants";

const SearchBar = () => {
  const suggestions = useMemo(
    () =>
      categoryList.flatMap((category) =>
        category.widget.map((widget) => widget.heading)
      ),
    []
  );

  const [query, setQuery] = useState("");
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const searchBarRef = useRef(null);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);

    if (value.trim()) {
      setFilteredSuggestions(
        suggestions.filter((suggestion) =>
          suggestion.toLowerCase().includes(value.toLowerCase())
        )
      );
    } else {
      setFilteredSuggestions([]);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setQuery(suggestion);
    setFilteredSuggestions([]);
    console.log("Selected suggestion:", suggestion); // Optionally handle the selection
  };

  const handleClickOutside = (event) => {
    if (searchBarRef.current && !searchBarRef.current.contains(event.target)) {
      setFilteredSuggestions([]); // Hide the suggestions list
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={searchBarRef} className="relative w-4/5">
      <div className="flex items-center p-1.5 border border-border_color rounded-lg shadow-sm bg-gray">
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
          placeholder="Search widget..."
          className="ml-2 w-full border-none outline-none text-gray-700 placeholder:text-balance truncate-start placeholder-gray-500 bg-inherit"
          value={query}
          onChange={handleInputChange}
        />
      </div>

      {filteredSuggestions.length > 0 && (
        <ul className="absolute z-10 mt-1 h-60 overflow-y-auto md:w-full w-[50vw]  bg-white border border-border_color rounded-lg shadow-md">
          {filteredSuggestions.map((suggestion, index) => (
            <li
              key={index}
              className="p-2 cursor-pointer hover:bg-gray-200 w-full truncate"
              onClick={() => handleSuggestionClick(suggestion)}
            >
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
