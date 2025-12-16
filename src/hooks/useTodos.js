import { useEffect, useState } from "react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/ko";
dayjs.extend(relativeTime);
dayjs.locale("ko");

function useTodos() {
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

  return {
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
  };
}

export default useTodos;
