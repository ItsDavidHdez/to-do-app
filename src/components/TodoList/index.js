import React from "react";
import "../../styles/todoList.css";

const TodoList = ({ children }) => {
  return (
    <section>
      <ul>{children}</ul>
    </section>
  );
};

export { TodoList };
