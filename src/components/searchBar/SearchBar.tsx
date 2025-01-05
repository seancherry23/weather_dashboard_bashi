import React, { useState } from "react";

interface SearchBarProps {
  onSearch: (city: string, state?: string) => void
}

export const SearchBar: React.FC<SearchBarProps> = () => {
  return (
    <div className="searchBarContainer">
      <div className="searchBarTitle">
        <h1>Weather Dashboard</h1>
      </div>
      <div className="searchBar">
        <input type="text" id="search" placeholder="Enter city name" />
        <button id="searchButton" type="submit">Search</button>
      </div>
    </div>
  )
};