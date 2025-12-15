import InputTodo from "./components/InputTodo";
import TodoItem from "./components/TodoItem";
import { useEffect, useState } from "react";

import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/ko";
import Title from "antd/es/typography/Title";
import TodoStats from "./components/TodoStats";
dayjs.extend(relativeTime);
dayjs.locale("ko");

function App() {
  const [todos, setTodos] = useState(() => {
    const getTodos = localStorage.getItem("stTodos");
    return getTodos ? JSON.parse(getTodos) : [];
  });
  const [inputTodo, setInputTodo] = useState("");
  const [updateId, setUpdateId] = useState(null);
  const [updateText, setUpdateText] = useState("");

  // 이 부분을 일반함수로 만들어 호출해보기.
  useEffect(() => {
    localStorage.setItem("stTodos", JSON.stringify(todos));
    console.log("setItem 실행");
  }, [todos]);

  const createTodo = () => {
    if (!inputTodo.trim()) return;
    const newTodo = {
      id: Date.now(),
      text: inputTodo,
      isDonw: false,
      datetime: dayjs().format("MM.DD.YYYY / hh:mm a"),
    };

    const updatedTodos = [newTodo, ...todos];
    setTodos(updatedTodos);
    setInputTodo("");
    console.log("todos :", updatedTodos);
  };

  const deleteTodo = (selectedId) => {
    const updatedTodos = todos.filter((todo) => todo.id !== selectedId);
    setTodos(updatedTodos);
    console.log("todos :", updatedTodos);
  };

  const startUpdate = (selectedTodo) => {
    setUpdateText(selectedTodo.text);
    setUpdateId(selectedTodo.id);
  };

  const cancelUpdate = () => {
    setUpdateText("");
    setUpdateId(null);
  };

  const updateTodo = () => {
    const updateTodos = todos.map((todo) =>
      todo.id === updateId
        ? {
            ...todo,
            text: updateText,
            datetime: dayjs().format("MM.DD.YYYY / hh:mm a"),
          }
        : todo
    );

    setTodos(updateTodos);
    setUpdateId(null);
  };

  const handleToggle = (isDoneId) => {
    const updateTodos = todos.map((todo) =>
      todo.id === isDoneId ? { ...todo, isDone: !todo.isDone } : todo
    );
    setTodos(updateTodos);
  };

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
