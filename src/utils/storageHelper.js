const STORAGE_KEY = "stTodos";

function getStTodos() {
  const getTodos = localStorage.getItem(STORAGE_KEY);
  return getTodos ? JSON.parse(getTodos) : [];
}

function setStTodos(todos) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
}

export { getStTodos, setStTodos };
