import React from "react";
import "../../styles/todoSearch.css";

const TodoSearch = ({ searchValue, setSearchValue }) => {
  const onSearchValueChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <>
      <input
        className="TodoSearch"
        placeholder="Manzana"
        value={searchValue}
        onChange={onSearchValueChange}
      />
    </>
  );
};

export { TodoSearch };
