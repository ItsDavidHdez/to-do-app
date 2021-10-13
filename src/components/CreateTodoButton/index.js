import React from "react";
import { TodoContext } from "../../context";
import "../../styles/createTodoButton.css";

const CreateTodoButton = () => {
  const { setOpenModal, openModal } = React.useContext(TodoContext);

  const onClickButton = () => {
    setOpenModal(!openModal);
  };

  return (
    <>
      <button className="CreateTodoButton" onClick={onClickButton}>
        X
      </button>
    </>
  );
};

export { CreateTodoButton };
