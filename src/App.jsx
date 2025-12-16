import useTodos from "./hooks/useTodos";

import InputTodo from "./components/InputTodo";
import TodoItem from "./components/TodoItem";

import Title from "antd/es/typography/Title";
import TodoStats from "./components/TodoStats";

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

  const itemProps = {
    deleteTodo,
    startUpdate,
    updateTodo,
    updateId,
    updateText,
    setUpdateText,
    cancelUpdate,
    handleToggle,
    createTodo,
    setInputTodo,
    inputTodo,
  };

  return (
    <>
      <div className="todo-container">
        <Title level={1}>Ghost To-do</Title>
        <InputTodo {...itemProps} />
        <TodoStats todos={todos} />

        <ul>
          {todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} {...itemProps} />
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
