import React from "react";
import { TodoContext } from "../context";
import "./TodoForm.css";

const TodoForm = () => {
  const { addTodo, setOpenModal } = React.useContext(TodoContext);
  const [newTodoValue, setNewTodoValue] = React.useState("");

  const onCancel = () => {
    setOpenModal(false);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (newTodoValue !== "") {
      addTodo(newTodoValue);
      setOpenModal(false);
    } else {
      alert("El campo está vacio");
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <label>Escribe tu nuevo TODO</label>
      <textarea
        value={newTodoValue}
        placeholder="Terminar mi curso..."
        required
        onChange={(e) => setNewTodoValue(e.target.value)}
      />
      <div className="TodoForm-buttonContainer">
        <button
          className="TodoForm-button TodoForm-button-cancel"
          type="button"
          onClick={(e) => onCancel(e)}
        >
          Cancelar
        </button>
        <button
          className="TodoForm-button TodoForm-button-add"
          type="submit"
          onClick={(e) => onSubmit(e)}
        >
          Añadir
        </button>
      </div>
    </form>
  );
};

export { TodoForm };
