// import { useState } from "react";
import useLocalStorageState from "use-local-storage-state";
import { uid } from "uid";
import List from "./components/List";
import Form from "./components/Form";
import "./styles.css";

export default function App() {
  // const [todos, setTodos] = useState([]);
  const [todos, setTodos] = useLocalStorageState("todos", {
    defaultValue: [],
  });
  // const [favorites, setFavorites] = useLocalStorageState("favorites", {
  //   defaultValue: {
  //     a: 5,
  //   },
  // });

  function handleAddTodo(title) {
    setTodos([
      {
        id: uid(),
        title,
        isChecked: false,
      },
      ...todos,
    ]);
  }

  function handleToggleCheckTodo(idToToggle) {
    setTodos(
      todos.map((todo) =>
        todo.id === idToToggle ? { ...todo, isChecked: !todo.isChecked } : todo
      )
    );
  }

  return (
    <main>
      <h1>Todo-App</h1>
      {/* {favorites.a} */}
      <Form onAddTodo={handleAddTodo} />
      <List todos={todos} onToggleCheckTodo={handleToggleCheckTodo} />
    </main>
  );
}
