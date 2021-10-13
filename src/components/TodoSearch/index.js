import React from "react";
import "../../styles/todoSearch.css";
import { TodoContext } from "../../context";

const TodoSearch = () => {
  const { searchValue, setSearchValue } = React.useContext(TodoContext);

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
