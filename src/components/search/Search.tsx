import React, { ChangeEvent } from "react";
import "./search.css";
interface SearchComponentProps {
  searchInput: string;
  setSearchInput: React.Dispatch<React.SetStateAction<string>>;
  placeholder: string;
}

function Search({
  placeholder,
  searchInput,
  setSearchInput,
}: SearchComponentProps) {
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setSearchInput(e.target.value);
  };
  return (
    <input
      type="text"
      placeholder={placeholder}
      value={searchInput}
      onChange={handleInputChange}
    />
  );
}

export default Search;
