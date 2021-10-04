import React from "react";
import { TodoCounter } from "./components/TodoCounter";
import { TodoItem } from "./components/TodoItem";
import { TodoList } from "./components/TodoList";
import { TodoSearch } from "./components/TodoSearch";
import { CreateTodoButton } from "./components/CreateTodoButton/";
import { TodoProvider, TodoContext } from "./context";

function App() {
  return (
    <>
      <TodoProvider>
        <TodoCounter />
        <TodoSearch />
        <TodoContext.Consumer>
          {({ loading, error, searchedTodos, completeTodo, deleteTodo }) => {
            return (
              <>
                <TodoList>
                  {loading && <p>Loading...</p>}
                  {error && <p>Error...</p>}
                  {!loading && !searchedTodos.length && (
                    <p>Create a new TODO!</p>
                  )}
                  {searchedTodos.map((todo) => (
                    <TodoItem
                      text={todo.text}
                      key={todo.text}
                      completed={todo.completed}
                      onComplete={() => completeTodo(todo.text)}
                      onDelete={() => deleteTodo(todo.text)}
                    />
                  ))}
                </TodoList>
              </>
            );
          }}
        </TodoContext.Consumer>
        <CreateTodoButton />
      </TodoProvider>
    </>
  );
}

export default App;
