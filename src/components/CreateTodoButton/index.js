import React from "react";
import "../../styles/createTodoButton.css";

const CreateTodoButton = () => {
  const onClickButton = () => {
    alert("Auch!");
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
