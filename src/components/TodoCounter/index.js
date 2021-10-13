import React from "react";
import "../../styles/todoCounter.css";
import { TodoContext } from "../../context";

const TodoCounter = () => {
  const { totalTodos, completedTodos } = React.useContext(TodoContext);
  return (
    <>
      <h2 className="TodoCounter">
        {totalTodos === 0
          ? "No hay TODOs por completar"
          : `Has completado ${completedTodos} de ${totalTodos} TODOs`}
      </h2>
    </>
  );
};

export { TodoCounter };
