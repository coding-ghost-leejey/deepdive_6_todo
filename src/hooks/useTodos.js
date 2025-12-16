import { useEffect, useState, useCallback } from "react";
import formatTodoDate from "../utils/dateHelper";
import { getStTodos, setStTodos } from "../utils/storageHelper";

function useTodos() {
  const [todos, setTodos] = useState(() => {
    return getStTodos();
  });
  const [inputTodo, setInputTodo] = useState("");
  const [updateId, setUpdateId] = useState(null);
  const [updateText, setUpdateText] = useState("");

  // 이 부분을 일반함수로 만들어 호출해보기.
  useEffect(() => {
    setStTodos(todos);
  }, [todos]);

  const createTodo = useCallback(() => {
    if (!inputTodo.trim()) return;
    const newTodo = {
      id: Date.now(),
      text: inputTodo,
      isDone: false,
      datetime: formatTodoDate(),
    };

    setTodos((prevTodos) => [newTodo, ...prevTodos]);
    setInputTodo("");
  }, [inputTodo]);

  const deleteTodo = useCallback((selectedId) => {
    setTodos((prevTodos) => {
      const updatedTodos = prevTodos.filter((todo) => todo.id !== selectedId);
      return updatedTodos;
    });
  }, []);

  const startUpdate = useCallback((selectedTodo) => {
    setUpdateText(selectedTodo.text);
    setUpdateId(selectedTodo.id);
  }, []);

  const cancelUpdate = useCallback(() => {
    setUpdateText("");
    setUpdateId(null);
  }, []);

  const updateTodo = useCallback(() => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === updateId
          ? {
              ...todo,
              text: updateText,
              datetime: formatTodoDate(),
            }
          : todo
      )
    );
    setUpdateId(null);
  }, [updateId, updateText]);

  const handleToggle = useCallback((isDoneId) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === isDoneId ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  }, []);
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
