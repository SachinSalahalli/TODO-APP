import React, { useState } from "react";
import "./App.css";

function App() {
  let [todolist, setTodolist] = useState([]);
  let SaveToDoList = (event) => {
    let toname = event.target.toname.value;
    if (!todolist.includes(toname)) {
      let finalDOList = [...todolist, toname];
      setTodolist(finalDOList);
    } else {
      alert("TO-DO NAME ALREADY EXIST");
    }
    event.preventDefault();
  };
  let list = todolist.map((value, index) => {
    return (
      <ToDoListItems
        value={value}
        indexNumber={index}
        key={index}
        todolist={todolist}
        setTodolist={setTodolist}
      />
    );
  });
  return (
    <div className="App">
      <h1>TO-DO-LIST</h1>
      <form onSubmit={SaveToDoList}>
        <input type="text" name="toname" />
        <button>SAVE</button>
      </form>
      <div className="outerDiv">
        <ul>{list}</ul>
      </div>
    </div>
  );
}
export default App;

function ToDoListItems({ value, indexNumber, todolist, setTodolist }) {
  let [status, setStatus] = useState(false);
  let deleteRow = () => {
    let finalData = todolist.filter((v, i) => i != indexNumber);
    setTodolist(finalData);
  };
  let checkstatus = () => {
    setStatus(!status);
  };
  return (
    <li className={status ? "completetodo" : ""} onClick={checkstatus}>
      {indexNumber + 1} {value} <button onClick={deleteRow}>&times;</button>
    </li>
  );
}
