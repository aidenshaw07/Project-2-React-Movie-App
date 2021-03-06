import React, { useState, useEffect, useCallback } from "react";
import { SEARCH_BASE_URL } from "../../config";
import "./searchBar.scss";

const SearchBar = ({ setData, page, data }) => {
  const [searchValue, setSearchValue] = useState(undefined);
  // console.log(searchValue);

  const SEARCH_API = `${SEARCH_BASE_URL}${searchValue}&page=${page}`;
  // console.log(SEARCH_API);

  const searchApi = async () => {
    const response = await fetch(SEARCH_API);
    const movieData = await response.json();
    setData(movieData.results);
    // console.log(movieData.results);
  };

  useEffect(() => {
    searchApi();
  }, [searchValue]);

  return (
    <div>
      <nav className="searchBar">
        <input
          type="text"
          className="input"
          value={searchValue}
          onChange={(event) => {
            setSearchValue(event.target.value);
          }}
          placeholder="Search For A Movie"
        />
      </nav>
    </div>
  );
};

export default SearchBar;
