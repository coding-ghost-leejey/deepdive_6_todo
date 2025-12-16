import useTodos from "./hooks/useTodos";

import InputTodo from "./components/InputTodo";
import TodoItem from "./components/TodoItem";

import Title from "antd/es/typography/Title";
import TodoStats from "./components/TodoStats";
import { useMemo } from "react";

function App() {
  const {
    todos,
    inputTodo,
    setInputTodo,
    updateId,
    updateText,
    setUpdateText,
    createTodo,
    deleteTodo,
    startUpdate,
    cancelUpdate,
    updateTodo,
    handleToggle,
  } = useTodos();

  const inputProps = useMemo(
    () => ({ inputTodo, setInputTodo, createTodo }),
    [inputTodo, setInputTodo, createTodo]
  );

  const itemProps = useMemo(
    () => ({
      deleteTodo,
      startUpdate,
      updateTodo,
      updateId,
      updateText,
      setUpdateText,
      cancelUpdate,
      handleToggle,
    }),
    [
      deleteTodo,
      startUpdate,
      updateTodo,
      updateId,
      updateText,
      setUpdateText,
      cancelUpdate,
      handleToggle,
    ]
  );

  return (
    <div className="todo-container">
      <Title level={1}>Ghost To-do</Title>
      <InputTodo {...inputProps} />
      <TodoStats todos={todos} />

      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} {...itemProps} />
        ))}
      </ul>
    </div>
  );
}

export default App;
