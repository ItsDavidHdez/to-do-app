import React from "react";
import "../../styles/todoCounter.css";

const TodoCounter = ({ completedTodos, allTodos }) => {
  return (
    <>
      <h2 className="TodoCounter">
        Has completado {completedTodos} de {allTodos} TODOs
      </h2>
    </>
  );
};

export { TodoCounter };
