import AppName from "./components/appnme";
import Addtodo from "./components/add-todo";
import "./app.css";
import Todoitems from "./components/todoitemes";
import { useState } from "react";
import WelcomeMsg from "./components/welcome";

function App() {
  const [todoitemm, settodoitemm] = useState([]);

  const handleNewItem = (itemName, itemDate) => {
    settodoitemm((curValue) => [
      ...curValue,
      { name: itemName, date: itemDate },
    ]);
  };

  const handleDeleteButton = (todoItemName) => {
    const newTodoItem = todoitemm.filter((item) => item.name !== todoItemName);
    settodoitemm(newTodoItem);
  };
  return (
    <center id="todo-con">
      <AppName />
      <Addtodo onNewItem={handleNewItem} />
      {todoitemm.length === 0 && <WelcomeMsg></WelcomeMsg>}
      <Todoitems
        todoitemm={todoitemm}
        onDelteClick={handleDeleteButton}
      ></Todoitems>
    </center>
  );
}
export default App;
